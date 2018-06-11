import React from "react";
import PropTypes from "prop-types";

const TagCluster = ({ tags }) => {
  const finalTags = tags || [];

  return (
    <div className="sans-serif f7">
      <span className="b">Tagged with: </span>
      {finalTags.map(tag => (
        <span className="f7 br2 ph2 ph2-m ph3-ns pv0 pv0-m pv1-ns ma1 dib white bg-blue">
          {tag.realname}
        </span>
      ))}
    </div>
  );
};

TagCluster.propTypes = {
  tags: PropTypes.array
};

export default TagCluster;
