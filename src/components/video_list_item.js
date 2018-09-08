import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  // ES6 code. line below  allows you to remove above lines of code
  // const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
