import InputOutputHeader from "../../../InputOutputHeader";

const VideoToVideo2result = () => {
  return (
    <>
      <InputOutputHeader />
      <main className="layout-main flex-1">
        <header className="flex flex-col md:flex-row md:items-end gap-lh mb-2lh">
          <hgroup className="flex-grow flex flex-col gap-05lh">
            <div className="flex">
              <div>
                <h3>
                  <span className="text-shade">
                    <a href="/arielreplicate">arielreplicate</a>
                  </span>

                  <span className="text-shade px-1">/</span>

                  <span className="block md:inline">robust_video_matting</span>
                </h3>
              </div>

              <div className="flex-shrink-0 ml-3 flex items-center">
                <script
                  dangerouslySetInnerHTML={{
                    __html:
                      '{"content": "arielreplicate/robust_video_matting", "label": "Copy model name"}',
                  }}
                  id="react-component-props-44489696-6472-4ea2-a51e-fb7c68bce16c"
                  type="application/json"
                />

                <div
                  data-component="CopyIconButton"
                  data-props="react-component-props-44489696-6472-4ea2-a51e-fb7c68bce16c"
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
                      <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <p>
              <span className="mr-2">
                <span className="inline-block rounded-full text-black bg-bgshade small-caps px-3 pb-1">
                  <span
                    className="relative"
                    style={{
                      top: "0.1em",
                    }}
                  >
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
                      <circle cx="12" cy="12" r="10" />

                      <line x1="2" x2="22" y1="12" y2="12" />

                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </span>
                  Public
                </span>
              </span>
              extract foreground of a video
            </p>

            <ul className="flex gap-lh">
              <li>
                <svg
                  className="icon"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.322.75a10.75 10.75 0 00-7.373 2.926l-1.304 1.23A23.743 23.743 0 0010.103 6.5H5.066a1.75 1.75 0 00-1.5.85l-2.71 4.514a.75.75 0 00.49 1.12l4.571.963c.039.049.082.096.129.14L8.04 15.96l1.872 1.994c.044.047.091.09.14.129l.963 4.572a.75.75 0 001.12.488l4.514-2.709a1.75 1.75 0 00.85-1.5v-5.038a23.741 23.741 0 001.596-1.542l1.228-1.304a10.75 10.75 0 002.925-7.374V2.499A1.75 1.75 0 0021.498.75h-1.177zM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 00.121-.214v-3.822zm-10.092-2.7L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 00-.214.121l-2.167 3.612 3.223.679zm8.07-7.644a9.25 9.25 0 016.344-2.518h1.177a.25.25 0 01.25.25v1.176a9.25 9.25 0 01-2.517 6.346l-1.228 1.303a22.248 22.248 0 01-3.854 3.257l-3.288 2.192-1.743-1.858a.764.764 0 00-.034-.034l-1.859-1.744 2.193-3.29a22.248 22.248 0 013.255-3.851l1.304-1.23zM17.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 13c.9-.9.9-2.6 0-3.5-.9-.9-2.6-.9-3.5 0-1.209 1.209-1.445 3.901-1.49 4.743a.232.232 0 00.247.247c.842-.045 3.534-.281 4.743-1.49z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                16.8K runs
              </li>

              <li className="whitespace-nowrap">
                <i>
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </i>

                <a
                  href="https://github.com/PeterL1n/RobustVideoMatting"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>

              <li className="whitespace-nowrap">
                <i>
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
                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />

                    <polyline points="14 2 14 8 20 8" />

                    <line x1="16" x2="8" y1="13" y2="13" />

                    <line x1="16" x2="8" y1="17" y2="17" />

                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </i>

                <a href="https://arxiv.org/abs/2108.11515" target="_blank">
                  Paper
                </a>
              </li>

              <li className="whitespace-nowrap">
                <i>
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
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />

                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />

                    <path d="M7 21h10" />

                    <path d="M12 3v18" />

                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                </i>

                <a
                  href="https://github.com/PeterL1n/RobustVideoMatting/blob/master/LICENSE"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </hgroup>
        </header>

        <div className="tabs flex gap-2 md:gap-2lh mb-lh md:mb-2lh border-b border-hairline">
          <a
            className="tab "
            href="/collection/videotovideo2result/demo"
          >
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
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Demo
          </a>

          <a className="tab " href="/collection/videotovideo2result/api">
            <svg
              className="icon"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.322.75a10.75 10.75 0 00-7.373 2.926l-1.304 1.23A23.743 23.743 0 0010.103 6.5H5.066a1.75 1.75 0 00-1.5.85l-2.71 4.514a.75.75 0 00.49 1.12l4.571.963c.039.049.082.096.129.14L8.04 15.96l1.872 1.994c.044.047.091.09.14.129l.963 4.572a.75.75 0 001.12.488l4.514-2.709a1.75 1.75 0 00.85-1.5v-5.038a23.741 23.741 0 001.596-1.542l1.228-1.304a10.75 10.75 0 002.925-7.374V2.499A1.75 1.75 0 0021.498.75h-1.177zM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 00.121-.214v-3.822zm-10.092-2.7L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 00-.214.121l-2.167 3.612 3.223.679zm8.07-7.644a9.25 9.25 0 016.344-2.518h1.177a.25.25 0 01.25.25v1.176a9.25 9.25 0 01-2.517 6.346l-1.228 1.303a22.248 22.248 0 01-3.854 3.257l-3.288 2.192-1.743-1.858a.764.764 0 00-.034-.034l-1.859-1.744 2.193-3.29a22.248 22.248 0 013.255-3.851l1.304-1.23zM17.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 13c.9-.9.9-2.6 0-3.5-.9-.9-2.6-.9-3.5 0-1.209 1.209-1.445 3.901-1.49 4.743a.232.232 0 00.247.247c.842-.045 3.534-.281 4.743-1.49z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            API
          </a>

          <a
            className="tab "
            href="/collection/videotovideo2result/example"
          >
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
              <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />

              <polyline points="11 3 11 11 14 8 17 11 17 3" />
            </svg>
            Examples
          </a>

          <a
            className="tab "
            href="/collection/videotovideo2result/versions"
          >
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
              <path d="M3 3v5h5" />

              <path d="M3.05 13A9 9 0 106 5.3L3 8" />

              <path d="M12 7v5l4 2" />
            </svg>
            Versions
            <span className="text-shade text-sm font-mono">(73d2128a)</span>
          </a>
        </div>

        <div className="mb-2lh">
          <script
            dangerouslySetInnerHTML={{
              __html:
                '{"version": {"config": {"build": {"gpu": true, "cuda": "11.1.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["torch==1.9.0", "torchvision==0.10.0", "av==8.0.3", "tqdm==4.61.1", "pims==0.5"], "system_packages": ["libgl1-mesa-glx", "libglib2.0-0"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "73d2128a371922d5d1abf0712a1d974be0e4e2358cc1218e4e34714767232bac", "docker_image_name": "r8.im/arielreplicate/robust_video_matting@sha256:73d2128a371922d5d1abf0712a1d974be0e4e2358cc1218e4e34714767232bac", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "Request": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}, "Response": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/arielreplicate/robust_video_matting", "username": "arielreplicate", "name": "robust_video_matting", "description": "extract foreground of a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/PeterL1n/RobustVideoMatting", "paper_url": "https://arxiv.org/abs/2108.11515", "arxiv_paper_id": "2108.11515", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/1f92fd8f-2b90-4998-b5ae-1e23678ab004/showreel.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "iqaowdlwcnbxresiand63tzn5a", "display_output_as_json": false}, "created_at": "2022-12-11T17:55:54.263Z"}, "model": {"absolute_url": "/arielreplicate/robust_video_matting", "username": "arielreplicate", "name": "robust_video_matting", "description": "extract foreground of a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/PeterL1n/RobustVideoMatting", "paper_url": "https://arxiv.org/abs/2108.11515", "arxiv_paper_id": "2108.11515", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/1f92fd8f-2b90-4998-b5ae-1e23678ab004/showreel.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "iqaowdlwcnbxresiand63tzn5a", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/arielreplicate/robust_video_matting/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/arielreplicate/robust_video_matting", "predictUrl": "/api/models/arielreplicate/robust_video_matting/versions/73d2128a371922d5d1abf0712a1d974be0e4e2358cc1218e4e34714767232bac/predictions", "signInRequiredToRun": false, "initialPrediction": {"uuid": "iqaowdlwcnbxresiand63tzn5a", "version_id": "2d2de06a76a837a4ba92b6164bf8bfd3ddb524a1fb64b0d8ae055af17fa22503", "created_at": "2022-11-25T14:11:53.705Z", "updated_at": "2023-03-14T00:32:48.792Z", "completed_at": "2022-11-25T14:17:06.618Z", "status": "succeeded", "inputs": {"input_video": "https://replicate.delivery/pbxt/HqiGGuuwynO7sCHpcQdYQsIf04NotwOrDdbhBf4M6Pou6MGg/butter.mp4", "output_type": "green-screen"}, "output": "https://replicate.delivery/pbxt/V3iFlL5JotpbLtkUqGcnrpsiRfXume3Jm0020Iu0hX0hBoDQA/green-screen.mp4", "output_files": ["https://replicate.delivery/pbxt/V3iFlL5JotpbLtkUqGcnrpsiRfXume3Jm0020Iu0hX0hBoDQA/green-screen.mp4"], "is_training": false, "error": null, "metrics": {"predict_time": 97.211127}, "run_logs": "0%|          | 0/382 [00:00\u003C?, ?it/s]/root/.pyenv/versions/3.8.15/lib/python3.8/site-packages/torch/nn/functional.py:718: UserWarning: Named tensors and all their associated APIs are an experimental feature and subject to change. Please do not use them for anything important until they are released as stable. (Triggered internally at  /pytorch/c10/core/TensorImpl.h:1156.)\nreturn torch.max_pool2d(input, kernel_size, stride, padding, dilation, ceil_mode)\n  3%|\u258e         | 12/382 [00:02\u003C01:25,  4.30it/s]\n  6%|\u258b         | 24/382 [00:04\u003C01:10,  5.05it/s]\n  9%|\u2589         | 36/382 [00:07\u003C01:05,  5.29it/s]\n 13%|\u2588\u258e        | 48/382 [00:10\u003C01:19,  4.19it/s]\n 16%|\u2588\u258c        | 60/382 [00:14\u003C01:22,  3.92it/s]\n 19%|\u2588\u2589        | 72/382 [00:17\u003C01:22,  3.74it/s]\n 22%|\u2588\u2588\u258f       | 84/382 [00:20\u003C01:16,  3.88it/s]\n 25%|\u2588\u2588\u258c       | 96/382 [00:23\u003C01:12,  3.96it/s]\n 28%|\u2588\u2588\u258a       | 108/382 [00:26\u003C01:06,  4.10it/s]\n 31%|\u2588\u2588\u2588\u258f      | 120/382 [00:28\u003C01:03,  4.13it/s]\n 35%|\u2588\u2588\u2588\u258d      | 132/382 [00:31\u003C00:59,  4.23it/s]\n 38%|\u2588\u2588\u2588\u258a      | 144/382 [00:34\u003C00:57,  4.12it/s]\n 41%|\u2588\u2588\u2588\u2588      | 156/382 [00:37\u003C00:55,  4.07it/s]\n 44%|\u2588\u2588\u2588\u2588\u258d     | 168/382 [00:40\u003C00:53,  4.04it/s]\n 47%|\u2588\u2588\u2588\u2588\u258b     | 180/382 [00:43\u003C00:49,  4.07it/s]\n 50%|\u2588\u2588\u2588\u2588\u2588     | 192/382 [00:46\u003C00:46,  4.11it/s]\n 53%|\u2588\u2588\u2588\u2588\u2588\u258e    | 204/382 [00:49\u003C00:42,  4.16it/s]\n 57%|\u2588\u2588\u2588\u2588\u2588\u258b    | 216/382 [00:52\u003C00:40,  4.05it/s]\n 60%|\u2588\u2588\u2588\u2588\u2588\u2589    | 228/382 [00:55\u003C00:38,  4.05it/s]\n 63%|\u2588\u2588\u2588\u2588\u2588\u2588\u258e   | 240/382 [00:58\u003C00:35,  4.02it/s]\n 66%|\u2588\u2588\u2588\u2588\u2588\u2588\u258c   | 252/382 [01:01\u003C00:31,  4.11it/s]\n 69%|\u2588\u2588\u2588\u2588\u2588\u2588\u2589   | 264/382 [01:04\u003C00:28,  4.17it/s]\n 72%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f  | 276/382 [01:06\u003C00:24,  4.28it/s]\n 75%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 288/382 [01:09\u003C00:22,  4.22it/s]\n 79%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 300/382 [01:12\u003C00:19,  4.23it/s]\n 82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f | 312/382 [01:15\u003C00:16,  4.26it/s]\n 85%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d | 324/382 [01:17\u003C00:13,  4.28it/s]\n 88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 336/382 [01:20\u003C00:10,  4.24it/s]\n 91%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 348/382 [01:23\u003C00:07,  4.25it/s]\n 94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d| 360/382 [01:26\u003C00:05,  4.20it/s]\n 97%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b| 372/382 [01:29\u003C00:02,  4.20it/s]\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 382/382 [01:31\u003C00:00,  4.20it/s]", "version": {"config": {"build": {"gpu": true, "cuda": "11.1.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["torch==1.9.0", "torchvision==0.10.0", "av==8.0.3", "tqdm==4.61.1", "pims==0.5"], "system_packages": ["libgl1-mesa-glx", "libglib2.0-0"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "2d2de06a76a837a4ba92b6164bf8bfd3ddb524a1fb64b0d8ae055af17fa22503", "docker_image_name": "r8.im/arielreplicate/robust_video_matting@sha256:2d2de06a76a837a4ba92b6164bf8bfd3ddb524a1fb64b0d8ae055af17fa22503", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "Request": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["input_video"], "properties": {"input_video": {"type": "string", "title": "Input Video", "format": "uri", "x-order": 0, "description": "Video to segment."}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration.", "default": "green-screen", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}, "Response": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}, "output_type": {"enum": ["green-screen", "alpha-mask", "foreground-mask"], "type": "string", "title": "output_type", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/arielreplicate/robust_video_matting", "username": "arielreplicate", "name": "robust_video_matting", "description": "extract foreground of a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/PeterL1n/RobustVideoMatting", "paper_url": "https://arxiv.org/abs/2108.11515", "arxiv_paper_id": "2108.11515", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/1f92fd8f-2b90-4998-b5ae-1e23678ab004/showreel.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "iqaowdlwcnbxresiand63tzn5a", "display_output_as_json": false}, "created_at": "2022-11-25T14:10:31.869Z"}, "user": {"username": "arielreplicate", "url": "/arielreplicate"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
            }}
            id="react-component-props-46060923-b0f7-4fc6-b41f-16347e0b0ef3"
            type="application/json"
          />

          <div
            data-component="VersionRun"
            data-props="react-component-props-46060923-b0f7-4fc6-b41f-16347e0b0ef3"
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
                        __idm_id__="2400262"
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
                            __idm_id__="2400260"
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
                __idm_id__="2400257"
                autoPlay
                className="object-cover object-center w-full h-full lazy entered exited loaded"
                data-ll-status="loaded"
                src="https://replicate.delivery/pbxt/HuwFjWn7A9bcH5CfhQ7KO79N3z4uZf9sTtLoo4PDnXY2MoDQA/green-screen.mp4"
                loop
                muted
                role="presentation"
                type="video/mp4"
              ></video>
            </a>
          </div>

          <div className="inline-block h-40 w-40 overflow-hidden">
            <a href="/arielreplicate/robust_video_matting/examples#in5yh3obxrdmvgr6mxgalzzeli">
              <video
                __idm_id__="2400261"
                autoPlay
                className="object-cover object-center w-full h-full lazy entered exited loaded"
                data-ll-status="loaded"
                src="https://replicate.delivery/pbxt/rERlJsBX0oJ4BZwnJdaj2RfqBYDuzjObx3jRDg3GffHvqQHgA/green-screen.mp4"
                loop
                muted
                role="presentation"
                type="video/mp4"
              ></video>
            </a>
          </div>

          <div className="inline-block h-40 w-40 overflow-hidden">
            <a href="/arielreplicate/robust_video_matting/examples#43ujwtzsojd2phcc6hw2sbbbsu">
              <video
                __idm_id__="2400259"
                autoPlay
                className="object-cover object-center w-full h-full lazy entered exited loaded"
                data-ll-status="loaded"
                src="https://replicate.delivery/pbxt/5wY879GIAWqAJFxBU6UtcHGWNwmnrnLzUgf2G0Jx0XcxYeIQA/alpha-mask.mp4"
                loop
                muted
                role="presentation"
                type="video/mp4"
              ></video>
            </a>
          </div>

          <div className="inline-block h-40 w-40 overflow-hidden">
            <a href="/arielreplicate/robust_video_matting/examples#oriptsmtjvbmdmcizvc2d3cbga">
              <video
                __idm_id__="2400258"
                autoPlay
                className="object-cover object-center w-full h-full lazy entered exited loaded"
                data-ll-status="loaded"
                src="https://replicate.delivery/pbxt/dpw8YGYG4TZwGNYfKAe79EkI4yzj2m6ZzFqheKMp4KPhl5RgA/foreground-mask.mp4"
                loop
                muted
                role="presentation"
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
              temporal memory. RVM can perform matting in real-time on any
              videos without additional inputs. It achieves{" "}
              <strong>4K 76FPS</strong> and <strong>HD 104FPS</strong> on an
              Nvidia GTX 1080 Ti GPU. The project was developed at{" "}
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
                does not have the tensor transfer done on parallel threads. If
                you are interested in implementing hardware video
                encoding/decoding in Python, please refer to{" "}
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
      </main>
    </>
  );
};

export default VideoToVideo2result;
