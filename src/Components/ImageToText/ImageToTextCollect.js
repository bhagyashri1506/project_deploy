import React from "react";
import ImageToTextModel1 from "./Models/ImageToTextModel1";


const ImageToTextCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Image-to-Text</h2>
      <p class="mb-12">Models that generate images to text</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
            <ImageToTextModel1/>
      

        </div>
      </div>
    </>
      

  );
};

export default ImageToTextCollect;
