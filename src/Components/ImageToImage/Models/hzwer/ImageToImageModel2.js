import React from "react";
import { GoRocket } from 'react-icons/go';

const ImageToImageModel2 = () => {
  return (
    <>
    <a
            class="no-underline flex flex-col "
            href="/collection/imagetoimage2result/demo"
          >
            <div class="h-80 mb-2">
              <div class=" h-full w-full overflow-hidden">
                <img
                  alt=""
                  class="object-cover object-center w-full h-full"
                  src={require("./model-2.gif")}
                />
              </div>
            </div>
            <div>
              <div class="flex">
                <h4 class="flex-shrink overflow-hidden overflow-ellipsis text-h4">
                  <span class="text-[#00000073]">hzwer</span>
                  <span class="text-[#00000073] px-1">/</span>iccv2019-learningtopaint
                </h4>
              </div>

              <p class="mb-1 font-sans">Teach Machines to Paint</p>
              <div class="text-[#00000073] text-sm">
                <span class="float-right flex">
                <i className="icon"><GoRocket/></i>
                  1.7K runs
                </span>
              </div>
            </div>
          </a>
    </>
      

  );
};

export default ImageToImageModel2;
