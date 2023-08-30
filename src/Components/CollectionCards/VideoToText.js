import React from "react";
import { Link } from "react-router-dom";
const VideoToTextCard = () => {
  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to=""
            className="no-default"
            title="Video to Text"
          >
            <img
              alt=""
              src={require("./Images/VideoToText.png")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to=""
              className="no-default text-2xl"
            >
              Video-to-Text
            </Link>
          </h4>
          <p className="mb-1 m-0">Convert video into Text</p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links decoration-[#0000001a]" to="">na</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoToTextCard;