import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  // ES6 code. line below  allows you to remove above line of acode
//  const VideoListItem = ({video}) => {

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading"></div>  
        </div>
      </div>
    Video
    </li>
  );

};

export default VideoListItem
