import React from "react";
import { Link } from "react-router-dom";
const ImageToTextCard = () => {
  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to="/collection/imagetotext"
            className="no-default"
            title="Image to Text"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              data-ll-status="loaded"
              src={require("./Images/imagetotext.jpg")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to="/collection/imagetotext"
              className="no-default text-2xl"
            >
              Image-to-Text
            </Link>
          </h4>
          <p className="mb-1 m-0">image to text generation </p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links decoration-[#0000001a]" to="">yoadtew/zero-shot-image-to-text</Link>,
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageToTextCard;