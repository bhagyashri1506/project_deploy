import React from "react";
import { Link } from "react-router-dom";

const TextToVideoCard = () => {
  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to="/collection/texttovideo"
            className="no-default"
            title="Text to Video"
            >
            <img
              alt=""
              role="presentation"
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              data-ll-status="loaded"
              src={require("./Images/texttoVideo.gif")}
              />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to="/collection/texttovideo"
              className="no-default text-2xl"
            >
              Text-to-Video
            </Link>
          </h4>
          <p className="mb-1 m-0">Use Runway's Stable-diffusion inpainting model to create an infinite loop video</p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links  decoration-[#0000001a]" to="">arielreplicate/stable_diffusion_infinite_zoom</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TextToVideoCard;