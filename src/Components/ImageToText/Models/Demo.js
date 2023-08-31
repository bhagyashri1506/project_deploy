import React from "react";

const IToTDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <div
          data-component="VersionRun"
          data-props="react-component-props-785db985-5330-4058-b520-41499ceaa594"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <a
                    href="https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg"
                      className="lazy"
                      src="https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg"
                    />
                  </a>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-image">
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
                    <code>image</code>
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
                          https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg
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
                  <p className="text-shade mt-1">input image</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-cond_text">
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
                    <code>cond_text</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      defaultValue="Image of a"
                      name="cond_text"
                      style={{
                        height: "49.3333px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">conditional text</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-beam_size">
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
                    <code>beam_size</code>
                  </label>
                  <fieldset className="flex" id="input-beam_size">
                    <legend hidden>beam_size</legend>
                    <input
                      aria-label="beam_size"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="5"
                      max="10"
                      min="1"
                      name="beam_size"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="beam_size"
                      className="flex-grow"
                      defaultValue="5"
                      max="10"
                      min="1"
                      name="beam_size"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of beams to use (minimum: 1; maximum: 10){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-end_factor">
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
                    <code>end_factor</code>
                  </label>
                  <fieldset className="flex" id="input-end_factor">
                    <legend hidden>end_factor</legend>
                    <input
                      aria-label="end_factor"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="1.01"
                      max="1.1"
                      min="1"
                      name="end_factor"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="end_factor"
                      className="flex-grow"
                      defaultValue="1.01"
                      max="1.1"
                      min="1"
                      name="end_factor"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Higher value for shorter captions (minimum: 1; maximum: 1.1){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-max_seq_length">
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
                    <code>max_seq_length</code>
                  </label>
                  <fieldset className="flex" id="input-max_seq_length">
                    <legend hidden>max_seq_length</legend>
                    <input
                      aria-label="max_seq_length"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="15"
                      max="20"
                      min="1"
                      name="max_seq_length"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="max_seq_length"
                      className="flex-grow"
                      defaultValue="15"
                      max="20"
                      min="1"
                      name="max_seq_length"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Maximum number of tokens to generate (minimum: 1; maximum:
                    20){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-ce_loss_scale">
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
                    <code>ce_loss_scale</code>
                  </label>
                  <fieldset className="flex" id="input-ce_loss_scale">
                    <legend hidden>ce_loss_scale</legend>
                    <input
                      aria-label="ce_loss_scale"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="0.2"
                      max="0.6"
                      min="0"
                      name="ce_loss_scale"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="ce_loss_scale"
                      className="flex-grow"
                      defaultValue="0.2"
                      max="0.6"
                      min="0"
                      name="ce_loss_scale"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Scale of cross-entropy loss with un-shifted language model
                    (maximum: 0.6){" "}
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
                        <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                          <code className="output w-full">
                            Best CLIP: Image of a baby sleeping in a green
                            flower. Best fluency: Image of a baby sleeping in a
                            green flower. Best mixed: Image of a baby.
                          </code>
                        </pre>
                      </div>
                    </div>
                    <datalist id="steplist">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                      <option>32</option>
                      <option>33</option>
                      <option>34</option>
                      <option>35</option>
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                      <option>41</option>
                      <option>42</option>
                      <option>43</option>
                      <option>44</option>
                      <option>45</option>
                      <option>46</option>
                      <option>47</option>
                      <option>48</option>
                      <option>49</option>
                      <option>50</option>
                    </datalist>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT77.98S">77.98</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/yoadtew/zero-shot-image-to-text?prediction=mhjecpjikfbfhnpypayu32dhc4"
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
                <a
                  className="form-button-secondary mb-lh"
                  href="/p/mhjecpjikfbfhnpypayu32dhc4/report"
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
          <h1 id="pytorch-implementation-of-zero-shot-image-to-text-generation-for-visual-semantic-arithmetic">
            Pytorch Implementation of Zero-Shot Image-to-Text Generation for
            Visual-Semantic Arithmetic
          </h1>

          <h2 id="approach">Approach</h2>

          <p>
            <img src="https://raw.githubusercontent.com/YoadTew/zero-shot-image-to-text/main/git_images/Architecture.jpg" />
          </p>

          <h2 id="example">Example</h2>

          <p>
            <img src="https://raw.githubusercontent.com/YoadTew/zero-shot-image-to-text/main/git_images/teaser.jpg" />
          </p>

          <h2 id="citation">Citation</h2>

          <p>Please cite our work if you use it in your research:</p>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="!p-0 hljs language-julia">
                  <span className="hljs-meta">@article</span>
                  {`{tewel2021zero,
            title={Zero-Shot Image-to-`}
                  <span className="hljs-built_in">Text</span> Generation{" "}
                  <span className="hljs-keyword">for</span>
                  {` Visual-Semantic Arithmetic},
            author={Tewel, Yoad and Shalev, Yoav and Schwartz, Idan and Wolf, Lior},
            journal={arXiv preprint arXiv:`}
                  <span className="hljs-number">2111.14447</span>
                  {`},
            year={`}
                  <span className="hljs-number">2021</span>
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

export default IToTDemo;
