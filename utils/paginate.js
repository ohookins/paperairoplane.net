// Copyright 2018 Khaled Garbaya
// Licensed with Apache 2.0 (license details in this directory).
// Originally from:
// https://github.com/Khaledgarbaya/chocolate-free-website/blob/master/utils/paginate.js

const _ = require(`lodash`);

const paginationPath = (path, page, totalPages) => {
  if (page === 0) {
    return "/";
  } else if (page < 0 || page >= totalPages) {
    return "";
  } else {
    return `${path}/${page + 1}`;
  }
};

module.exports = (
  createPage,
  componentPath,
  basePath,
  totalPages,
  perPage = 3
) => {
  const pages = Math.ceil(totalPages / perPage);
  _.times(pages, index => {
    createPage({
      // Calculate the path for this page like `/blog`, `/blog/2`
      path: paginationPath(basePath, index, totalPages),
      // Set the component as normal
      component: componentPath,
      // Pass the following context to the component
      context: {
        // Skip this number of posts from the beginning
        skip: index * perPage,
        // How many posts to show on this paginated page
        limit: perPage,
        // How many paginated pages there are in total
        totalPages,
        // The path to the previous paginated page (or an empty string)
        prevPath: paginationPath(basePath, index - 1, totalPages),
        // The path to the next paginated page (or an empty string)
        nextPath: paginationPath(basePath, index + 1, totalPages)
      }
    });
  });
};
