import React from "react";
import { Link } from "react-router-dom";
const TextToImageCard = () => {
  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to="/collection/texttoimage"
            className="no-default"
            title="text to Image"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              data-ll-status="loaded"
              src={require("./Images/textToImage.png")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to="/collection/texttoimage"
              className="no-default text-2xl"
            >
              Text-to-Image
            </Link>
          </h4>
          <p className="mb-1 m-0">A latent text-to-image diffusion model capable of generating photo-realistic images given any text input</p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links decoration-[#0000001a]" to="">stability-ai/stable-diffusion</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TextToImageCard;