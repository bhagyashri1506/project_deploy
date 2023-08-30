import React from "react";

const TToSApi = () => {
  return (
    <>
      <div
        data-component="VersionAPIReference"
        data-props="react-component-props-45312e86-7bc7-4eff-9c50-209b916c9187"
      >
        <div className="mb-lh">
          <div
            className="bubble-tabs mb-2lh"
            data-orientation="horizontal"
            data-reach-tabs=""
          >
            <div className="flex flex-col md:flex-row gap-4" id="run">
              <a
                className="inline-block no-focus no-underline flex-grow"
                href="#run"
              >
                <h4 className="with-anchor-hash">Run the model</h4>
              </a>
              <div
                aria-orientation="horizontal"
                className="mb-lh"
                data-reach-tab-list=""
                role="tablist"
              >
                <button
                  aria-controls="tabs--1--panel--0"
                  aria-selected="true"
                  className="tab"
                  data-orientation="horizontal"
                  data-reach-tab=""
                  data-selected=""
                  id="tabs--1--tab--0"
                  role="tab"
                  tabIndex="0"
                  type="button"
                >
                  Node.js
                </button>
                <button
                  aria-controls="tabs--1--panel--1"
                  aria-selected="false"
                  className="tab"
                  data-orientation="horizontal"
                  data-reach-tab=""
                  id="tabs--1--tab--1"
                  role="tab"
                  tabIndex="-1"
                  type="button"
                >
                  Python
                </button>
                <button
                  aria-controls="tabs--1--panel--2"
                  aria-selected="false"
                  className="tab"
                  data-orientation="horizontal"
                  data-reach-tab=""
                  id="tabs--1--tab--2"
                  role="tab"
                  tabIndex="-1"
                  type="button"
                >
                  HTTP
                </button>
                <button
                  aria-controls="tabs--1--panel--3"
                  aria-selected="false"
                  className="tab "
                  data-orientation="horizontal"
                  data-reach-tab=""
                  id="tabs--1--tab--3"
                  role="tab"
                  tabIndex="-1"
                  type="button"
                >
                  Cog
                </button>
                <button
                  aria-controls="tabs--1--panel--4"
                  aria-selected="false"
                  className="tab "
                  data-orientation="horizontal"
                  data-reach-tab=""
                  id="tabs--1--tab--4"
                  role="tab"
                  tabIndex="-1"
                  type="button"
                >
                  Docker
                </button>
              </div>
            </div>
            <div data-reach-tab-panels="">
              <div
                aria-labelledby="tabs--1--tab--0"
                data-reach-tab-panel=""
                id="tabs--1--panel--0"
                role="tabpanel"
                tabIndex="0"
              >
                <p className="mb-lh">
                  Install{" "}
                  <a href="https://github.com/replicate/replicate-javascript">
                    the Node.js client
                  </a>
                  :
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-shell !p-0 hljs">
                      npm install replicate
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  Next, <a href="/account">copy your API token</a> and
                  authenticate by setting it as an environment variable:
                </p>
                <div className="mb-lh">
                  <div>
                    <div className="group relative">
                      <pre className="code">
                        <code className="language-shell !p-0 hljs">
                          {`export REPLICATE_API_TOKEN=<paste-your-token-here>`}
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
                            <rect
                              height="13"
                              rx="2"
                              ry="2"
                              width="13"
                              x="9"
                              y="9"
                            />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    Find your API token in{" "}
                    <a href="/account/api-tokens">your account settings</a>.
                  </p>
                </div>
                <p className="mb-lh">Then, run the model:</p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-javascript !p-0 hljs">
                      <span className="hljs-keyword">import</span>{" "}
                      <span className="hljs-title class_">Replicate</span>{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">"replicate"</span>;
                      <span className="hljs-keyword">const</span> replicate ={" "}
                      <span className="hljs-keyword">new</span>{" "}
                      <span className="hljs-title class_">Replicate</span>
                      {`({
                `}
                      <span className="hljs-attr">auth</span>: process.
                      <span className="hljs-property">env</span>.
                      <span className="hljs-property">REPLICATE_API_TOKEN</span>
                      {`,
                });
                
                `}
                      <span className="hljs-keyword">const</span> output ={" "}
                      <span className="hljs-keyword">await</span> replicate.
                      <span className="hljs-title function_">run</span>(
                      <span className="hljs-string">
                        "haoheliu/audio-ldm:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95"
                      </span>
                      {`,
                {
                `}
                      <span className="hljs-attr">input</span>
                      {`: {
                `}
                      <span className="hljs-attr">text</span>:{" "}
                      <span className="hljs-string">"..."</span>
                      {`
                }
                }
                );`}
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  You can specify a webhook URL to be called when the prediction
                  is complete. Take a look at the{" "}
                  <a href="/docs/reference/http#create-prediction--webhook">
                    webhook docs
                  </a>{" "}
                  for details on setting that up. For example:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-javascript !p-0 hljs">
                      <span className="hljs-keyword">const</span> prediction ={" "}
                      <span className="hljs-keyword">await</span> replicate.
                      <span className="hljs-property">predictions</span>.
                      <span className="hljs-title function_">create</span>
                      {`({
                `}
                      <span className="hljs-attr">version</span>:{" "}
                      <span className="hljs-string">
                        "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95"
                      </span>
                      ,<span className="hljs-attr">input</span>
                      {`: {
                `}
                      <span className="hljs-attr">text</span>:{" "}
                      <span className="hljs-string">"..."</span>
                      {`
                },
                `}
                      <span className="hljs-attr">webhook</span>:{" "}
                      <span className="hljs-string">
                        "https://example.com/your-webhook"
                      </span>
                      ,<span className="hljs-attr">webhook_events_filter</span>:
                      [<span className="hljs-string">"completed"</span>
                      {`]
                });`}
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  To learn more, take a look at{" "}
                  <a href="https://github.com/replicate/replicate-javascript">
                    the Node.js library documentation
                  </a>
                  .
                </p>
              </div>
              <div
                aria-labelledby="tabs--1--tab--1"
                data-reach-tab-panel=""
                hidden
                id="tabs--1--panel--1"
                role="tabpanel"
                tabIndex="-1"
              >
                <p className="mb-lh">
                  Install{" "}
                  <a href="https://github.com/replicate/replicate-python">
                    the Python client
                  </a>
                  :
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-shell !p-0 hljs">
                      pip install replicate
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  Next, <a href="/account">copy your API token</a> and
                  authenticate by setting it as an environment variable:
                </p>
                <div className="mb-lh">
                  <div>
                    <div className="group relative">
                      <pre className="code">
                        <code className="language-shell !p-0 hljs">
                          {`export REPLICATE_API_TOKEN=<paste-your-token-here>`}
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
                            <rect
                              height="13"
                              rx="2"
                              ry="2"
                              width="13"
                              x="9"
                              y="9"
                            />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    Find your API token in{" "}
                    <a href="/account/api-tokens">your account settings</a>.
                  </p>
                </div>
                <p className="mb-lh">Then, run the model:</p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-python !p-0 hljs">
                      <span className="hljs-keyword">import</span>
                      replicate output = replicate.run(
                      <span className="hljs-string">
                        "haoheliu/audio-ldm:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95"
                      </span>
                      ,<span className="hljs-built_in">input</span>
                      {`={`}
                      <span className="hljs-string">"text"</span>
                      {`: ...}
                )
                `}
                      <span className="hljs-built_in">print</span>
                      (output)
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  To learn more,{" "}
                  <a href="/docs/get-started/python">
                    take a look at the guide to get started with Python
                  </a>
                  .
                </p>
              </div>
              <div
                aria-labelledby="tabs--1--tab--2"
                data-reach-tab-panel=""
                hidden
                id="tabs--1--panel--2"
                role="tabpanel"
                tabIndex="-1"
              >
                <p className="mb-lh">
                  First, <a href="/account">copy your API token</a> and
                  authenticate by setting it as an environment variable:
                </p>
                <div className="mb-lh">
                  <div>
                    <div className="group relative">
                      <pre className="code">
                        <code className="language-shell !p-0 hljs">
                          {`export REPLICATE_API_TOKEN=<paste-your-token-here>`}
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
                            <rect
                              height="13"
                              rx="2"
                              ry="2"
                              width="13"
                              x="9"
                              y="9"
                            />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    Find your API token in{" "}
                    <a href="/account/api-tokens">your account settings</a>.
                  </p>
                </div>
                <p className="mb-lh">
                  Then, call the HTTP API directly with cURL. You can pipe the
                  output into a command-line tool like{" "}
                  <a href="https://stedolan.github.io/jq/">
                    <code>jq</code>
                  </a>{" "}
                  to pretty-print it:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-shell !p-0 hljs">
                      {`curl -s -X POST \
                -d '{"version": "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "input": {"text": "..."}}' \
                -H "Authorization: Token $REPLICATE_API_TOKEN" \
                "https://api.replicate.com/v1/predictions" | jq`}
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  The API response is your new prediction as a JSON object:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-json !p-0 hljs">
                      <span className="hljs-punctuation">{`{`}</span>
                      <span className="hljs-attr">"completed_at"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-literal">
                        <span className="hljs-keyword">null</span>
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"created_at"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">
                        "2023-03-08T17:54:26.385912Z"
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"error"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-literal">
                        <span className="hljs-keyword">null</span>
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"id"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">
                        "j6t4en2gxjbnvnmxim7ylcyihu"
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"input"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-punctuation">{`{`}</span>
                      <span className="hljs-attr">"text"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">"..."</span>
                      <span className="hljs-punctuation">{`}`}</span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"logs"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-literal">
                        <span className="hljs-keyword">null</span>
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"metrics"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-punctuation">{`{`}</span>
                      <span className="hljs-punctuation">{`}`}</span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"output"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-literal">
                        <span className="hljs-keyword">null</span>
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"started_at"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-literal">
                        <span className="hljs-keyword">null</span>
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"status"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">"starting"</span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"version"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">
                        "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95"
                      </span>
                      <span className="hljs-punctuation">{`}`}</span>
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  Note that <code>status</code> is "starting" but there's no{" "}
                  <code>output</code> yet. Refetch the prediction from the API
                  using the prediction <code>id</code> from the previous
                  response:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-shell !p-0 hljs">
                      {`curl -s -H "Authorization: Token $REPLICATE_API_TOKEN" \
                "https://api.replicate.com/v1/predictions/j6t4en2gxjbnvnmxim7ylcyihu" | jq "{id, input, output, status}"`}
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  If the prediction has completed, you'll see a response like
                  this:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-json !p-0 hljs">
                      <span className="hljs-punctuation">{`{`}</span>
                      <span className="hljs-attr">"id"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">
                        "j6t4en2gxjbnvnmxim7ylcyihu"
                      </span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"input"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-punctuation">{`{`}</span>
                      <span className="hljs-attr">"text"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">"..."</span>
                      <span className="hljs-punctuation">{`}`}</span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"output"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">"..."</span>
                      <span className="hljs-punctuation">,</span>
                      <span className="hljs-attr">"status"</span>
                      <span className="hljs-punctuation">:</span>{" "}
                      <span className="hljs-string">"succeeded"</span>
                      <span className="hljs-punctuation">{`}`}</span>
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  For models that take longer to return a response, you'll need
                  to poll the API periodically for an update. Alternatively, you
                  can specify a{" "}
                  <a href="/docs/reference/http#create-prediction--webhook">
                    webhook URL
                  </a>{" "}
                  to be called when the prediction is complete. Take a look at
                  the{" "}
                  <a href="/docs/reference/http#create-prediction--webhook">
                    webhook docs
                  </a>{" "}
                  for details on setting that up.
                </p>
                <p className="mb-lh">
                  To learn more about Replicate's HTTP API, check out the{" "}
                  <a href="/docs/reference/http">reference docs</a>.
                </p>
              </div>
              <div
                aria-labelledby="tabs--1--tab--3"
                data-reach-tab-panel=""
                hidden
                id="tabs--1--panel--3"
                role="tabpanel"
                tabIndex="-1"
              >
                <p className="mb-lh">
                  Run this model locally from the command line with Cog:
                </p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-shell !p-0 hljs">
                      cog predict
                      r8.im/haoheliu/audio-ldm@sha256:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95
                      -i text=... \ -i duration=... \ -i guidance_scale=... \ -i
                      random_seed=... \ -i n_candidates=...
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  To learn more,{" "}
                  <a
                    href="https://github.com/replicate/cog"
                    rel="noreferrer"
                    target="_blank"
                  >
                    take a look at the Cog documentation
                  </a>
                  .
                </p>
              </div>
              <div
                aria-labelledby="tabs--1--tab--4"
                data-reach-tab-panel=""
                hidden
                id="tabs--1--panel--4"
                role="tabpanel"
                tabIndex="-1"
              >
                <p className="mb-lh">Run locally with Docker:</p>
                <div className="group relative">
                  <pre className="code">
                    <code className="language-dockerfile !p-0 hljs">
                      docker <span className="hljs-keyword">run</span>
                      -d -p 5000:5000 --gpus=all
                      r8.im/haoheliu/audio-ldm@sha256:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95
                      curl http://localhost:
                      <span className="hljs-number">5000</span>
                      /predictions -X POST \ -d
                      <span className="hljs-string">
                        {`'{"input": {
                  "text": "...",
                  "duration": "...",
                  "guidance_scale": "...",
                  "random_seed": "...",
                  "n_candidates": "..."
                  }}'`}
                      </span>
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
                        <rect
                          height="13"
                          rx="2"
                          ry="2"
                          width="13"
                          x="9"
                          y="9"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="mb-lh">
                  To learn more,{" "}
                  <a
                    href="https://github.com/replicate/cog/blob/main/docs/deploy.md"
                    rel="noreferrer"
                    target="_blank"
                  >
                    take a look at the guide to deploying Cog models
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <a
            className="inline-block no-focus no-underline"
            href="#inputs"
            id="inputs"
          >
            <h4 className="pt-2lh pb-lh with-anchor-hash">Inputs</h4>
          </a>
          <ul className="content-container">
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-text"
                id="input-text"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>text</code> <em className="text-shade">string</em>
                </h5>
              </a>
              <div>Text prompt from which to generate audio</div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-duration"
                id="input-duration"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>duration</code> <em className="text-shade">string</em>
                </h5>
              </a>
              <div>
                Duration of the generated audio (in seconds). Higher duration
                may OOM.
              </div>
              <div className="mt-05lh">
                Allowed values:
                <span>
                  <code>2.5</code>,{" "}
                </span>
                <span>
                  <code>5.0</code>,{" "}
                </span>
                <span>
                  <code>7.5</code>,{" "}
                </span>
                <span>
                  <code>10.0</code>,{" "}
                </span>
                <span>
                  <code>12.5</code>,{" "}
                </span>
                <span>
                  <code>15.0</code>,{" "}
                </span>
                <span>
                  <code>17.5</code>,{" "}
                </span>
                <span>
                  <code>20.0</code>
                </span>
              </div>
              <div className="mt-05lh">
                Default value: <code>5.0</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-guidance_scale"
                id="input-guidance_scale"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>guidance_scale</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                {`Guidance scale for the model. (Large scale -> better quality and relavancy to text; small scale -> better diversity)`}
              </div>
              <div className="mt-05lh">
                Default value: <code>2.5</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-random_seed"
                id="input-random_seed"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>random_seed</code>{" "}
                  <em className="text-shade">integer</em>
                </h5>
              </a>
              <div>Random seed for the model (optional)</div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-n_candidates"
                id="input-n_candidates"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>n_candidates</code>{" "}
                  <em className="text-shade">integer</em>
                </h5>
              </a>
              <div>Return the best of n different candidate audios</div>
              <div className="mt-05lh">
                Default value: <code>3</code>
              </div>
            </li>
          </ul>
          <a
            className="inline-block no-focus no-underline"
            href="#output-schema"
            id="output-schema"
          >
            <h4 className="pt-2lh pb-lh with-anchor-hash">Output schema</h4>
          </a>
          <p className="mb-lh">
            This is the raw JSON schema describing the model's ouput structure.
          </p>
          <div className="group relative">
            <pre className="code">
              <code className="language-json !p-0 hljs">
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Output"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"format"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"uri"</span>
                <span className="hljs-punctuation">{`}`}</span>
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
      
    </>
  );
};
export default TToSApi;
