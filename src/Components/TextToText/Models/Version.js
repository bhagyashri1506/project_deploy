import React from "react";

const Version = () => {
  return (
    <>
      <ul>
        <li className="pb-lh mb-lh group ">
          <div className="lg:flex gap-lh">
            <span className="lg:flex-grow flex gap-2">
              <a
                className="inline-block truncate"
                href="/sharaddition/paraphrase-gpt/versions/3a66bc6c1327de5459cb18b2f10550693bc69662a5e29c67a971776f8574f1b1"
              >
                3a66bc6c1327de5459cb18b2f10550693bc69662a5e29c67a971776f8574f1b1
              </a>

              <div className="inline-flex items-center gap-2">
                <div className="opacity-0 group-hover:opacity-100">
                  <script
                    dangerouslySetInnerHTML={{
                      __html:
                        '{"content": "3a66bc6c1327de5459cb18b2f10550693bc69662a5e29c67a971776f8574f1b1", "label": "Copy version ID"}',
                    }}
                    id="react-component-props-849a9361-507e-47fe-9126-631a8899798e"
                    type="application/json"
                  />

                  <div
                    data-component="CopyIconButton"
                    data-props="react-component-props-849a9361-507e-47fe-9126-631a8899798e"
                  >
                    <button
                      className="w-7 h-7 inline-flex items-center justify-center relative hover:bg-gray-100"
                      data-state="closed"
                    >
                      <span className="sr-only">Copy model name</span>
                      <svg
                        className="pointer-events-none text-shade"
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
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
            </span>

            <span className="text-shade">
              <span title="May 13, 2023, 5:31 a.m.">
                pushed 3 months, 2 weeks ago
              </span>
            </span>
          </div>

          <div className="mt-4 flex gap-4 flex-wrap">
            <a
              className="form-button-secondary text-sm !px-2 !py-1"
              href="/predictions?version=3a66bc6c1327de5459cb18b2f10550693bc69662a5e29c67a971776f8574f1b1"
            >
              View predictions
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Version;
