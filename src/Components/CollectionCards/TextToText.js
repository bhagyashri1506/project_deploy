import React from "react";
import { Link } from "react-router-dom";
const TextToTextCard = () => {

  return (
    <>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40">
          <Link to="/collection/texttotext"
            className="no-default"
            title="Text to Text"
          >
            <img
              alt=""
              className="object-cover object-center w-full h-full block align-middle lazy entered loaded"
              src={require("./Images/textToText.png")}
            />
          </Link>
        </div>
        <div className="overflow-hidden break-words">
          <h4 className="whitespace-nowrap text-h4 overflow-hidden overflow-ellipsis">
            <Link to="/collection/texttotext"
              className="no-default text-2xl"
            >
              Text-to-Text
            </Link>
          </h4>
          <p className="mb-1 m-0">
            5 model fine tuned on GPT-3.5 generated paraphrase corpus of 6.3
            million unique sentences.
          </p>
          <p className="mb-1  text-[#00000073] text-sm">
            <Link to=""
              className="a-links decoration-[#0000001a]"
            >
              sharaddition/paraphrase-gpt
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TextToTextCard;
