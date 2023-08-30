import React from "react";
import ImageToImageModel1 from "./Models/ariel/ImageToImageModel1";
import ImageToImageModel2 from "./Models/hzwer/ImageToImageModel2";

const ImageToImageCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Image-to-Image</h2>
      <p class="mb-12">Models that generate images and caption from images</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
            <ImageToImageModel1/>
            <ImageToImageModel2/>

        </div>
      </div>
    </>
      

  );
};

export default ImageToImageCollect;
