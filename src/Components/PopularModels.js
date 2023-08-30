import React from "react";
import { GoRocket } from 'react-icons/go';

const PopularModels= ()=>{
    return(
        <div className="flex">
            <div className="flex-none w-36 h-32 mr-6">
              <a
                href=""
                className="no-underline"
                title="stability-ai/stable-diffusion"
              >
                <div className=" h-full w-full overflow-hidden">
                  <img
                    src={require('../Images/stable-diffusion.png')}
                    alt=""
                    role="presentation"
                    className="object-cover object-center w-full h-full lazy"
                  />
                </div>
              </a>
            </div>
            <div className="flex-grow overflow-hidden">
              <div className="flex flex-wrap gap-x-3 overflow-hidden">
                <h4 className="mb-1 text-h4 overflow-hidden overflow-ellipsis">
                  <a
                    href=""
                    className="no-underline"
                  >
                    <span className="text-[#00000073]">stability-ai</span>
                    <span className="text-[#00000073] px-1">/</span><strong>stable-diffusion</strong>
                  </a>
                </h4>
              </div>
              <p className="mb-1">
                A latent text-to-image diffusion model capable of generating
                photo-realistic images given any text input
              </p>
              <div className="text-[#00000073] text-sm">
                Updated{" "}
                <span title="July 10, 2023, 6:50 a.m.">
                  1 month, 1 week ago
                </span>
                <span className="float-right flex">
                 <i className="icon"><GoRocket/></i> 96.9M runs
                </span>
              </div>
            </div>
          </div>
    )
}

export default PopularModels;