import React from "react";

const Demo = () => {
  return (
    <>
      <div className="mb-2lh">
        <div
          data-component="VersionRun"
          data-props="react-component-props-c7349bfb-4427-4790-b214-4c284fcad853"
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
                      defaultValue="These practices, also known as ‘dark patterns,’ are in the nature of unfair trade practices and are covered under the Consumer Protection Act, which is punishable, according to Union consumer affairs secretary Rohit Kumar Singh."
                      name="prompt"
                      style={{
                        height: "122px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">Prompt to send to FLAN-T5.</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-max_length">
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
                    <code>max_length</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="250"
                    disabled
                    id="input-max_length"
                    min="1"
                    name="max_length"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Maximum number of tokens to generate. A word is generally
                    2-3 tokens (minimum: 1){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-temperature">
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
                    <code>temperature</code>
                  </label>
                  <fieldset className="flex" id="input-temperature">
                    <legend hidden>temperature</legend>
                    <input
                      aria-label="temperature"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="0.75"
                      disabled
                      max="5"
                      min="0.01"
                      name="temperature"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="temperature"
                      className="flex-grow"
                      defaultValue="0.75"
                      disabled
                      max="5"
                      min="0.01"
                      name="temperature"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Adjusts randomness of outputs, greater than 1 is random and
                    0 is deterministic, 0.75 is a good starting value. (minimum:
                    0.01; maximum: 5){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-top_p">
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
                    <code>top_p</code>
                  </label>
                  <fieldset className="flex" id="input-top_p">
                    <legend hidden>top_p</legend>
                    <input
                      aria-label="top_p"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="1"
                      disabled
                      max="1"
                      min="0.01"
                      name="top_p"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="top_p"
                      className="flex-grow"
                      defaultValue="1"
                      disabled
                      max="1"
                      min="0.01"
                      name="top_p"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    When decoding text, samples from the top p percentage of
                    most likely tokens; lower to ignore less likely tokens
                    (minimum: 0.01; maximum: 1){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-num_beams">
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
                    <code>num_beams</code>
                  </label>
                  <fieldset className="flex" id="input-num_beams">
                    <legend hidden>num_beams</legend>
                    <input
                      aria-label="num_beams"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_beams"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="num_beams"
                      className="flex-grow"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_beams"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of output sequences to generate (minimum: 1; maximum:
                    5){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-num_beam_groups">
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
                    <code>num_beam_groups</code>
                  </label>
                  <fieldset className="flex" id="input-num_beam_groups">
                    <legend hidden>num_beam_groups</legend>
                    <input
                      aria-label="num_beam_groups"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_beam_groups"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="num_beam_groups"
                      className="flex-grow"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_beam_groups"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of output sequences to generate (minimum: 1; maximum:
                    5){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-num_return_sequences"
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
                    <code>num_return_sequences</code>
                  </label>
                  <fieldset className="flex" id="input-num_return_sequences">
                    <legend hidden>num_return_sequences</legend>
                    <input
                      aria-label="num_return_sequences"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_return_sequences"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="num_return_sequences"
                      className="flex-grow"
                      defaultValue="5"
                      disabled
                      max="5"
                      min="1"
                      name="num_return_sequences"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of output sequences to generate (minimum: 1; maximum:
                    5){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-repetition_penalty"
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
                    <code>repetition_penalty</code>
                  </label>
                  <fieldset className="flex" id="input-repetition_penalty">
                    <legend hidden>repetition_penalty</legend>
                    <input
                      aria-label="repetition_penalty"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="10"
                      disabled
                      max="15"
                      min="0.01"
                      name="repetition_penalty"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="repetition_penalty"
                      className="flex-grow"
                      defaultValue="10"
                      disabled
                      max="15"
                      min="0.01"
                      name="repetition_penalty"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Penalty for repeated words in generated text; 1 is no
                    penalty, values greater than 1 discourage repetition, less
                    than 1 encourage it. (minimum: 0.01; maximum: 15){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-diversity_penalty"
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
                    <code>diversity_penalty</code>
                  </label>
                  <fieldset className="flex" id="input-diversity_penalty">
                    <legend hidden>diversity_penalty</legend>
                    <input
                      aria-label="diversity_penalty"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="3"
                      disabled
                      max="5"
                      min="0.01"
                      name="diversity_penalty"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="diversity_penalty"
                      className="flex-grow"
                      defaultValue="3"
                      disabled
                      max="5"
                      min="0.01"
                      name="diversity_penalty"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Penalty for repeated words in generated text; 1 is no
                    penalty, values greater than 1 discourage repetition, less
                    than 1 encourage it. (minimum: 0.01; maximum: 5){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-no_repeat_ngram_size"
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
                    <code>no_repeat_ngram_size</code>
                  </label>
                  <fieldset className="flex" id="input-no_repeat_ngram_size">
                    <legend hidden>no_repeat_ngram_size</legend>
                    <input
                      aria-label="no_repeat_ngram_size"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="2"
                      disabled
                      max="5"
                      min="0.01"
                      name="no_repeat_ngram_size"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="no_repeat_ngram_size"
                      className="flex-grow"
                      defaultValue="2"
                      disabled
                      max="5"
                      min="0.01"
                      name="no_repeat_ngram_size"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    No repeat n_gram size. (minimum: 0.01; maximum: 5){" "}
                  </p>
                </div>
                <p className="mb-05lh">Sign in to run this model:</p>
                <p className="my-7">
                  <a
                    className="form-button"
                    href="/login/github/?next=/sharaddition/paraphrase-gpt"
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
                    <div className="flex flex-wrap gap-lh">
                      <div>
                        <div>
                          <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                            <code className="output w-full">
                              According to Rohit Kumar Singh, the Union consumer
                              affairs secretary, 'dark patterns' are unfair
                              trade practices that fall under the Consumer
                              Protection Act and can be punished.
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <div>
                          <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                            <code className="output w-full">
                              Rohit Kumar Singh, the Union consumer affairs
                              secretary, has stated that 'dark patterns' are
                              unfair trade practices and fall under the Consumer
                              Protection Act, which is punishable by law.
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <div>
                          <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                            <code className="output w-full">
                              The 'dark patterns' are unfair trade practices
                              that fall under the scope of the Consumer
                              Protection Act and can be punished, as stated by
                              Union consumer affairs secretary Rohit Kumar
                              Singh.
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <div>
                          <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                            <code className="output w-full">
                              Union consumer affairs secretary Rohit Kumar Singh
                              has stated that 'dark patterns' are unfair trade
                              practices, which fall under the scope of the
                              Consumer Protection Act and can be punished.
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <div>
                          <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                            <code className="output w-full">
                              'Dark patterns,’ also known as unfair trade
                              practices, are covered by the Consumer Protection
                              Act and can result in punishment, according to
                              Union consumer affairs secretary Rohit Kumar
                              Singh.
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT2.37S">2.37</time> seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/sharaddition/paraphrase-gpt?prediction=as2glbfxzzdovfzw3oiwib4syi"
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
                  href="/p/as2glbfxzzdovfzw3oiwib4syi/report"
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
            </div>
          </div>
        </div>
      </div>
      
      <div id="performance" class="mb-2lh">
        <h4 class="mb-lh pb-2 border-b border-hairline">Run time and cost</h4>

        <p class="mb-lh">
          Predictions run on CPU hardware. Predictions typically complete within
          2 seconds.
        </p>
      </div>
      <article>
        <div id="readme" class="border-b border-hairline pb-2 mb-lh">
          <h4 class="inline-block">
            <a href="#readme" class="no-default">
              Readme
            </a>
          </h4>
        </div>
        <div class="readme-prose">
          <p>This model generates Human like Paraphrases.</p>
          <h2 id="model-description">Model description</h2>
          <p>
            <a href="https://huggingface.co/t5-base" rel="nofollow">
              T5-Base
            </a>{" "}
            model fine tuned on GPT-3.5 generated paraphrase corpus of 6.3
            million unique sentences.
          </p>
          <h2 id="intended-use">Intended use</h2>
          <p>
            Generates paraphrases of any sentence/question while retaining the
            meaning, and could be used by teachers to prepare unique question
            paper, content writers to enhance their creativity, etc.
          </p>
          <h2 id="ethical-considerations">Ethical considerations</h2>
          <p>
            One should not misuse/abuse such tools to cheat in any kind of
            events where AI/ML tools are not fair play.
          </p>
          <h2 id="caveats-and-recommendations">Caveats and recommendations</h2>
          <p>
            If you wish to improve the model, then I would recommend to
            fine-tune better version of T5 i.e. Flan-T5 on the same{" "}
            <a
              href="https://huggingface.co/datasets/humarin/chatgpt-paraphrases"
              rel="nofollow"
            >
              dataset
            </a>
            , it's simplified version can be found{" "}
            <a
              href="https://huggingface.co/datasets/sharad/chatgpt-paraphrases-simple"
              rel="nofollow"
            >
              here
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
};

export default Demo;