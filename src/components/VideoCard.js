import React from 'react'
import PropTypes from 'prop-types'


const VideoCard = ({url, height, width, alt, id, select}) => {
    return (
        <div>
            <div className="title center">{alt}</div>
            <img className="img-responsive" src={url} alt={alt} height={height} width={width} onClick={()=>select(id)}></img>
        </div>
    )
}

VideoCard.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    id: PropTypes.string,
    select: PropTypes.func
}
export default VideoCard
