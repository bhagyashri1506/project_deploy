import React from "react";
import TextToSpeechModel1 from "./Models/TextToSpeechModel1";

const TextToSpeechCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Text-to-Speech</h2>
      <p class="mb-12">Models that generate Text to Speech</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
          <TextToSpeechModel1/>
      

        </div>
      </div>
    </>
      

  );
};

export default TextToSpeechCollect;
