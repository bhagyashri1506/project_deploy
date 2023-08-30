import React from "react";
import TextToVideoModel1 from "./Models/TextToVideoModel1";

const TextToVideoCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Text-to-Video</h2>
      <p class="mb-12">Models that generate Text to Video</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
         <TextToVideoModel1/>
      

        </div>
      </div>
    </>
      

  );
};

export default TextToVideoCollect;
