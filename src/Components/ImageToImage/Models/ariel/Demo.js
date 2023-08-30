import React from "react";

const IToI1Demo = () => {
  return (
    <>
      <div className="mb-2lh">
        <div
          data-component="VersionRun"
          data-props="react-component-props-e58db9eb-f0bd-4601-bb86-0bc5c9841dd1"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-task">
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
                    <code>task</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-task"
                    name="task"
                  >
                    <option value="" />
                    <option value="Reshuffle">Reshuffle</option>
                    <option value="Retarget">Retarget</option>
                    <option value="Style-transfer">Style-transfer</option>
                  </select>
                  <p className="text-shade mt-1">
                    (Reshuffle): Start from a noisy and generates samples from
                    the same scene in the reference image. (Retarget): Start
                    from a stretched version of the reference and recreates the
                    scene in another aspect ratio. (Style-transfer): Recreates a
                    content-image with the style of the reference image
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-num_outputs">
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
                    <code>num_outputs</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="1"
                    id="input-num_outputs"
                    name="num_outputs"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    How many output images to generate. Generating multiple
                    images at once improves the quality and diversity of the
                    results
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-num_projections">
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
                    <code>num_projections</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="64"
                    id="input-num_projections"
                    name="num_projections"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Number of ramdom projections for SWD. More is better results
                    but is slower and memory inefficient
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-patch_size">
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
                    <code>patch_size</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="8"
                    id="input-patch_size"
                    name="patch_size"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Size of the extracted a patches
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-height_factor">
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
                    <code>height_factor</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="1"
                    id="input-height_factor"
                    name="height_factor"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Change the output's aspect ratio (Retargeting)
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-width_factor">
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
                    <code>width_factor</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="1"
                    id="input-width_factor"
                    name="width_factor"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Change the output's aspect ratio (Retargeting)
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-reference_image">
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
                      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <code>reference_image</code>
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
                          https://replicate.delivery/mgxm/f51f0b0f-2710-4aba-ac62-e74857f519bd/wood2_fliped.jpeg
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
                  <div className="mt-3">
                    <button
                      className="text-shade border-black border-2 border-dashed px-lh py-05lh cursor-pointer border-opacity-10 w-full text-left"
                      type="button"
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
                        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>{" "}
                      Take a photo with your webcam
                    </button>
                  </div>
                  <p className="text-shade mt-1">
                    The main input image - Style image in style-transfer.
                  </p>
                  <div className="mt-lh pb-lh">
                    <a
                      to="https://replicate.delivery/mgxm/f51f0b0f-2710-4aba-ac62-e74857f519bd/wood2_fliped.jpeg"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt="https://replicate.delivery/mgxm/f51f0b0f-2710-4aba-ac62-e74857f519bd/wood2_fliped.jpeg"
                        className="lazy"
                        src="https://replicate.delivery/mgxm/f51f0b0f-2710-4aba-ac62-e74857f519bd/wood2_fliped.jpeg"
                      />
                    </a>
                  </div>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-content_image">
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
                      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <code>content_image</code>
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
                          https://replicate.delivery/mgxm/e01a715a-8cc2-45b2-836c-fb929f1a1c34/baiden3_crop.jpg
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
                  <div className="mt-3">
                    <button
                      className="text-shade border-black border-2 border-dashed px-lh py-05lh cursor-pointer border-opacity-10 w-full text-left"
                      type="button"
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
                        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>{" "}
                      Take a photo with your webcam
                    </button>
                  </div>
                  <p className="text-shade mt-1">
                    Only relevant for style-transfer
                  </p>
                  <div className="mt-lh pb-lh">
                    <a
                      to="https://replicate.delivery/mgxm/e01a715a-8cc2-45b2-836c-fb929f1a1c34/baiden3_crop.jpg"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt="https://replicate.delivery/mgxm/e01a715a-8cc2-45b2-836c-fb929f1a1c34/baiden3_crop.jpg"
                        className="lazy"
                        src="https://replicate.delivery/mgxm/e01a715a-8cc2-45b2-836c-fb929f1a1c34/baiden3_crop.jpg"
                      />
                    </a>
                  </div>
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
                      <a
                        to="https://replicate.delivery/mgxm/6e6ea32c-abbc-478b-9a31-af5e3b7702c6/output.png"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          alt="output"
                          className="lazy"
                          src="https://replicate.delivery/mgxm/6e6ea32c-abbc-478b-9a31-af5e3b7702c6/output.png"
                        />
                      </a>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT139.76S">139.76</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  to="/signin?next=/ariel415el/gpdm?prediction=jzc7qiwbinbjzgi6gr3gayhau4"
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
                  to="/p/jzc7qiwbinbjzgi6gr3gayhau4/report"
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
          <a className="no-default" to="/ariel415el/gpdm/examples">
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
          <a to="/ariel415el/gpdm/examples#cvs75srin5h57n3xabbqgggntu">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/86b908a2-87eb-4630-9f99-16e6748f56dd/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#jzc7qiwbinbjzgi6gr3gayhau4">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/6e6ea32c-abbc-478b-9a31-af5e3b7702c6/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#vtlhqdfcqvdnzkyyuvplphvyzq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/095f3dc2-fe01-44c5-88ba-21ed8d27332c/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#icfogzavcrcxjawa3gq7oeryri">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/b9faba1e-4eaa-464d-bc0a-8eb0151b0e8e/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#snisdigsc5bsho7ejb526wfjqy">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.com/api/models/ariel415el/gpdm/files/eca21f41-ea20-4d0e-a612-906b2a1c7e56/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#dsxh22zhpfejlj3xbdkjxpme6a">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.com/api/models/ariel415el/gpdm/files/90469820-3e63-43dd-b508-88591a187b6a/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#q3amnouvdfgv7ouarz24vwaimq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.com/api/models/ariel415el/gpdm/files/d729af82-c648-4c7e-a7b4-0f62900427d8/output.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a to="/ariel415el/gpdm/examples#nv667tzckvgw3ji23unss7o6nu">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.com/api/models/ariel415el/gpdm/files/fe5314bc-2907-4334-86c5-f5b7f49ba997/output.png"
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
          Predictions run on Nvidia T4 GPU hardware. Predictions typically
          complete within 4 minutes. The predict time for this model varies
          significantly based on the inputs.
        </p>
      </div>
      <article>
        <div className="border-b border-hairline pb-2 mb-lh" id="readme">
          <h4 className="inline-block">
            <a className="no-default" to="#readme">
              Readme
            </a>
          </h4>
        </div>
        <div className="readme-prose">
          <h1 id="gpdm-live-demo">GPDM live demo</h1>
          <p>
            A live demo for GPDM, an algorithm introduced in "Generating Natural
            Images with Direct Patch Distribution Matching"
          </p>
          <p>
            This demo allows performing the "Reshuffle", "Retarget" or
            "Style-transfer" tasks on any uploaded image online with a
            considerable amount of control over the GPDM algorithm
            hyper-parameters
          </p>
          <p>
            <img alt="imge" src={"https://raw.githubusercontent.com/ariel415el/GPDM/main/Readme_images/Teaser_Figure.png"} />
          </p>

          <h1 id="cite">Cite</h1>

          <p>
            {`@article{elnekave2022generating,
      title={Generating natural images with direct Patch Distributions Matching},
      author={Elnekave, Ariel and Weiss, Yair},
      journal={arXiv preprint arXiv:2203.11862},
      year={2022}
      }`}
          </p>
        </div>
      </article>
      
    </>
  );
};

export default IToI1Demo;
