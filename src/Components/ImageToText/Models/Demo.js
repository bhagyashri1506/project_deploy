import React from "react";

const IToTDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '{"version": {"config": {"build": {"gpu": true, "cuda": "11.1.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["imageio==2.9.0", "numpy==1.21.1", "opencv-python==4.5.3.56", "ipython==7.21.0", "torchvision==0.9.0", "torch==1.8.0", "tensorboardX==2.4"], "system_packages": ["libgl1-mesa-glx", "libglib2.0-0"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "1da220059cf4eb1de6cdbca18378f1c34ae0fdfec8d18aa5570dd224b0d18284", "docker_image_name": "r8.im/hzwer/iccv2019-learningtopaint@sha256:1da220059cf4eb1de6cdbca18378f1c34ae0fdfec8d18aa5570dd224b0d18284", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["image"], "properties": {"image": {"type": "string", "title": "Image", "format": "uri", "x-order": 0, "description": "input image"}, "renderer": {"enum": ["default", "triangle", "round", "bezierwotrans"], "type": "string", "title": "renderer", "description": "type of renderer", "default": "default", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["image"], "properties": {"image": {"type": "string", "title": "Image", "format": "uri", "x-order": 0, "description": "input image"}, "renderer": {"enum": ["default", "triangle", "round", "bezierwotrans"], "type": "string", "title": "renderer", "description": "type of renderer", "default": "default", "x-order": 1}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "Request": {"type": "object", "title": "Request", "properties": {"input": {"type": "object", "title": "Input", "required": ["image"], "properties": {"image": {"type": "string", "title": "Image", "format": "uri", "x-order": 0, "description": "input image"}, "renderer": {"enum": ["default", "triangle", "round", "bezierwotrans"], "type": "string", "title": "renderer", "description": "type of renderer", "default": "default", "x-order": 1}}}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}}, "description": "The request body for a prediction"}, "Response": {"type": "object", "title": "Response", "required": ["status"], "properties": {"error": {"type": "string", "title": "Error"}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}}, "description": "The response body for a prediction"}, "renderer": {"enum": ["default", "triangle", "round", "bezierwotrans"], "type": "string", "title": "renderer", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/hzwer/iccv2019-learningtopaint", "username": "hzwer", "name": "iccv2019-learningtopaint", "description": "Teach Machines to Paint", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/megvii-research/ICCV2019-LearningToPaint", "paper_url": "https://www.arxiv-vanity.com/papers/1903.04411/", "arxiv_paper_id": "1903.04411", "cover_image": {"url": "https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "bjkmjyhddjd6la3sxpzlyuctle", "display_output_as_json": false}, "created_at": "2022-10-05T20:50:43.812Z"}, "model": {"absolute_url": "/hzwer/iccv2019-learningtopaint", "username": "hzwer", "name": "iccv2019-learningtopaint", "description": "Teach Machines to Paint", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/megvii-research/ICCV2019-LearningToPaint", "paper_url": "https://www.arxiv-vanity.com/papers/1903.04411/", "arxiv_paper_id": "1903.04411", "cover_image": {"url": "https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "bjkmjyhddjd6la3sxpzlyuctle", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/hzwer/iccv2019-learningtopaint/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/hzwer/iccv2019-learningtopaint", "predictUrl": "/api/models/hzwer/iccv2019-learningtopaint/versions/1da220059cf4eb1de6cdbca18378f1c34ae0fdfec8d18aa5570dd224b0d18284/predictions", "signInRequiredToRun": false, "initialPrediction": {"uuid": "bjkmjyhddjd6la3sxpzlyuctle", "version_id": "690cd9bfaecc6f227a4ee3cc5b5516f3859d6915125101144a7c241be4cbfc9c", "created_at": "2021-08-27T22:52:53.259Z", "updated_at": "2022-05-31T22:19:27.746Z", "completed_at": "2021-08-27T22:56:23.984Z", "status": "succeeded", "inputs": {"image": "https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png", "renderer": "triangle"}, "output": [{"file": "https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif"}], "output_files": ["https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif"], "is_training": false, "error": null, "metrics": {}, "run_logs": "canvas step 0, L2Loss = 0.03997287154197693\ncanvas step 1, L2Loss = 0.022229744121432304\ncanvas step 2, L2Loss = 0.01675523817539215\ncanvas step 3, L2Loss = 0.013573813252151012\ncanvas step 4, L2Loss = 0.012320900335907936\ncanvas step 5, L2Loss = 0.011542919091880322\ncanvas step 6, L2Loss = 0.010394248180091381\ncanvas step 7, L2Loss = 0.00984362605959177\ncanvas step 8, L2Loss = 0.009365100413560867\ncanvas step 9, L2Loss = 0.008832967840135098\ncanvas step 10, L2Loss = 0.008636057376861572\ncanvas step 11, L2Loss = 0.008324887603521347\ncanvas step 12, L2Loss = 0.007920647971332073\ncanvas step 13, L2Loss = 0.007482276763767004\ncanvas step 14, L2Loss = 0.00717482715845108\ncanvas step 15, L2Loss = 0.007089617662131786\ncanvas step 16, L2Loss = 0.006491135340183973\ncanvas step 17, L2Loss = 0.006249904166907072\ncanvas step 18, L2Loss = 0.006046295166015625\ncanvas step 19, L2Loss = 0.005860033445060253\ncanvas step 20, L2Loss = 0.005872267764061689\ncanvas step 21, L2Loss = 0.00566840311512351\ncanvas step 22, L2Loss = 0.005612283945083618\ncanvas step 23, L2Loss = 0.005540042649954557\ncanvas step 24, L2Loss = 0.005471577402204275\ncanvas step 25, L2Loss = 0.005446691066026688\ncanvas step 26, L2Loss = 0.005451116245239973\ncanvas step 27, L2Loss = 0.00531425978988409\ncanvas step 28, L2Loss = 0.005194230005145073\ncanvas step 29, L2Loss = 0.005153748206794262\ncanvas step 30, L2Loss = 0.0051300255581736565\ncanvas step 31, L2Loss = 0.005130386911332607\ncanvas step 32, L2Loss = 0.005068782716989517\ncanvas step 33, L2Loss = 0.004991540685296059\ncanvas step 34, L2Loss = 0.0049132308922708035\ncanvas step 35, L2Loss = 0.004845760762691498\ncanvas step 36, L2Loss = 0.004773181863129139\ncanvas step 37, L2Loss = 0.004727147053927183\ncanvas step 38, L2Loss = 0.004669420421123505\ncanvas step 39, L2Loss = 0.004620404914021492\ndivided canvas step 0, L2Loss = 0.003307740669697523\ndivided canvas step 1, L2Loss = 0.003022675635293126\ndivided canvas step 2, L2Loss = 0.002739946125075221\ndivided canvas step 3, L2Loss = 0.0025829109363257885\ndivided canvas step 4, L2Loss = 0.0024592261761426926\ndivided canvas step 5, L2Loss = 0.0022820893209427595\ndivided canvas step 6, L2Loss = 0.0021267924457788467\ndivided canvas step 7, L2Loss = 0.002044535940513015\ndivided canvas step 8, L2Loss = 0.0019409225787967443\ndivided canvas step 9, L2Loss = 0.0018689618445932865\ndivided canvas step 10, L2Loss = 0.0018029434140771627\ndivided canvas step 11, L2Loss = 0.0017460198141634464\ndivided canvas step 12, L2Loss = 0.001700163003988564\ndivided canvas step 13, L2Loss = 0.001670832629315555\ndivided canvas step 14, L2Loss = 0.001637538312934339\ndivided canvas step 15, L2Loss = 0.0016061669448390603\ndivided canvas step 16, L2Loss = 0.0015731289749965072\ndivided canvas step 17, L2Loss = 0.0015442294534295797\ndivided canvas step 18, L2Loss = 0.0015228502452373505\ndivided canvas step 19, L2Loss = 0.001496538519859314\ndivided canvas step 20, L2Loss = 0.0014746275264769793\ndivided canvas step 21, L2Loss = 0.001459478517062962\ndivided canvas step 22, L2Loss = 0.001444359077140689\ndivided canvas step 23, L2Loss = 0.0014375821920111775\ndivided canvas step 24, L2Loss = 0.0014250167878344655\ndivided canvas step 25, L2Loss = 0.0014068989548832178\ndivided canvas step 26, L2Loss = 0.0013894503936171532\ndivided canvas step 27, L2Loss = 0.0013786253985017538\ndivided canvas step 28, L2Loss = 0.001360491500236094\ndivided canvas step 29, L2Loss = 0.001350260223262012\ndivided canvas step 30, L2Loss = 0.0013426643563434482\ndivided canvas step 31, L2Loss = 0.0013279904378578067\ndivided canvas step 32, L2Loss = 0.0013150947634130716\ndivided canvas step 33, L2Loss = 0.0013005108339712024\ndivided canvas step 34, L2Loss = 0.0012901554582640529\ndivided canvas step 35, L2Loss = 0.0012693328317254782\ndivided canvas step 36, L2Loss = 0.0012676238548010588\ndivided canvas step 37, L2Loss = 0.0012575527653098106\ndivided canvas step 38, L2Loss = 0.0012474938994273543\ndivided canvas step 39, L2Loss = 0.0012422115541994572\ngenerating gif", "version": {"config": {"build": {"gpu": true, "cuda": "11.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["imageio==2.9.0", "numpy==1.21.1", "opencv-python==4.5.3.56", "ipython==7.21.0", "torchvision==0.9.0", "torch==1.8.0", "tensorboardX==2.4"], "system_packages": ["libgl1-mesa-glx", "libglib2.0-0"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "690cd9bfaecc6f227a4ee3cc5b5516f3859d6915125101144a7c241be4cbfc9c", "docker_image_name": "r8.im/hzwer/iccv2019-learningtopaint@sha256:690cd9bfaecc6f227a4ee3cc5b5516f3859d6915125101144a7c241be4cbfc9c", "openapi_schema": {"components": {"schemas": {"Input": {"type": "object", "properties": {"image": {"type": "string", "format": "uri", "x-order": 0, "description": "input image"}, "renderer": {"enum": ["default", "triangle", "round", "bezierwotrans"], "type": "string", "default": "default", "x-order": 1, "description": "type of renderer"}}}, "Output": {"type": "array", "items": {"type": "object", "properties": {"file": {"type": "string", "format": "uri", "x-order": 0}, "text": {"type": "string", "x-order": 1}}}, "x-cog-array-type": "iterator"}}}}, "model": {"absolute_url": "/hzwer/iccv2019-learningtopaint", "username": "hzwer", "name": "iccv2019-learningtopaint", "description": "Teach Machines to Paint", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/megvii-research/ICCV2019-LearningToPaint", "paper_url": "https://www.arxiv-vanity.com/papers/1903.04411/", "arxiv_paper_id": "1903.04411", "cover_image": {"url": "https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif", "file_type": "image", "file_mimetype": "image/gif", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "bjkmjyhddjd6la3sxpzlyuctle", "display_output_as_json": false}, "created_at": "2021-08-27T22:52:17.869Z"}, "user": {"username": "bfirsh", "url": "/bfirsh"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
          }}
          id="react-component-props-d3377657-263d-45ad-a91e-88bd2d5137af"
          type="application/json"
        />

        <div
          data-component="VersionRun"
          data-props="react-component-props-d3377657-263d-45ad-a91e-88bd2d5137af"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <a
                    href="https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png"
                      className="lazy"
                      src="https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png"
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
                          https://replicate.delivery/mgxm/175a4668-2151-40e5-8499-e6e84af10542/lisa.png
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
                  <label className="block mb-2" htmlFor="input-renderer">
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
                    <code>renderer</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-renderer"
                    name="renderer"
                  >
                    <option value="" />
                    <option value="default">default</option>
                    <option value="triangle">triangle</option>
                    <option value="round">round</option>
                    <option value="bezierwotrans">bezierwotrans</option>
                  </select>
                  <p className="text-shade mt-1">type of renderer</p>
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
                        <a
                          href="https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <img
                            alt="file"
                            className="lazy"
                            src="https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif"
                          />
                        </a>
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
                    <figcaption className="pt-4 text-shade" />
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/hzwer/iccv2019-learningtopaint?prediction=bjkmjyhddjd6la3sxpzlyuctle"
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
                  href="/p/bjkmjyhddjd6la3sxpzlyuctle/report"
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
            href="/hzwer/iccv2019-learningtopaint/examples"
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
          <a href="/hzwer/iccv2019-learningtopaint/examples#bjkmjyhddjd6la3sxpzlyuctle">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/3107c8fd-00ee-42d1-9334-ed130e0d63a5/out.gif"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/hzwer/iccv2019-learningtopaint/examples#fbbn7fkuavdr3lpdi6p3l7s6pa">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/df2d637d-e1ca-42db-a169-6b811f6c2c01/out.gif"
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
          <p>
            We show how to teach machines to paint like human painters, who can
            use a small number of strokes to create fantastic paintings. By
            employing a neural renderer in model-based Deep Reinforcement
            Learning (DRL), our agents learn to determine the position and color
            of each stroke and make long-term plans to decompose texture-rich
            images into strokes. Experiments demonstrate that excellent visual
            effects can be achieved using hundreds of strokes. The training
            process does not require the experience of human painters or stroke
            tracking data.
          </p>
        </div>
      </article>
      </>
  );
};

export default IToTDemo;
