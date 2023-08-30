import React from "react";

const IToVApi = () => {
  return (
    <>
      <div
        data-component="VersionAPIReference"
        data-props="react-component-props-aa8d76b8-e757-48f6-b0be-2f3073171b08"
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
                        "soykertje/whisper:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6"
                      </span>
                      {`,
                {
                `}
                      <span className="hljs-attr">input</span>
                      {`: {
                `}
                      <span className="hljs-attr">audio</span>:{" "}
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
                        "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6"
                      </span>
                      ,<span className="hljs-attr">input</span>
                      {`: {
                `}
                      <span className="hljs-attr">audio</span>:{" "}
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
                        "soykertje/whisper:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6"
                      </span>
                      ,<span className="hljs-built_in">input</span>
                      {`={`}
                      <span className="hljs-string">"audio"</span>:{" "}
                      <span className="hljs-built_in">open</span>(
                      <span className="hljs-string">"path/to/file"</span>,{" "}
                      <span className="hljs-string">"rb"</span>
                      {`)}
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
                -d '{"version": "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "input": {"audio": "..."}}' \
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
                      <span className="hljs-attr">"audio"</span>
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
                        "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6"
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
                      <span className="hljs-attr">"audio"</span>
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
                      r8.im/soykertje/whisper@sha256:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6
                      -i audio=@path/to/file \ -i model=... \ -i
                      transcription=... \ -i translate=... \ -i language=... \
                      -i temperature=... \ -i patience=... \ -i
                      suppress_tokens=... \ -i initial_prompt=... \ -i
                      condition_on_previous_text=... \ -i
                      temperature_increment_on_fallback=... \ -i
                      compression_ratio_threshold=... \ -i logprob_threshold=...
                      \ -i no_speech_threshold=... \ -i word_timestamps=...
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
                      r8.im/soykertje/whisper@sha256:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6
                      curl http://localhost:
                      <span className="hljs-number">5000</span>
                      /predictions -X POST \ -d
                      <span className="hljs-string">
                        {`'{"input": {
                  "audio": "https://url/to/file",
                  "model": "...",
                  "transcription": "...",
                  "translate": "...",
                  "language": "...",
                  "temperature": "...",
                  "patience": "...",
                  "suppress_tokens": "...",
                  "initial_prompt": "...",
                  "condition_on_previous_text": "...",
                  "temperature_increment_on_fallback": "...",
                  "compression_ratio_threshold": "...",
                  "logprob_threshold": "...",
                  "no_speech_threshold": "...",
                  "word_timestamps": "..."
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
                href="#input-audio"
                id="input-audio"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>audio</code> <em className="text-shade">file</em>
                </h5>
              </a>
              <div>Audio file</div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-model"
                id="input-model"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>model</code> <em className="text-shade">string</em>
                </h5>
              </a>
              <div>Choose a Whisper model.</div>
              <div className="mt-05lh">
                Allowed values:
                <span>
                  <code>large-v2</code>
                </span>
              </div>
              <div className="mt-05lh">
                Default value: <code>large-v2</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-transcription"
                id="input-transcription"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>transcription</code>{" "}
                  <em className="text-shade">string</em>
                </h5>
              </a>
              <div>Choose the format for the transcription</div>
              <div className="mt-05lh">
                Allowed values:
                <span>
                  <code>plain text</code>,{" "}
                </span>
                <span>
                  <code>srt</code>,{" "}
                </span>
                <span>
                  <code>vtt</code>
                </span>
              </div>
              <div className="mt-05lh">
                Default value: <code>plain text</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-translate"
                id="input-translate"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>translate</code> <em className="text-shade">boolean</em>
                </h5>
              </a>
              <div>Translate the text to English when set to True</div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-language"
                id="input-language"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>language</code> <em className="text-shade">string</em>
                </h5>
              </a>
              <div>
                language spoken in the audio, specify None to perform language
                detection
              </div>
              <div className="mt-05lh">
                Allowed values:
                <span>
                  <code>af</code>,{" "}
                </span>
                <span>
                  <code>am</code>,{" "}
                </span>
                <span>
                  <code>ar</code>,{" "}
                </span>
                <span>
                  <code>as</code>,{" "}
                </span>
                <span>
                  <code>az</code>,{" "}
                </span>
                <span>
                  <code>ba</code>,{" "}
                </span>
                <span>
                  <code>be</code>,{" "}
                </span>
                <span>
                  <code>bg</code>,{" "}
                </span>
                <span>
                  <code>bn</code>,{" "}
                </span>
                <span>
                  <code>bo</code>,{" "}
                </span>
                <span>
                  <code>br</code>,{" "}
                </span>
                <span>
                  <code>bs</code>,{" "}
                </span>
                <span>
                  <code>ca</code>,{" "}
                </span>
                <span>
                  <code>cs</code>,{" "}
                </span>
                <span>
                  <code>cy</code>,{" "}
                </span>
                <span>
                  <code>da</code>,{" "}
                </span>
                <span>
                  <code>de</code>,{" "}
                </span>
                <span>
                  <code>el</code>,{" "}
                </span>
                <span>
                  <code>en</code>,{" "}
                </span>
                <span>
                  <code>es</code>,{" "}
                </span>
                <span>
                  <code>et</code>,{" "}
                </span>
                <span>
                  <code>eu</code>,{" "}
                </span>
                <span>
                  <code>fa</code>,{" "}
                </span>
                <span>
                  <code>fi</code>,{" "}
                </span>
                <span>
                  <code>fo</code>,{" "}
                </span>
                <span>
                  <code>fr</code>,{" "}
                </span>
                <span>
                  <code>gl</code>,{" "}
                </span>
                <span>
                  <code>gu</code>,{" "}
                </span>
                <span>
                  <code>ha</code>,{" "}
                </span>
                <span>
                  <code>haw</code>,{" "}
                </span>
                <span>
                  <code>he</code>,{" "}
                </span>
                <span>
                  <code>hi</code>,{" "}
                </span>
                <span>
                  <code>hr</code>,{" "}
                </span>
                <span>
                  <code>ht</code>,{" "}
                </span>
                <span>
                  <code>hu</code>,{" "}
                </span>
                <span>
                  <code>hy</code>,{" "}
                </span>
                <span>
                  <code>id</code>,{" "}
                </span>
                <span>
                  <code>is</code>,{" "}
                </span>
                <span>
                  <code>it</code>,{" "}
                </span>
                <span>
                  <code>ja</code>,{" "}
                </span>
                <span>
                  <code>jw</code>,{" "}
                </span>
                <span>
                  <code>ka</code>,{" "}
                </span>
                <span>
                  <code>kk</code>,{" "}
                </span>
                <span>
                  <code>km</code>,{" "}
                </span>
                <span>
                  <code>kn</code>,{" "}
                </span>
                <span>
                  <code>ko</code>,{" "}
                </span>
                <span>
                  <code>la</code>,{" "}
                </span>
                <span>
                  <code>lb</code>,{" "}
                </span>
                <span>
                  <code>ln</code>,{" "}
                </span>
                <span>
                  <code>lo</code>,{" "}
                </span>
                <span>
                  <code>lt</code>,{" "}
                </span>
                <span>
                  <code>lv</code>,{" "}
                </span>
                <span>
                  <code>mg</code>,{" "}
                </span>
                <span>
                  <code>mi</code>,{" "}
                </span>
                <span>
                  <code>mk</code>,{" "}
                </span>
                <span>
                  <code>ml</code>,{" "}
                </span>
                <span>
                  <code>mn</code>,{" "}
                </span>
                <span>
                  <code>mr</code>,{" "}
                </span>
                <span>
                  <code>ms</code>,{" "}
                </span>
                <span>
                  <code>mt</code>,{" "}
                </span>
                <span>
                  <code>my</code>,{" "}
                </span>
                <span>
                  <code>ne</code>,{" "}
                </span>
                <span>
                  <code>nl</code>,{" "}
                </span>
                <span>
                  <code>nn</code>,{" "}
                </span>
                <span>
                  <code>no</code>,{" "}
                </span>
                <span>
                  <code>oc</code>,{" "}
                </span>
                <span>
                  <code>pa</code>,{" "}
                </span>
                <span>
                  <code>pl</code>,{" "}
                </span>
                <span>
                  <code>ps</code>,{" "}
                </span>
                <span>
                  <code>pt</code>,{" "}
                </span>
                <span>
                  <code>ro</code>,{" "}
                </span>
                <span>
                  <code>ru</code>,{" "}
                </span>
                <span>
                  <code>sa</code>,{" "}
                </span>
                <span>
                  <code>sd</code>,{" "}
                </span>
                <span>
                  <code>si</code>,{" "}
                </span>
                <span>
                  <code>sk</code>,{" "}
                </span>
                <span>
                  <code>sl</code>,{" "}
                </span>
                <span>
                  <code>sn</code>,{" "}
                </span>
                <span>
                  <code>so</code>,{" "}
                </span>
                <span>
                  <code>sq</code>,{" "}
                </span>
                <span>
                  <code>sr</code>,{" "}
                </span>
                <span>
                  <code>su</code>,{" "}
                </span>
                <span>
                  <code>sv</code>,{" "}
                </span>
                <span>
                  <code>sw</code>,{" "}
                </span>
                <span>
                  <code>ta</code>,{" "}
                </span>
                <span>
                  <code>te</code>,{" "}
                </span>
                <span>
                  <code>tg</code>,{" "}
                </span>
                <span>
                  <code>th</code>,{" "}
                </span>
                <span>
                  <code>tk</code>,{" "}
                </span>
                <span>
                  <code>tl</code>,{" "}
                </span>
                <span>
                  <code>tr</code>,{" "}
                </span>
                <span>
                  <code>tt</code>,{" "}
                </span>
                <span>
                  <code>uk</code>,{" "}
                </span>
                <span>
                  <code>ur</code>,{" "}
                </span>
                <span>
                  <code>uz</code>,{" "}
                </span>
                <span>
                  <code>vi</code>,{" "}
                </span>
                <span>
                  <code>yi</code>,{" "}
                </span>
                <span>
                  <code>yo</code>,{" "}
                </span>
                <span>
                  <code>zh</code>,{" "}
                </span>
                <span>
                  <code>Afrikaans</code>,{" "}
                </span>
                <span>
                  <code>Albanian</code>,{" "}
                </span>
                <span>
                  <code>Amharic</code>,{" "}
                </span>
                <span>
                  <code>Arabic</code>,{" "}
                </span>
                <span>
                  <code>Armenian</code>,{" "}
                </span>
                <span>
                  <code>Assamese</code>,{" "}
                </span>
                <span>
                  <code>Azerbaijani</code>,{" "}
                </span>
                <span>
                  <code>Bashkir</code>,{" "}
                </span>
                <span>
                  <code>Basque</code>,{" "}
                </span>
                <span>
                  <code>Belarusian</code>,{" "}
                </span>
                <span>
                  <code>Bengali</code>,{" "}
                </span>
                <span>
                  <code>Bosnian</code>,{" "}
                </span>
                <span>
                  <code>Breton</code>,{" "}
                </span>
                <span>
                  <code>Bulgarian</code>,{" "}
                </span>
                <span>
                  <code>Burmese</code>,{" "}
                </span>
                <span>
                  <code>Castilian</code>,{" "}
                </span>
                <span>
                  <code>Catalan</code>,{" "}
                </span>
                <span>
                  <code>Chinese</code>,{" "}
                </span>
                <span>
                  <code>Croatian</code>,{" "}
                </span>
                <span>
                  <code>Czech</code>,{" "}
                </span>
                <span>
                  <code>Danish</code>,{" "}
                </span>
                <span>
                  <code>Dutch</code>,{" "}
                </span>
                <span>
                  <code>English</code>,{" "}
                </span>
                <span>
                  <code>Estonian</code>,{" "}
                </span>
                <span>
                  <code>Faroese</code>,{" "}
                </span>
                <span>
                  <code>Finnish</code>,{" "}
                </span>
                <span>
                  <code>Flemish</code>,{" "}
                </span>
                <span>
                  <code>French</code>,{" "}
                </span>
                <span>
                  <code>Galician</code>,{" "}
                </span>
                <span>
                  <code>Georgian</code>,{" "}
                </span>
                <span>
                  <code>German</code>,{" "}
                </span>
                <span>
                  <code>Greek</code>,{" "}
                </span>
                <span>
                  <code>Gujarati</code>,{" "}
                </span>
                <span>
                  <code>Haitian</code>,{" "}
                </span>
                <span>
                  <code>Haitian Creole</code>,{" "}
                </span>
                <span>
                  <code>Hausa</code>,{" "}
                </span>
                <span>
                  <code>Hawaiian</code>,{" "}
                </span>
                <span>
                  <code>Hebrew</code>,{" "}
                </span>
                <span>
                  <code>Hindi</code>,{" "}
                </span>
                <span>
                  <code>Hungarian</code>,{" "}
                </span>
                <span>
                  <code>Icelandic</code>,{" "}
                </span>
                <span>
                  <code>Indonesian</code>,{" "}
                </span>
                <span>
                  <code>Italian</code>,{" "}
                </span>
                <span>
                  <code>Japanese</code>,{" "}
                </span>
                <span>
                  <code>Javanese</code>,{" "}
                </span>
                <span>
                  <code>Kannada</code>,{" "}
                </span>
                <span>
                  <code>Kazakh</code>,{" "}
                </span>
                <span>
                  <code>Khmer</code>,{" "}
                </span>
                <span>
                  <code>Korean</code>,{" "}
                </span>
                <span>
                  <code>Lao</code>,{" "}
                </span>
                <span>
                  <code>Latin</code>,{" "}
                </span>
                <span>
                  <code>Latvian</code>,{" "}
                </span>
                <span>
                  <code>Letzeburgesch</code>,{" "}
                </span>
                <span>
                  <code>Lingala</code>,{" "}
                </span>
                <span>
                  <code>Lithuanian</code>,{" "}
                </span>
                <span>
                  <code>Luxembourgish</code>,{" "}
                </span>
                <span>
                  <code>Macedonian</code>,{" "}
                </span>
                <span>
                  <code>Malagasy</code>,{" "}
                </span>
                <span>
                  <code>Malay</code>,{" "}
                </span>
                <span>
                  <code>Malayalam</code>,{" "}
                </span>
                <span>
                  <code>Maltese</code>,{" "}
                </span>
                <span>
                  <code>Maori</code>,{" "}
                </span>
                <span>
                  <code>Marathi</code>,{" "}
                </span>
                <span>
                  <code>Moldavian</code>,{" "}
                </span>
                <span>
                  <code>Moldovan</code>,{" "}
                </span>
                <span>
                  <code>Mongolian</code>,{" "}
                </span>
                <span>
                  <code>Myanmar</code>,{" "}
                </span>
                <span>
                  <code>Nepali</code>,{" "}
                </span>
                <span>
                  <code>Norwegian</code>,{" "}
                </span>
                <span>
                  <code>Nynorsk</code>,{" "}
                </span>
                <span>
                  <code>Occitan</code>,{" "}
                </span>
                <span>
                  <code>Panjabi</code>,{" "}
                </span>
                <span>
                  <code>Pashto</code>,{" "}
                </span>
                <span>
                  <code>Persian</code>,{" "}
                </span>
                <span>
                  <code>Polish</code>,{" "}
                </span>
                <span>
                  <code>Portuguese</code>,{" "}
                </span>
                <span>
                  <code>Punjabi</code>,{" "}
                </span>
                <span>
                  <code>Pushto</code>,{" "}
                </span>
                <span>
                  <code>Romanian</code>,{" "}
                </span>
                <span>
                  <code>Russian</code>,{" "}
                </span>
                <span>
                  <code>Sanskrit</code>,{" "}
                </span>
                <span>
                  <code>Serbian</code>,{" "}
                </span>
                <span>
                  <code>Shona</code>,{" "}
                </span>
                <span>
                  <code>Sindhi</code>,{" "}
                </span>
                <span>
                  <code>Sinhala</code>,{" "}
                </span>
                <span>
                  <code>Sinhalese</code>,{" "}
                </span>
                <span>
                  <code>Slovak</code>,{" "}
                </span>
                <span>
                  <code>Slovenian</code>,{" "}
                </span>
                <span>
                  <code>Somali</code>,{" "}
                </span>
                <span>
                  <code>Spanish</code>,{" "}
                </span>
                <span>
                  <code>Sundanese</code>,{" "}
                </span>
                <span>
                  <code>Swahili</code>,{" "}
                </span>
                <span>
                  <code>Swedish</code>,{" "}
                </span>
                <span>
                  <code>Tagalog</code>,{" "}
                </span>
                <span>
                  <code>Tajik</code>,{" "}
                </span>
                <span>
                  <code>Tamil</code>,{" "}
                </span>
                <span>
                  <code>Tatar</code>,{" "}
                </span>
                <span>
                  <code>Telugu</code>,{" "}
                </span>
                <span>
                  <code>Thai</code>,{" "}
                </span>
                <span>
                  <code>Tibetan</code>,{" "}
                </span>
                <span>
                  <code>Turkish</code>,{" "}
                </span>
                <span>
                  <code>Turkmen</code>,{" "}
                </span>
                <span>
                  <code>Ukrainian</code>,{" "}
                </span>
                <span>
                  <code>Urdu</code>,{" "}
                </span>
                <span>
                  <code>Uzbek</code>,{" "}
                </span>
                <span>
                  <code>Valencian</code>,{" "}
                </span>
                <span>
                  <code>Vietnamese</code>,{" "}
                </span>
                <span>
                  <code>Welsh</code>,{" "}
                </span>
                <span>
                  <code>Yiddish</code>,{" "}
                </span>
                <span>
                  <code>Yoruba</code>
                </span>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-temperature"
                id="input-temperature"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>temperature</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>temperature to use for sampling</div>0
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-patience"
                id="input-patience"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>patience</code> <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                optional patience value to use in beam decoding, as in
                https://arxiv.org/abs/2204.05424, the default (1.0) is
                equivalent to conventional beam search
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-suppress_tokens"
                id="input-suppress_tokens"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>suppress_tokens</code>{" "}
                  <em className="text-shade">string</em>
                </h5>
              </a>
              <div>
                comma-separated list of token ids to suppress during sampling;
                '-1' will suppress most special characters except common
                punctuations
              </div>
              <div className="mt-05lh">
                Default value: <code>-1</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-initial_prompt"
                id="input-initial_prompt"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>initial_prompt</code>{" "}
                  <em className="text-shade">string</em>
                </h5>
              </a>
              <div>
                optional text to provide as a prompt for the first window.
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-condition_on_previous_text"
                id="input-condition_on_previous_text"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>condition_on_previous_text</code>{" "}
                  <em className="text-shade">boolean</em>
                </h5>
              </a>
              <div>
                if True, provide the previous output of the model as a prompt
                for the next window; disabling may make the text inconsistent
                across windows, but the model becomes less prone to getting
                stuck in a failure loop
              </div>
              <div className="mt-05lh">
                Default value: <code />
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-temperature_increment_on_fallback"
                id="input-temperature_increment_on_fallback"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>temperature_increment_on_fallback</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                temperature to increase when falling back when the decoding
                fails to meet either of the thresholds below
              </div>
              <div className="mt-05lh">
                Default value: <code>0.2</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-compression_ratio_threshold"
                id="input-compression_ratio_threshold"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>compression_ratio_threshold</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                if the gzip compression ratio is higher than this value, treat
                the decoding as failed
              </div>
              <div className="mt-05lh">
                Default value: <code>2.4</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-logprob_threshold"
                id="input-logprob_threshold"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>logprob_threshold</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                if the average log probability is lower than this value, treat
                the decoding as failed
              </div>
              <div className="mt-05lh">
                Default value: <code>-1</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-no_speech_threshold"
                id="input-no_speech_threshold"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>no_speech_threshold</code>{" "}
                  <em className="text-shade">number</em>
                </h5>
              </a>
              <div>
                {`if the probability of the <|nospeech|> token is higher than this value AND the decoding has failed due to \`logprob_threshold\`, consider the segment as silence`}
              </div>
              <div className="mt-05lh">
                Default value: <code>0.6</code>
              </div>
            </li>
            <li className="pb-lh border-b border-hairline">
              <a
                className="inline-block no-focus no-underline"
                href="#input-word_timestamps"
                id="input-word_timestamps"
              >
                <h5 className="pt-lh pb-05lh with-anchor-hash">
                  <code>word_timestamps</code>{" "}
                  <em className="text-shade">boolean</em>
                </h5>
              </a>
              <div>
                Improves the accuracy of the timestamps by using word-level
                timestamps
              </div>
              <div className="mt-05lh">
                Default value: <code />
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
                <span className="hljs-string">"object"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"ModelOutput"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"required"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">[</span>
                <span className="hljs-string">"detected_language"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-string">"transcription"</span>
                <span className="hljs-punctuation">]</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"properties"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"segments"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Segments"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"srt_file"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Srt File"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"format"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"uri"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"txt_file"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Txt File"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"format"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"uri"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"translation"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Translation"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"transcription"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Transcription"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"detected_language"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-punctuation">{`{`}</span>
                <span className="hljs-attr">"type"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"string"</span>
                <span className="hljs-punctuation">,</span>
                <span className="hljs-attr">"title"</span>
                <span className="hljs-punctuation">:</span>{" "}
                <span className="hljs-string">"Detected Language"</span>
                <span className="hljs-punctuation">{`}`}</span>
                <span className="hljs-punctuation">{`}`}</span>
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
export default IToVApi;
