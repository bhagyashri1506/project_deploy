import React from "react";
import { GoRocket } from "react-icons/go";
const LatestModels = () => {
  return (
    <div className="flex">
      <div className="flex-none w-36 h-32 mr-6">
        <a
          href=""
          className="no-underline"
          title="uwulewd/airoboros-llama-2-70b"
        >
          <div className=" h-full w-full overflow-hidden">
            <img
              src={require('../Images/airoboros.png')}
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
            <a href="" className="no-underline">
              <span className="text-[#00000073]">uwulewd</span>
              <span className="text-[#00000073] px-1">/</span>
              airoboros-llama-2-70b
            </a>
          </h4>
        </div>
        <p className="mb-1">
          Inference Airoboros L2 70B GPT4 m2.0 - GPTQ using ExLlama.
        </p>
        <div className="text-[#00000073] text-sm">
          Updated{" "}
          <span title="Aug. 22, 2023, 10:13 p.m.">48&nbsp;minutes ago</span>
          <span className="float-right flex">
            <i className="icon">
              <GoRocket />
            </i>{" "}
            4.4K runs
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatestModels;
