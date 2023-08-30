import React from "react";

const VToV2Demo = () => {
  return (
    <>
      <div className="mb-2lh">
        <div
          data-component="VersionRun"
          data-props="react-component-props-f4edae66-ed11-4881-9ab5-45760a5295d2"
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
                      __idm_id__="2408454"
                      autoPlay
                      controls
                      loop
                      preload="auto"
                      src="https://replicate.delivery/pbxt/HqiGGuuwynO7sCHpcQdYQsIf04NotwOrDdbhBf4M6Pou6MGg/butter.mp4"
                      style={{
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-input_video">
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
                    <code>input_video</code>
                  </label>
                  <div className="dropzone text-shade border-black border-2 border-opacity-10 border-dashed px-lh py-05lh cursor-pointer">
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
                          https://replicate.delivery/pbxt/HqiGGuuwynO7sCHpcQdYQsIf04NotwOrDdbhBf4M6Pou6MGg/butter.mp4
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
                  <p className="text-shade mt-1">Video to segment.</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-output_type">
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
                      <line x1="8" x2="21" y1="6" y2="6" />
                      <line x1="8" x2="21" y1="12" y2="12" />
                      <line x1="8" x2="21" y1="18" y2="18" />
                      <line x1="3" x2="3.01" y1="6" y2="6" />
                      <line x1="3" x2="3.01" y1="12" y2="12" />
                      <line x1="3" x2="3.01" y1="18" y2="18" />
                    </svg>
                    <code>output_type</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-output_type"
                    name="output_type"
                  >
                    <option value="" />
                    <option value="green-screen">green-screen</option>
                    <option value="alpha-mask">alpha-mask</option>
                    <option value="foreground-mask">foreground-mask</option>
                  </select>
                  <p className="text-shade mt-1">An enumeration.</p>
                </div>
                <button className="form-button mr-2 relative" type="submit">
                  <span className="">Submit</span>
                </button>
                <button className="form-button-secondary" type="button">
                  Reset
                </button>
              </form>
            </div>
            <div className="flex-1 min-w-0 scroll-mt-20">
              <h4 className="flex-1 mb-lh">Output</h4>
              <div className="mb-lh">
                <output className="mb-lh" data-prediction-output="true">
                  <figure>
                    <div>
                      <div
                        className="w-full"
                        style={{
                          height: "auto",
                          width: "auto",
                        }}
                      >
                        <video
                          __idm_id__="2408451"
                          autoPlay
                          controls
                          loop
                          preload="auto"
                          src="https://replicate.delivery/pbxt/V3iFlL5JotpbLtkUqGcnrpsiRfXume3Jm0020Iu0hX0hBoDQA/green-screen.mp4"
                          style={{
                            height: "auto",
                            width: "auto",
                          }}
                        />
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT97.21S">97.21</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/arielreplicate/robust_video_matting?prediction=iqaowdlwcnbxresiand63tzn5a"
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
                  href="/p/iqaowdlwcnbxresiand63tzn5a/report"
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
          <a
            className="no-default"
            href="/arielreplicate/robust_video_matting/examples"
          >
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
          <a href="/arielreplicate/robust_video_matting/examples#iqaowdlwcnbxresiand63tzn5a">
            <video
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              src="https://replicate.delivery/pbxt/V3iFlL5JotpbLtkUqGcnrpsiRfXume3Jm0020Iu0hX0hBoDQA/green-screen.mp4"
              loop
              muted
              role="presentation"
              type="video/mp4"
            ></video>
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/arielreplicate/robust_video_matting/examples#c4zkevc27fhntpw3ekgb2ok2sq">
            <video
              __idm_id__="2408450"
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              loop
              muted
              role="presentation"
              src="https://replicate.delivery/pbxt/HuwFjWn7A9bcH5CfhQ7KO79N3z4uZf9sTtLoo4PDnXY2MoDQA/green-screen.mp4"
              type="video/mp4"
            ></video>
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/arielreplicate/robust_video_matting/examples#in5yh3obxrdmvgr6mxgalzzeli">
            <video
              __idm_id__="2408449"
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              loop
              muted
              role="presentation"
              src="https://replicate.delivery/pbxt/rERlJsBX0oJ4BZwnJdaj2RfqBYDuzjObx3jRDg3GffHvqQHgA/green-screen.mp4"
              type="video/mp4"
            ></video>
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/arielreplicate/robust_video_matting/examples#43ujwtzsojd2phcc6hw2sbbbsu">
            <video
              __idm_id__="2408452"
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              loop
              muted
              role="presentation"
              src="https://replicate.delivery/pbxt/5wY879GIAWqAJFxBU6UtcHGWNwmnrnLzUgf2G0Jx0XcxYeIQA/alpha-mask.mp4"
              type="video/mp4"
            ></video>
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/arielreplicate/robust_video_matting/examples#oriptsmtjvbmdmcizvc2d3cbga">
            <video
              __idm_id__="2408453"
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              loop
              muted
              role="presentation"
              src="https://replicate.delivery/pbxt/dpw8YGYG4TZwGNYfKAe79EkI4yzj2m6ZzFqheKMp4KPhl5RgA/foreground-mask.mp4"
              type="video/mp4"
            ></video>
          </a>
        </div>
      </div>

      <div className="mb-2lh" id="performance">
        <h4 className="mb-lh pb-2 border-b border-hairline">
          Run time and cost
        </h4>

        <p className="mb-lh">
          Predictions run on Nvidia T4 GPU hardware. Predictions typically
          complete within 5 minutes. The predict time for this model varies
          significantly based on the inputs.
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
          <h1 id="robust-video-matting-rvm">Robust Video Matting (RVM)</h1>

          <p>
            English |{" "}
            <a href="README_zh_Hans.md" rel="nofollow">
              中文
            </a>
          </p>

          <p>
            Official repository for the paper{" "}
            <a
              href="https://peterl1n.github.io/RobustVideoMatting/"
              rel="nofollow"
            >
              Robust High-Resolution Video Matting with Temporal Guidance
            </a>
            . RVM is specifically designed for robust human video matting.
            Unlike existing neural models that process frames as independent
            images, RVM uses a recurrent neural network to process videos with
            temporal memory. RVM can perform matting in real-time on any videos
            without additional inputs. It achieves <strong>4K 76FPS</strong> and{" "}
            <strong>HD 104FPS</strong> on an Nvidia GTX 1080 Ti GPU. The project
            was developed at{" "}
            <a href="https://www.bytedance.com/" rel="nofollow">
              ByteDance Inc.
            </a>
          </p>

          <h2 id="showreel">Showreel</h2>

          <p>
            Watch the showreel video (
            <a href="https://youtu.be/Jvzltozpbpk" rel="nofollow">
              YouTube
            </a>
            ,{" "}
            <a
              href="https://www.bilibili.com/video/BV1Z3411B7g7/"
              rel="nofollow"
            >
              Bilibili
            </a>
            ) to see the model's performance.{" "}
          </p>

          <h2 id="speed">Speed</h2>

          <p>
            Speed is measured with{" "}
            <code>
              <a href="http://inference_speed_test.py" rel="nofollow">
                inference_speed_test.py
              </a>
            </code>{" "}
            for reference.
          </p>

          <table>
            <thead>
              <tr>
                <th>GPU</th>
                <th>dType</th>
                <th>HD (1920x1080)</th>
                <th>4K (3840x2160)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RTX 3090</td>
                <td>FP16</td>
                <td>172 FPS</td>
                <td>154 FPS</td>
              </tr>
              <tr>
                <td>RTX 2060 Super</td>
                <td>FP16</td>
                <td>134 FPS</td>
                <td>108 FPS</td>
              </tr>
              <tr>
                <td>GTX 1080 Ti</td>
                <td>FP32</td>
                <td>104 FPS</td>
                <td>74 FPS</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              Note 1: HD uses <code>downsample_ratio=0.25</code>, 4K uses{" "}
              <code>downsample_ratio=0.125</code>. All tests use batch size 1
              and frame chunk 1.
            </li>

            <li>
              Note 2: GPUs before Turing architecture does not support FP16
              inference, so GTX 1080 Ti uses FP32.
            </li>

            <li>
              Note 3: We only measure tensor throughput. The provided video
              conversion script in this repo is expected to be much slower,
              because it does not utilize hardware video encoding/decoding and
              does not have the tensor transfer done on parallel threads. If you
              are interested in implementing hardware video encoding/decoding in
              Python, please refer to{" "}
              <a
                href="https://github.com/NVIDIA/VideoProcessingFramework"
                rel="nofollow"
              >
                PyNvCodec
              </a>
              .
            </li>
          </ul>

          <p>
            <br />
            {"  "}
          </p>

          <h2 id="project-members">Project Members</h2>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shanchuanlin/"
                rel="nofollow"
              >
                Shanchuan Lin
              </a>
            </li>

            <li>
              <a
                href="https://sites.google.com/site/linjieyang89/"
                rel="nofollow"
              >
                Linjie Yang
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/imran-saleemi/"
                rel="nofollow"
              >
                Imran Saleemi
              </a>
            </li>

            <li>
              <a
                href="https://homes.cs.washington.edu/~soumya91/"
                rel="nofollow"
              >
                Soumyadip Sengupta
              </a>
            </li>
          </ul>

          <p>
            <br />
          </p>

          <h2 id="third-party-projects">Third-Party Projects</h2>

          <ul>
            <li>
              <a
                href="https://github.com/FeiGeChuanShu/ncnn_Android_RobustVideoMatting"
                rel="nofollow"
              >
                NCNN C++ Android
              </a>{" "}
              (
              <a href="https://github.com/FeiGeChuanShu" rel="nofollow">
                @FeiGeChuanShu
              </a>
              )
            </li>

            <li>
              <a
                href="https://github.com/DefTruth/RobustVideoMatting.lite.ai.toolkit"
                rel="nofollow"
              >
                lite.ai.toolkit
              </a>{" "}
              (
              <a href="https://github.com/DefTruth" rel="nofollow">
                @DefTruth
              </a>
              )
            </li>

            <li>
              <a
                href="https://huggingface.co/spaces/akhaliq/Robust-Video-Matting"
                rel="nofollow"
              >
                Gradio Web Demo
              </a>{" "}
              (
              <a href="https://github.com/AK391" rel="nofollow">
                @AK391
              </a>
              )
            </li>

            <li>
              <a
                href="https://hub.natml.ai/@natsuite/robust-video-matting"
                rel="nofollow"
              >
                Unity Engine demo with NatML
              </a>{" "}
              (
              <a href="https://github.com/natsuite" rel="nofollow">
                @natsuite
              </a>
              ){"  "}
            </li>

            <li>
              <a
                href="https://github.com/DefTruth/lite.ai.toolkit/blob/main/lite/mnn/cv/mnn_rvm.cpp"
                rel="nofollow"
              >
                MNN C++ Demo
              </a>{" "}
              (
              <a href="https://github.com/DefTruth" rel="nofollow">
                @DefTruth
              </a>
              )
            </li>

            <li>
              <a
                href="https://github.com/DefTruth/lite.ai.toolkit/blob/main/lite/tnn/cv/tnn_rvm.cpp"
                rel="nofollow"
              >
                TNN C++ Demo
              </a>{" "}
              (
              <a href="https://github.com/DefTruth" rel="nofollow">
                @DefTruth
              </a>
              )
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default VToV2Demo;
