import React from "react";

const TToIApi = () => {
  return (
    <>
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
                        <span className="hljs-property">
                          REPLICATE_API_TOKEN
                        </span>
                        {`,
                  });
                  
                  `}
                        <span className="hljs-keyword">const</span> output ={" "}
                        <span className="hljs-keyword">await</span> replicate.
                        <span className="hljs-title function_">run</span>(
                        <span className="hljs-string">
                          "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
                        </span>
                        {`,
                  {
                  `}
                        <span className="hljs-attr">input</span>
                        {`: {
                  `}
                        <span className="hljs-attr">prompt</span>:{" "}
                        <span className="hljs-string">
                          "a vision of paradise. unreal engine"
                        </span>
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
                    You can specify a webhook URL to be called when the
                    prediction is complete. Take a look at the{" "}
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
                          "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
                        </span>
                        ,<span className="hljs-attr">input</span>
                        {`: {
                  `}
                        <span className="hljs-attr">prompt</span>:{" "}
                        <span className="hljs-string">
                          "a vision of paradise. unreal engine"
                        </span>
                        {`
                  },
                  `}
                        <span className="hljs-attr">webhook</span>:{" "}
                        <span className="hljs-string">
                          "https://example.com/your-webhook"
                        </span>
                        ,
                        <span className="hljs-attr">webhook_events_filter</span>
                        : [<span className="hljs-string">"completed"</span>
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
                          "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
                        </span>
                        ,<span className="hljs-built_in">input</span>
                        {`={`}
                        <span className="hljs-string">"prompt"</span>:{" "}
                        <span className="hljs-string">
                          "a vision of paradise. unreal engine"
                        </span>
                        {`}
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
                  -d '{"version": "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4", "input": {"prompt": "a vision of paradise. unreal engine"}}' \
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
                        <span className="hljs-attr">"prompt"</span>
                        <span className="hljs-punctuation">:</span>{" "}
                        <span className="hljs-string">
                          "a vision of paradise. unreal engine"
                        </span>
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
                          "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
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
                        <span className="hljs-attr">"prompt"</span>
                        <span className="hljs-punctuation">:</span>{" "}
                        <span className="hljs-string">
                          "a vision of paradise. unreal engine"
                        </span>
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
                    For models that take longer to return a response, you'll
                    need to poll the API periodically for an update.
                    Alternatively, you can specify a{" "}
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
                        r8.im/stability-ai/stable-diffusion@sha256:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4
                        -i prompt=... \ -i height=... \ -i width=... \ -i
                        negative_prompt=... \ -i num_outputs=... \ -i
                        num_inference_steps=... \ -i guidance_scale=... \ -i
                        scheduler=... \ -i seed=...
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
                        r8.im/stability-ai/stable-diffusion@sha256:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4
                        curl http://localhost:
                        <span className="hljs-number">5000</span>
                        /predictions -X POST \ -d
                        <span className="hljs-string">
                          {`'{"input": {
                    "prompt": "...",
                    "height": "...",
                    "width": "...",
                    "negative_prompt": "...",
                    "num_outputs": "...",
                    "num_inference_steps": "...",
                    "guidance_scale": "...",
                    "scheduler": "...",
                    "seed": "..."
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
                  href="#input-prompt"
                  id="input-prompt"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>prompt</code> <em className="text-shade">string</em>
                  </h5>
                </a>
                <div>Input prompt</div>
                <div className="mt-05lh">
                  Default value:{" "}
                  <code>a vision of paradise. unreal engine</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-height"
                  id="input-height"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>height</code> <em className="text-shade">integer</em>
                  </h5>
                </a>
                <div>
                  Height of generated image in pixels. Needs to be a multiple of
                  64
                </div>
                <div className="mt-05lh">
                  Allowed values:
                  <span>
                    <code>64</code>,{" "}
                  </span>
                  <span>
                    <code>128</code>,{" "}
                  </span>
                  <span>
                    <code>192</code>,{" "}
                  </span>
                  <span>
                    <code>256</code>,{" "}
                  </span>
                  <span>
                    <code>320</code>,{" "}
                  </span>
                  <span>
                    <code>384</code>,{" "}
                  </span>
                  <span>
                    <code>448</code>,{" "}
                  </span>
                  <span>
                    <code>512</code>,{" "}
                  </span>
                  <span>
                    <code>576</code>,{" "}
                  </span>
                  <span>
                    <code>640</code>,{" "}
                  </span>
                  <span>
                    <code>704</code>,{" "}
                  </span>
                  <span>
                    <code>768</code>,{" "}
                  </span>
                  <span>
                    <code>832</code>,{" "}
                  </span>
                  <span>
                    <code>896</code>,{" "}
                  </span>
                  <span>
                    <code>960</code>,{" "}
                  </span>
                  <span>
                    <code>1024</code>
                  </span>
                </div>
                <div className="mt-05lh">
                  Default value: <code>768</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-width"
                  id="input-width"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>width</code> <em className="text-shade">integer</em>
                  </h5>
                </a>
                <div>
                  Width of generated image in pixels. Needs to be a multiple of
                  64
                </div>
                <div className="mt-05lh">
                  Allowed values:
                  <span>
                    <code>64</code>,{" "}
                  </span>
                  <span>
                    <code>128</code>,{" "}
                  </span>
                  <span>
                    <code>192</code>,{" "}
                  </span>
                  <span>
                    <code>256</code>,{" "}
                  </span>
                  <span>
                    <code>320</code>,{" "}
                  </span>
                  <span>
                    <code>384</code>,{" "}
                  </span>
                  <span>
                    <code>448</code>,{" "}
                  </span>
                  <span>
                    <code>512</code>,{" "}
                  </span>
                  <span>
                    <code>576</code>,{" "}
                  </span>
                  <span>
                    <code>640</code>,{" "}
                  </span>
                  <span>
                    <code>704</code>,{" "}
                  </span>
                  <span>
                    <code>768</code>,{" "}
                  </span>
                  <span>
                    <code>832</code>,{" "}
                  </span>
                  <span>
                    <code>896</code>,{" "}
                  </span>
                  <span>
                    <code>960</code>,{" "}
                  </span>
                  <span>
                    <code>1024</code>
                  </span>
                </div>
                <div className="mt-05lh">
                  Default value: <code>768</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-negative_prompt"
                  id="input-negative_prompt"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>negative_prompt</code>{" "}
                    <em className="text-shade">string</em>
                  </h5>
                </a>
                <div>Specify things to not see in the output</div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-num_outputs"
                  id="input-num_outputs"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>num_outputs</code>{" "}
                    <em className="text-shade">integer</em>
                  </h5>
                </a>
                <div>Number of images to generate.</div>
                <div className="mt-05lh">
                  Default value: <code>1</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-num_inference_steps"
                  id="input-num_inference_steps"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>num_inference_steps</code>{" "}
                    <em className="text-shade">integer</em>
                  </h5>
                </a>
                <div>Number of denoising steps</div>
                <div className="mt-05lh">
                  Default value: <code>50</code>
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
                <div>Scale for classifier-free guidance</div>
                <div className="mt-05lh">
                  Default value: <code>7.5</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-scheduler"
                  id="input-scheduler"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>scheduler</code>{" "}
                    <em className="text-shade">string</em>
                  </h5>
                </a>
                <div>Choose a scheduler.</div>
                <div className="mt-05lh">
                  Allowed values:
                  <span>
                    <code>DDIM</code>,{" "}
                  </span>
                  <span>
                    <code>K_EULER</code>,{" "}
                  </span>
                  <span>
                    <code>DPMSolverMultistep</code>,{" "}
                  </span>
                  <span>
                    <code>K_EULER_ANCESTRAL</code>,{" "}
                  </span>
                  <span>
                    <code>PNDM</code>,{" "}
                  </span>
                  <span>
                    <code>KLMS</code>
                  </span>
                </div>
                <div className="mt-05lh">
                  Default value: <code>DPMSolverMultistep</code>
                </div>
              </li>
              <li className="pb-lh border-b border-hairline">
                <a
                  className="inline-block no-focus no-underline"
                  href="#input-seed"
                  id="input-seed"
                >
                  <h5 className="pt-lh pb-05lh with-anchor-hash">
                    <code>seed</code> <em className="text-shade">integer</em>
                  </h5>
                </a>
                <div>Random seed. Leave blank to randomize the seed</div>
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
              This is the raw JSON schema describing the model's ouput
              structure.
            </p>
            <div className="group relative">
              <pre className="code">
                <code className="language-json !p-0 hljs">
                  <span className="hljs-punctuation">{`{`}</span>
                  <span className="hljs-attr">"type"</span>
                  <span className="hljs-punctuation">:</span>{" "}
                  <span className="hljs-string">"array"</span>
                  <span className="hljs-punctuation">,</span>
                  <span className="hljs-attr">"items"</span>
                  <span className="hljs-punctuation">:</span>{" "}
                  <span className="hljs-punctuation">{`{`}</span>
                  <span className="hljs-attr">"type"</span>
                  <span className="hljs-punctuation">:</span>{" "}
                  <span className="hljs-string">"string"</span>
                  <span className="hljs-punctuation">,</span>
                  <span className="hljs-attr">"format"</span>
                  <span className="hljs-punctuation">:</span>{" "}
                  <span className="hljs-string">"uri"</span>
                  <span className="hljs-punctuation">{`}`}</span>
                  <span className="hljs-punctuation">,</span>
                  <span className="hljs-attr">"title"</span>
                  <span className="hljs-punctuation">:</span>{" "}
                  <span className="hljs-string">"Output"</span>
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
    </>
  );
};
export default TToIApi;
