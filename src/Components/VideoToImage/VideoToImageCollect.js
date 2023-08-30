import React from "react";
import VideoToImageModel1 from "./Models/VideoToImageModel1";

const VideoToImageCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Video-to-Image</h2>
      <p class="mb-12">Models that generate Video to Image</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
         <VideoToImageModel1/>
        </div>
      </div>
    </>
      

  );
};

export default VideoToImageCollect;
