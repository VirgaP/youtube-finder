import React from 'react'
import PropTypes from 'prop-types'


const VideoPreview = ({id}) => {
    return (
        <div>
            <h2 className="title">VIDEO PREVIEW</h2>
            {id ? <div
            className="video-preview-wrapper"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
            >
            <iframe
                title={id}
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
            />
            </div> : <div className="placeholder-text">Click on the video form the list to preview</div>}
        </div>
    )
}
VideoPreview.propTypes = {
    id: PropTypes.string,
}
export default VideoPreview
