import React from "react";

const TToSDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '{"version": {"config": {"build": {"gpu": true, "run": ["pip install git+https://github.com/huggingface/diffusers.git"], "cuda": "11.7.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["numpy==1.23.5", "torch==1.13.0", "torchvision==0.14.0", "torchaudio==0.13.0", "scipy==1.10.0", "tqdm==4.62.3", "pyyaml==5.4.1", "einops==0.3.0", "soundfile==0.11.0", "librosa==0.9.2", "pandas==1.5.3", "torchlibrosa==0.0.9", "transformers==4.26.0", "ftfy==6.1.1"], "system_packages": ["libsndfile1"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "docker_image_name": "r8.im/haoheliu/audio-ldm@sha256:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "start", "completed", "output"], "uniqueItems": true}}}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "start", "completed", "output"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/haoheliu/audio-ldm", "username": "haoheliu", "name": "audio-ldm", "description": "Text-to-audio generation with latent diffusion models", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/haoheliu/AudioLDM", "paper_url": "https://arxiv.org/abs/2301.12503", "arxiv_paper_id": "2301.12503", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/17f584de-98ae-489c-aea8-fdf366858ad6/640px-Spectrogram-19thC.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "c24g2srwuvd23ascxoezjlqxfq", "display_output_as_json": false}, "created_at": "2023-02-03T01:36:52.255Z"}, "model": {"absolute_url": "/haoheliu/audio-ldm", "username": "haoheliu", "name": "audio-ldm", "description": "Text-to-audio generation with latent diffusion models", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/haoheliu/AudioLDM", "paper_url": "https://arxiv.org/abs/2301.12503", "arxiv_paper_id": "2301.12503", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/17f584de-98ae-489c-aea8-fdf366858ad6/640px-Spectrogram-19thC.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "c24g2srwuvd23ascxoezjlqxfq", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/haoheliu/audio-ldm/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/haoheliu/audio-ldm", "predictUrl": "/api/models/haoheliu/audio-ldm/versions/b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95/predictions", "signInRequiredToRun": false, "initialPrediction": {"uuid": "c24g2srwuvd23ascxoezjlqxfq", "version_id": "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "created_at": "2023-02-03T01:46:20.900Z", "updated_at": "2023-03-01T20:52:53.346Z", "completed_at": "2023-02-03T01:46:46.411Z", "status": "succeeded", "inputs": {"text": "two starships are fighting in space with laser cannons", "duration": "5.0", "n_candidates": 3, "guidance_scale": 2.5}, "output": "https://replicate.delivery/pbxt/HtbbL1ngdwJLKhxE9ds3aeIWvm7r3I8e0D5VgjQ4ZLDGmhaQA/two%20starships%20are%20fighting%20in%20space%20with%20laser%20cannons.wav", "output_files": ["https://replicate.delivery/pbxt/HtbbL1ngdwJLKhxE9ds3aeIWvm7r3I8e0D5VgjQ4ZLDGmhaQA/two%20starships%20are%20fighting%20in%20space%20with%20laser%20cannons.wav"], "is_training": false, "error": null, "metrics": {"predict_time": 25.437264}, "run_logs": "DDIM Sampler:   0%|          | 0/200 [00:00\u003C?, ?it/s]\nDDIM Sampler:   0%|          | 1/200 [00:00\u003C00:24,  8.17it/s]\nDDIM Sampler:   1%|          | 2/200 [00:00\u003C00:23,  8.31it/s]\nDDIM Sampler:   2%|\u258f         | 3/200 [00:00\u003C00:23,  8.44it/s]\nDDIM Sampler:   2%|\u258f         | 4/200 [00:00\u003C00:23,  8.51it/s]\nDDIM Sampler:   2%|\u258e         | 5/200 [00:00\u003C00:22,  8.49it/s]\nDDIM Sampler:   3%|\u258e         | 6/200 [00:00\u003C00:23,  8.36it/s]\nDDIM Sampler:   4%|\u258e         | 7/200 [00:00\u003C00:22,  8.43it/s]\nDDIM Sampler:   4%|\u258d         | 8/200 [00:00\u003C00:22,  8.47it/s]\nDDIM Sampler:   4%|\u258d         | 9/200 [00:01\u003C00:22,  8.47it/s]\nDDIM Sampler:   5%|\u258c         | 10/200 [00:01\u003C00:22,  8.46it/s]\nDDIM Sampler:   6%|\u258c         | 11/200 [00:01\u003C00:22,  8.47it/s]\nDDIM Sampler:   6%|\u258c         | 12/200 [00:01\u003C00:22,  8.47it/s]\nDDIM Sampler:   6%|\u258b         | 13/200 [00:01\u003C00:21,  8.52it/s]\nDDIM Sampler:   7%|\u258b         | 14/200 [00:01\u003C00:21,  8.53it/s]\nDDIM Sampler:   8%|\u258a         | 15/200 [00:01\u003C00:21,  8.51it/s]\nDDIM Sampler:   8%|\u258a         | 16/200 [00:01\u003C00:21,  8.47it/s]\nDDIM Sampler:   8%|\u258a         | 17/200 [00:02\u003C00:21,  8.50it/s]\nDDIM Sampler:   9%|\u2589         | 18/200 [00:02\u003C00:21,  8.28it/s]\nDDIM Sampler:  10%|\u2589         | 19/200 [00:02\u003C00:21,  8.32it/s]\nDDIM Sampler:  10%|\u2588         | 20/200 [00:02\u003C00:21,  8.40it/s]\nDDIM Sampler:  10%|\u2588         | 21/200 [00:02\u003C00:21,  8.46it/s]\nDDIM Sampler:  11%|\u2588         | 22/200 [00:02\u003C00:21,  8.47it/s]\nDDIM Sampler:  12%|\u2588\u258f        | 23/200 [00:02\u003C00:20,  8.45it/s]\nDDIM Sampler:  12%|\u2588\u258f        | 24/200 [00:02\u003C00:20,  8.45it/s]\nDDIM Sampler:  12%|\u2588\u258e        | 25/200 [00:02\u003C00:20,  8.45it/s]\nDDIM Sampler:  13%|\u2588\u258e        | 26/200 [00:03\u003C00:20,  8.43it/s]\nDDIM Sampler:  14%|\u2588\u258e        | 27/200 [00:03\u003C00:20,  8.47it/s]\nDDIM Sampler:  14%|\u2588\u258d        | 28/200 [00:03\u003C00:20,  8.50it/s]\nDDIM Sampler:  14%|\u2588\u258d        | 29/200 [00:03\u003C00:20,  8.50it/s]\nDDIM Sampler:  15%|\u2588\u258c        | 30/200 [00:03\u003C00:19,  8.51it/s]\nDDIM Sampler:  16%|\u2588\u258c        | 31/200 [00:03\u003C00:19,  8.48it/s]\nDDIM Sampler:  16%|\u2588\u258c        | 32/200 [00:03\u003C00:19,  8.51it/s]\nDDIM Sampler:  16%|\u2588\u258b        | 33/200 [00:03\u003C00:19,  8.48it/s]\nDDIM Sampler:  17%|\u2588\u258b        | 34/200 [00:04\u003C00:19,  8.48it/s]\nDDIM Sampler:  18%|\u2588\u258a        | 35/200 [00:04\u003C00:19,  8.37it/s]\nDDIM Sampler:  18%|\u2588\u258a        | 36/200 [00:04\u003C00:19,  8.44it/s]\nDDIM Sampler:  18%|\u2588\u258a        | 37/200 [00:04\u003C00:19,  8.45it/s]\nDDIM Sampler:  19%|\u2588\u2589        | 38/200 [00:04\u003C00:19,  8.47it/s]\nDDIM Sampler:  20%|\u2588\u2589        | 39/200 [00:04\u003C00:19,  8.44it/s]\nDDIM Sampler:  20%|\u2588\u2588        | 40/200 [00:04\u003C00:18,  8.44it/s]\nDDIM Sampler:  20%|\u2588\u2588        | 41/200 [00:04\u003C00:18,  8.48it/s]\nDDIM Sampler:  21%|\u2588\u2588        | 42/200 [00:04\u003C00:18,  8.50it/s]\nDDIM Sampler:  22%|\u2588\u2588\u258f       | 43/200 [00:05\u003C00:18,  8.45it/s]\nDDIM Sampler:  22%|\u2588\u2588\u258f       | 44/200 [00:05\u003C00:18,  8.45it/s]\nDDIM Sampler:  22%|\u2588\u2588\u258e       | 45/200 [00:05\u003C00:18,  8.45it/s]\nDDIM Sampler:  23%|\u2588\u2588\u258e       | 46/200 [00:05\u003C00:18,  8.44it/s]\nDDIM Sampler:  24%|\u2588\u2588\u258e       | 47/200 [00:05\u003C00:18,  8.49it/s]\nDDIM Sampler:  24%|\u2588\u2588\u258d       | 48/200 [00:05\u003C00:17,  8.48it/s]\nDDIM Sampler:  24%|\u2588\u2588\u258d       | 49/200 [00:05\u003C00:17,  8.47it/s]\nDDIM Sampler:  25%|\u2588\u2588\u258c       | 50/200 [00:05\u003C00:17,  8.48it/s]\nDDIM Sampler:  26%|\u2588\u2588\u258c       | 51/200 [00:06\u003C00:17,  8.45it/s]\nDDIM Sampler:  26%|\u2588\u2588\u258c       | 52/200 [00:06\u003C00:17,  8.41it/s]\nDDIM Sampler:  26%|\u2588\u2588\u258b       | 53/200 [00:06\u003C00:17,  8.45it/s]\nDDIM Sampler:  27%|\u2588\u2588\u258b       | 54/200 [00:06\u003C00:17,  8.46it/s]\nDDIM Sampler:  28%|\u2588\u2588\u258a       | 55/200 [00:06\u003C00:17,  8.37it/s]\nDDIM Sampler:  28%|\u2588\u2588\u258a       | 56/200 [00:06\u003C00:17,  8.38it/s]\nDDIM Sampler:  28%|\u2588\u2588\u258a       | 57/200 [00:06\u003C00:17,  8.41it/s]\nDDIM Sampler:  29%|\u2588\u2588\u2589       | 58/200 [00:06\u003C00:16,  8.41it/s]\nDDIM Sampler:  30%|\u2588\u2588\u2589       | 59/200 [00:06\u003C00:16,  8.42it/s]\nDDIM Sampler:  30%|\u2588\u2588\u2588       | 60/200 [00:07\u003C00:16,  8.41it/s]\nDDIM Sampler:  30%|\u2588\u2588\u2588       | 61/200 [00:07\u003C00:16,  8.45it/s]\nDDIM Sampler:  31%|\u2588\u2588\u2588       | 62/200 [00:07\u003C00:16,  8.46it/s]\nDDIM Sampler:  32%|\u2588\u2588\u2588\u258f      | 63/200 [00:07\u003C00:16,  8.43it/s]\nDDIM Sampler:  32%|\u2588\u2588\u2588\u258f      | 64/200 [00:07\u003C00:16,  8.39it/s]\nDDIM Sampler:  32%|\u2588\u2588\u2588\u258e      | 65/200 [00:07\u003C00:16,  8.40it/s]\nDDIM Sampler:  33%|\u2588\u2588\u2588\u258e      | 66/200 [00:07\u003C00:15,  8.39it/s]\nDDIM Sampler:  34%|\u2588\u2588\u2588\u258e      | 67/200 [00:07\u003C00:15,  8.41it/s]\nDDIM Sampler:  34%|\u2588\u2588\u2588\u258d      | 68/200 [00:08\u003C00:15,  8.34it/s]\nDDIM Sampler:  34%|\u2588\u2588\u2588\u258d      | 69/200 [00:08\u003C00:16,  8.01it/s]\nDDIM Sampler:  35%|\u2588\u2588\u2588\u258c      | 70/200 [00:08\u003C00:15,  8.15it/s]\nDDIM Sampler:  36%|\u2588\u2588\u2588\u258c      | 71/200 [00:08\u003C00:15,  8.24it/s]\nDDIM Sampler:  36%|\u2588\u2588\u2588\u258c      | 72/200 [00:08\u003C00:15,  8.29it/s]\nDDIM Sampler:  36%|\u2588\u2588\u2588\u258b      | 73/200 [00:08\u003C00:15,  8.32it/s]\nDDIM Sampler:  37%|\u2588\u2588\u2588\u258b      | 74/200 [00:08\u003C00:15,  8.39it/s]\nDDIM Sampler:  38%|\u2588\u2588\u2588\u258a      | 75/200 [00:08\u003C00:14,  8.42it/s]\nDDIM Sampler:  38%|\u2588\u2588\u2588\u258a      | 76/200 [00:09\u003C00:14,  8.42it/s]\nDDIM Sampler:  38%|\u2588\u2588\u2588\u258a      | 77/200 [00:09\u003C00:14,  8.41it/s]\nDDIM Sampler:  39%|\u2588\u2588\u2588\u2589      | 78/200 [00:09\u003C00:14,  8.42it/s]\nDDIM Sampler:  40%|\u2588\u2588\u2588\u2589      | 79/200 [00:09\u003C00:14,  8.39it/s]\nDDIM Sampler:  40%|\u2588\u2588\u2588\u2588      | 80/200 [00:09\u003C00:14,  8.40it/s]\nDDIM Sampler:  40%|\u2588\u2588\u2588\u2588      | 81/200 [00:09\u003C00:14,  8.44it/s]\nDDIM Sampler:  41%|\u2588\u2588\u2588\u2588      | 82/200 [00:09\u003C00:13,  8.46it/s]\nDDIM Sampler:  42%|\u2588\u2588\u2588\u2588\u258f     | 83/200 [00:09\u003C00:13,  8.49it/s]\nDDIM Sampler:  42%|\u2588\u2588\u2588\u2588\u258f     | 84/200 [00:09\u003C00:13,  8.46it/s]\nDDIM Sampler:  42%|\u2588\u2588\u2588\u2588\u258e     | 85/200 [00:10\u003C00:13,  8.45it/s]\nDDIM Sampler:  43%|\u2588\u2588\u2588\u2588\u258e     | 86/200 [00:10\u003C00:13,  8.47it/s]\nDDIM Sampler:  44%|\u2588\u2588\u2588\u2588\u258e     | 87/200 [00:10\u003C00:13,  8.47it/s]\nDDIM Sampler:  44%|\u2588\u2588\u2588\u2588\u258d     | 88/200 [00:10\u003C00:13,  8.44it/s]\nDDIM Sampler:  44%|\u2588\u2588\u2588\u2588\u258d     | 89/200 [00:10\u003C00:13,  8.46it/s]\nDDIM Sampler:  45%|\u2588\u2588\u2588\u2588\u258c     | 90/200 [00:10\u003C00:13,  8.45it/s]\nDDIM Sampler:  46%|\u2588\u2588\u2588\u2588\u258c     | 91/200 [00:10\u003C00:12,  8.44it/s]\nDDIM Sampler:  46%|\u2588\u2588\u2588\u2588\u258c     | 92/200 [00:10\u003C00:12,  8.47it/s]\nDDIM Sampler:  46%|\u2588\u2588\u2588\u2588\u258b     | 93/200 [00:11\u003C00:12,  8.48it/s]\nDDIM Sampler:  47%|\u2588\u2588\u2588\u2588\u258b     | 94/200 [00:11\u003C00:12,  8.42it/s]\nDDIM Sampler:  48%|\u2588\u2588\u2588\u2588\u258a     | 95/200 [00:11\u003C00:12,  8.43it/s]\nDDIM Sampler:  48%|\u2588\u2588\u2588\u2588\u258a     | 96/200 [00:11\u003C00:12,  8.43it/s]\nDDIM Sampler:  48%|\u2588\u2588\u2588\u2588\u258a     | 97/200 [00:11\u003C00:12,  8.40it/s]\nDDIM Sampler:  49%|\u2588\u2588\u2588\u2588\u2589     | 98/200 [00:11\u003C00:12,  8.39it/s]\nDDIM Sampler:  50%|\u2588\u2588\u2588\u2588\u2589     | 99/200 [00:11\u003C00:11,  8.44it/s]\nDDIM Sampler:  50%|\u2588\u2588\u2588\u2588\u2588     | 100/200 [00:11\u003C00:11,  8.46it/s]\nDDIM Sampler:  50%|\u2588\u2588\u2588\u2588\u2588     | 101/200 [00:11\u003C00:11,  8.46it/s]\nDDIM Sampler:  51%|\u2588\u2588\u2588\u2588\u2588     | 102/200 [00:12\u003C00:11,  8.43it/s]\nDDIM Sampler:  52%|\u2588\u2588\u2588\u2588\u2588\u258f    | 103/200 [00:12\u003C00:11,  8.40it/s]\nDDIM Sampler:  52%|\u2588\u2588\u2588\u2588\u2588\u258f    | 104/200 [00:12\u003C00:11,  8.40it/s]\nDDIM Sampler:  52%|\u2588\u2588\u2588\u2588\u2588\u258e    | 105/200 [00:12\u003C00:11,  8.45it/s]\nDDIM Sampler:  53%|\u2588\u2588\u2588\u2588\u2588\u258e    | 106/200 [00:12\u003C00:11,  8.44it/s]\nDDIM Sampler:  54%|\u2588\u2588\u2588\u2588\u2588\u258e    | 107/200 [00:12\u003C00:11,  8.44it/s]\nDDIM Sampler:  54%|\u2588\u2588\u2588\u2588\u2588\u258d    | 108/200 [00:12\u003C00:10,  8.46it/s]\nDDIM Sampler:  55%|\u2588\u2588\u2588\u2588\u2588\u258d    | 109/200 [00:12\u003C00:10,  8.43it/s]\nDDIM Sampler:  55%|\u2588\u2588\u2588\u2588\u2588\u258c    | 110/200 [00:13\u003C00:10,  8.39it/s]\nDDIM Sampler:  56%|\u2588\u2588\u2588\u2588\u2588\u258c    | 111/200 [00:13\u003C00:10,  8.36it/s]\nDDIM Sampler:  56%|\u2588\u2588\u2588\u2588\u2588\u258c    | 112/200 [00:13\u003C00:10,  8.29it/s]\nDDIM Sampler:  56%|\u2588\u2588\u2588\u2588\u2588\u258b    | 113/200 [00:13\u003C00:10,  8.33it/s]\nDDIM Sampler:  57%|\u2588\u2588\u2588\u2588\u2588\u258b    | 114/200 [00:13\u003C00:10,  8.35it/s]\nDDIM Sampler:  57%|\u2588\u2588\u2588\u2588\u2588\u258a    | 115/200 [00:13\u003C00:10,  8.37it/s]\nDDIM Sampler:  58%|\u2588\u2588\u2588\u2588\u2588\u258a    | 116/200 [00:13\u003C00:10,  8.38it/s]\nDDIM Sampler:  58%|\u2588\u2588\u2588\u2588\u2588\u258a    | 117/200 [00:13\u003C00:09,  8.40it/s]\nDDIM Sampler:  59%|\u2588\u2588\u2588\u2588\u2588\u2589    | 118/200 [00:14\u003C00:09,  8.43it/s]\nDDIM Sampler:  60%|\u2588\u2588\u2588\u2588\u2588\u2589    | 119/200 [00:14\u003C00:09,  8.38it/s]\nDDIM Sampler:  60%|\u2588\u2588\u2588\u2588\u2588\u2588    | 120/200 [00:14\u003C00:09,  8.35it/s]\nDDIM Sampler:  60%|\u2588\u2588\u2588\u2588\u2588\u2588    | 121/200 [00:14\u003C00:09,  8.34it/s]\nDDIM Sampler:  61%|\u2588\u2588\u2588\u2588\u2588\u2588    | 122/200 [00:14\u003C00:09,  8.36it/s]\nDDIM Sampler:  62%|\u2588\u2588\u2588\u2588\u2588\u2588\u258f   | 123/200 [00:14\u003C00:09,  8.35it/s]\nDDIM Sampler:  62%|\u2588\u2588\u2588\u2588\u2588\u2588\u258f   | 124/200 [00:14\u003C00:09,  8.36it/s]\nDDIM Sampler:  62%|\u2588\u2588\u2588\u2588\u2588\u2588\u258e   | 125/200 [00:14\u003C00:08,  8.39it/s]\nDDIM Sampler:  63%|\u2588\u2588\u2588\u2588\u2588\u2588\u258e   | 126/200 [00:14\u003C00:08,  8.41it/s]\nDDIM Sampler:  64%|\u2588\u2588\u2588\u2588\u2588\u2588\u258e   | 127/200 [00:15\u003C00:08,  8.45it/s]\nDDIM Sampler:  64%|\u2588\u2588\u2588\u2588\u2588\u2588\u258d   | 128/200 [00:15\u003C00:08,  8.41it/s]\nDDIM Sampler:  64%|\u2588\u2588\u2588\u2588\u2588\u2588\u258d   | 129/200 [00:15\u003C00:08,  8.38it/s]\nDDIM Sampler:  65%|\u2588\u2588\u2588\u2588\u2588\u2588\u258c   | 130/200 [00:15\u003C00:08,  8.41it/s]\nDDIM Sampler:  66%|\u2588\u2588\u2588\u2588\u2588\u2588\u258c   | 131/200 [00:15\u003C00:08,  8.43it/s]\nDDIM Sampler:  66%|\u2588\u2588\u2588\u2588\u2588\u2588\u258c   | 132/200 [00:15\u003C00:08,  8.41it/s]\nDDIM Sampler:  66%|\u2588\u2588\u2588\u2588\u2588\u2588\u258b   | 133/200 [00:15\u003C00:07,  8.39it/s]\nDDIM Sampler:  67%|\u2588\u2588\u2588\u2588\u2588\u2588\u258b   | 134/200 [00:15\u003C00:07,  8.38it/s]\nDDIM Sampler:  68%|\u2588\u2588\u2588\u2588\u2588\u2588\u258a   | 135/200 [00:16\u003C00:07,  8.39it/s]\nDDIM Sampler:  68%|\u2588\u2588\u2588\u2588\u2588\u2588\u258a   | 136/200 [00:16\u003C00:07,  8.40it/s]\nDDIM Sampler:  68%|\u2588\u2588\u2588\u2588\u2588\u2588\u258a   | 137/200 [00:16\u003C00:07,  8.41it/s]\nDDIM Sampler:  69%|\u2588\u2588\u2588\u2588\u2588\u2588\u2589   | 138/200 [00:16\u003C00:07,  8.39it/s]\nDDIM Sampler:  70%|\u2588\u2588\u2588\u2588\u2588\u2588\u2589   | 139/200 [00:16\u003C00:07,  8.39it/s]\nDDIM Sampler:  70%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588   | 140/200 [00:16\u003C00:07,  8.39it/s]\nDDIM Sampler:  70%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588   | 141/200 [00:16\u003C00:07,  8.40it/s]\nDDIM Sampler:  71%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588   | 142/200 [00:16\u003C00:06,  8.38it/s]\nDDIM Sampler:  72%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f  | 143/200 [00:16\u003C00:06,  8.39it/s]\nDDIM Sampler:  72%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f  | 144/200 [00:17\u003C00:06,  8.38it/s]\nDDIM Sampler:  72%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e  | 145/200 [00:17\u003C00:06,  8.35it/s]\nDDIM Sampler:  73%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e  | 146/200 [00:17\u003C00:06,  8.39it/s]\nDDIM Sampler:  74%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e  | 147/200 [00:17\u003C00:06,  8.38it/s]\nDDIM Sampler:  74%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d  | 148/200 [00:17\u003C00:06,  8.37it/s]\nDDIM Sampler:  74%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d  | 149/200 [00:17\u003C00:06,  8.34it/s]\nDDIM Sampler:  75%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 150/200 [00:17\u003C00:06,  8.33it/s]\nDDIM Sampler:  76%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 151/200 [00:17\u003C00:05,  8.31it/s]\nDDIM Sampler:  76%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c  | 152/200 [00:18\u003C00:05,  8.33it/s]\nDDIM Sampler:  76%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b  | 153/200 [00:18\u003C00:05,  8.32it/s]\nDDIM Sampler:  77%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b  | 154/200 [00:18\u003C00:05,  8.27it/s]\nDDIM Sampler:  78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 155/200 [00:18\u003C00:05,  8.23it/s]\nDDIM Sampler:  78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 156/200 [00:18\u003C00:05,  8.27it/s]\nDDIM Sampler:  78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 157/200 [00:18\u003C00:05,  8.30it/s]\nDDIM Sampler:  79%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589  | 158/200 [00:18\u003C00:05,  8.32it/s]\nDDIM Sampler:  80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589  | 159/200 [00:18\u003C00:04,  8.34it/s]\nDDIM Sampler:  80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  | 160/200 [00:19\u003C00:04,  8.37it/s]\nDDIM Sampler:  80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  | 161/200 [00:19\u003C00:04,  8.38it/s]\nDDIM Sampler:  81%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  | 162/200 [00:19\u003C00:04,  8.37it/s]\nDDIM Sampler:  82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f | 163/200 [00:19\u003C00:04,  8.36it/s]\nDDIM Sampler:  82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f | 164/200 [00:19\u003C00:04,  8.33it/s]\nDDIM Sampler:  82%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e | 165/200 [00:19\u003C00:04,  8.32it/s]\nDDIM Sampler:  83%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e | 166/200 [00:19\u003C00:04,  8.35it/s]\nDDIM Sampler:  84%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e | 167/200 [00:19\u003C00:03,  8.33it/s]\nDDIM Sampler:  84%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d | 168/200 [00:19\u003C00:03,  8.35it/s]\nDDIM Sampler:  84%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d | 169/200 [00:20\u003C00:03,  8.35it/s]\nDDIM Sampler:  85%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c | 170/200 [00:20\u003C00:03,  8.34it/s]\nDDIM Sampler:  86%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c | 171/200 [00:20\u003C00:03,  8.33it/s]\nDDIM Sampler:  86%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c | 172/200 [00:20\u003C00:03,  8.37it/s]\nDDIM Sampler:  86%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b | 173/200 [00:20\u003C00:03,  8.39it/s]\nDDIM Sampler:  87%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b | 174/200 [00:20\u003C00:03,  8.38it/s]\nDDIM Sampler:  88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 175/200 [00:20\u003C00:02,  8.36it/s]\nDDIM Sampler:  88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 176/200 [00:20\u003C00:02,  8.37it/s]\nDDIM Sampler:  88%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a | 177/200 [00:21\u003C00:02,  8.36it/s]\nDDIM Sampler:  89%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589 | 178/200 [00:21\u003C00:02,  8.37it/s]\nDDIM Sampler:  90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589 | 179/200 [00:21\u003C00:02,  8.37it/s]\nDDIM Sampler:  90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 180/200 [00:21\u003C00:02,  8.34it/s]\nDDIM Sampler:  90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 181/200 [00:21\u003C00:02,  8.35it/s]\nDDIM Sampler:  91%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 182/200 [00:21\u003C00:02,  8.36it/s]\nDDIM Sampler:  92%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f| 183/200 [00:21\u003C00:02,  8.35it/s]\nDDIM Sampler:  92%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f| 184/200 [00:21\u003C00:01,  8.34it/s]\nDDIM Sampler:  92%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e| 185/200 [00:22\u003C00:01,  8.35it/s]\nDDIM Sampler:  93%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e| 186/200 [00:22\u003C00:01,  8.36it/s]\nDDIM Sampler:  94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e| 187/200 [00:22\u003C00:01,  8.35it/s]\nDDIM Sampler:  94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d| 188/200 [00:22\u003C00:01,  8.37it/s]\nDDIM Sampler:  94%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d| 189/200 [00:22\u003C00:01,  8.35it/s]\nDDIM Sampler:  95%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c| 190/200 [00:22\u003C00:01,  8.34it/s]\nDDIM Sampler:  96%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c| 191/200 [00:22\u003C00:01,  8.33it/s]\nDDIM Sampler:  96%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c| 192/200 [00:22\u003C00:00,  8.33it/s]\nDDIM Sampler:  96%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b| 193/200 [00:22\u003C00:00,  8.33it/s]\nDDIM Sampler:  97%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b| 194/200 [00:23\u003C00:00,  8.33it/s]\nDDIM Sampler:  98%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a| 195/200 [00:23\u003C00:00,  8.34it/s]\nDDIM Sampler:  98%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a| 196/200 [00:23\u003C00:00,  8.33it/s]\nDDIM Sampler:  98%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a| 197/200 [00:23\u003C00:00,  8.32it/s]\nDDIM Sampler:  99%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589| 198/200 [00:23\u003C00:00,  8.31it/s]\nDDIM Sampler: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589| 199/200 [00:23\u003C00:00,  8.32it/s]\nDDIM Sampler: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 200/200 [00:23\u003C00:00,  8.34it/s]\nDDIM Sampler: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 200/200 [00:23\u003C00:00,  8.40it/s]", "version": {"config": {"build": {"gpu": true, "run": ["pip install git+https://github.com/huggingface/diffusers.git"], "cuda": "11.7.1", "cudnn": "8", "python_version": "3.8", "python_packages": ["numpy==1.23.5", "torch==1.13.0", "torchvision==0.14.0", "torchaudio==0.13.0", "scipy==1.10.0", "tqdm==4.62.3", "pyyaml==5.4.1", "einops==0.3.0", "soundfile==0.11.0", "librosa==0.9.2", "pandas==1.5.3", "torchlibrosa==0.0.9", "transformers==4.26.0", "ftfy==6.1.1"], "system_packages": ["libsndfile1"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "docker_image_name": "r8.im/haoheliu/audio-ldm@sha256:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "start", "completed", "output"], "uniqueItems": true}}}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "start", "completed", "output"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["text"], "properties": {"text": {"type": "string", "title": "Text", "x-order": 0, "description": "Text prompt from which to generate audio"}, "duration": {"enum": ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"], "type": "string", "title": "duration", "description": "Duration of the generated audio (in seconds). Higher duration may OOM.", "default": "5.0", "x-order": 1}, "random_seed": {"type": "integer", "title": "Random Seed", "x-order": 3, "description": "Random seed for the model (optional)"}, "n_candidates": {"type": "integer", "title": "N Candidates", "default": 3, "x-order": 4, "description": "Return the best of n different candidate audios"}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 2.5, "x-order": 2, "description": "Guidance scale for the model. (Large scale -\u003E better quality and relavancy to text; small scale -\u003E better diversity)"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/haoheliu/audio-ldm", "username": "haoheliu", "name": "audio-ldm", "description": "Text-to-audio generation with latent diffusion models", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/haoheliu/AudioLDM", "paper_url": "https://arxiv.org/abs/2301.12503", "arxiv_paper_id": "2301.12503", "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/17f584de-98ae-489c-aea8-fdf366858ad6/640px-Spectrogram-19thC.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "c24g2srwuvd23ascxoezjlqxfq", "display_output_as_json": false}, "created_at": "2023-02-03T01:36:52.255Z"}, "user": {"username": "jagilley", "url": "/jagilley"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
          }}
          id="react-component-props-5ebd69d0-2686-4075-97cb-8136a11a9005"
          type="application/json"
        />

        <div
          data-component="VersionRun"
          data-props="react-component-props-5ebd69d0-2686-4075-97cb-8136a11a9005"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-text">
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
                    <code>text</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      defaultValue="two starships are fighting in space with laser cannons"
                      name="text"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    Text prompt from which to generate audio
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-duration">
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
                    <code>duration</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-duration"
                    name="duration"
                  >
                    <option value="" />
                    <option value="2.5">2.5</option>
                    <option value="5.0">5.0</option>
                    <option value="7.5">7.5</option>
                    <option value="10.0">10.0</option>
                    <option value="12.5">12.5</option>
                    <option value="15.0">15.0</option>
                    <option value="17.5">17.5</option>
                    <option value="20.0">20.0</option>
                  </select>
                  <p className="text-shade mt-1">
                    Duration of the generated audio (in seconds). Higher
                    duration may OOM.
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-guidance_scale">
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
                    <code>guidance_scale</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="2.5"
                    id="input-guidance_scale"
                    name="guidance_scale"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    {`Guidance scale for the model. (Large scale -> better quality and relavancy to text; small scale -> better diversity)`}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-random_seed">
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
                    <code>random_seed</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue=""
                    id="input-random_seed"
                    name="random_seed"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Random seed for the model (optional)
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-n_candidates">
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
                    <code>n_candidates</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="3"
                    id="input-n_candidates"
                    name="n_candidates"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Return the best of n different candidate audios
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
                    <div>
                      <div>
                        <div className="h-40">
                          <div
                            aria-label="Audio Player"
                            className="video-js vjs-default-skin vjs-paused vjs-fill vjs-wavesurfer vjs-controls-enabled vjs-audio vjs-workinghover vjs-v7 vjs-user-active"
                            data-vjs-player="true"
                            id="vjs_video_3"
                            lang="en"
                            role="region"
                            style={{
                              background: "white",
                            }}
                            tabIndex="-1"
                            translate="no"
                          >
                            <audio
                              __idm_id__="2031617"
                              className="vjs-tech"
                              id="vjs_video_3_html5_api"
                              role="application"
                              src="https://replicate.delivery/pbxt/HtbbL1ngdwJLKhxE9ds3aeIWvm7r3I8e0D5VgjQ4ZLDGmhaQA/two%20starships%20are%20fighting%20in%20space%20with%20laser%20cannons.wav"
                              tabIndex="-1"
                            />
                            <div
                              aria-disabled="false"
                              className="vjs-poster vjs-hidden"
                              tabIndex="-1"
                            />
                            <div
                              aria-atomic="true"
                              aria-live="off"
                              className="vjs-text-track-display"
                              translate="yes"
                            >
                              <div
                                style={{
                                  inset: "0px",
                                  margin: "1.5%",
                                  position: "absolute",
                                }}
                              />
                            </div>
                            <div
                              className="vjs-loading-spinner vjs-hidden"
                              dir="ltr"
                            >
                              <span className="vjs-control-text">
                                Video Player is loading.
                              </span>
                            </div>
                            <button
                              aria-disabled="false"
                              className="vjs-big-play-button vjs-hidden"
                              title="Play Video"
                              type="button"
                            >
                              <span
                                aria-hidden="true"
                                className="vjs-icon-placeholder"
                              />
                              <span
                                aria-live="polite"
                                className="vjs-control-text"
                              >
                                Play Video
                              </span>
                            </button>
                            <div
                              className="vjs-control-bar"
                              dir="ltr"
                              style={{
                                display: "flex",
                              }}
                            >
                              <button
                                aria-disabled="false"
                                className="vjs-play-control vjs-control vjs-button"
                                title="Play"
                                type="button"
                              >
                                <span
                                  aria-hidden="true"
                                  className="vjs-icon-placeholder"
                                />
                                <span
                                  aria-live="polite"
                                  className="vjs-control-text"
                                >
                                  Play
                                </span>
                              </button>
                              <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
                                <button
                                  aria-disabled="false"
                                  className="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                                  title="Mute"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Mute
                                  </span>
                                </button>
                                <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                                  <div
                                    aria-label="Volume Level"
                                    aria-live="polite"
                                    aria-valuemax="100"
                                    aria-valuemin="0"
                                    aria-valuenow="100"
                                    aria-valuetext="100%"
                                    className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
                                    role="slider"
                                    tabIndex="0"
                                  >
                                    <div className="vjs-mouse-display">
                                      <div
                                        aria-hidden="true"
                                        className="vjs-volume-tooltip"
                                      />
                                    </div>
                                    <div className="vjs-volume-level">
                                      <span className="vjs-control-text" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vjs-current-time vjs-time-control vjs-control"
                                style={{
                                  display: "block",
                                }}
                              >
                                <span
                                  className="vjs-control-text"
                                  role="presentation"
                                >
                                  Current Time 
                                </span>
                                <span
                                  aria-live="off"
                                  className="vjs-current-time-display"
                                  role="presentation"
                                >
                                  00:00:000
                                </span>
                              </div>
                              <div
                                aria-hidden="true"
                                className="vjs-time-control vjs-time-divider"
                                style={{
                                  display: "block",
                                }}
                              >
                                <div>
                                  <span>/</span>
                                </div>
                              </div>
                              <div
                                className="vjs-duration vjs-time-control vjs-control"
                                style={{
                                  display: "block",
                                }}
                              >
                                <span
                                  className="vjs-control-text"
                                  role="presentation"
                                >
                                  Duration 
                                </span>
                                <span
                                  aria-live="off"
                                  className="vjs-duration-display"
                                  role="presentation"
                                >
                                  00:05:122
                                </span>
                              </div>
                              <div className="vjs-progress-control vjs-control">
                                <div
                                  aria-label="Progress Bar"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="0.00"
                                  aria-valuetext="00:00:000 of 00:05:122"
                                  className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                                  role="slider"
                                  tabIndex="0"
                                >
                                  <div
                                    className="vjs-load-progress"
                                    style={{
                                      width: "100%",
                                    }}
                                  >
                                    <span className="vjs-control-text">
                                      <span>Loaded</span>:{" "}
                                      <span className="vjs-control-text-loaded-percentage">
                                        100.00%
                                      </span>
                                    </span>
                                    <div
                                      data-end="5.122"
                                      data-start="0"
                                      style={{
                                        left: "0%",
                                        width: "100%",
                                      }}
                                    />
                                  </div>
                                  <div className="vjs-mouse-display">
                                    <div
                                      aria-hidden="true"
                                      className="vjs-time-tooltip"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    className="vjs-play-progress vjs-slider-bar"
                                    style={{
                                      width: "0%",
                                    }}
                                  >
                                    <div
                                      aria-hidden="true"
                                      className="vjs-time-tooltip"
                                      style={{
                                        right: "-35px",
                                      }}
                                    >
                                      00:00:000
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vjs-live-control vjs-control vjs-hidden">
                                <div
                                  aria-live="off"
                                  className="vjs-live-display"
                                >
                                  <span className="vjs-control-text">
                                    Stream Type 
                                  </span>
                                  LIVE
                                </div>
                              </div>
                              <button
                                aria-disabled="false"
                                className="vjs-seek-to-live-control vjs-control"
                                title="Seek to live, currently behind live"
                                type="button"
                              >
                                <span
                                  aria-hidden="true"
                                  className="vjs-icon-placeholder"
                                />
                                <span
                                  aria-live="polite"
                                  className="vjs-control-text"
                                >
                                  Seek to live, currently behind live
                                </span>
                                <span
                                  aria-hidden="true"
                                  className="vjs-seek-to-live-text"
                                >
                                  LIVE
                                </span>
                              </button>
                              <div className="vjs-remaining-time vjs-time-control vjs-control vjs-hidden">
                                <span
                                  className="vjs-control-text"
                                  role="presentation"
                                >
                                  Remaining Time 
                                </span>
                                <span aria-hidden="true">-</span>
                                <span
                                  aria-live="off"
                                  className="vjs-remaining-time-display"
                                  role="presentation"
                                >
                                  00:05:000
                                </span>
                              </div>
                              <div className="vjs-custom-control-spacer vjs-spacer ">
                                 
                              </div>
                              <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                <div
                                  className="vjs-playback-rate-value"
                                  id="vjs-playback-rate-value-label-vjs_video_3_component_325"
                                >
                                  1x
                                </div>
                                <button
                                  aria-describedby="vjs-playback-rate-value-label-vjs_video_3_component_325"
                                  aria-disabled="false"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                                  title="Playback Rate"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Playback Rate
                                  </span>
                                </button>
                                <div className="vjs-menu">
                                  <ul
                                    className="vjs-menu-content"
                                    role="menu"
                                  />
                                </div>
                              </div>
                              <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                <button
                                  aria-disabled="false"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                  title="Chapters"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Chapters
                                  </span>
                                </button>
                                <div className="vjs-menu">
                                  <ul className="vjs-menu-content" role="menu">
                                    <li
                                      className="vjs-menu-title"
                                      tabIndex="-1"
                                    >
                                      Chapters
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                <button
                                  aria-disabled="false"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                  title="Descriptions"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Descriptions
                                  </span>
                                </button>
                                <div className="vjs-menu">
                                  <ul className="vjs-menu-content" role="menu">
                                    <li
                                      aria-checked="true"
                                      aria-disabled="false"
                                      className="vjs-menu-item vjs-selected"
                                      role="menuitemradio"
                                      tabIndex="-1"
                                    >
                                      <span className="vjs-menu-item-text">
                                        descriptions off
                                      </span>
                                      <span
                                        aria-live="polite"
                                        className="vjs-control-text"
                                      >
                                        , selected
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                <button
                                  aria-disabled="false"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                  title="Captions"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Captions
                                  </span>
                                </button>
                                <div className="vjs-menu">
                                  <ul className="vjs-menu-content" role="menu">
                                    <li
                                      aria-disabled="false"
                                      className="vjs-menu-item vjs-texttrack-settings"
                                      role="menuitem"
                                      tabIndex="-1"
                                    >
                                      <span className="vjs-menu-item-text">
                                        captions settings
                                      </span>
                                      <span
                                        aria-live="polite"
                                        className="vjs-control-text"
                                      >
                                        , opens captions settings dialog
                                      </span>
                                    </li>
                                    <li
                                      aria-checked="true"
                                      aria-disabled="false"
                                      className="vjs-menu-item vjs-selected"
                                      role="menuitemradio"
                                      tabIndex="-1"
                                    >
                                      <span className="vjs-menu-item-text">
                                        captions off
                                      </span>
                                      <span
                                        aria-live="polite"
                                        className="vjs-control-text"
                                      >
                                        , selected
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                <button
                                  aria-disabled="false"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                  title="Audio Track"
                                  type="button"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="vjs-icon-placeholder"
                                  />
                                  <span
                                    aria-live="polite"
                                    className="vjs-control-text"
                                  >
                                    Audio Track
                                  </span>
                                </button>
                                <div className="vjs-menu">
                                  <ul
                                    className="vjs-menu-content"
                                    role="menu"
                                  />
                                </div>
                              </div>
                              <button
                                aria-disabled="true"
                                className="vjs-picture-in-picture-control vjs-control vjs-button vjs-disabled vjs-hidden"
                                disabled
                                title="Picture-in-Picture"
                                type="button"
                              >
                                <span
                                  aria-hidden="true"
                                  className="vjs-icon-placeholder"
                                />
                                <span
                                  aria-live="polite"
                                  className="vjs-control-text"
                                >
                                  Picture-in-Picture
                                </span>
                              </button>
                              <button
                                aria-disabled="false"
                                className="vjs-fullscreen-control vjs-control vjs-button"
                                title="Fullscreen"
                                type="button"
                              >
                                <span
                                  aria-hidden="true"
                                  className="vjs-icon-placeholder"
                                />
                                <span
                                  aria-live="polite"
                                  className="vjs-control-text"
                                >
                                  Fullscreen
                                </span>
                              </button>
                            </div>
                            <div
                              aria-describedby="vjs_video_3_component_542_description"
                              aria-hidden="true"
                              aria-label="Modal Window"
                              className="vjs-error-display vjs-modal-dialog vjs-hidden "
                              role="dialog"
                              tabIndex="-1"
                            >
                              <p
                                className="vjs-modal-dialog-description vjs-control-text"
                                id="vjs_video_3_component_542_description"
                              >
                                This is a modal window.
                              </p>
                              <div
                                className="vjs-modal-dialog-content"
                                role="document"
                              />
                            </div>
                            <div
                              aria-describedby="vjs_video_3_component_548_description"
                              aria-hidden="true"
                              aria-label="Caption Settings Dialog"
                              className="vjs-modal-dialog vjs-hidden  vjs-text-track-settings"
                              role="dialog"
                              tabIndex="-1"
                            >
                              <p
                                className="vjs-modal-dialog-description vjs-control-text"
                                id="vjs_video_3_component_548_description"
                              >
                                Beginning of dialog window. Escape will cancel
                                and close the window.
                              </p>
                              <div
                                className="vjs-modal-dialog-content"
                                role="document"
                              >
                                <div className="vjs-track-settings-colors">
                                  <fieldset className="vjs-fg-color vjs-track-setting">
                                    <legend id="captions-text-legend-vjs_video_3_component_548">
                                      Text
                                    </legend>
                                    <label
                                      className="vjs-label"
                                      id="captions-foreground-color-vjs_video_3_component_548"
                                    >
                                      Color
                                    </label>
                                    <select aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-White"
                                        id="captions-foreground-color-vjs_video_3_component_548-White"
                                        value="#FFF"
                                      >
                                        White
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Black"
                                        id="captions-foreground-color-vjs_video_3_component_548-Black"
                                        value="#000"
                                      >
                                        Black
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Red"
                                        id="captions-foreground-color-vjs_video_3_component_548-Red"
                                        value="#F00"
                                      >
                                        Red
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Green"
                                        id="captions-foreground-color-vjs_video_3_component_548-Green"
                                        value="#0F0"
                                      >
                                        Green
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Blue"
                                        id="captions-foreground-color-vjs_video_3_component_548-Blue"
                                        value="#00F"
                                      >
                                        Blue
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Yellow"
                                        id="captions-foreground-color-vjs_video_3_component_548-Yellow"
                                        value="#FF0"
                                      >
                                        Yellow
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Magenta"
                                        id="captions-foreground-color-vjs_video_3_component_548-Magenta"
                                        value="#F0F"
                                      >
                                        Magenta
                                      </option>
                                      <option
                                        aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548 captions-foreground-color-vjs_video_3_component_548-Cyan"
                                        id="captions-foreground-color-vjs_video_3_component_548-Cyan"
                                        value="#0FF"
                                      >
                                        Cyan
                                      </option>
                                    </select>
                                    <span className="vjs-text-opacity vjs-opacity">
                                      <label
                                        className="vjs-label"
                                        id="captions-foreground-opacity-vjs_video_3_component_548"
                                      >
                                        Transparency
                                      </label>
                                      <select aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-opacity-vjs_video_3_component_548">
                                        <option
                                          aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-opacity-vjs_video_3_component_548 captions-foreground-opacity-vjs_video_3_component_548-Opaque"
                                          id="captions-foreground-opacity-vjs_video_3_component_548-Opaque"
                                          value="1"
                                        >
                                          Opaque
                                        </option>
                                        <option
                                          aria-labelledby="captions-text-legend-vjs_video_3_component_548 captions-foreground-opacity-vjs_video_3_component_548 captions-foreground-opacity-vjs_video_3_component_548-SemiTransparent"
                                          id="captions-foreground-opacity-vjs_video_3_component_548-SemiTransparent"
                                          value="0.5"
                                        >
                                          Semi-Transparent
                                        </option>
                                      </select>
                                    </span>
                                  </fieldset>
                                  <fieldset className="vjs-bg-color vjs-track-setting">
                                    <legend id="captions-background-vjs_video_3_component_548">
                                      Background
                                    </legend>
                                    <label
                                      className="vjs-label"
                                      id="captions-background-color-vjs_video_3_component_548"
                                    >
                                      Color
                                    </label>
                                    <select aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Black"
                                        id="captions-background-color-vjs_video_3_component_548-Black"
                                        value="#000"
                                      >
                                        Black
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-White"
                                        id="captions-background-color-vjs_video_3_component_548-White"
                                        value="#FFF"
                                      >
                                        White
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Red"
                                        id="captions-background-color-vjs_video_3_component_548-Red"
                                        value="#F00"
                                      >
                                        Red
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Green"
                                        id="captions-background-color-vjs_video_3_component_548-Green"
                                        value="#0F0"
                                      >
                                        Green
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Blue"
                                        id="captions-background-color-vjs_video_3_component_548-Blue"
                                        value="#00F"
                                      >
                                        Blue
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Yellow"
                                        id="captions-background-color-vjs_video_3_component_548-Yellow"
                                        value="#FF0"
                                      >
                                        Yellow
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Magenta"
                                        id="captions-background-color-vjs_video_3_component_548-Magenta"
                                        value="#F0F"
                                      >
                                        Magenta
                                      </option>
                                      <option
                                        aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548 captions-background-color-vjs_video_3_component_548-Cyan"
                                        id="captions-background-color-vjs_video_3_component_548-Cyan"
                                        value="#0FF"
                                      >
                                        Cyan
                                      </option>
                                    </select>
                                    <span className="vjs-bg-opacity vjs-opacity">
                                      <label
                                        className="vjs-label"
                                        id="captions-background-opacity-vjs_video_3_component_548"
                                      >
                                        Transparency
                                      </label>
                                      <select aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548">
                                        <option
                                          aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548-Opaque"
                                          id="captions-background-opacity-vjs_video_3_component_548-Opaque"
                                          value="1"
                                        >
                                          Opaque
                                        </option>
                                        <option
                                          aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548-SemiTransparent"
                                          id="captions-background-opacity-vjs_video_3_component_548-SemiTransparent"
                                          value="0.5"
                                        >
                                          Semi-Transparent
                                        </option>
                                        <option
                                          aria-labelledby="captions-background-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548 captions-background-opacity-vjs_video_3_component_548-Transparent"
                                          id="captions-background-opacity-vjs_video_3_component_548-Transparent"
                                          value="0"
                                        >
                                          Transparent
                                        </option>
                                      </select>
                                    </span>
                                  </fieldset>
                                  <fieldset className="vjs-window-color vjs-track-setting">
                                    <legend id="captions-window-vjs_video_3_component_548">
                                      Window
                                    </legend>
                                    <label
                                      className="vjs-label"
                                      id="captions-window-color-vjs_video_3_component_548"
                                    >
                                      Color
                                    </label>
                                    <select aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Black"
                                        id="captions-window-color-vjs_video_3_component_548-Black"
                                        value="#000"
                                      >
                                        Black
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-White"
                                        id="captions-window-color-vjs_video_3_component_548-White"
                                        value="#FFF"
                                      >
                                        White
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Red"
                                        id="captions-window-color-vjs_video_3_component_548-Red"
                                        value="#F00"
                                      >
                                        Red
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Green"
                                        id="captions-window-color-vjs_video_3_component_548-Green"
                                        value="#0F0"
                                      >
                                        Green
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Blue"
                                        id="captions-window-color-vjs_video_3_component_548-Blue"
                                        value="#00F"
                                      >
                                        Blue
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Yellow"
                                        id="captions-window-color-vjs_video_3_component_548-Yellow"
                                        value="#FF0"
                                      >
                                        Yellow
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Magenta"
                                        id="captions-window-color-vjs_video_3_component_548-Magenta"
                                        value="#F0F"
                                      >
                                        Magenta
                                      </option>
                                      <option
                                        aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548 captions-window-color-vjs_video_3_component_548-Cyan"
                                        id="captions-window-color-vjs_video_3_component_548-Cyan"
                                        value="#0FF"
                                      >
                                        Cyan
                                      </option>
                                    </select>
                                    <span className="vjs-window-opacity vjs-opacity">
                                      <label
                                        className="vjs-label"
                                        id="captions-window-opacity-vjs_video_3_component_548"
                                      >
                                        Transparency
                                      </label>
                                      <select aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548">
                                        <option
                                          aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548-Transparent"
                                          id="captions-window-opacity-vjs_video_3_component_548-Transparent"
                                          value="0"
                                        >
                                          Transparent
                                        </option>
                                        <option
                                          aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548-SemiTransparent"
                                          id="captions-window-opacity-vjs_video_3_component_548-SemiTransparent"
                                          value="0.5"
                                        >
                                          Semi-Transparent
                                        </option>
                                        <option
                                          aria-labelledby="captions-window-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548 captions-window-opacity-vjs_video_3_component_548-Opaque"
                                          id="captions-window-opacity-vjs_video_3_component_548-Opaque"
                                          value="1"
                                        >
                                          Opaque
                                        </option>
                                      </select>
                                    </span>
                                  </fieldset>
                                </div>
                                <div className="vjs-track-settings-font">
                                  <fieldset className="vjs-font-percent vjs-track-setting">
                                    <legend
                                      className=""
                                      id="captions-font-size-vjs_video_3_component_548"
                                    >
                                      Font Size
                                    </legend>
                                    <select aria-labelledby="captions-font-size-vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-50"
                                        id="captions-font-size-vjs_video_3_component_548-50"
                                        value="0.50"
                                      >
                                        50%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-75"
                                        id="captions-font-size-vjs_video_3_component_548-75"
                                        value="0.75"
                                      >
                                        75%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-100"
                                        id="captions-font-size-vjs_video_3_component_548-100"
                                        value="1.00"
                                      >
                                        100%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-125"
                                        id="captions-font-size-vjs_video_3_component_548-125"
                                        value="1.25"
                                      >
                                        125%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-150"
                                        id="captions-font-size-vjs_video_3_component_548-150"
                                        value="1.50"
                                      >
                                        150%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-175"
                                        id="captions-font-size-vjs_video_3_component_548-175"
                                        value="1.75"
                                      >
                                        175%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-200"
                                        id="captions-font-size-vjs_video_3_component_548-200"
                                        value="2.00"
                                      >
                                        200%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-300"
                                        id="captions-font-size-vjs_video_3_component_548-300"
                                        value="3.00"
                                      >
                                        300%
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-size-vjs_video_3_component_548 captions-font-size-vjs_video_3_component_548-400"
                                        id="captions-font-size-vjs_video_3_component_548-400"
                                        value="4.00"
                                      >
                                        400%
                                      </option>
                                    </select>
                                  </fieldset>
                                  <fieldset className="vjs-edge-style vjs-track-setting">
                                    <legend
                                      className=""
                                      id="vjs_video_3_component_548"
                                    >
                                      Text Edge Style
                                    </legend>
                                    <select aria-labelledby="vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="vjs_video_3_component_548 vjs_video_3_component_548-None"
                                        id="vjs_video_3_component_548-None"
                                        value="none"
                                      >
                                        None
                                      </option>
                                      <option
                                        aria-labelledby="vjs_video_3_component_548 vjs_video_3_component_548-Raised"
                                        id="vjs_video_3_component_548-Raised"
                                        value="raised"
                                      >
                                        Raised
                                      </option>
                                      <option
                                        aria-labelledby="vjs_video_3_component_548 vjs_video_3_component_548-Depressed"
                                        id="vjs_video_3_component_548-Depressed"
                                        value="depressed"
                                      >
                                        Depressed
                                      </option>
                                      <option
                                        aria-labelledby="vjs_video_3_component_548 vjs_video_3_component_548-Uniform"
                                        id="vjs_video_3_component_548-Uniform"
                                        value="uniform"
                                      >
                                        Uniform
                                      </option>
                                      <option
                                        aria-labelledby="vjs_video_3_component_548 vjs_video_3_component_548-Dropshadow"
                                        id="vjs_video_3_component_548-Dropshadow"
                                        value="dropshadow"
                                      >
                                        Dropshadow
                                      </option>
                                    </select>
                                  </fieldset>
                                  <fieldset className="vjs-font-family vjs-track-setting">
                                    <legend
                                      className=""
                                      id="captions-font-family-vjs_video_3_component_548"
                                    >
                                      Font Family
                                    </legend>
                                    <select aria-labelledby="captions-font-family-vjs_video_3_component_548">
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-ProportionalSansSerif"
                                        id="captions-font-family-vjs_video_3_component_548-ProportionalSansSerif"
                                        value="proportionalSansSerif"
                                      >
                                        Proportional Sans-Serif
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-MonospaceSansSerif"
                                        id="captions-font-family-vjs_video_3_component_548-MonospaceSansSerif"
                                        value="monospaceSansSerif"
                                      >
                                        Monospace Sans-Serif
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-ProportionalSerif"
                                        id="captions-font-family-vjs_video_3_component_548-ProportionalSerif"
                                        value="proportionalSerif"
                                      >
                                        Proportional Serif
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-MonospaceSerif"
                                        id="captions-font-family-vjs_video_3_component_548-MonospaceSerif"
                                        value="monospaceSerif"
                                      >
                                        Monospace Serif
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-Casual"
                                        id="captions-font-family-vjs_video_3_component_548-Casual"
                                        value="casual"
                                      >
                                        Casual
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-Script"
                                        id="captions-font-family-vjs_video_3_component_548-Script"
                                        value="script"
                                      >
                                        Script
                                      </option>
                                      <option
                                        aria-labelledby="captions-font-family-vjs_video_3_component_548 captions-font-family-vjs_video_3_component_548-SmallCaps"
                                        id="captions-font-family-vjs_video_3_component_548-SmallCaps"
                                        value="small-caps"
                                      >
                                        Small Caps
                                      </option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div className="vjs-track-settings-controls">
                                  <button
                                    className="vjs-default-button"
                                    title="restore all settings to the default values"
                                    type="button"
                                  >
                                    Reset
                                    <span className="vjs-control-text">
                                      {" "}
                                      restore all settings to the default values
                                    </span>
                                  </button>
                                  <button
                                    className="vjs-done-button"
                                    type="button"
                                  >
                                    Done
                                  </button>
                                </div>
                              </div>
                              <button
                                aria-disabled="false"
                                className="vjs-close-button vjs-control vjs-button"
                                title="Close Modal Dialog"
                                type="button"
                              >
                                <span
                                  aria-hidden="true"
                                  className="vjs-icon-placeholder"
                                />
                                <span
                                  aria-live="polite"
                                  className="vjs-control-text"
                                >
                                  Close Modal Dialog
                                </span>
                              </button>
                              <p className="vjs-control-text">
                                End of dialog window.
                              </p>
                            </div>
                            <wave
                              style={{
                                display: "block",
                                height: "130px",
                                overflow: "hidden",
                                position: "relative",
                                userSelect: "none",
                              }}
                            >
                              <wave
                                style={{
                                  borderRight: "1px solid rgb(51, 51, 51)",
                                  bottom: "0px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  left: "0px",
                                  overflow: "hidden",
                                  pointerEvents: "none",
                                  position: "absolute",
                                  top: "0px",
                                  width: "0px",
                                  zIndex: "3",
                                }}
                              >
                                <canvas
                                  height="130"
                                  style={{
                                    bottom: "0px",
                                    height: "100%",
                                    left: "0px",
                                    position: "absolute",
                                    top: "0px",
                                    width: "508px",
                                  }}
                                  width="508"
                                />
                              </wave>
                              <canvas
                                height="130"
                                style={{
                                  bottom: "0px",
                                  height: "100%",
                                  left: "0px",
                                  pointerEvents: "none",
                                  position: "absolute",
                                  top: "0px",
                                  width: "508px",
                                  zIndex: "2",
                                }}
                                width="508"
                              />
                            </wave>
                          </div>
                        </div>
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT25.44S">25.44</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/haoheliu/audio-ldm?prediction=c24g2srwuvd23ascxoezjlqxfq"
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
                  href="/p/c24g2srwuvd23ascxoezjlqxfq/report"
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
          complete within 143 seconds. The predict time for this model varies
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
          <p>Text-to-audio with latent diffusion</p>

          <h2 id="model-description">Model description</h2>

          <p>
            AudioLDM generates text-conditional sound effects, human speech, and
            music. It enables zero-shot text-guided audio style-transfer,
            inpainting, and super-resolution.
          </p>

          <p>
            <a href="https://audioldm.github.io/" rel="nofollow">
              GitHub Demos and Project Page
            </a>

            <a href="https://github.com/haoheliu/AudioLDM" rel="nofollow">
              GitHub Repo for code
            </a>
          </p>

          <h2 id="tricks-for-enhancing-the-quality-of-your-generated-audio">
            Tricks for Enhancing the Quality of Your Generated Audio
          </h2>

          <ol>
            <li>
              Try to use more adjectives to describe your sound. For example: "A
              man is speaking clearly and slowly in a large room" is better than
              "A man is speaking". This can help ensure AudioLDM understands
              what you want.
            </li>

            <li>
              Try using different random seeds, which can sometimes affect the
              generation quality.
            </li>

            <li>
              It's better to use general terms like 'man' or 'woman' instead of
              specific names for individuals or abstract objects that humans may
              not be familiar with.
            </li>
          </ol>

          <h3 id="model-authors">Model Authors</h3>

          <p>
            Haohe Liu, Zehua Chen, Yi Yuan, Xinhao Mei, Xubo Liu, Danilo Mandic,
            Wenwu Wang, Mark D. Plumley
          </p>
        </div>
      </article>
    </>
  );
};

export default TToSDemo;
