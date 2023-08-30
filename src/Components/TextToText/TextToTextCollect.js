import React from "react";
import TextToTextModel1 from "./Models/TextToTextModel1";

const TextToTextCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Text-to-Text</h2>
      <p class="mb-12">Models that generate Text to Speech</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
         <TextToTextModel1/>
      

        </div>
      </div>
    </>
      

  );
};

export default TextToTextCollect;
