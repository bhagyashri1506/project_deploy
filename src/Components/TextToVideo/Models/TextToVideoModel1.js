import React from "react";
import { GoRocket } from "react-icons/go";

const TextToVideoModel1 = () => {
  return (
    <>
      <a
        class="no-underline flex flex-col "
        href="/collection/texttovideoresult/demo"
      >
        <div class="h-80 mb-2">
          <div class=" h-full w-full overflow-hidden">
            <img
              alt=""
              class="object-cover object-center w-full h-full"
              src={require("./model-1.gif")}
            />
          </div>
        </div>
        <div>
          <div class="flex">
            <h4 class="flex-shrink overflow-hidden overflow-ellipsis text-h4">
              <span class="text-[#00000073]">arielreplicate</span>
              <span class="text-[#00000073] px-1">/</span>
              stable_diffusion_infinite_zoom
            </h4>
          </div>

          <p class="mb-1 font-sans">
            Use Runway's Stable-diffusion inpainting model to create an infinite
            loop video
          </p>
          <div class="text-[#00000073] text-sm">
            <span class="float-right flex">
              <i className="icon">
                <GoRocket />
              </i>
              25.8K runs
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default TextToVideoModel1;
