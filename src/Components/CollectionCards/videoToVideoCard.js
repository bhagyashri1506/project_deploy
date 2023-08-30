import React from "react";
import { Link } from "react-router-dom";
const VideoToVideoCard = () => {
  return (

      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link
            to="/collection/videotovideo"
            className="no-default"
            title="Video to Video"
          >
            <img
              // src="https://tjzk.replicate.delivery/models_collections_cover_image/audio-generation.png"
              alt=""
              role="presentation"
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              data-ll-status="loaded"
              src={require("./Images/video-to-video-collect.png")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link
              to="/collection/videotovideo"
              className="no-default text-2xl"
            >
              Video-to-video
            </Link>
          </h4>
          <p className="mb-1 m-0">About Tune-A-Video:Tuning of Image Diffusion Models for Video-to-Video Generation</p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link className="a-links decoration-[#0000001a]" to="">pollinations/tune-a-video</Link>,
            <Link className="a-links decoration-[#0000001a]" to="">arielreplicate/robust_video_matting</Link>
          </p>
        </div>
      </div>

  );
};

export default VideoToVideoCard;