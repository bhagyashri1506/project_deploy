import React from "react";
import TextToImageModel1 from "./Models/TextToImageModel1";

const TextToImageCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Text-to-Image</h2>
      <p class="mb-12">Models that generate Text to Image</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
          <TextToImageModel1/>
        </div>
      </div>
    </>
      

  );
};

export default TextToImageCollect;
