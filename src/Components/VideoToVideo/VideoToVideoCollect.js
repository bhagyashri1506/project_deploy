import React from "react";
import VideoToVideoModel1 from "./Models/Pollination/VideoToVideoModel1";
import VideoToVideoModel2 from "./Models/arielreplicate/VideoToVideoModel2";

const VideoToVideoCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Video-to-Video</h2>
      <p class="mb-12">Models that generate Video to Video</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
          <VideoToVideoModel1/>
         <VideoToVideoModel2/>
        </div>
      </div>
    </>
      

  );
};

export default VideoToVideoCollect;
