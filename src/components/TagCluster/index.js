import React from 'react'
import PropTypes from 'prop-types'

const TagCluster = ({tags}) => {
    return (
        <div className="sans-serif f7">
            <span className="b">Tagged with: </span>
            {tags.map((tag) => <span className="f7 br2 ph3 pv1 ma1 dib white bg-blue">{tag.realname}</span>)}
        </div>
    )
};

TagCluster.propTypes = {
  tags: PropTypes.array,
}

export default TagCluster
