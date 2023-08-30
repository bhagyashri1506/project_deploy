import React from "react";

const TToIDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '{"version": {"config": {"build": {"gpu": true, "run": [{"command": "gdown https://storage.googleapis.com/dan-scratch-public/test-ait/aitemplate-0.3.dev0-py3-none-any.whl -O aitemplate-0.3.dev0-py3-none-any.whl"}, {"command": "pip install aitemplate-0.3.dev0-py3-none-any.whl --force-reinstall"}], "cuda": "11.8", "cudnn": "8", "python_version": "3.11", "python_packages": ["diffusers", "torch", "transformers", "click==8.1.3", "accelerate", "gdown==4.6.0", "scipy==1.10.0"]}, "predict": "predict.py:Predictor"}, "release_notes": "- **Stable Diffusion 2.1.** https://huggingface.co/stabilityai/stable-diffusion-2-1\r\n- Optimized for speed with AI Template - very fast, now supports all input shapes up to 1024x1024\r\n- fp16\r\n- Can run on A100 GPUs, but not T4, due to lack of AI Template support", "docker_image_id": "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4", "docker_image_name": "r8.im/stability-ai/stable-diffusion@sha256:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/shutdown": {"post": {"summary": "Start Shutdown", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Start Shutdown Shutdown Post"}}}, "description": "Successful Response"}}, "operationId": "start_shutdown_shutdown_post"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "logs", "output", "start"], "uniqueItems": true}}}}}}}}, "/health-check": {"get": {"summary": "Healthcheck", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Healthcheck Health Check Get"}}}, "description": "Successful Response"}}, "operationId": "healthcheck_health_check_get"}}, "/predictions/{prediction_id}": {"put": {"summary": "Predict Idempotent", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}, {"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model (idempotent creation).", "operationId": "predict_idempotent_predictions__prediction_id__put", "requestBody": {"content": {"application/json": {"schema": {"allOf": [{"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "logs", "output", "start"], "uniqueItems": true}}}], "title": "Prediction Request"}}}, "required": true}}}, "/predictions/{prediction_id}/cancel": {"post": {"summary": "Cancel", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Cancel Predictions  Prediction Id  Cancel Post"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}], "description": "Cancel a running prediction", "operationId": "cancel_predictions__prediction_id__cancel_post"}}}, "openapi": "3.1.0", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "An enumeration."}, "Output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "Status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "An enumeration."}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "logs", "output", "start"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 8, "description": "Random seed. Leave blank to randomize the seed"}, "width": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "width", "description": "Width of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 2}, "height": {"enum": [64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024], "type": "integer", "title": "height", "description": "Height of generated image in pixels. Needs to be a multiple of 64", "default": 768, "x-order": 1}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 7}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 4, "description": "Number of images to generate."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 6, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 3, "description": "Specify things to not see in the output"}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 5, "description": "Number of denoising steps"}}}, "output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/stability-ai/stable-diffusion", "username": "stability-ai", "name": "stable-diffusion", "description": "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/replicate/cog-stable-diffusion", "paper_url": "https://arxiv.org/abs/2112.10752", "arxiv_paper_id": "2112.10752", "cover_image": {"url": "https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "uvb7ynit4bhpjds3vn4bx7npeq", "display_output_as_json": false}, "created_at": "2023-07-10T06:50:41.613Z"}, "model": {"absolute_url": "/stability-ai/stable-diffusion", "username": "stability-ai", "name": "stable-diffusion", "description": "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/replicate/cog-stable-diffusion", "paper_url": "https://arxiv.org/abs/2112.10752", "arxiv_paper_id": "2112.10752", "cover_image": {"url": "https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "uvb7ynit4bhpjds3vn4bx7npeq", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/stability-ai/stable-diffusion/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/stability-ai/stable-diffusion", "predictUrl": "/api/models/stability-ai/stable-diffusion/versions/ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4/predictions", "signInRequiredToRun": false, "initialPrediction": {"uuid": "uvb7ynit4bhpjds3vn4bx7npeq", "version_id": "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf", "created_at": "2023-04-10T15:45:31.434Z", "updated_at": "2023-04-11T00:59:32.888Z", "completed_at": "2023-04-10T15:45:33.474Z", "status": "succeeded", "inputs": {"prompt": "an astronaut riding a horse on mars, hd, dramatic lighting", "scheduler": "K_EULER", "num_outputs": 1, "guidance_scale": 7.5, "image_dimensions": "512x512", "num_inference_steps": 50}, "output": ["https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png"], "output_files": ["https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png"], "is_training": false, "error": null, "metrics": {"predict_time": 1.889956}, "run_logs": "Using seed: 52443\ninput_shape: torch.Size([1, 77])\n  0%|          | 0/50 [00:00\u003C?, ?it/s]\n 10%|\u2588         | 5/50 [00:00\u003C00:01, 41.06it/s]\n 20%|\u2588\u2588        | 10/50 [00:00\u003C00:00, 41.32it/s]\n 30%|\u2588\u2588\u2588       | 15/50 [00:00\u003C00:00, 43.77it/s]\n 42%|\u2588\u2588\u2588\u2588\u258f     | 21/50 [00:00\u003C00:00, 46.80it/s]\n 54%|\u2588\u2588\u2588\u2588\u2588\u258d    | 27/50 [00:00\u003C00:00, 48.53it/s]\n 66%|\u2588\u2588\u2588\u2588\u2588\u2588\u258c   | 33/50 [00:00\u003C00:00, 49.63it/s]\n 78%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  | 39/50 [00:00\u003C00:00, 50.45it/s]\n 90%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 45/50 [00:00\u003C00:00, 50.90it/s]\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 50/50 [00:01\u003C00:00, 48.51it/s]", "version": {"config": {"build": {"gpu": true, "run": ["gdown https://storage.googleapis.com/dan-scratch-public/aitemplate-0.1.dev1-py3-none-any.whl -O aitemplate-0.1.dev1-py3-none-any.whl", "pip install aitemplate-0.1.dev1-py3-none-any.whl --force-reinstall"], "cuda": "11.3", "cudnn": "8", "python_version": "3.10", "python_packages": ["diffusers==0.11.1", "torch==1.12.0", "transformers==4.25.1", "click==8.1.3", "accelerate==0.16.0", "gdown==4.6.0", "scipy==1.10.0"]}, "predict": "ait_sd/scripts/predict.py:Predictor"}, "release_notes": "* **Stable Diffusion 2.1.** https://huggingface.co/stabilityai/stable-diffusion-2-1\r\n* Optimized for speed with AI Template - very fast, supports two input sizes (512x512 and 768x768)\r\n* fp16\r\n* Can run on A100 GPUs, but not T4, due to lack of AI Template support", "docker_image_id": "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf", "docker_image_name": "r8.im/daanelson/stable-diffusion-speed-lab@sha256:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 7, "description": "Random seed. Leave blank to randomize the seed"}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 6}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 3, "description": "Number of images to output."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 5, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 2, "description": "Specify things to not see in the output"}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "pixel dimensions of output image", "default": "768x768", "x-order": 1}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 4, "description": "Number of denoising steps"}}}, "output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 7, "description": "Random seed. Leave blank to randomize the seed"}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 6}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 3, "description": "Number of images to output."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 5, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 2, "description": "Specify things to not see in the output"}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "pixel dimensions of output image", "default": "768x768", "x-order": 1}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 4, "description": "Number of denoising steps"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "output", "start", "completed"], "uniqueItems": true}}}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 7, "description": "Random seed. Leave blank to randomize the seed"}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 6}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 3, "description": "Number of images to output."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 5, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 2, "description": "Specify things to not see in the output"}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "pixel dimensions of output image", "default": "768x768", "x-order": 1}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 4, "description": "Number of denoising steps"}}}, "Output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "Status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "An enumeration."}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 7, "description": "Random seed. Leave blank to randomize the seed"}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 6}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 3, "description": "Number of images to output."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 5, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 2, "description": "Specify things to not see in the output"}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "pixel dimensions of output image", "default": "768x768", "x-order": 1}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 4, "description": "Number of denoising steps"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["logs", "output", "start", "completed"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"seed": {"type": "integer", "title": "Seed", "x-order": 7, "description": "Random seed. Leave blank to randomize the seed"}, "prompt": {"type": "string", "title": "Prompt", "default": "a vision of paradise. unreal engine", "x-order": 0, "description": "Input prompt"}, "scheduler": {"enum": ["DDIM", "K_EULER", "DPMSolverMultistep", "K_EULER_ANCESTRAL", "PNDM", "KLMS"], "type": "string", "title": "scheduler", "description": "Choose a scheduler.", "default": "DPMSolverMultistep", "x-order": 6}, "num_outputs": {"type": "integer", "title": "Num Outputs", "default": 1, "maximum": 4, "minimum": 1, "x-order": 3, "description": "Number of images to output."}, "guidance_scale": {"type": "number", "title": "Guidance Scale", "default": 7.5, "maximum": 20, "minimum": 1, "x-order": 5, "description": "Scale for classifier-free guidance"}, "negative_prompt": {"type": "string", "title": "Negative Prompt", "x-order": 2, "description": "Specify things to not see in the output"}, "image_dimensions": {"enum": ["512x512", "768x768"], "type": "string", "title": "image_dimensions", "description": "pixel dimensions of output image", "default": "768x768", "x-order": 1}, "num_inference_steps": {"type": "integer", "title": "Num Inference Steps", "default": 50, "maximum": 500, "minimum": 1, "x-order": 4, "description": "Number of denoising steps"}}}, "output": {"type": "array", "items": {"type": "string", "format": "uri"}, "title": "Output"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/stability-ai/stable-diffusion", "username": "stability-ai", "name": "stable-diffusion", "description": "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/replicate/cog-stable-diffusion", "paper_url": "https://arxiv.org/abs/2112.10752", "arxiv_paper_id": "2112.10752", "cover_image": {"url": "https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "uvb7ynit4bhpjds3vn4bx7npeq", "display_output_as_json": false}, "created_at": "2023-02-20T18:45:29.491Z"}, "user": {"username": "bfirsh", "url": "/bfirsh"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
          }}
          id="react-component-props-2132c5ee-46a6-4581-b954-fcc71f10af1b"
          type="application/json"
        />

        <div
          data-component="VersionRun"
          data-props="react-component-props-2132c5ee-46a6-4581-b954-fcc71f10af1b"
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
                      defaultValue="an astronaut riding a horse on mars, hd, dramatic lighting"
                      name="prompt"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">Input prompt</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-height">
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
                    <code>height</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-height"
                    name="height"
                  >
                    <option value="" />
                    <option value="64">64</option>
                    <option value="128">128</option>
                    <option value="192">192</option>
                    <option value="256">256</option>
                    <option value="320">320</option>
                    <option value="384">384</option>
                    <option value="448">448</option>
                    <option value="512">512</option>
                    <option value="576">576</option>
                    <option value="640">640</option>
                    <option value="704">704</option>
                    <option value="768">768</option>
                    <option value="832">832</option>
                    <option value="896">896</option>
                    <option value="960">960</option>
                    <option value="1024">1024</option>
                  </select>
                  <p className="text-shade mt-1">
                    Height of generated image in pixels. Needs to be a multiple
                    of 64
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-width">
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
                    <code>width</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-width"
                    name="width"
                  >
                    <option value="" />
                    <option value="64">64</option>
                    <option value="128">128</option>
                    <option value="192">192</option>
                    <option value="256">256</option>
                    <option value="320">320</option>
                    <option value="384">384</option>
                    <option value="448">448</option>
                    <option value="512">512</option>
                    <option value="576">576</option>
                    <option value="640">640</option>
                    <option value="704">704</option>
                    <option value="768">768</option>
                    <option value="832">832</option>
                    <option value="896">896</option>
                    <option value="960">960</option>
                    <option value="1024">1024</option>
                  </select>
                  <p className="text-shade mt-1">
                    Width of generated image in pixels. Needs to be a multiple
                    of 64
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-negative_prompt">
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
                    <code>negative_prompt</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      name="negative_prompt"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    Specify things to not see in the output
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
                  <fieldset className="flex" id="input-num_outputs">
                    <legend hidden>num_outputs</legend>
                    <input
                      aria-label="num_outputs"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="1"
                      max="4"
                      min="1"
                      name="num_outputs"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="num_outputs"
                      className="flex-grow"
                      defaultValue="1"
                      max="4"
                      min="1"
                      name="num_outputs"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of images to generate. (minimum: 1; maximum: 4){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-num_inference_steps"
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
                    <code>num_inference_steps</code>
                  </label>
                  <fieldset className="flex" id="input-num_inference_steps">
                    <legend hidden>num_inference_steps</legend>
                    <input
                      aria-label="num_inference_steps"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="50"
                      max="500"
                      min="1"
                      name="num_inference_steps"
                      step="1"
                      type="number"
                    />
                    <input
                      aria-label="num_inference_steps"
                      className="flex-grow"
                      defaultValue="50"
                      max="500"
                      min="1"
                      name="num_inference_steps"
                      step="1"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Number of denoising steps (minimum: 1; maximum: 500){" "}
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
                  <fieldset className="flex" id="input-guidance_scale">
                    <legend hidden>guidance_scale</legend>
                    <input
                      aria-label="guidance_scale"
                      className="flex-none w-20 p-05lh mr-05lh border-shade border focus:outline-none focus:border-black"
                      defaultValue="7.5"
                      max="20"
                      min="1"
                      name="guidance_scale"
                      step="0.01"
                      type="number"
                    />
                    <input
                      aria-label="guidance_scale"
                      className="flex-grow"
                      defaultValue="7.5"
                      max="20"
                      min="1"
                      name="guidance_scale"
                      step="0.01"
                      type="range"
                    />
                  </fieldset>
                  <p className="text-shade mt-1">
                    Scale for classifier-free guidance (minimum: 1; maximum: 20){" "}
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-scheduler">
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
                    <code>scheduler</code>
                  </label>
                  <select
                    className="form-select w-full"
                    id="input-scheduler"
                    name="scheduler"
                  >
                    <option value="" />
                    <option value="DDIM">DDIM</option>
                    <option value="K_EULER">K_EULER</option>
                    <option value="DPMSolverMultistep">
                      DPMSolverMultistep
                    </option>
                    <option value="K_EULER_ANCESTRAL">K_EULER_ANCESTRAL</option>
                    <option value="PNDM">PNDM</option>
                    <option value="KLMS">KLMS</option>
                  </select>
                  <p className="text-shade mt-1">Choose a scheduler.</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-seed">
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
                    <code>seed</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue=""
                    id="input-seed"
                    name="seed"
                    step="1"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Random seed. Leave blank to randomize the seed
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
                    <div className="flex flex-wrap gap-lh">
                      <div>
                        <div>
                          <a
                            href="https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              alt="output"
                              className="lazy"
                              src="https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT1.89S">1.89</time> seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/stability-ai/stable-diffusion?prediction=uvb7ynit4bhpjds3vn4bx7npeq"
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
                  href="/p/uvb7ynit4bhpjds3vn4bx7npeq/report"
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
            href="/stability-ai/stable-diffusion/examples"
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
          <a href="/stability-ai/stable-diffusion/examples#qffyxjvmbvfdbao7vvv2oss2gq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/980bca24-f8d8-41bb-9f52-fe84bca9c251/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#rktab6ur7ve3dfuvh7efbo3j54">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/8d6a8069-b91f-4e61-8136-fa7c0775532c/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#bhyzpqdgnbhsljpnxp45hbv5ay">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/891fd1f9-302e-4d1f-a462-c0c2624ffbca/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#rjcl54wakbbrfcajzllmidreya">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/129d24dc-e39e-4240-8978-88420cc1f910/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#sqyie5bdmrewdoxi6ehhxlesfe">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/4ee3ab76-7864-4604-8897-9d330214d225/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#ljnv74ftfbfvtlqrvsz5zarakm">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy entered exited"
              src="https://replicate.delivery/mgxm/bb35c491-8794-43d6-81e1-41211831535d/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#kgpqs7h2ffcfrouxeoua6tpkjy">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.com/api/models/stability-ai/stable-diffusion/files/0d5e6ce0-dd85-4dd8-a087-a9c59876b456/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#kmp3c6s2kjdqtboq22pyokrksi">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#rsytjp72cbghhh7gr4ax4rnwly">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/Uy5Ma1EruBKkOReB5TwrX9P1ekJjnSftkujvBqkDneSCMywfB/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#4irm2hlalvdmlkryu4df63pwnq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/aooDunhAPcbUBh979fEblu4qqohEtlG0dPJUf1aLuUkMowCQA/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#uu3pugtcofbn3cgac6k4aymef4">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/2zVI7LtEO0aeKSruhERO0PQCVEsbFivhEyXyR0LDMSg3cYBIA/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#4hwtj7bbmvetvgdah5o4xln3qy">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/DogdQ8movv5LNlAaHGXrRU9eS1hZMs0OZpIthOsyTbeL6wCQA/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#cxpa7egscbbtjbsx4r6623v5n4">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#3wztszjpcjbabi6iwgqukwyegq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/XdWzrhW73EIAIxuxl92iE5qVHdiFMnNh3axdwp56EdSGUBCE/out-0.png"
              role="presentation"
            />
          </a>
        </div>

        <div className="inline-block h-40 w-40 overflow-hidden">
          <a href="/stability-ai/stable-diffusion/examples#uvb7ynit4bhpjds3vn4bx7npeq">
            <img
              alt=""
              className="object-cover object-center w-full h-full lazy"
              src="https://replicate.delivery/pbxt/sWeZFZou6v3CPKuoJbqX46ugPaHT1DcsWYx0srPmGrMOCPYIA/out-0.png"
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
          Predictions run on Nvidia A100 (40GB) GPU hardware. Predictions
          typically complete within 6 seconds.
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
            Stable Diffusion is a latent text-to-image diffusion model capable
            of generating photo-realistic images given any text input.{" "}
          </p>

          <p>
            We’ve generated updated our fast version of Stable Diffusion to
            generate dynamically sized images up to 1024x1024. Here's links to
            the current version for 2.1 and 1.5:
          </p>

          <table>
            <thead>
              <tr>
                <th>Stable Diffusion Version</th>
                <th>Optimized for speed, flexible image sizes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.1</td>
                <td>
                  <a
                    href="https://replicate.com/stability-ai/stable-diffusion/versions/ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
                    rel="nofollow"
                  >
                    link
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.5</td>
                <td>
                  <a
                    href="https://replicate.com/stability-ai/stable-diffusion/versions/b3d14e1cd1f9470bbb0bb68cac48e5f483e5be309551992cc33dc30654a82bb7"
                    rel="nofollow"
                  >
                    link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            All previous versions of Stable Diffusion will continue to be on
            Replicate, see the version list for further details:{" "}
            <a
              href="https://replicate.com/stability-ai/stable-diffusion/versions"
              rel="nofollow"
            >
              https://replicate.com/stability-ai/stable-diffusion/versions
            </a>
          </p>

          <ul>
            <li>
              <strong>Developed by:</strong> Robin Rombach, Patrick Esser
            </li>

            <li>
              <strong>Model type:</strong> Diffusion-based text-to-image
              generation model
            </li>

            <li>
              <strong>Language(s):</strong> English
            </li>

            <li>
              <strong>License:</strong>{" "}
              <a
                href="https://huggingface.co/spaces/CompVis/stable-diffusion-license"
                rel="nofollow"
              >
                The CreativeML OpenRAIL M license
              </a>{" "}
              is an{" "}
              <a
                href="https://www.licenses.ai/blog/2022/8/18/naming-convention-of-responsible-ai-licenses"
                rel="nofollow"
              >
                Open RAIL M license
              </a>
              , adapted from the work that{" "}
              <a href="https://bigscience.huggingface.co/" rel="nofollow">
                BigScience
              </a>{" "}
              and{" "}
              <a href="https://www.licenses.ai/" rel="nofollow">
                the RAIL Initiative
              </a>{" "}
              are jointly carrying in the area of responsible AI licensing. See
              also{" "}
              <a
                href="https://bigscience.huggingface.co/blog/the-bigscience-rail-license"
                rel="nofollow"
              >
                the article about the BLOOM Open RAIL license
              </a>{" "}
              on which our license is based.
            </li>

            <li>
              <strong>Model Description:</strong> This is a model that can be
              used to generate and modify images based on text prompts. It is a{" "}
              <a href="https://arxiv.org/abs/2112.10752" rel="nofollow">
                Latent Diffusion Model
              </a>{" "}
              that uses a fixed, pretrained text encoder (
              <a href="https://arxiv.org/abs/2103.00020" rel="nofollow">
                CLIP ViT-L/14
              </a>
              ) as suggested in the{" "}
              <a href="https://arxiv.org/abs/2205.11487" rel="nofollow">
                Imagen paper
              </a>
              .
            </li>

            <li>
              <strong>Resources for more information:</strong>{" "}
              <a
                href="https://github.com/CompVis/stable-diffusion"
                rel="nofollow"
              >
                GitHub Repository
              </a>
              ,{" "}
              <a href="https://arxiv.org/abs/2112.10752" rel="nofollow">
                Paper
              </a>
              .
            </li>

            <li>
              <strong>Cite as:</strong>
            </li>
          </ul>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="!p-0 hljs language-julia">
                  {"      "}
                  <span className="hljs-meta">@InProceedings</span>
                  {`{Rombach_2022_CVPR,
            author    = {Rombach, Robin and Blattmann, Andreas and Lorenz, Dominik and Esser, Patrick and Ommer, Bj`}
                  <span className="hljs-string">
                    {`"orn},
              title     = {High-Resolution Image Synthesis With Latent Diffusion Models},
              booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
              month     = {June},
              year      = {2022},
              pages     = {10684-10695}
              }`}
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
                    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h1 id="uses">Uses</h1>

          <h2 id="direct-use">Direct Use</h2>

          <p>
            The model is intended for research purposes only. Possible research
            areas and tasks include
          </p>

          <ul>
            <li>
              Safe deployment of models which have the potential to generate
              harmful content.
            </li>

            <li>
              Probing and understanding the limitations and biases of generative
              models.
            </li>

            <li>
              Generation of artworks and use in design and other artistic
              processes.
            </li>

            <li>Applications in educational or creative tools.</li>

            <li>Research on generative models.</li>
          </ul>

          <p>Excluded uses are described below.</p>

          <h3 id="misuse-malicious-use-and-out-of-scope-use">
            Misuse, Malicious Use, and Out-of-Scope Use
          </h3>

          <p>
            <em>
              Note: This section is taken from the{" "}
              <a
                href="https://huggingface.co/dalle-mini/dalle-mini"
                rel="nofollow"
              >
                DALLE-MINI model card
              </a>
              , but applies in the same way to Stable Diffusion v1
            </em>
            .
          </p>

          <p>
            The model should not be used to intentionally create or disseminate
            images that create hostile or alienating environments for people.
            This includes generating images that people would foreseeably find
            disturbing, distressing, or offensive; or content that propagates
            historical or current stereotypes.
          </p>

          <h4 id="out-of-scope-use">Out-of-Scope Use</h4>

          <p>
            The model was not trained to be factual or true representations of
            people or events, and therefore using the model to generate such
            content is out-of-scope for the abilities of this model.
          </p>

          <h4 id="misuse-and-malicious-use">Misuse and Malicious Use</h4>

          <p>
            Using the model to generate content that is cruel to individuals is
            a misuse of this model. This includes, but is not limited to:
          </p>

          <ul>
            <li>
              Generating demeaning, dehumanizing, or otherwise harmful
              representations of people or their environments, cultures,
              religions, etc.
            </li>

            <li>
              Intentionally promoting or propagating discriminatory content or
              harmful stereotypes.
            </li>

            <li>Impersonating individuals without their consent.</li>

            <li>
              Sexual content without consent of the people who might see it.
            </li>

            <li>Mis- and disinformation</li>

            <li>Representations of egregious violence and gore</li>

            <li>
              Sharing of copyrighted or licensed material in violation of its
              terms of use.
            </li>

            <li>
              Sharing content that is an alteration of copyrighted or licensed
              material in violation of its terms of use.
            </li>
          </ul>

          <h2 id="limitations-and-bias">Limitations and Bias</h2>

          <h3 id="limitations">Limitations</h3>

          <ul>
            <li>The model does not achieve perfect photorealism</li>

            <li>The model cannot render legible text</li>

            <li>
              The model does not perform well on more difficult tasks which
              involve compositionality, such as rendering an image corresponding
              to “A red cube on top of a blue sphere”
            </li>

            <li>Faces and people in general may not be generated properly.</li>

            <li>
              The model was trained mainly with English captions and will not
              work as well in other languages.
            </li>

            <li>The autoencoding part of the model is lossy</li>

            <li>
              The model was trained on a large-scale dataset
              <a href="https://laion.ai/blog/laion-5b/" rel="nofollow">
                LAION-5B
              </a>
              which contains adult material and is not fit for product use
              without additional safety mechanisms and considerations.
            </li>

            <li>
              No additional measures were used to deduplicate the dataset. As a
              result, we observe some degree of memorization for images that are
              duplicated in the training data. The training data can be searched
              at
              <a
                href="https://rom1504.github.io/clip-retrieval/"
                rel="nofollow"
              >
                https://rom1504.github.io/clip-retrieval/
              </a>{" "}
              to possibly assist in the detection of memorized images.
            </li>
          </ul>

          <h3 id="bias">Bias</h3>

          <p>
            While the capabilities of image generation models are impressive,
            they can also reinforce or exacerbate social biases. Stable
            Diffusion v1 was trained on subsets of
            <a href="https://laion.ai/blog/laion-5b/" rel="nofollow">
              LAION-2B(en)
            </a>
            , which consists of images that are primarily limited to English
            descriptions. Texts and images from communities and cultures that
            use other languages are likely to be insufficiently accounted for.
            This affects the overall output of the model, as white and western
            cultures are often set as the default. Further, the ability of the
            model to generate content with non-English prompts is significantly
            worse than with English-language prompts.
          </p>

          <h2 id="training">Training</h2>

          <p>
            <strong>Training Data</strong>
            The model developers used the following dataset for training the
            model:
          </p>

          <ul>
            <li>LAION-2B (en) and subsets thereof (see next section)</li>
          </ul>

          <p>
            <strong>Training Procedure</strong>
            Stable Diffusion v1 is a latent diffusion model which combines an
            autoencoder with a diffusion model that is trained in the latent
            space of the autoencoder. During training,
          </p>

          <ul>
            <li>
              Images are encoded through an encoder, which turns images into
              latent representations. The autoencoder uses a relative
              downsampling factor of 8 and maps images of shape H x W x 3 to
              latents of shape H/f x W/f x 4
            </li>

            <li>Text prompts are encoded through a ViT-L/14 text-encoder.</li>

            <li>
              The non-pooled output of the text encoder is fed into the UNet
              backbone of the latent diffusion model via cross-attention.
            </li>

            <li>
              The loss is a reconstruction objective between the noise that was
              added to the latent and the prediction made by the UNet.
            </li>
          </ul>

          <p>
            We currently provide three checkpoints, <code>sd-v1-1.ckpt</code>,{" "}
            <code>sd-v1-2.ckpt</code> and <code>sd-v1-3.ckpt</code>, which were
            trained as follows,
          </p>

          <ul>
            <li>
              <code>sd-v1-1.ckpt</code>: 237k steps at resolution{" "}
              <code>256x256</code> on{" "}
              <a
                href="https://huggingface.co/datasets/laion/laion2B-en"
                rel="nofollow"
              >
                laion2B-en
              </a>
              . 194k steps at resolution
              <code>512x512</code> on{" "}
              <a
                href="https://huggingface.co/datasets/laion/laion-high-resolution"
                rel="nofollow"
              >
                laion-high-resolution
              </a>{" "}
              (170M examples from LAION-5B with resolution{" "}
              <code>{`>= 1024x1024`}</code>
              ).
            </li>

            <li>
              <code>sd-v1-2.ckpt</code>: Resumed from <code>sd-v1-1.ckpt</code>.
              515k steps at resolution
              <code>512x512</code>
              on "laion-improved-aesthetics" (a subset of laion2B-en, filtered
              to images with an original size
              <code>{`>= 512x512`}</code>, estimated aesthetics score{" "}
              <code>{`> 5.0`}</code>, and an estimated watermark probability{" "}
              <code>{`< 0.5`}</code>. The watermark estimate is from the
              LAION-5B metadata, the aesthetics score is estimated using an{" "}
              <a
                href="https://github.com/christophschuhmann/improved-aesthetic-predictor"
                rel="nofollow"
              >
                improved aesthetics estimator
              </a>
              ).
            </li>

            <li>
              <p>
                <code>sd-v1-3.ckpt</code>: Resumed from{" "}
                <code>sd-v1-2.ckpt</code>. 195k steps at resolution{" "}
                <code>512x512</code> on "laion-improved-aesthetics" and 10\%
                dropping of the text-conditioning to improve{" "}
                <a href="https://arxiv.org/abs/2207.12598" rel="nofollow">
                  classifier-free guidance sampling
                </a>
                .
              </p>
            </li>

            <li>
              <p>
                <strong>Hardware:</strong> 32 x 8 x A100 GPUs
              </p>
            </li>

            <li>
              <strong>Optimizer:</strong> AdamW
            </li>

            <li>
              <strong>Gradient Accumulations</strong>: 2
            </li>

            <li>
              <strong>Batch:</strong> 32 x 8 x 2 x 4 = 2048
            </li>

            <li>
              <strong>Learning rate:</strong> warmup to 0.0001 for 10,000 steps
              and then kept constant
            </li>
          </ul>

          <h2 id="evaluation-results">Evaluation Results</h2>

          <p>
            Evaluations with different classifier-free guidance scales (1.5,
            2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0) and 50 PLMS sampling steps show
            the relative improvements of the checkpoints:
          </p>

          <p>
            <img
              alt=""
              src="https://bucketeer-be99e627-94e7-4e5b-a292-54eeb40ac303.s3.amazonaws.com/public/markdownx/2f1c5964-a2f2-4640-961f-c71307748edf.jpeg"
            />
          </p>

          <p>
            Evaluated using 50 PLMS steps and 10000 random prompts from the
            COCO2017 validation set, evaluated at 512x512 resolution. Not
            optimized for FID scores.
          </p>

          <h2 id="environmental-impact">Environmental Impact</h2>

          <p>
            <strong>Stable Diffusion v1</strong>{" "}
            <strong>Estimated Emissions</strong>
            Based on that information, we estimate the following CO2 emissions
            using the
            <a href="https://mlco2.github.io/impact#compute" rel="nofollow">
              Machine Learning Impact calculator
            </a>{" "}
            presented in{" "}
            <a href="https://arxiv.org/abs/1910.09700" rel="nofollow">
              Lacoste et al. (2019)
            </a>
            . The hardware, runtime, cloud provider, and compute region were
            utilized to estimate the carbon impact.
          </p>

          <ul>
            <li>
              <strong>Hardware Type:</strong> A100 PCIe 40GB
            </li>

            <li>
              <strong>Hours used:</strong> 150000
            </li>

            <li>
              <strong>Cloud Provider:</strong> AWS
            </li>

            <li>
              <strong>Compute Region:</strong> US-east
            </li>

            <li>
              <strong>
                Carbon Emitted (Power consumption x Time x Carbon produced based
                on location of power grid):
              </strong>{" "}
              11250 kg CO2 eq.
            </li>
          </ul>

          <h2 id="citation">Citation</h2>

          <div>
            <div className="group relative">
              <pre className="code">
                <code className="language-bibtex !p-0">
                  {`    @InProceedings{Rombach_2022_CVPR,
            author    = {Rombach, Robin and Blattmann, Andreas and Lorenz, Dominik and Esser, Patrick and Ommer, Bj\"orn},
            title     = {High-Resolution Image Synthesis With Latent Diffusion Models},
            booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
            month     = {June},
            year      = {2022},
            pages     = {10684-10695}
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

          <p>
            <em>
              This model card was written by: Robin Rombach and Patrick Esser
              and is based on the{" "}
              <a
                href="https://huggingface.co/dalle-mini/dalle-mini"
                rel="nofollow"
              >
                DALL-E Mini model card
              </a>
              .
            </em>
          </p>
        </div>
      </article>
    </>
  );
};

export default TToIDemo;
