import React from "react";
import TextToImageCard from "../Components/CollectionCards/TextToImage";
import TextToTextCard from "../Components/CollectionCards/TextToText";
import TextToVideoCard from "../Components/CollectionCards/TextToVideo";
import TextToSpeechCard from "../Components/CollectionCards/TextToSpeech";
import ImageToImageCard from "../Components/CollectionCards/ImageToImage";
import ImageToTextCard from "../Components/CollectionCards/ImageToText";
import ImageToVideoCard from "../Components/CollectionCards/ImageToVideo";
import SpeechToTextCard from "../Components/CollectionCards/SpeechToText";
import VideoToImageCard from "../Components/CollectionCards/VideoToImage";
import VideoToVideoCard from "../Components/CollectionCards/videoToVideoCard";
import VideoToTextCard from "../Components/CollectionCards/VideoToText";
import PopularModels from "../Components/PopularModels";
import LatestModels from "../Components/LatestModels";

const Explore = () => {
  return (
    <main className="xl:mx-24 xl:px-2 lg:mx-14 mx-8 flex-1 md:scroll-mt-20 font-space">
      <section
        id="collections"
        className="mb-12 pb-12 border-b  border-black/10"
      >
        <h3 className="mb-6 m-0 text-xxl">Collections</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-flow-row auto-rows-max gap-12">
          <TextToTextCard />
          <TextToVideoCard/>
          <TextToSpeechCard/>
          <TextToImageCard />
          <ImageToImageCard/>
          <ImageToTextCard/>
          <ImageToVideoCard/>
          <SpeechToTextCard/>
          <VideoToImageCard/>
          <VideoToVideoCard />
          <VideoToTextCard/>
        </div>
      </section>
      <section
        id="popular-models"
        className="mb-12 pb-12 border-b border-black/10 "
      >
        <h3 className="mb-6 text-xxl">Popular models</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-12">
          {[...Array(10)].map(() => {
            return <PopularModels />;
          })}
        </div>
      </section>
      <section id="latest-models">
        <h3 className="mb-6 text-xxl">Latest models</h3>
        <nav
          className="pagination flex lining-nums tabular-nums my-6"
          aria-label="pagination"
        >
          <div className="flex-1"></div>
          <span className="flex-auto text-center">Page 1</span>
          <div className="flex-1 text-right">
            <a
              href=""
              className="no-underline"
            >
              <span className="mr-2 underline hidden sm:inline">Next page</span>
              <span className="inline-block h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-12">
          {[...Array(10)].map(() => {
            return <LatestModels />;
          })}
        </div>
        <nav
          className="pagination flex lining-nums tabular-nums my-6"
          aria-label="pagination"
        >
          <div className="flex-1"></div>
          <span className="flex-auto text-center">Page 1</span>
          <div className="flex-1 text-right">
            <a
              href=""
              className="no-underline"
            >
              <span className="mr-2 underline hidden sm:inline">Next page</span>
              <span className="inline-block h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </nav>
      </section>
    </main>
  );
};

export default Explore;
