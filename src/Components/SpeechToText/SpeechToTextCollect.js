import React from "react";
import SpeechToTextModel1 from "./Models/SpeechToTextModel1";

const SpeechToTextCollect = () => {
  return (
    <>
    <h2 class="mb-6 text-hh2">Speech-to-Text</h2>
      <p class="mb-12">Models that generate Speech to Text</p>
      <div class="my-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row auto-rows-max gap-12 ">
          <SpeechToTextModel1 />
      

        </div>
      </div>
    </>
      

  );
};

export default SpeechToTextCollect;
