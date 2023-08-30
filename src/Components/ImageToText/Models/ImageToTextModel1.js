import React from "react";
import { GoRocket } from 'react-icons/go';

const ImageToTextModel1 = () => {
  return (
    <>
    <a
            class="no-underline flex flex-col "
            href="/collection/imagetotextresult/demo"
          >
            <div class="h-80 mb-2">
              <div class=" h-full w-full overflow-hidden">
                <img
                  alt=""
                  class="object-cover object-center w-full h-full"
                  src={require("./model-1.jpg")}
                />
              </div>
            </div>
            <div>
              <div class="flex">
                <h4 class="flex-shrink overflow-hidden overflow-ellipsis text-h4">
                  <span class="text-[#00000073]">yoadtew</span>
                  <span class="text-[#00000073] px-1">/</span>zero-shot-image-to-text
                </h4>
              </div>

              <p class="mb-1 font-sans">image to text generation</p>
              <div class="text-[#00000073] text-sm">
                <span class="float-right flex">
                <i className="icon"><GoRocket/></i>
                  5.6K runs
                </span>
              </div>
            </div>
          </a>
    </>
      

  );
};

export default ImageToTextModel1;
