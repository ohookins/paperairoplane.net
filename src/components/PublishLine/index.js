import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";

const PublishLine = ({ author, published, category }) => {
  const parsedDate = parseISO(published);
  const humanDate = format(parsedDate, "do 'of' MMMM, yyyy");

  return (
    <div className="sans-serif i f6 f6-m f5-ns">
      <span>Posted by </span>
      <span className="b">{author}</span>
      <span> on the </span>
      <span className="b">{humanDate}</span>
      <span> in category </span>
      <span className="b">{category}</span>
    </div>
  );
};

PublishLine.propTypes = {
  author: PropTypes.string,
  published: PropTypes.string,
  category: PropTypes.string
};

export default PublishLine;
