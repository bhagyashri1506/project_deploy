import React from "react";
import ImageToVideoModel1 from "./Models/ImageToVideoModel1";

const ImageToVideoCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Image-to-Video</h2>
      <p class="mb-12">Models that generate images to video</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
          <ImageToVideoModel1/>
      

        </div>
      </div>
    </>
      

  );
};

export default ImageToVideoCollect;
