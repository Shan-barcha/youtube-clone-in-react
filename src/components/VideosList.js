import React from "react";
import VideoItem from "./VideoItem";

const videosList = ({ videos, onVideoSelect }) => {
  const randerdList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div className="ui relaxed divided list ">{randerdList}</div>;
};

export default videosList;
