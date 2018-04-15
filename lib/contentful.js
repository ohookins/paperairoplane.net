const dateFormat = require('dateformat');
const md5 = require('md5');

// HTTP Client requests
const rp = require('request-promise');
const spaceID = 'm20artr3xszm';

// FIXME: Make some kind of proper configuration for this.
const accessToken = process.env.TOKEN;

// Markdown rendering
const marked = require('marked');

function constructURL(postID) {
  return 'https://cdn.contentful.com/spaces/' +
    spaceID +
    '/entries?access_token=' +
    accessToken +
    '&sys.id=' +
    postID;
}

function getAuthorFromResult(jsonBody) {
  var author = {
    display_name: "a million monkeys at a million typewriters",
    email: "nobody@example.com"
  };

  jsonBody.includes.Entry.forEach(function(entry) {
    if (entry.sys.contentType.sys.id === "author") {
      author.display_name = entry.fields.first_name;
      author.email = entry.fields.email;
    }
  });

  return author;
}

function getTagsFromResult(jsonBody) {
  var tags = [];
  jsonBody.includes.Entry.forEach(function(entry) {
    if (entry.sys.contentType.sys.id === "tag") {
      tags.push(entry.fields.name);
    }
  });

  return tags;
}

// Returns the Gravatar icon URL for a 45x45 pixel image
function getAuthorGravatar(email) {
  var emailHash = md5(email.trim().toLowerCase());
  return 'https://www.gravatar.com/avatar/'
    + emailHash
    + '?s=45';
}

module.exports = {
  foo: function() {
    console.log('Making a dummy request.');

    return rp('https://paperairoplane.net/tnhutnohuntoetn')
      .then(function(htmlString) {
          console.log(htmlString);
          return {text: htmlString, error: null};
      }).catch(function(error) {
           console.log('Got an error: ' + error.statusCode);
           return {text: null, error: error};
      });
  },

  getPost: function(postID) {
    var url = constructURL(postID);
    console.log('Retrieving blog post from ' + url);

    var response;
    rp(url, function(error, response, body) {
      // attempt to forward the blog post on to the requestor
      if (!error && response.statusCode === 200) {
        var jsonBody = JSON.parse(body);
        var htmlContent = marked(jsonBody.items[0].fields.content);
        var title = jsonBody.items[0].fields.title;
        var publishDate = Date.parse(jsonBody.items[0].fields.created_at);
        var prettyDate = dateFormat(publishDate, 'dddd, mmmm dS, yyyy');

        // Find the author display name and email address in the includes,
        // and extract the tags.
        var author = getAuthorFromResult(jsonBody);
        author.avatarURL = getAuthorGravatar(author.email);
        var tags = getTagsFromResult(jsonBody);

        response = {
          title: title,
          author: author,
          publishDate: prettyDate,
          blogPostBody: htmlContent,
          tags: tags
        };
      }

      // try to handle some errors
      if (!error) {
        throw(response);
      }

      throw(error);
    });

    return response;
  }
};
