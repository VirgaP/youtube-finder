import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import VideoCard from './VideoCard'

const VideosList = ({data, callback, select}) => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const renderList = data.map((item, i) =>
        <div className="card-wrapper" key={item.id.videoId + i}>
            <VideoCard 
                url={item.snippet.thumbnails.medium.url} 
                id={item.id.videoId} 
                alt={item.snippet.title} 
                height={item.snippet.thumbnails.medium.height} 
                width={item.snippet.thumbnails.medium.width} 
                select={select}
            />
        </div>
    )

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        callback(true)
    }

    return (
        <>
            {data.length > 0 && <h2 className="center title">Videos found: </h2>}
            <div className="video-list-container" id="videosList">{renderList}</div> 
        </>
    )
}

VideosList.propTypes = {
    data: PropTypes.array,
    callback: PropTypes.func,
    select: PropTypes.func
}

export default VideosList
