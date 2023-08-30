import React from "react";

const TToVDemo = () => {
  return (
    <>
      <div>
        <div className="mb-2lh">
          <div
            data-component="VersionRun"
            data-props="react-component-props-a936b9d8-3b13-4dfe-95d2-05d70efb4782"
          >
            <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
              <div className="flex-1 min-w-0">
                <h4 className="flex-1 mb-lh">Input</h4>
                <form action="#" noValidate>
                  <div className="mb-lh">
                    <label className="block mb-2" htmlFor="input-prompt">
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
                      <code>prompt</code>
                    </label>
                    <div>
                      <textarea
                        className="form-input w-full resize-none"
                        defaultValue="A path going into the woods"
                        name="prompt"
                        style={{
                          height: "50px !important",
                        }}
                      />
                    </div>
                    <p className="text-shade mt-1">Prompt</p>
                  </div>
                  <div className="mb-lh">
                    <label className="block mb-2" htmlFor="input-output_format">
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
                      <code>output_format</code>
                    </label>
                    <select
                      className="form-select w-full"
                      id="input-output_format"
                      name="output_format"
                    >
                      <option value="" />
                      <option value="mp4">mp4</option>
                      <option value="gif">gif</option>
                    </select>
                    <p className="text-shade mt-1">
                      infinite loop gif or mp4 video
                    </p>
                  </div>
                  <div className="mb-lh">
                    <label className="block mb-2" htmlFor="input-inpaint_iter">
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
                      <code>inpaint_iter</code>
                    </label>
                    <input
                      className="form-input w-full"
                      defaultValue="2"
                      id="input-inpaint_iter"
                      name="inpaint_iter"
                      step="1"
                      type="number"
                    />
                    <p className="text-shade mt-1">
                      Number of iterations of pasting the image in it's center
                      and inpainting the boarders
                    </p>
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
                      <div className="">
                        <div>
                          <div
                            className="w-full"
                            style={{
                              height: "auto",
                              width: "auto",
                            }}
                          >
                            <video
                              __idm_id__="1572865"
                              autoPlay
                              controls
                              loop
                              preload="auto"
                              src="https://replicate.delivery/pbxt/iPWPdknk7e1fkEECe8AhzVVE6lceedKnpx6JxIHkEswr0ofeHA/infinit_zoom.mp4"
                              style={{
                                height: "auto",
                                width: "auto",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <figcaption className="pt-4 text-shade">
                        Generated in <time dateTime="PT23.24S">23.24</time>{" "}
                        seconds
                      </figcaption>
                    </figure>
                  </output>
                </div>
                <div className="inline-block mr-3 mb-3">
                  <a
                    className="form-button-secondary"
                    href="/signin?next=/arielreplicate/stable_diffusion_infinite_zoom?prediction=mr4iov3c3ng6faximzc6pzl6xe"
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
                    href="/p/mr4iov3c3ng6faximzc6pzl6xe/report"
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
              href="/arielreplicate/stable_diffusion_infinite_zoom/examples"
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
            <a href="/arielreplicate/stable_diffusion_infinite_zoom/examples#gtgokk6e5fczdlrhlnxspx5pm4">
              <img
                alt=""
                className="object-cover object-center w-full h-full lazy entered loaded"
                data-ll-status="loaded"
                src="https://replicate.delivery/pbxt/h1HhoFBFEHIHAZs9mtfv5eskSTZJlFDhMhyl9IUWGcFcpW7PA/infinite_zoom.gif"
                role="presentation"
              />
            </a>
          </div>

          <div className="inline-block h-40 w-40 overflow-hidden">
            <a href="/arielreplicate/stable_diffusion_infinite_zoom/examples#c4nylt7gwrbx5dmuukqfwqerdi">
              <img
                alt=""
                className="object-cover object-center w-full h-full lazy entered loaded"
                data-ll-status="loaded"
                role="presentation"
                src="https://replicate.delivery/pbxt/d9Vt57VdYWbHJZvMaLvUnoD1UduhEI7YpkEk5U30iPLFr1eHA/infinite_zoom.gif"
              />
            </a>
          </div>

          <div className="inline-block h-40 w-40 overflow-hidden">
            <a href="/arielreplicate/stable_diffusion_infinite_zoom/examples#vr6tzlwhabfbfdgyoaiadt2oty">
              <img
                alt=""
                className="object-cover object-center w-full h-full lazy entered loaded"
                data-ll-status="loaded"
                role="presentation"
                src="https://replicate.delivery/pbxt/D81ZtY92vpLEBlA2ftGQxxoHULLQUvreq6TyYAuvEkeYgt2fA/infinite_zoom.gif"
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
            typically complete within 43 seconds. The predict time for this
            model varies significantly based on the inputs.
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
            <h2 id="stable-diffusion-infinite-zoom">
              Stable Diffusion Infinite Zoom
            </h2>

            <p>
              Run it on Replicate:
              <a
                href="https://replicate.com/arielreplicate/stable_diffusion_infinite_zoom"
                rel="nofollow"
              >
                <img src="https://replicate.com/arielreplicate/stable_diffusion_infinite_zoom/badge" alt=""/>
              </a>
            </p>

            <p>
              <img src="assets/inf_zooms/infinite_zoom_1.gif" width="200" alt=""/>{" "}
              <img src="assets/inf_zooms/infinite_zoom_2.gif" width="200" alt=""/>
              <img
                src="assets/inf_zooms/infinite_zoom_4.gif"
                width="200"
                alt=""
              />{" "}
              <img src="assets/inf_zooms/infinite_zoom_3.gif" width="200" />
            </p>

            <p>
              This repo is based on{" "}
              <a
                href="https://github.com/compvis/stable-diffusion"
                rel="nofollow"
              >
                Stable Diffusion
              </a>{" "}
              by{" "}
              <a href="https://ommer-lab.com/" rel="nofollow">
                CompVis group:
              </a>
              and
              <a
                href="https://github.com/runwayml/stable-diffusion"
                rel="nofollow"
              >
                Stable Inpainting
              </a>{" "}
              by{" "}
              <a href="https://runwayml.com/" rel="nofollow">
                Runway
              </a>
            </p>

            <p>
              The idea is based on this{" "}
              <a
                href="https://twitter.com/matthen2/status/1564608773485895692"
                rel="nofollow"
              >
                tweet
              </a>{" "}
              by{" "}
              <a href="https://twitter.com/matthen2" rel="nofollow">
                Matt Henderson
              </a>
            </p>

            <h2 id="model-description">Model description</h2>

            <p>
              Given a prompt I run txt2img,py with{" "}
              <a
                href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original"
                rel="nofollow"
              >
                sd-v1-4.ckpt
              </a>
              Then I paste a downscaled version of the image into it's center
              and inpaint around the center using
              <a href="http://inpaint.py" rel="nofollow">
                inpaint.py
              </a>{" "}
              using this{" "}
              <a
                href="https://huggingface.co/runwayml/stable-diffusion-inpainting/tree/main"
                rel="nofollow"
              >
                sd-v1-5-inpainting.ckpt from
              </a>
              I repeat the inpainting step twice.
            </p>

            <p>
              Then zoom in by upscaling the image and cuting it to the original
              size while pasting the "center" image in its due area.
            </p>

            <h1 id="how-to-run">How to run</h1>

            <h2 id="download-text-2-image-and-inpainting-weights">
              Download text-2-image and inpainting weights
            </h2>

            <p>
              {`hf_hub_download(repo_id="runwayml/stable-diffusion-v1-5", filename="v1-5-pruned-emaonly.ckpt", cache_dir=".", use_auth_token=<HuggingFace token>)
        hf_hub_download(repo_id="runwayml/stable-diffusion-inpainting", filename="sd-v1-5-inpainting.ckpt", cache_dir=".", use_auth_token=<HuggingFace token>)`}
            </p>

            <h2 id="create-video">create video</h2>

            <p>
              <code>
                python3 scripts/
                <a href="http://inf_zoom.py" rel="nofollow">
                  inf_zoom.py
                </a>
                {` <your prompt>`}
              </code>
            </p>

            <h1 id="credits">Credits</h1>

            <div>
              <div className="group relative">
                <pre className="code">
                  <code className="!p-0 hljs language-python">
                    <span className="hljs-meta">
                      {`@misc{rombach2021highresolution,`}
                    </span>
                    {`
              title={High-Resolution Image Synthesis `}
                    <span className="hljs-keyword">with</span>
                    {` Latent Diffusion Models},
              author={Robin Rombach `}
                    <span className="hljs-keyword">and</span> Andreas Blattmann{" "}
                    <span className="hljs-keyword">and</span> Dominik Lorenz{" "}
                    <span className="hljs-keyword">and</span> Patrick Esser{" "}
                    <span className="hljs-keyword">and</span>
                    {` Björn Ommer},
              year={`}
                    <span className="hljs-number">2021</span>
                    {`},
              eprint={`}
                    <span className="hljs-number">2112.10752</span>
                    {`},
              archivePrefix={arXiv},
              primaryClass={cs.CV}
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
      </div>
    </>
  );
};

export default TToVDemo;
