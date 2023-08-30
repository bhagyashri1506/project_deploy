import React from "react";

const IToVDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '{"version": {"config": {"build": {"python_version": "3.8", "system_packages": ["ffmpeg"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d", "docker_image_name": "r8.im/fofr/frames-to-video@sha256:f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["output", "start", "completed", "logs"], "uniqueItems": true}}}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["output", "start", "completed", "logs"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/fofr/frames-to-video", "username": "fofr", "name": "frames-to-video", "description": "Convert a set of frames to a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/fofr/frames-to-video", "paper_url": null, "arxiv_paper_id": null, "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/23689948-4b8c-4d13-bd40-91704542d3af/fofr_storyboarding_a_movie_c8c231.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "t354d4bbxibv7ramday7rqdut4", "display_output_as_json": false}, "created_at": "2023-06-09T22:46:45.476Z"}, "model": {"absolute_url": "/fofr/frames-to-video", "username": "fofr", "name": "frames-to-video", "description": "Convert a set of frames to a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/fofr/frames-to-video", "paper_url": null, "arxiv_paper_id": null, "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/23689948-4b8c-4d13-bd40-91704542d3af/fofr_storyboarding_a_movie_c8c231.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "t354d4bbxibv7ramday7rqdut4", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/fofr/frames-to-video/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/fofr/frames-to-video", "predictUrl": "/api/models/fofr/frames-to-video/versions/f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d/predictions", "signInRequiredToRun": false, "initialPrediction": {"uuid": "t354d4bbxibv7ramday7rqdut4", "version_id": "f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d", "created_at": "2023-06-09T22:50:33.524Z", "updated_at": "2023-06-09T22:50:37.028Z", "completed_at": "2023-06-09T22:50:36.981Z", "status": "succeeded", "inputs": {"fps": 4, "frames_zip": "https://replicate.delivery/pbxt/IyPciuTwd9miRkQm3AVd4ZZrNta1i1M8rKs7vJtpy83uAIIi/frames.zip"}, "output": "https://replicate.delivery/pbxt/8qrgz3zYXHYXFlRaQTuDY2GVfsLc4agmC96kY5iYaHFe6VERA/out.mp4", "output_files": ["https://replicate.delivery/pbxt/8qrgz3zYXHYXFlRaQTuDY2GVfsLc4agmC96kY5iYaHFe6VERA/out.mp4"], "is_training": false, "error": null, "metrics": {"predict_time": 1.929677}, "run_logs": "ffmpeg version 4.3.6-0+deb11u1 Copyright (c) 2000-2023 the FFmpeg developers\nbuilt with gcc 10 (Debian 10.2.1-6)\nconfiguration: --prefix=/usr --extra-version=0+deb11u1 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --enable-avresample --disable-filter=resample --enable-gnutls --enable-ladspa --enable-libaom --enable-libass --enable-libbluray --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libgme --enable-libgsm --enable-libjack --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-libpulse --enable-librabbitmq --enable-librsvg --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libsrt --enable-libssh --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzmq --enable-libzvbi --enable-lv2 --enable-omx --enable-openal --enable-opencl --enable-opengl --enable-sdl2 --enable-pocketsphinx --enable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-libx264 --enable-shared\nlibavutil      56. 51.100 / 56. 51.100\nlibavcodec     58. 91.100 / 58. 91.100\nlibavformat    58. 45.100 / 58. 45.100\nlibavdevice    58. 10.100 / 58. 10.100\nlibavfilter     7. 85.100 /  7. 85.100\nlibavresample   4.  0.  0 /  4.  0.  0\nlibswscale      5.  7.100 /  5.  7.100\nlibswresample   3.  7.100 /  3.  7.100\nlibpostproc    55.  7.100 / 55.  7.100\nInput #0, image2, from \'/tmp/frames/out%03d.png\':\nDuration: 00:00:00.44, start: 0.000000, bitrate: N/A\nStream #0:0: Video: png, rgb24(pc), 1046x1046, 25 fps, 25 tbr, 25 tbn, 25 tbc\nStream mapping:\nStream #0:0 -\u003E #0:0 (png (native) -\u003E h264 (libx264))\nPress [q] to stop, [?] for help\n[libx264 @ 0x5637edc5a040] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX FMA3 BMI2 AVX2\n[libx264 @ 0x5637edc5a040] profile High, level 3.2, 4:2:0, 8-bit\n[libx264 @ 0x5637edc5a040] 264 - core 160 r3011 cde9a93 - H.264/MPEG-4 AVC codec - Copyleft 2003-2020 - http://www.videolan.org/x264.html - options: cabac=1 ref=3 deblock=1:0:0 analyse=0x3:0x113 me=hex subme=7 psy=1 psy_rd=1.00:0.00 mixed_ref=1 me_range=16 chroma_me=1 trellis=1 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2 threads=12 lookahead_threads=2 sliced_threads=0 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_intra=0 bframes=3 b_pyramid=2 b_adapt=1 b_bias=0 direct=1 weightb=1 open_gop=0 weightp=2 keyint=250 keyint_min=4 scenecut=40 intra_refresh=0 rc_lookahead=40 rc=crf mbtree=1 crf=23.0 qcomp=0.60 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00\nOutput #0, mp4, to \'/tmp/out.mp4\':\nMetadata:\nencoder         : Lavf58.45.100\nStream #0:0: Video: h264 (libx264) (avc1 / 0x31637661), yuv420p, 1046x1046, q=-1--1, 4 fps, 16384 tbn, 4 tbc\nMetadata:\nencoder         : Lavc58.91.100 libx264\nSide data:\ncpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: N/A\nframe=   11 fps=0.0 q=-1.0 Lsize=     140kB time=00:00:02.00 bitrate= 572.3kbits/s speed=2.39x\nvideo:139kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.685462%\n[libx264 @ 0x5637edc5a040] frame I:1     Avg QP:13.19  size: 36012\n[libx264 @ 0x5637edc5a040] frame P:3     Avg QP:19.59  size: 12898\n[libx264 @ 0x5637edc5a040] frame B:7     Avg QP:21.52  size:  9529\n[libx264 @ 0x5637edc5a040] consecutive B-frames:  9.1% 18.2%  0.0% 72.7%\n[libx264 @ 0x5637edc5a040] mb I  I16..4: 35.8% 35.1% 29.2%\n[libx264 @ 0x5637edc5a040] mb P  I16..4:  1.2%  3.9%  3.2%  P16..4:  9.2%  6.1%  3.4%  0.0%  0.0%    skip:72.9%\n[libx264 @ 0x5637edc5a040] mb B  I16..4:  0.3%  1.1%  1.3%  B16..8: 12.0%  6.5%  2.6%  direct: 1.2%  skip:75.0%  L0:43.6% L1:51.4% BI: 5.0%\n[libx264 @ 0x5637edc5a040] 8x8 transform intra:38.0% inter:44.6%\n[libx264 @ 0x5637edc5a040] coded y,uvDC,uvAC intra: 44.0% 12.5% 0.8% inter: 8.2% 2.2% 0.0%\n[libx264 @ 0x5637edc5a040] i16 v,h,dc,p: 54% 38%  5%  3%\n[libx264 @ 0x5637edc5a040] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 33% 20% 26%  3%  3%  3%  3%  5%  3%\n[libx264 @ 0x5637edc5a040] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 21% 37% 12%  6%  4%  6%  3%  6%  5%\n[libx264 @ 0x5637edc5a040] i8c dc,h,v,p: 87%  4%  8%  1%\n[libx264 @ 0x5637edc5a040] Weighted P-Frames: Y:0.0% UV:0.0%\n[libx264 @ 0x5637edc5a040] ref P L0: 58.8%  3.1%  7.3% 30.8%\n[libx264 @ 0x5637edc5a040] ref B L0: 68.0% 26.2%  5.8%\n[libx264 @ 0x5637edc5a040] ref B L1: 90.4%  9.6%\n[libx264 @ 0x5637edc5a040] kb/s:411.36", "version": {"config": {"build": {"python_version": "3.8", "system_packages": ["ffmpeg"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d", "docker_image_name": "r8.im/fofr/frames-to-video@sha256:f55350b82ee3d07b0a2dd329df57dd97dedb5a08daddbdd6580d3cd473eaff1d", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["output", "start", "completed", "logs"], "uniqueItems": true}}}}}}}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "Output": {"type": "string", "title": "Output", "format": "uri"}, "Status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["output", "start", "completed", "logs"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs"}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "properties": {"fps": {"type": "number", "title": "Fps", "default": 24, "minimum": 1, "x-order": 2, "description": "Number of frames per second of video"}, "frames_zip": {"type": "string", "title": "Frames Zip", "format": "uri", "x-order": 0, "description": "ZIP file containing frames"}, "frames_urls": {"type": "string", "title": "Frames Urls", "x-order": 1, "description": "Newline-separated URLs of frames to combine into a video"}}}, "output": {"type": "string", "title": "Output", "format": "uri"}, "status": {"enum": ["processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/fofr/frames-to-video", "username": "fofr", "name": "frames-to-video", "description": "Convert a set of frames to a video", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/fofr/frames-to-video", "paper_url": null, "arxiv_paper_id": null, "cover_image": {"url": "https://tjzk.replicate.delivery/models_models_cover_image/23689948-4b8c-4d13-bd40-91704542d3af/fofr_storyboarding_a_movie_c8c231.png", "file_type": "image", "file_mimetype": "image/png", "model_is_playable": false}, "latest_version_created_at": null, "default_example_uuid": "t354d4bbxibv7ramday7rqdut4", "display_output_as_json": false}, "created_at": "2023-06-09T22:46:45.476Z"}, "user": {"username": "fofr", "url": "/fofr"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
          }}
          id="react-component-props-ccd4bfc5-b7dd-49b4-991d-b7466459ba79"
          type="application/json"
        />

        <div
          data-component="VersionRun"
          data-props="react-component-props-ccd4bfc5-b7dd-49b4-991d-b7466459ba79"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
                  <a
                    className="form-button-secondary block break-all"
                    href="https://replicate.delivery/pbxt/IyPciuTwd9miRkQm3AVd4ZZrNta1i1M8rKs7vJtpy83uAIIi/frames.zip"
                    rel="noreferrer"
                    target="_blank"
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
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>{" "}
                    frames.zip
                  </a>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-frames_zip">
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
                    <code>frames_zip</code>
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
                          https://replicate.delivery/pbxt/IyPciuTwd9miRkQm3AVd4ZZrNta1i1M8rKs7vJtpy83uAIIi/frames.zip
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
                  <p className="text-shade mt-1">ZIP file containing frames</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-frames_urls">
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
                    <code>frames_urls</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      name="frames_urls"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    Newline-separated URLs of frames to combine into a video
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-fps">
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
                    <code>fps</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="4"
                    id="input-fps"
                    min="1"
                    name="fps"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    Number of frames per second of video (minimum: 1){" "}
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
                      <div
                        className="w-full"
                        style={{
                          height: "auto",
                          width: "auto",
                        }}
                      >
                        <video
                          __idm_id__="991233"
                          autoPlay
                          controls
                          loop
                          preload="auto"
                          src="https://replicate.delivery/pbxt/8qrgz3zYXHYXFlRaQTuDY2GVfsLc4agmC96kY5iYaHFe6VERA/out.mp4"
                          style={{
                            height: "auto",
                            width: "auto",
                          }}
                        />
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT1.93S">1.93</time> seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/fofr/frames-to-video?prediction=t354d4bbxibv7ramday7rqdut4"
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
                  href="/p/t354d4bbxibv7ramday7rqdut4/report"
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
          <a className="no-default" href="/fofr/frames-to-video/examples">
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
          <a href="/fofr/frames-to-video/examples#t354d4bbxibv7ramday7rqdut4">
            <video
              autoPlay
              className="object-cover object-center w-full h-full lazy entered exited loaded"
              data-ll-status="loaded"
              src="https://replicate.delivery/pbxt/8qrgz3zYXHYXFlRaQTuDY2GVfsLc4agmC96kY5iYaHFe6VERA/out.mp4"
              loop
              muted
              role="presentation"
              type="video/mp4"
            ></video>
          </a>
        </div>
      </div>
      ;
      <div className="mb-2lh" id="performance">
        <h4 className="mb-lh pb-2 border-b border-hairline">
          Run time and cost
        </h4>

        <p className="mb-lh">
          Predictions run on CPU hardware. Predictions typically complete within
          24 seconds.
        </p>
      </div>
      ;
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
            A toolkit model that can be used to process individual frames into a
            video. This can be used as a post-processor after performing image
            processing on frames.
          </p>
        </div>
      </article>
    </>
  );
};

export default IToVDemo;
