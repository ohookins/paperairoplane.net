import React from 'react'
import PropTypes from 'prop-types'
import {parse, format} from 'date-fns'

const PublishLine = ({author, published, category}) => {
    const parsedDate = parse(published)
    const humanDate = format(parsedDate, "Do [of] MMMM, YYYY")

    return (
        <div className="sans-serif i f6 f6-m f5-ns">
            <span>Posted by </span>
            <span className="b">{author}</span>
            <span> on the </span>
            <span className="b">{humanDate}</span>
            <span> in category </span>
            <span className="b">{category}</span>
        </div>
    )
};

PublishLine.propTypes = {
  author: PropTypes.string,
  published: PropTypes.string,
  category: PropTypes.string,
}

export default PublishLine
