import React from "react";

const VToV1Demo = () => {
  return (
    <>
      <div className="mb-2lh">
        <div
          data-component="VersionRun"
          data-props="react-component-props-b5111517-ae5e-4068-9691-aa6d1021d711"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <div
                    className="w-full"
                    style={{
                      height: "auto",
                      width: "auto",
                    }}
                  >
                    <video
                      __idm_id__="1613825"
                      autoPlay
                      controls
                      loop
                      preload="auto"
                      src="https://replicate.delivery/pbxt/IDiFVPWBr2LV9rZs1RP0GZGSz0SKSRidowzRZSSc8il25wmE/man%20surfing.mp4"
                      style={{
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-video">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <code>video</code>
                  </label>
                  <div className="dropzone text-shade border-black border-2 border-opacity-10 border-dashed px-lh py-05lh bg-black/5">
                    <input className="hidden" type="file" />
                    <div>
                      <svg
                        className="icon"
                        fill="none"
                        height="24"
                        role="presentation"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>{" "}
                      Drop a file or click to select
                      <div className="flex ">
                        <div className="text-sm truncate pt-1">
                          https://replicate.delivery/pbxt/IDiFVPWBr2LV9rZs1RP0GZGSz0SKSRidowzRZSSc8il25wmE/man%20surfing.mp4
                        </div>
                        <button
                          className="flex-shrink pointer-events-auto hover:bg-black hover:text-white p-1 ml-1"
                          title="Clear"
                          type="button"
                        >
                          <svg
                            className="icon"
                            fill="none"
                            height="24"
                            role="presentation"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-shade mt-1">input video</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-source_prompt">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="4 7 4 4 20 4 20 7" />
                      <line x1="9" x2="15" y1="20" y2="20" />
                      <line x1="12" x2="12" y1="4" y2="20" />
                    </svg>
                    <code>source_prompt</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      defaultValue="a man surfing"
                      name="source_prompt"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    prompts describing the original video
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-target_prompts">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="4 7 4 4 20 4 20 7" />
                      <line x1="9" x2="15" y1="20" y2="20" />
                      <line x1="12" x2="12" y1="4" y2="20" />
                    </svg>
                    <code>target_prompts</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      defaultValue="a panda surfing
a cartoon sloth surfing"
                      name="target_prompts"
                      style={{
                        height: "74px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    prompts to change the video to
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-steps">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                    <code>steps</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="300"
                    disabled
                    id="input-steps"
                    name="steps"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    number of steps to train for
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-width">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                    <code>width</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="512"
                    disabled
                    id="input-width"
                    name="width"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    width of the output video (multiples of 32)
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-height">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                    <code>height</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="512"
                    disabled
                    id="input-height"
                    name="height"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    height of the output video (multiples of 32)
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-length">
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                    <code>length</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="5"
                    disabled
                    id="input-length"
                    name="length"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    length of the output video (in seconds)
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-sample_frame_rate"
                  >
                    <svg
                      className="inline-block mr-2 w-3 h-3"
                      fill="none"
                      height="24"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                    <code>sample_frame_rate</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="1"
                    disabled
                    id="input-sample_frame_rate"
                    name="sample_frame_rate"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    with which rate to sample the input video
                  </p>
                </div>
                <p className="mb-05lh">Sign in to run this model:</p>
                <p className="my-7">
                  <a
                    className="form-button"
                    href="/login/github/?next=/pollinations/tune-a-video"
                  >
                    <span className="mr-1">
                      <svg
                        className="icon"
                        fill="none"
                        height="24"
                        role="presentation"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                      </svg>
                    </span>{" "}
                    Sign In With GitHub
                  </a>
                </p>
                <p>
                  <small>
                    By signing in, you agree to our{" "}
                    <a href="/terms">terms of service</a> and{" "}
                    <a href="/privacy">privacy policy</a>
                  </small>
                  .
                </p>
              </form>
            </div>
            <div className="flex-1 min-w-0 scroll-mt-20">
              <h4 className="flex-1 mb-lh">Output</h4>
              <div className="mb-lh">
                <output className="mb-lh" data-prediction-output="true">
                  <figure>
                    <div>
                      <a
                        href="https://replicate.delivery/pbxt/TX9HfInfssiYg0S6IMOXe9hAznAbcXsY2GsbFzIA3Qt2s9xgA/sample-300.gif"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          alt="output"
                          className="lazy"
                          src="https://replicate.delivery/pbxt/TX9HfInfssiYg0S6IMOXe9hAznAbcXsY2GsbFzIA3Qt2s9xgA/sample-300.gif"
                        />
                      </a>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT276.10S">276.10</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/pollinations/tune-a-video?prediction=qam52xrlizd65jir376amhwp4u"
                >
                  <svg
                    className="icon"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>{" "}
                  Share
                </a>
              </div>
              <div className="inline-block mr-3 mb-3">
                <button className="form-button-secondary">
                  <svg
                    className="icon"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>{" "}
                  Download
                </button>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary mb-lh"
                  href="/p/qam52xrlizd65jir376amhwp4u/report"
                >
                  <svg
                    className="icon"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>{" "}
                  Report
                </a>
              </div>
              <div className="mb-lh text-xs hover:underline cursor-pointer">
                <svg
                  className="icon"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" x2="20" y1="19" y2="19" />
                </svg>{" "}
                Show logs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-2 border-b border-hairline mb-lh flex">
        <h4 className="inline-block flex-grow">Examples</h4>

        <p>
          <a className="no-default" href="/pollinations/tune-a-video/examples">
            View more examples
            <span className="relative -top-0.5">
              <svg
                className="icon"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" x2="17" y1="17" y2="7" />

                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </p>
      </div>

      <div className="mb-2lh h-40 overflow-hidden ">
        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#qam52xrlizd65jir376amhwp4u">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/TX9HfInfssiYg0S6IMOXe9hAznAbcXsY2GsbFzIA3Qt2s9xgA/sample-300.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#ienqtefmqffu7kgikxwqr5lduq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/sOMrGKBd6dbVNRaRGfheLHhgYDvZ0dqpBuJRF5yKopUU1fxgA/sample-300.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#r4bjwykpyzbwhdmnidqzun322y">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/OTBWSitpe72oHyGrNVBMETekcPTkFZjYBcCJRL6JrTb2jCZQA/sample-300.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#ogi5hs5offf6bbsaw3ucplr5ja">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/oKN40WVImUKYDVEtFyn8BItgZm2epRgg7CfYQWxNUrsa6CZQA/sample-300.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#y7sy6fd4gjbzrisbfeieetvvtu">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/mAONIem3fFqFsU2SkQp1Nufwtip6IPboSkJjjkGJaJUpnHygA/sample-300.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/pollinations/tune-a-video/examples#6na6gonncne6fbgyjvkkdu7ybq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/pbxt/5tleTsLVmjRoDifvrTS0eltf7pJfGK1Oujqfrdt8vjGf8HjMIA/sample-100.gif"
              role="presentation"
            />
          </a>
        </div>
      </div>

      <div className="mb-2lh" id="performance">
        <h4 className="mb-lh pb-2 border-b border-hairline">
          Run time and cost
        </h4>

        <p className="mb-lh">
          Predictions run on Nvidia A100 (40GB) GPU hardware. Predictions
          typically complete within 9 minutes. The predict time for this model
          varies significantly based on the inputs.
        </p>
      </div>

      <article>
        <div className="border-b border-hairline pb-2 mb-lh" id="readme">
          <h4 className="inline-block">
            <a className="no-default" href="#readme">
              Readme
            </a>
          </h4>
        </div>

        <div className="readme-prose">
          <h1 id="tune-a-video">Tune-A-Video</h1>

          <p>
            This repository is the official implementation of{" "}
            <a href="https://arxiv.org/abs/2212.11565" rel="nofollow">
              Tune-A-Video
            </a>
            .
          </p>

          <p>
            <strong>
              <a href="https://arxiv.org/abs/2212.11565" rel="nofollow">
                Tune-A-Video: One-Shot Tuning of Image Diffusion Models for
                Text-to-Video Generation
              </a>
            </strong>
            <br />
            <a href="https://zhangjiewu.github.io/" rel="nofollow">
              Jay Zhangjie Wu
            </a>
            ,
            <a href="https://geyixiao.com/" rel="nofollow">
              Yixiao Ge
            </a>
            ,
            <a href="https://xinntao.github.io/" rel="nofollow">
              Xintao Wang
            </a>
            ,
            <a href="" rel="nofollow">
              Stan Weixian Lei
            </a>
            ,
            <a href="https://ycgu.site/" rel="nofollow">
              Yuchao Gu
            </a>
            ,
            <a href="https://www.comp.nus.edu.sg/~whsu/" rel="nofollow">
              Wynne Hsu
            </a>
            ,
            <a
              href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=en"
              rel="nofollow"
            >
              Ying Shan
            </a>
            ,
            <a
              href="https://scholar.google.com/citations?user=mk-F69UAAAAJ&hl=en"
              rel="nofollow"
            >
              Xiaohu Qie
            </a>
            ,
            <a href="https://sites.google.com/view/showlab" rel="nofollow">
              Mike Zheng Shou
            </a>
            <br />
          </p>

          <p>
            <a href="https://tuneavideo.github.io/" rel="nofollow">
              Project Page
            </a>{" "}
            |{" "}
            <a href="https://arxiv.org/abs/2212.11565" rel="nofollow">
              arXiv
            </a>
          </p>

          <h2 id="setup">Setup</h2>

          <h3 id="requirements">Requirements</h3>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-shell !p-0 hljs">
                  pip install -r requirements.txt
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex items-center">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <p>
            Installing{" "}
            <a
              href="https://github.com/facebookresearch/xformers"
              rel="nofollow"
            >
              xformers
            </a>
            is highly recommended for more efficiency and speed on GPUs. To
            enable xformers, set
            <code>enable_xformers_memory_efficient_attention=True</code>{" "}
            (default).
          </p>

          <h3 id="weights">Weights</h3>

          <p>
            You can download the pre-trained{" "}
            <a href="https://arxiv.org/abs/2112.10752" rel="nofollow">
              Stable Diffusion
            </a>
            models (e.g.,
            <a
              href="https://huggingface.co/CompVis/stable-diffusion-v1-4"
              rel="nofollow"
            >
              Stable Diffusion v1-4
            </a>
            ):
          </p>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-shell !p-0 hljs">
                  git lfs install git clone
                  https://huggingface.co/CompVis/stable-diffusion-v1-4
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex top-2 items-start">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <p>
            Alternatively, you can use a personalized{" "}
            <a href="https://arxiv.org/abs/2208.12242" rel="nofollow">
              DreamBooth
            </a>{" "}
            model (e.g.,{" "}
            <a
              href="https://huggingface.co/sd-dreambooth-library/mr-potato-head"
              rel="nofollow"
            >
              mr-potato-head
            </a>
            ):
          </p>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-shell !p-0 hljs">
                  git lfs install git clone
                  https://huggingface.co/sd-dreambooth-library/mr-potato-head
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex top-2 items-start">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h2 id="training">Training</h2>

          <p>
            To fine-tune the text-to-image diffusion models for text-to-video
            generation, run this command:
          </p>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-shell !p-0 hljs">
                  accelerate launch train_tuneavideo.py
                  --config="configs/man-surfing.yaml"
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex items-center">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h2 id="inference">Inference</h2>

          <p>Once the training is done, run inference:</p>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-python !p-0 hljs">
                  <span className="hljs-keyword">from</span>{" "}
                  tuneavideo.pipelines.pipeline_tuneavideo{" "}
                  <span className="hljs-keyword">import</span>
                  TuneAVideoPipeline
                  <span className="hljs-keyword">from</span>{" "}
                  tuneavideo.models.unet{" "}
                  <span className="hljs-keyword">import</span>
                  UNet3DConditionModel
                  <span className="hljs-keyword">
                    from
                  </span> tuneavideo.util{" "}
                  <span className="hljs-keyword">import</span>
                  save_videos_grid
                  <span className="hljs-keyword">import</span>
                  torch model_id =
                  <span className="hljs-string">
                    "path-to-your-trained-model"
                  </span>
                  unet = UNet3DConditionModel.from_pretrained(model_id,
                  subfolder=
                  <span className="hljs-string">'unet'</span>,
                  torch_dtype=torch.float16).to(
                  <span className="hljs-string">'cuda'</span>) pipe =
                  TuneAVideoPipeline.from_pretrained(
                  <span className="hljs-string">
                    "CompVis/stable-diffusion-v1-4"
                  </span>
                  , unet=unet, torch_dtype=torch.float16).to(
                  <span className="hljs-string">"cuda"</span>) prompt =
                  <span className="hljs-string">"a panda is surfing"</span>
                  video = pipe(prompt, video_length=
                  <span className="hljs-number">8</span>, height=
                  <span className="hljs-number">512</span>, width=
                  <span className="hljs-number">512</span>, num_inference_steps=
                  <span className="hljs-number">50</span>, guidance_scale=
                  <span className="hljs-number">7.5</span>
                  ).videos save_videos_grid(video,
                  <span className="hljs-string">
                    f"
                    <span className="hljs-subst">{`{prompt}`}</span>
                    .gif"
                  </span>
                  )
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex top-2 items-start">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h2 id="results">Results</h2>

          <h3 id="fine-tuning-on-stable-diffusion">
            Fine-tuning on Stable Diffusion
          </h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/man-surfing/train.gif" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/stablediffusion/panda-surfing.gif" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/stablediffusion/ironman-desert.gif" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/stablediffusion/raccoon-cartoon.gif" />
                </td>
              </tr>
              <tr>
                <td>[Training] a man is surfing.</td>
                <td>a panda is surfing.</td>
                <td>Iron Man is surfing in the desert.</td>
                <td>a raccoon is surfing, cartoon style.</td>
              </tr>
            </tbody>
          </table>

          <h3 id="fine-tuning-on-dreambooth">Fine-tuning on DreamBooth</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/dreambooth/mr-potato-head.png" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/dreambooth/pink-hat.gif" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/dreambooth/potato-sunglasses.gif" />
                </td>
                <td>
                  <img src="https://tuneavideo.github.io/static/results/repo/dreambooth/potato-forest.gif" />
                </td>
              </tr>
              <tr>
                <td>sks mr potato head.</td>
                <td>sks mr potato head, wearing a pink hat, is surfing.</td>
                <td>sks mr potato head, wearing sunglasses, is surfing.</td>
                <td>sks mr potato head is surfing in the forest.</td>
              </tr>
            </tbody>
          </table>

          <h2 id="bibtex">BibTeX</h2>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="!p-0 hljs language-julia">
                  <span className="hljs-meta">@article</span>
                  {`{wu2022tuneavideo,
            title={Tune-A-Video: One-Shot Tuning of Image Diffusion Models `}
                  <span className="hljs-keyword">for</span>{" "}
                  <span className="hljs-built_in">Text</span>
                  {`-to-Video Generation},
            author={Wu, Jay Zhangjie and Ge, Yixiao and Wang, Xintao and Lei, Stan Weixian and Gu, Yuchao and Hsu, Wynne and Shan, Ying and Qie, Xiaohu and Shou, Mike Zheng},
            journal={arXiv preprint arXiv:`}
                  <span className="hljs-number">2212.11565</span>
                  {`},
            year={`}
                  <span className="hljs-number">2022</span>
                  {`}
            }`}
                </code>
              </pre>
              <div className="absolute right-2 top-0 bottom-0 h-full opacity-0 group-hover:opacity-100 flex top-2 items-start">
                <button className="p-2 bg-white border-gray-300 text-gray-800 hover:text-gray-500 focus:outline-none">
                  <svg
                    className="lucide lucide-copy"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default VToV1Demo;
