import React from "react";
import { Link } from "react-router-dom";
const ImageToVideoCard = () => {
  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to="/collection/imagetovideo"
            className="no-default"
            title="Image to Video"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              data-ll-status="loaded"
              src={require("./Images/ImageToVideo.png")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to="/collection/imagetovideo"
              className="no-default text-2xl"
            >
              Image-to-video
            </Link>
          </h4>
          <p className="mb-1 m-0">Convert Link set of frames to Link video</p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links decoration-[#0000001a]" to="">fofr/frames-to-video</Link>,
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageToVideoCard;