import React from "react";

const IToVDemo = () => {
  return (
    <>
      <div className="mb-2lh">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '{"version": {"config": {"build": {"gpu": true, "cuda": "11.7.1", "cudnn": "8", "python_version": "3.9", "python_packages": ["numpy==1.23.5", "torch==1.13.0", "tqdm==4.64.1", "more-itertools==9.0.0", "transformers==4.25.1", "ffmpeg-python==0.2.0", "openai-whisper==20230314"], "system_packages": ["ffmpeg"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "docker_image_name": "r8.im/soykertje/whisper@sha256:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/shutdown": {"post": {"summary": "Start Shutdown", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Start Shutdown Shutdown Post"}}}, "description": "Successful Response"}}, "operationId": "start_shutdown_shutdown_post"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}}}}}}, "/health-check": {"get": {"summary": "Healthcheck", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Healthcheck Health Check Get"}}}, "description": "Successful Response"}}, "operationId": "healthcheck_health_check_get"}}, "/predictions/{prediction_id}": {"put": {"summary": "Predict Idempotent", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}, {"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model (idempotent creation).", "operationId": "predict_idempotent_predictions__prediction_id__put", "requestBody": {"content": {"application/json": {"schema": {"allOf": [{"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}], "title": "Prediction Request"}}}, "required": true}}}, "/predictions/{prediction_id}/cancel": {"post": {"summary": "Cancel", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Cancel Predictions  Prediction Id  Cancel Post"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}], "description": "Cancel a running prediction", "operationId": "cancel_predictions__prediction_id__cancel_post"}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "An enumeration."}, "Output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "Status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "An enumeration."}, "ModelOutput": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/soykertje/whisper", "username": "soykertje", "name": "whisper", "description": "Convert speech in audio to text", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/Soykertje/cog-whisper", "paper_url": null, "arxiv_paper_id": null, "cover_image": null, "latest_version_created_at": null, "default_example_uuid": "hfagulrblado4gvy6nz3bgplm4", "display_output_as_json": false}, "created_at": "2023-08-22T01:14:53.720Z"}, "model": {"absolute_url": "/soykertje/whisper", "username": "soykertje", "name": "whisper", "description": "Convert speech in audio to text", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/Soykertje/cog-whisper", "paper_url": null, "arxiv_paper_id": null, "cover_image": null, "latest_version_created_at": null, "default_example_uuid": "hfagulrblado4gvy6nz3bgplm4", "display_output_as_json": false}, "canCreateExample": false, "exampleCreateUrl": "/api/models/soykertje/whisper/examples", "fileUploadUrlTemplate": "/api/upload/:filename", "isAuthenticated": false, "isOwner": false, "modelAbsolutePath": "/soykertje/whisper", "predictUrl": "/api/models/soykertje/whisper/versions/20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6/predictions", "signInRequiredToRun": true, "initialPrediction": {"uuid": "hfagulrblado4gvy6nz3bgplm4", "version_id": "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "created_at": "2023-08-22T01:26:46.544Z", "updated_at": "2023-08-22T01:33:26.298Z", "completed_at": "2023-08-22T01:33:26.035Z", "status": "succeeded", "inputs": {"audio": "https://replicate.delivery/pbxt/JOMXkhgXe8wbOGqnQ5LwJUulwpbcvd1NZUYKFe1TMPGaXg24/1987%20Micro%20Machines%20Car%20Playset%20Commercial%20(Featuring%20John%20Moschitta%20the%20Micro%20Machine%20Man).mp3", "model": "large-v2", "translate": false, "temperature": 0, "transcription": "plain text", "suppress_tokens": "-1", "word_timestamps": true, "logprob_threshold": -1, "no_speech_threshold": 0.6, "condition_on_previous_text": true, "compression_ratio_threshold": 2.4, "temperature_increment_on_fallback": 0.2}, "output": {"segments": [{"id": 0, "end": 3.14, "seek": 0, "text": " This is the Micro Machine Man presenting the most midget miniature motorcade of micro machines.", "start": 0.18, "words": [{"end": 0.5, "word": " This", "start": 0.18, "probability": 0.5188008546829224}, {"end": 0.66, "word": " is", "start": 0.5, "probability": 0.9036935567855835}, {"end": 0.88, "word": " the", "start": 0.66, "probability": 0.7630036473274231}, {"end": 0.9, "word": " Micro", "start": 0.88, "probability": 0.7599949836730957}, {"end": 1, "word": " Machine", "start": 0.9, "probability": 0.43241745233535767}, {"end": 1.18, "word": " Man", "start": 1, "probability": 0.8935106992721558}, {"end": 1.4, "word": " presenting", "start": 1.18, "probability": 0.4879225194454193}, {"end": 1.52, "word": " the", "start": 1.4, "probability": 0.8076907992362976}, {"end": 1.68, "word": " most", "start": 1.52, "probability": 0.8195436596870422}, {"end": 1.86, "word": " midget", "start": 1.68, "probability": 0.9426034390926361}, {"end": 2.14, "word": " miniature", "start": 1.86, "probability": 0.6330108642578125}, {"end": 2.46, "word": " motorcade", "start": 2.14, "probability": 0.7706209719181061}, {"end": 2.7, "word": " of", "start": 2.46, "probability": 0.8996413946151733}, {"end": 2.9, "word": " micro", "start": 2.7, "probability": 0.2997014820575714}, {"end": 3.14, "word": " machines.", "start": 2.9, "probability": 0.5044888257980347}], "tokens": [50364, 639, 307, 264, 25642, 22155, 2458, 15578, 264, 881, 2062, 847, 34674, 5932, 30340, 295, 4532, 8379, 13, 50524], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 1, "end": 6.66, "seek": 0, "text": " Each one has dramatic details, terrific trim, precision paint jobs, plus incredible micro machine pocket play sets.", "start": 3.46, "words": [{"end": 3.56, "word": " Each", "start": 3.46, "probability": 0.7921050786972046}, {"end": 3.68, "word": " one", "start": 3.56, "probability": 0.8239385485649109}, {"end": 3.8, "word": " has", "start": 3.68, "probability": 0.8931549787521362}, {"end": 4.04, "word": " dramatic", "start": 3.8, "probability": 0.76500004529953}, {"end": 4.24, "word": " details,", "start": 4.04, "probability": 0.6641080379486084}, {"end": 4.5, "word": " terrific", "start": 4.48, "probability": 0.816464900970459}, {"end": 4.66, "word": " trim,", "start": 4.5, "probability": 0.41670969128608704}, {"end": 4.96, "word": " precision", "start": 4.78, "probability": 0.7823763489723206}, {"end": 5.18, "word": " paint", "start": 4.96, "probability": 0.8373522162437439}, {"end": 5.3, "word": " jobs,", "start": 5.18, "probability": 0.45608851313591003}, {"end": 5.52, "word": " plus", "start": 5.34, "probability": 0.8570372462272644}, {"end": 5.78, "word": " incredible", "start": 5.52, "probability": 0.7519615888595581}, {"end": 5.98, "word": " micro", "start": 5.78, "probability": 0.6544991135597229}, {"end": 6.2, "word": " machine", "start": 5.98, "probability": 0.659029483795166}, {"end": 6.54, "word": " pocket", "start": 6.2, "probability": 0.6552930474281311}, {"end": 6.62, "word": " play", "start": 6.54, "probability": 0.6885859370231628}, {"end": 6.66, "word": " sets.", "start": 6.62, "probability": 0.633192241191864}], "tokens": [50524, 6947, 472, 575, 12023, 4365, 11, 20899, 10445, 11, 18356, 4225, 4782, 11, 1804, 4651, 4532, 3479, 8963, 862, 6352, 13, 50699], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 2, "end": 8.76, "seek": 0, "text": " There\'s a police station, fire station, restaurant, service station, and more.", "start": 6.8, "words": [{"end": 6.9, "word": " There\'s", "start": 6.8, "probability": 0.8825059831142426}, {"end": 6.96, "word": " a", "start": 6.9, "probability": 0.9860183000564575}, {"end": 7.18, "word": " police", "start": 6.96, "probability": 0.8330947756767273}, {"end": 7.3, "word": " station,", "start": 7.18, "probability": 0.8929913640022278}, {"end": 7.58, "word": " fire", "start": 7.4, "probability": 0.7919226884841919}, {"end": 7.7, "word": " station,", "start": 7.58, "probability": 0.8724629282951355}, {"end": 8.02, "word": " restaurant,", "start": 7.8, "probability": 0.7704039216041565}, {"end": 8.26, "word": " service", "start": 8.08, "probability": 0.8293709754943848}, {"end": 8.44, "word": " station,", "start": 8.26, "probability": 0.9018292427062988}, {"end": 8.64, "word": " and", "start": 8.44, "probability": 0.8904381990432739}, {"end": 8.76, "word": " more.", "start": 8.64, "probability": 0.8884001970291138}], "tokens": [50699, 821, 311, 257, 3804, 5214, 11, 2610, 5214, 11, 6383, 11, 2643, 5214, 11, 293, 544, 13, 50804], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 3, "end": 10.28, "seek": 0, "text": " Perfect pocket portables to take anyplace.", "start": 9, "words": [{"end": 9.16, "word": " Perfect", "start": 9, "probability": 0.8314006328582764}, {"end": 9.38, "word": " pocket", "start": 9.16, "probability": 0.7699366211891174}, {"end": 9.62, "word": " portables", "start": 9.38, "probability": 0.9437406063079834}, {"end": 9.8, "word": " to", "start": 9.62, "probability": 0.8796511292457581}, {"end": 9.9, "word": " take", "start": 9.8, "probability": 0.8167694807052612}, {"end": 10.28, "word": " anyplace.", "start": 9.9, "probability": 0.6491216719150543}], "tokens": [50804, 10246, 8963, 2436, 2965, 281, 747, 604, 6742, 13, 50879], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 4, "end": 15.3, "seek": 0, "text": " And there are many miniature play sets to play with and each one comes with its own special edition micro machine vehicle and fun fantastic features that miraculously move.", "start": 10.4, "words": [{"end": 10.54, "word": " And", "start": 10.4, "probability": 0.8727167844772339}, {"end": 10.66, "word": " there", "start": 10.54, "probability": 0.8446416854858398}, {"end": 10.68, "word": " are", "start": 10.66, "probability": 0.8793963193893433}, {"end": 10.82, "word": " many", "start": 10.68, "probability": 0.8155453205108643}, {"end": 11.02, "word": " miniature", "start": 10.82, "probability": 0.802977979183197}, {"end": 11.24, "word": " play", "start": 11.02, "probability": 0.8290015459060669}, {"end": 11.24, "word": " sets", "start": 11.24, "probability": 0.8442025780677795}, {"end": 11.42, "word": " to", "start": 11.24, "probability": 0.895969808101654}, {"end": 11.52, "word": " play", "start": 11.42, "probability": 0.8799439072608948}, {"end": 11.6, "word": " with", "start": 11.52, "probability": 0.7744315266609192}, {"end": 11.7, "word": " and", "start": 11.6, "probability": 0.40789568424224854}, {"end": 11.78, "word": " each", "start": 11.7, "probability": 0.8371046185493469}, {"end": 11.92, "word": " one", "start": 11.78, "probability": 0.8314981460571289}, {"end": 12.04, "word": " comes", "start": 11.92, "probability": 0.8056870102882385}, {"end": 12.14, "word": " with", "start": 12.04, "probability": 0.8167880773544312}, {"end": 12.24, "word": " its", "start": 12.14, "probability": 0.6112188100814819}, {"end": 12.36, "word": " own", "start": 12.24, "probability": 0.8195785880088806}, {"end": 12.58, "word": " special", "start": 12.36, "probability": 0.9109472632408142}, {"end": 12.88, "word": " edition", "start": 12.58, "probability": 0.7968374490737915}, {"end": 13.1, "word": " micro", "start": 12.88, "probability": 0.7488399147987366}, {"end": 13.28, "word": " machine", "start": 13.1, "probability": 0.71075838804245}, {"end": 13.52, "word": " vehicle", "start": 13.28, "probability": 0.8960368037223816}, {"end": 13.66, "word": " and", "start": 13.52, "probability": 0.8079777956008911}, {"end": 13.84, "word": " fun", "start": 13.66, "probability": 0.8869229555130005}, {"end": 14.1, "word": " fantastic", "start": 13.84, "probability": 0.6974602341651917}, {"end": 14.34, "word": " features", "start": 14.1, "probability": 0.73177570104599}, {"end": 14.54, "word": " that", "start": 14.34, "probability": 0.866608738899231}, {"end": 14.84, "word": " miraculously", "start": 14.54, "probability": 0.9221479594707489}, {"end": 15.3, "word": " move.", "start": 14.84, "probability": 0.8684508204460144}], "tokens": [50879, 400, 456, 366, 867, 34674, 862, 6352, 281, 862, 365, 293, 1184, 472, 1487, 365, 1080, 1065, 2121, 11377, 4532, 3479, 5864, 293, 1019, 5456, 4122, 300, 30686, 25038, 1286, 13, 51129], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 5, "end": 19.22, "seek": 0, "text": " Raise the boat lift at the airport, marina, man the gun turret at the army base, clean your car at the car wash, raise the toll bridge.", "start": 15.64, "words": [{"end": 15.66, "word": " Raise", "start": 15.64, "probability": 0.8107876181602478}, {"end": 15.78, "word": " the", "start": 15.66, "probability": 0.8148850202560425}, {"end": 15.9, "word": " boat", "start": 15.78, "probability": 0.8849641680717468}, {"end": 15.98, "word": " lift", "start": 15.9, "probability": 0.45141515135765076}, {"end": 16.1, "word": " at", "start": 15.98, "probability": 0.8778955340385437}, {"end": 16.24, "word": " the", "start": 16.1, "probability": 0.8175328373908997}, {"end": 16.36, "word": " airport,", "start": 16.24, "probability": 0.8736236691474915}, {"end": 16.62, "word": " marina,", "start": 16.38, "probability": 0.6979465484619141}, {"end": 16.84, "word": " man", "start": 16.68, "probability": 0.8808432221412659}, {"end": 16.92, "word": " the", "start": 16.84, "probability": 0.7407904863357544}, {"end": 17.1, "word": " gun", "start": 16.92, "probability": 0.896804690361023}, {"end": 17.22, "word": " turret", "start": 17.1, "probability": 0.9114507436752319}, {"end": 17.32, "word": " at", "start": 17.22, "probability": 0.8769182562828064}, {"end": 17.44, "word": " the", "start": 17.32, "probability": 0.8099021315574646}, {"end": 17.54, "word": " army", "start": 17.44, "probability": 0.7624181509017944}, {"end": 17.66, "word": " base,", "start": 17.54, "probability": 0.8227003216743469}, {"end": 17.88, "word": " clean", "start": 17.74, "probability": 0.7740076780319214}, {"end": 18, "word": " your", "start": 17.88, "probability": 0.7935739159584045}, {"end": 18.12, "word": " car", "start": 18, "probability": 0.8899481892585754}, {"end": 18.22, "word": " at", "start": 18.12, "probability": 0.8764775395393372}, {"end": 18.26, "word": " the", "start": 18.22, "probability": 0.8148840069770813}, {"end": 18.48, "word": " car", "start": 18.26, "probability": 0.9004565477371216}, {"end": 18.52, "word": " wash,", "start": 18.48, "probability": 0.5889071226119995}, {"end": 18.78, "word": " raise", "start": 18.62, "probability": 0.7670565843582153}, {"end": 18.94, "word": " the", "start": 18.78, "probability": 0.8077996969223022}, {"end": 19.06, "word": " toll", "start": 18.94, "probability": 0.9132710099220276}, {"end": 19.22, "word": " bridge.", "start": 19.06, "probability": 0.822396993637085}], "tokens": [51129, 30062, 264, 6582, 5533, 412, 264, 10155, 11, 1849, 1426, 11, 587, 264, 3874, 34544, 412, 264, 7267, 3096, 11, 2541, 428, 1032, 412, 264, 1032, 5675, 11, 5300, 264, 16629, 7283, 13, 51329], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 6, "end": 21.22, "seek": 0, "text": " And these play sets fit together to form a micro machine world.", "start": 19.24, "words": [{"end": 19.5, "word": " And", "start": 19.24, "probability": 0.8680288195610046}, {"end": 19.62, "word": " these", "start": 19.5, "probability": 0.6982218623161316}, {"end": 19.8, "word": " play", "start": 19.62, "probability": 0.8423182368278503}, {"end": 19.84, "word": " sets", "start": 19.8, "probability": 0.8482057452201843}, {"end": 20.08, "word": " fit", "start": 19.84, "probability": 0.8614595532417297}, {"end": 20.2, "word": " together", "start": 20.08, "probability": 0.7896531820297241}, {"end": 20.42, "word": " to", "start": 20.2, "probability": 0.8943203091621399}, {"end": 20.42, "word": " form", "start": 20.42, "probability": 0.8038238883018494}, {"end": 20.58, "word": " a", "start": 20.42, "probability": 0.9939543604850769}, {"end": 20.74, "word": " micro", "start": 20.58, "probability": 0.8134252429008484}, {"end": 20.92, "word": " machine", "start": 20.74, "probability": 0.7036716341972351}, {"end": 21.22, "word": " world.", "start": 20.92, "probability": 0.871777355670929}], "tokens": [51329, 400, 613, 862, 6352, 3318, 1214, 281, 1254, 257, 4532, 3479, 1002, 13, 51429], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 7, "end": 25.28, "seek": 0, "text": " Micro machine pocket play sets so tremendously tiny, so perfectly precise, so dazzlingly detailed, you\'ll want to pocket them all.", "start": 21.48, "words": [{"end": 21.6, "word": " Micro", "start": 21.48, "probability": 0.9181209206581116}, {"end": 21.78, "word": " machine", "start": 21.6, "probability": 0.6455795764923096}, {"end": 22, "word": " pocket", "start": 21.78, "probability": 0.7043859958648682}, {"end": 22.16, "word": " play", "start": 22, "probability": 0.8732221722602844}, {"end": 22.24, "word": " sets", "start": 22.16, "probability": 0.812091052532196}, {"end": 22.42, "word": " so", "start": 22.24, "probability": 0.5316440463066101}, {"end": 22.68, "word": " tremendously", "start": 22.42, "probability": 0.744458794593811}, {"end": 22.88, "word": " tiny,", "start": 22.68, "probability": 0.815040647983551}, {"end": 23.04, "word": " so", "start": 22.96, "probability": 0.9097583889961243}, {"end": 23.24, "word": " perfectly", "start": 23.04, "probability": 0.8714672923088074}, {"end": 23.5, "word": " precise,", "start": 23.24, "probability": 0.8715913891792297}, {"end": 23.78, "word": " so", "start": 23.64, "probability": 0.9078233242034912}, {"end": 24.3, "word": " dazzlingly", "start": 23.78, "probability": 0.8693957328796387}, {"end": 24.3, "word": " detailed,", "start": 24.3, "probability": 0.7534111738204956}, {"end": 24.52, "word": " you\'ll", "start": 24.32, "probability": 0.8286176919937134}, {"end": 24.62, "word": " want", "start": 24.52, "probability": 0.7137832045555115}, {"end": 24.78, "word": " to", "start": 24.62, "probability": 0.8862699270248413}, {"end": 24.88, "word": " pocket", "start": 24.78, "probability": 0.7723338007926941}, {"end": 25.1, "word": " them", "start": 24.88, "probability": 0.7235183715820312}, {"end": 25.28, "word": " all.", "start": 25.1, "probability": 0.8980650901794434}], "tokens": [51429, 25642, 3479, 8963, 862, 6352, 370, 27985, 5870, 11, 370, 6239, 13600, 11, 370, 44078, 1688, 356, 9942, 11, 291, 603, 528, 281, 8963, 552, 439, 13, 51629], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 8, "end": 27.66, "seek": 0, "text": " Micro machines and micro machine pocket play sets sold separately from Galoob.", "start": 25.5, "words": [{"end": 25.68, "word": " Micro", "start": 25.5, "probability": 0.9197527766227722}, {"end": 25.84, "word": " machines", "start": 25.68, "probability": 0.7449283599853516}, {"end": 26, "word": " and", "start": 25.84, "probability": 0.6610913276672363}, {"end": 26.12, "word": " micro", "start": 26, "probability": 0.8715086579322815}, {"end": 26.32, "word": " machine", "start": 26.12, "probability": 0.6785076856613159}, {"end": 26.5, "word": " pocket", "start": 26.32, "probability": 0.7522760033607483}, {"end": 26.68, "word": " play", "start": 26.5, "probability": 0.8618249297142029}, {"end": 26.78, "word": " sets", "start": 26.68, "probability": 0.8218684792518616}, {"end": 26.96, "word": " sold", "start": 26.78, "probability": 0.8280050158500671}, {"end": 27.16, "word": " separately", "start": 26.96, "probability": 0.6918163895606995}, {"end": 27.4, "word": " from", "start": 27.16, "probability": 0.8134355545043945}, {"end": 27.66, "word": " Galoob.", "start": 27.4, "probability": 0.7426764170328776}], "tokens": [51629, 25642, 8379, 293, 4532, 3479, 8963, 862, 6352, 3718, 14759, 490, 7336, 78, 996, 13, 51754], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}, {"id": 9, "end": 29.5, "seek": 0, "text": " The smaller they are, the better they are.", "start": 27.78, "words": [{"end": 28, "word": " The", "start": 27.78, "probability": 0.8174500465393066}, {"end": 28.2, "word": " smaller", "start": 28, "probability": 0.7499929666519165}, {"end": 28.42, "word": " they", "start": 28.2, "probability": 0.7381458878517151}, {"end": 28.68, "word": " are,", "start": 28.42, "probability": 0.8937985897064209}, {"end": 28.88, "word": " the", "start": 28.68, "probability": 0.813441812992096}, {"end": 29.02, "word": " better", "start": 28.88, "probability": 0.8151369690895081}, {"end": 29.22, "word": " they", "start": 29.02, "probability": 0.7374864816665649}, {"end": 29.5, "word": " are.", "start": 29.22, "probability": 0.8918095827102661}], "tokens": [51754, 440, 4356, 436, 366, 11, 264, 1101, 436, 366, 13, 51854], "avg_logprob": -0.29071213478265806, "temperature": 0, "no_speech_prob": 0.5242696404457092, "compression_ratio": 2.023206751054852}], "translation": null, "transcription": " This is the Micro Machine Man presenting the most midget miniature motorcade of micro machines. Each one has dramatic details, terrific trim, precision paint jobs, plus incredible micro machine pocket play sets. There\'s a police station, fire station, restaurant, service station, and more. Perfect pocket portables to take anyplace. And there are many miniature play sets to play with and each one comes with its own special edition micro machine vehicle and fun fantastic features that miraculously move. Raise the boat lift at the airport, marina, man the gun turret at the army base, clean your car at the car wash, raise the toll bridge. And these play sets fit together to form a micro machine world. Micro machine pocket play sets so tremendously tiny, so perfectly precise, so dazzlingly detailed, you\'ll want to pocket them all. Micro machines and micro machine pocket play sets sold separately from Galoob. The smaller they are, the better they are.", "detected_language": "english"}, "output_files": [], "is_training": false, "error": null, "metrics": {"predict_time": 46.073274}, "run_logs": "Transcribe with large-v2 model\nDetected language: English\n  0%|          | 0/3014 [00:00\u003C?, ?frames/s]\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589| 3000/3014 [00:20\u003C00:00, 146.43frames/s]\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589| 3000/3014 [00:38\u003C00:00, 78.77frames/s]", "version": {"config": {"build": {"gpu": true, "cuda": "11.7.1", "cudnn": "8", "python_version": "3.9", "python_packages": ["numpy==1.23.5", "torch==1.13.0", "tqdm==4.64.1", "more-itertools==9.0.0", "transformers==4.25.1", "ffmpeg-python==0.2.0", "openai-whisper==20230314"], "system_packages": ["ffmpeg"]}, "predict": "predict.py:Predictor"}, "release_notes": null, "docker_image_id": "20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "docker_image_name": "r8.im/soykertje/whisper@sha256:20de0792d38812ce94a0ba8e699b3416cbdc75486ed660db12deeb1b28f35bb6", "openapi_schema": {"info": {"title": "Cog", "version": "0.1.0"}, "paths": {"/": {"get": {"summary": "Root", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Root  Get"}}}, "description": "Successful Response"}}, "operationId": "root__get"}}, "/shutdown": {"post": {"summary": "Start Shutdown", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Start Shutdown Shutdown Post"}}}, "description": "Successful Response"}}, "operationId": "start_shutdown_shutdown_post"}}, "/predictions": {"post": {"summary": "Predict", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model", "operationId": "predict_predictions_post", "requestBody": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}}}}}}, "/health-check": {"get": {"summary": "Healthcheck", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Healthcheck Health Check Get"}}}, "description": "Successful Response"}}, "operationId": "healthcheck_health_check_get"}}, "/predictions/{prediction_id}": {"put": {"summary": "Predict Idempotent", "responses": {"200": {"content": {"application/json": {"schema": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}, {"in": "header", "name": "prefer", "schema": {"type": "string", "title": "Prefer"}, "required": false}], "description": "Run a single prediction on the model (idempotent creation).", "operationId": "predict_idempotent_predictions__prediction_id__put", "requestBody": {"content": {"application/json": {"schema": {"allOf": [{"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}], "title": "Prediction Request"}}}, "required": true}}}, "/predictions/{prediction_id}/cancel": {"post": {"summary": "Cancel", "responses": {"200": {"content": {"application/json": {"schema": {"title": "Response Cancel Predictions  Prediction Id  Cancel Post"}}}, "description": "Successful Response"}, "422": {"content": {"application/json": {"schema": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}, "description": "Validation Error"}}, "parameters": [{"in": "path", "name": "prediction_id", "schema": {"type": "string", "title": "Prediction ID"}, "required": true}], "description": "Cancel a running prediction", "operationId": "cancel_predictions__prediction_id__cancel_post"}}}, "openapi": "3.0.2", "components": {"schemas": {"Input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "An enumeration."}, "Output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "Status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "An enumeration."}, "ModelOutput": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "WebhookEvent": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "An enumeration."}, "ValidationError": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "PredictionRequest": {"type": "object", "title": "PredictionRequest", "properties": {"id": {"type": "string", "title": "Id"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "webhook": {"type": "string", "title": "Webhook", "format": "uri", "maxLength": 65536, "minLength": 1}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "output_file_prefix": {"type": "string", "title": "Output File Prefix"}, "webhook_events_filter": {"type": "array", "items": {"enum": ["start", "output", "logs", "completed"], "type": "string", "title": "WebhookEvent", "description": "An enumeration."}, "default": ["completed", "start", "logs", "output"], "uniqueItems": true}}}, "PredictionResponse": {"type": "object", "title": "PredictionResponse", "properties": {"id": {"type": "string", "title": "Id"}, "logs": {"type": "string", "title": "Logs", "default": ""}, "error": {"type": "string", "title": "Error"}, "input": {"type": "object", "title": "Input", "required": ["audio"], "properties": {"audio": {"type": "string", "title": "Audio", "format": "uri", "x-order": 0, "description": "Audio file"}, "model": {"enum": ["large-v2"], "type": "string", "title": "model", "description": "Choose a Whisper model.", "default": "large-v2", "x-order": 1}, "language": {"enum": ["af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "haw", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jw", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc", "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo", "zh", "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Azerbaijani", "Bashkir", "Basque", "Belarusian", "Bengali", "Bosnian", "Breton", "Bulgarian", "Burmese", "Castilian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Faroese", "Finnish", "Flemish", "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Lao", "Latin", "Latvian", "Letzeburgesch", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Moldavian", "Moldovan", "Mongolian", "Myanmar", "Nepali", "Norwegian", "Nynorsk", "Occitan", "Panjabi", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Pushto", "Romanian", "Russian", "Sanskrit", "Serbian", "Shona", "Sindhi", "Sinhala", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Valencian", "Vietnamese", "Welsh", "Yiddish", "Yoruba"], "type": "string", "title": "language", "description": "language spoken in the audio, specify None to perform language detection", "x-order": 4}, "patience": {"type": "number", "title": "Patience", "x-order": 6, "description": "optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search"}, "translate": {"type": "boolean", "title": "Translate", "default": false, "x-order": 3, "description": "Translate the text to English when set to True"}, "temperature": {"type": "number", "title": "Temperature", "default": 0, "x-order": 5, "description": "temperature to use for sampling"}, "transcription": {"enum": ["plain text", "srt", "vtt"], "type": "string", "title": "transcription", "description": "Choose the format for the transcription", "default": "plain text", "x-order": 2}, "initial_prompt": {"type": "string", "title": "Initial Prompt", "x-order": 8, "description": "optional text to provide as a prompt for the first window."}, "suppress_tokens": {"type": "string", "title": "Suppress Tokens", "default": "-1", "x-order": 7, "description": "comma-separated list of token ids to suppress during sampling; \'-1\' will suppress most special characters except common punctuations"}, "word_timestamps": {"type": "boolean", "title": "Word Timestamps", "default": true, "x-order": 14, "description": "Improves the accuracy of the timestamps by using word-level timestamps"}, "logprob_threshold": {"type": "number", "title": "Logprob Threshold", "default": -1, "x-order": 12, "description": "if the average log probability is lower than this value, treat the decoding as failed"}, "no_speech_threshold": {"type": "number", "title": "No Speech Threshold", "default": 0.6, "x-order": 13, "description": "if the probability of the \u003C|nospeech|\u003E token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence"}, "condition_on_previous_text": {"type": "boolean", "title": "Condition On Previous Text", "default": true, "x-order": 9, "description": "if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop"}, "compression_ratio_threshold": {"type": "number", "title": "Compression Ratio Threshold", "default": 2.4, "x-order": 11, "description": "if the gzip compression ratio is higher than this value, treat the decoding as failed"}, "temperature_increment_on_fallback": {"type": "number", "title": "Temperature Increment On Fallback", "default": 0.2, "x-order": 10, "description": "temperature to increase when falling back when the decoding fails to meet either of the thresholds below"}}}, "output": {"type": "object", "title": "ModelOutput", "required": ["detected_language", "transcription"], "properties": {"segments": {"title": "Segments"}, "srt_file": {"type": "string", "title": "Srt File", "format": "uri"}, "txt_file": {"type": "string", "title": "Txt File", "format": "uri"}, "translation": {"type": "string", "title": "Translation"}, "transcription": {"type": "string", "title": "Transcription"}, "detected_language": {"type": "string", "title": "Detected Language"}}}, "status": {"enum": ["starting", "processing", "succeeded", "canceled", "failed"], "type": "string", "title": "Status", "description": "An enumeration."}, "metrics": {"type": "object", "title": "Metrics"}, "version": {"type": "string", "title": "Version"}, "created_at": {"type": "string", "title": "Created At", "format": "date-time"}, "started_at": {"type": "string", "title": "Started At", "format": "date-time"}, "completed_at": {"type": "string", "title": "Completed At", "format": "date-time"}}}, "HTTPValidationError": {"type": "object", "title": "HTTPValidationError", "properties": {"detail": {"type": "array", "items": {"type": "object", "title": "ValidationError", "required": ["loc", "msg", "type"], "properties": {"loc": {"type": "array", "items": {"anyOf": [{"type": "string"}, {"type": "integer"}]}, "title": "Location"}, "msg": {"type": "string", "title": "Message"}, "type": {"type": "string", "title": "Error Type"}}}, "title": "Detail"}}}}}}, "model": {"absolute_url": "/soykertje/whisper", "username": "soykertje", "name": "whisper", "description": "Convert speech in audio to text", "visibility": "public", "is_run_only": false, "github_url": "https://github.com/Soykertje/cog-whisper", "paper_url": null, "arxiv_paper_id": null, "cover_image": null, "latest_version_created_at": null, "default_example_uuid": "hfagulrblado4gvy6nz3bgplm4", "display_output_as_json": false}, "created_at": "2023-08-22T01:14:53.720Z"}, "user": {"username": "soykertje", "url": "/soykertje"}}, "replicateHost": "https://replicate.com", "canSharePrediction": true, "canDeletePrediction": false, "readonly": false}',
          }}
          id="react-component-props-0fde53ef-1903-4c9e-96c9-85b1ce175ec2"
          type="application/json"
        />

        <div
          data-component="VersionRun"
          data-props="react-component-props-0fde53ef-1903-4c9e-96c9-85b1ce175ec2"
        >
          <div className="flex flex-col md:flex-row gap-2lh md:gap-lh">
            <div className="flex-1 min-w-0">
              <h4 className="flex-1 mb-lh">Input</h4>
              <form action="#" noValidate>
                <div className="mb-lh">
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
                          __idm_id__="1130497"
                          className="vjs-tech"
                          id="vjs_video_3_html5_api"
                          role="application"
                          src="https://replicate.delivery/pbxt/JOMXkhgXe8wbOGqnQ5LwJUulwpbcvd1NZUYKFe1TMPGaXg24/1987%20Micro%20Machines%20Car%20Playset%20Commercial%20(Featuring%20John%20Moschitta%20the%20Micro%20Machine%20Man).mp3"
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
                          <span aria-live="polite" className="vjs-control-text">
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
                              00:30:144
                            </span>
                          </div>
                          <div className="vjs-progress-control vjs-control">
                            <div
                              aria-label="Progress Bar"
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="0.00"
                              aria-valuetext="00:00:000 of 00:30:144"
                              className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                              role="slider"
                              tabIndex="0"
                            >
                              <div
                                className="vjs-load-progress"
                                style={{
                                  width: "54.35%",
                                }}
                              >
                                <span className="vjs-control-text">
                                  <span>Loaded</span>:{" "}
                                  <span className="vjs-control-text-loaded-percentage">
                                    54.35%
                                  </span>
                                </span>
                                <div
                                  data-end="16.382"
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
                            <div aria-live="off" className="vjs-live-display">
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
                              00:30:000
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
                              <ul className="vjs-menu-content" role="menu" />
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
                                <li className="vjs-menu-title" tabIndex="-1">
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
                              <ul className="vjs-menu-content" role="menu" />
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
                            Beginning of dialog window. Escape will cancel and
                            close the window.
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
                              <button className="vjs-done-button" type="button">
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
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-audio">
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
                    <code>audio</code>
                  </label>
                  <div className="dropzone text-shade border-black border-2 border-opacity-10 border-dashed px-lh py-05lh bg-black/5">
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
                          https://replicate.delivery/pbxt/JOMXkhgXe8wbOGqnQ5LwJUulwpbcvd1NZUYKFe1TMPGaXg24/1987%20Micro%20Machines%20Car%20Playset%20Commercial%20(Featuring%20John%20Moschitta%20the%20Micro%20Machine%20Man).mp3
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
                  <p className="text-shade mt-1">Audio file</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-model">
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
                    <code>model</code>
                  </label>
                  <select
                    className="form-select w-full"
                    disabled
                    id="input-model"
                    name="model"
                  >
                    <option value="" />
                    <option value="large-v2">large-v2</option>
                  </select>
                  <p className="text-shade mt-1">Choose a Whisper model.</p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-transcription">
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
                    <code>transcription</code>
                  </label>
                  <select
                    className="form-select w-full"
                    disabled
                    id="input-transcription"
                    name="transcription"
                  >
                    <option value="" />
                    <option value="plain text">plain text</option>
                    <option value="srt">srt</option>
                    <option value="vtt">vtt</option>
                  </select>
                  <p className="text-shade mt-1">
                    Choose the format for the transcription
                  </p>
                </div>
                <div className="mb-lh">
                  <div className="mb-1">
                    <input
                      className="w-5 h-5 relative top-1 mr-2"
                      defaultValue="false"
                      disabled
                      id="input-translate"
                      name="translate"
                      type="checkbox"
                    />
                    <label htmlFor="input-translate">
                      <code>translate</code>
                    </label>
                  </div>
                  <p className="text-shade mt-1">
                    Translate the text to English when set to True
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-language">
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
                    <code>language</code>
                  </label>
                  <select
                    className="form-select w-full"
                    disabled
                    id="input-language"
                    name="language"
                  >
                    <option value="" />
                    <option value="af">af</option>
                    <option value="am">am</option>
                    <option value="ar">ar</option>
                    <option value="as">as</option>
                    <option value="az">az</option>
                    <option value="ba">ba</option>
                    <option value="be">be</option>
                    <option value="bg">bg</option>
                    <option value="bn">bn</option>
                    <option value="bo">bo</option>
                    <option value="br">br</option>
                    <option value="bs">bs</option>
                    <option value="ca">ca</option>
                    <option value="cs">cs</option>
                    <option value="cy">cy</option>
                    <option value="da">da</option>
                    <option value="de">de</option>
                    <option value="el">el</option>
                    <option value="en">en</option>
                    <option value="es">es</option>
                    <option value="et">et</option>
                    <option value="eu">eu</option>
                    <option value="fa">fa</option>
                    <option value="fi">fi</option>
                    <option value="fo">fo</option>
                    <option value="fr">fr</option>
                    <option value="gl">gl</option>
                    <option value="gu">gu</option>
                    <option value="ha">ha</option>
                    <option value="haw">haw</option>
                    <option value="he">he</option>
                    <option value="hi">hi</option>
                    <option value="hr">hr</option>
                    <option value="ht">ht</option>
                    <option value="hu">hu</option>
                    <option value="hy">hy</option>
                    <option value="id">id</option>
                    <option value="is">is</option>
                    <option value="it">it</option>
                    <option value="ja">ja</option>
                    <option value="jw">jw</option>
                    <option value="ka">ka</option>
                    <option value="kk">kk</option>
                    <option value="km">km</option>
                    <option value="kn">kn</option>
                    <option value="ko">ko</option>
                    <option value="la">la</option>
                    <option value="lb">lb</option>
                    <option value="ln">ln</option>
                    <option value="lo">lo</option>
                    <option value="lt">lt</option>
                    <option value="lv">lv</option>
                    <option value="mg">mg</option>
                    <option value="mi">mi</option>
                    <option value="mk">mk</option>
                    <option value="ml">ml</option>
                    <option value="mn">mn</option>
                    <option value="mr">mr</option>
                    <option value="ms">ms</option>
                    <option value="mt">mt</option>
                    <option value="my">my</option>
                    <option value="ne">ne</option>
                    <option value="nl">nl</option>
                    <option value="nn">nn</option>
                    <option value="no">no</option>
                    <option value="oc">oc</option>
                    <option value="pa">pa</option>
                    <option value="pl">pl</option>
                    <option value="ps">ps</option>
                    <option value="pt">pt</option>
                    <option value="ro">ro</option>
                    <option value="ru">ru</option>
                    <option value="sa">sa</option>
                    <option value="sd">sd</option>
                    <option value="si">si</option>
                    <option value="sk">sk</option>
                    <option value="sl">sl</option>
                    <option value="sn">sn</option>
                    <option value="so">so</option>
                    <option value="sq">sq</option>
                    <option value="sr">sr</option>
                    <option value="su">su</option>
                    <option value="sv">sv</option>
                    <option value="sw">sw</option>
                    <option value="ta">ta</option>
                    <option value="te">te</option>
                    <option value="tg">tg</option>
                    <option value="th">th</option>
                    <option value="tk">tk</option>
                    <option value="tl">tl</option>
                    <option value="tr">tr</option>
                    <option value="tt">tt</option>
                    <option value="uk">uk</option>
                    <option value="ur">ur</option>
                    <option value="uz">uz</option>
                    <option value="vi">vi</option>
                    <option value="yi">yi</option>
                    <option value="yo">yo</option>
                    <option value="zh">zh</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Amharic">Amharic</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Assamese">Assamese</option>
                    <option value="Azerbaijani">Azerbaijani</option>
                    <option value="Bashkir">Bashkir</option>
                    <option value="Basque">Basque</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Bosnian">Bosnian</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Burmese">Burmese</option>
                    <option value="Castilian">Castilian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="English">English</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Faroese">Faroese</option>
                    <option value="Finnish">Finnish</option>
                    <option value="Flemish">Flemish</option>
                    <option value="French">French</option>
                    <option value="Galician">Galician</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Haitian">Haitian</option>
                    <option value="Haitian Creole">Haitian Creole</option>
                    <option value="Hausa">Hausa</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Javanese">Javanese</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Kazakh">Kazakh</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Korean">Korean</option>
                    <option value="Lao">Lao</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Letzeburgesch">Letzeburgesch</option>
                    <option value="Lingala">Lingala</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Luxembourgish">Luxembourgish</option>
                    <option value="Macedonian">Macedonian</option>
                    <option value="Malagasy">Malagasy</option>
                    <option value="Malay">Malay</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Maltese">Maltese</option>
                    <option value="Maori">Maori</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Moldavian">Moldavian</option>
                    <option value="Moldovan">Moldovan</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Nynorsk">Nynorsk</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Panjabi">Panjabi</option>
                    <option value="Pashto">Pashto</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Pushto">Pushto</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Shona">Shona</option>
                    <option value="Sindhi">Sindhi</option>
                    <option value="Sinhala">Sinhala</option>
                    <option value="Sinhalese">Sinhalese</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Somali">Somali</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Sundanese">Sundanese</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Tagalog">Tagalog</option>
                    <option value="Tajik">Tajik</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Tatar">Tatar</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Turkmen">Turkmen</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Uzbek">Uzbek</option>
                    <option value="Valencian">Valencian</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Yiddish">Yiddish</option>
                    <option value="Yoruba">Yoruba</option>
                  </select>
                  <p className="text-shade mt-1">
                    language spoken in the audio, specify None to perform
                    language detection
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
                  <input
                    className="form-input w-full"
                    defaultValue=""
                    disabled
                    id="input-temperature"
                    name="temperature"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    temperature to use for sampling
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-patience">
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
                    <code>patience</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue=""
                    disabled
                    id="input-patience"
                    name="patience"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    optional patience value to use in beam decoding, as in
                    https://arxiv.org/abs/2204.05424, the default (1.0) is
                    equivalent to conventional beam search
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-suppress_tokens">
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
                    <code>suppress_tokens</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      defaultValue="-1"
                      name="suppress_tokens"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    comma-separated list of token ids to suppress during
                    sampling; '-1' will suppress most special characters except
                    common punctuations
                  </p>
                </div>
                <div className="mb-lh">
                  <label className="block mb-2" htmlFor="input-initial_prompt">
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
                    <code>initial_prompt</code>
                  </label>
                  <div>
                    <textarea
                      className="form-input w-full resize-none"
                      name="initial_prompt"
                      style={{
                        height: "50px !important",
                      }}
                    />
                  </div>
                  <p className="text-shade mt-1">
                    optional text to provide as a prompt for the first window.
                  </p>
                </div>
                <div className="mb-lh">
                  <div className="mb-1">
                    <input
                      className="w-5 h-5 relative top-1 mr-2"
                      defaultChecked
                      defaultValue="true"
                      disabled
                      id="input-condition_on_previous_text"
                      name="condition_on_previous_text"
                      type="checkbox"
                    />
                    <label htmlFor="input-condition_on_previous_text">
                      <code>condition_on_previous_text</code>
                    </label>
                  </div>
                  <p className="text-shade mt-1">
                    if True, provide the previous output of the model as a
                    prompt for the next window; disabling may make the text
                    inconsistent across windows, but the model becomes less
                    prone to getting stuck in a failure loop
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-temperature_increment_on_fallback"
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
                    <code>temperature_increment_on_fallback</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="0.2"
                    disabled
                    id="input-temperature_increment_on_fallback"
                    name="temperature_increment_on_fallback"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    temperature to increase when falling back when the decoding
                    fails to meet either of the thresholds below
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-compression_ratio_threshold"
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
                    <code>compression_ratio_threshold</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="2.4"
                    disabled
                    id="input-compression_ratio_threshold"
                    name="compression_ratio_threshold"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    if the gzip compression ratio is higher than this value,
                    treat the decoding as failed
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-logprob_threshold"
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
                    <code>logprob_threshold</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="-1"
                    disabled
                    id="input-logprob_threshold"
                    name="logprob_threshold"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    if the average log probability is lower than this value,
                    treat the decoding as failed
                  </p>
                </div>
                <div className="mb-lh">
                  <label
                    className="block mb-2"
                    htmlFor="input-no_speech_threshold"
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
                    <code>no_speech_threshold</code>
                  </label>
                  <input
                    className="form-input w-full"
                    defaultValue="0.6"
                    disabled
                    id="input-no_speech_threshold"
                    name="no_speech_threshold"
                    step="0.01"
                    type="number"
                  />
                  <p className="text-shade mt-1">
                    {`if the probability of the <|nospeech|> token is higher than this value AND the decoding has failed due to \`logprob_threshold\`, consider the segment as silence`}
                  </p>
                </div>
                <div className="mb-lh">
                  <div className="mb-1">
                    <input
                      className="w-5 h-5 relative top-1 mr-2"
                      defaultChecked
                      defaultValue="true"
                      disabled
                      id="input-word_timestamps"
                      name="word_timestamps"
                      type="checkbox"
                    />
                    <label htmlFor="input-word_timestamps">
                      <code>word_timestamps</code>
                    </label>
                  </div>
                  <p className="text-shade mt-1">
                    Improves the accuracy of the timestamps by using word-level
                    timestamps
                  </p>
                </div>
                <p className="mb-05lh">Sign in to run this model:</p>
                <p className="my-7">
                  <a
                    className="form-button"
                    href="/login/github/?next=/soykertje/whisper"
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
                    <div className="mb-lh">
                      <div>
                        <p className="mb-2">segments</p>
                        <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                          <code className="output w-full">
                            {`[
                      {
                      "id": 0,
                      "end": 3.14,
                      "seek": 0,
                      "text": " This is the Micro Machine Man presenting the most midget miniature motorcade of micro machines.",
                      "start": 0.18,
                      "words": [
                      {
                      "end": 0.5,
                      "word": " This",
                      "start": 0.18,
                      "probability": 0.5188008546829224
                      },
                      {
                      "end": 0.66,
                      "word": " is",
                      "start": 0.5,
                      "probability": 0.9036935567855835
                      },
                      {
                      "end": 0.88,
                      "word": " the",
                      "start": 0.66,
                      "probability": 0.7630036473274231
                      },
                      {
                      "end": 0.9,
                      "word": " Micro",
                      "start": 0.88,
                      "probability": 0.7599949836730957
                      },
                      {
                      "end": 1,
                      "word": " Machine",
                      "start": 0.9,
                      "probability": 0.43241745233535767
                      },
                      {
                      "end": 1.18,
                      "word": " Man",
                      "start": 1,
                      "probability": 0.8935106992721558
                      },
                      {
                      "end": 1.4,
                      "word": " presenting",
                      "start": 1.18,
                      "probability": 0.4879225194454193
                      },
                      {
                      "end": 1.52,
                      "word": " the",
                      "start": 1.4,
                      "probability": 0.8076907992362976
                      },
                      {
                      "end": 1.68,
                      "word": " most",
                      "start": 1.52,
                      "probability": 0.8195436596870422
                      },
                      {
                      "end": 1.86,
                      "word": " midget",
                      "start": 1.68,
                      "probability": 0.9426034390926361
                      },
                      {
                      "end": 2.14,
                      "word": " miniature",
                      "start": 1.86,
                      "probability": 0.6330108642578125
                      },
                      {
                      "end": 2.46,
                      "word": " motorcade",
                      "start": 2.14,
                      "probability": 0.7706209719181061
                      },
                      {
                      "end": 2.7,
                      "word": " of",
                      "start": 2.46,
                      "probability": 0.8996413946151733
                      },
                      {
                      "end": 2.9,
                      "word": " micro",
                      "start": 2.7,
                      "probability": 0.2997014820575714
                      },
                      {
                      "end": 3.14,
                      "word": " machines.",
                      "start": 2.9,
                      "probability": 0.5044888257980347
                      }
                      ],
                      "tokens": [
                      50364,
                      639,
                      307,
                      264,
                      25642,
                      22155,
                      2458,
                      15578,
                      264,
                      881,
                      2062,
                      847,
                      34674,
                      5932,
                      30340,
                      295,
                      4532,
                      8379,
                      13,
                      50524
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 1,
                      "end": 6.66,
                      "seek": 0,
                      "text": " Each one has dramatic details, terrific trim, precision paint jobs, plus incredible micro machine pocket play sets.",
                      "start": 3.46,
                      "words": [
                      {
                      "end": 3.56,
                      "word": " Each",
                      "start": 3.46,
                      "probability": 0.7921050786972046
                      },
                      {
                      "end": 3.68,
                      "word": " one",
                      "start": 3.56,
                      "probability": 0.8239385485649109
                      },
                      {
                      "end": 3.8,
                      "word": " has",
                      "start": 3.68,
                      "probability": 0.8931549787521362
                      },
                      {
                      "end": 4.04,
                      "word": " dramatic",
                      "start": 3.8,
                      "probability": 0.76500004529953
                      },
                      {
                      "end": 4.24,
                      "word": " details,",
                      "start": 4.04,
                      "probability": 0.6641080379486084
                      },
                      {
                      "end": 4.5,
                      "word": " terrific",
                      "start": 4.48,
                      "probability": 0.816464900970459
                      },
                      {
                      "end": 4.66,
                      "word": " trim,",
                      "start": 4.5,
                      "probability": 0.41670969128608704
                      },
                      {
                      "end": 4.96,
                      "word": " precision",
                      "start": 4.78,
                      "probability": 0.7823763489723206
                      },
                      {
                      "end": 5.18,
                      "word": " paint",
                      "start": 4.96,
                      "probability": 0.8373522162437439
                      },
                      {
                      "end": 5.3,
                      "word": " jobs,",
                      "start": 5.18,
                      "probability": 0.45608851313591003
                      },
                      {
                      "end": 5.52,
                      "word": " plus",
                      "start": 5.34,
                      "probability": 0.8570372462272644
                      },
                      {
                      "end": 5.78,
                      "word": " incredible",
                      "start": 5.52,
                      "probability": 0.7519615888595581
                      },
                      {
                      "end": 5.98,
                      "word": " micro",
                      "start": 5.78,
                      "probability": 0.6544991135597229
                      },
                      {
                      "end": 6.2,
                      "word": " machine",
                      "start": 5.98,
                      "probability": 0.659029483795166
                      },
                      {
                      "end": 6.54,
                      "word": " pocket",
                      "start": 6.2,
                      "probability": 0.6552930474281311
                      },
                      {
                      "end": 6.62,
                      "word": " play",
                      "start": 6.54,
                      "probability": 0.6885859370231628
                      },
                      {
                      "end": 6.66,
                      "word": " sets.",
                      "start": 6.62,
                      "probability": 0.633192241191864
                      }
                      ],
                      "tokens": [
                      50524,
                      6947,
                      472,
                      575,
                      12023,
                      4365,
                      11,
                      20899,
                      10445,
                      11,
                      18356,
                      4225,
                      4782,
                      11,
                      1804,
                      4651,
                      4532,
                      3479,
                      8963,
                      862,
                      6352,
                      13,
                      50699
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 2,
                      "end": 8.76,
                      "seek": 0,
                      "text": " There's a police station, fire station, restaurant, service station, and more.",
                      "start": 6.8,
                      "words": [
                      {
                      "end": 6.9,
                      "word": " There's",
                      "start": 6.8,
                      "probability": 0.8825059831142426
                      },
                      {
                      "end": 6.96,
                      "word": " a",
                      "start": 6.9,
                      "probability": 0.9860183000564575
                      },
                      {
                      "end": 7.18,
                      "word": " police",
                      "start": 6.96,
                      "probability": 0.8330947756767273
                      },
                      {
                      "end": 7.3,
                      "word": " station,",
                      "start": 7.18,
                      "probability": 0.8929913640022278
                      },
                      {
                      "end": 7.58,
                      "word": " fire",
                      "start": 7.4,
                      "probability": 0.7919226884841919
                      },
                      {
                      "end": 7.7,
                      "word": " station,",
                      "start": 7.58,
                      "probability": 0.8724629282951355
                      },
                      {
                      "end": 8.02,
                      "word": " restaurant,",
                      "start": 7.8,
                      "probability": 0.7704039216041565
                      },
                      {
                      "end": 8.26,
                      "word": " service",
                      "start": 8.08,
                      "probability": 0.8293709754943848
                      },
                      {
                      "end": 8.44,
                      "word": " station,",
                      "start": 8.26,
                      "probability": 0.9018292427062988
                      },
                      {
                      "end": 8.64,
                      "word": " and",
                      "start": 8.44,
                      "probability": 0.8904381990432739
                      },
                      {
                      "end": 8.76,
                      "word": " more.",
                      "start": 8.64,
                      "probability": 0.8884001970291138
                      }
                      ],
                      "tokens": [
                      50699,
                      821,
                      311,
                      257,
                      3804,
                      5214,
                      11,
                      2610,
                      5214,
                      11,
                      6383,
                      11,
                      2643,
                      5214,
                      11,
                      293,
                      544,
                      13,
                      50804
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 3,
                      "end": 10.28,
                      "seek": 0,
                      "text": " Perfect pocket portables to take anyplace.",
                      "start": 9,
                      "words": [
                      {
                      "end": 9.16,
                      "word": " Perfect",
                      "start": 9,
                      "probability": 0.8314006328582764
                      },
                      {
                      "end": 9.38,
                      "word": " pocket",
                      "start": 9.16,
                      "probability": 0.7699366211891174
                      },
                      {
                      "end": 9.62,
                      "word": " portables",
                      "start": 9.38,
                      "probability": 0.9437406063079834
                      },
                      {
                      "end": 9.8,
                      "word": " to",
                      "start": 9.62,
                      "probability": 0.8796511292457581
                      },
                      {
                      "end": 9.9,
                      "word": " take",
                      "start": 9.8,
                      "probability": 0.8167694807052612
                      },
                      {
                      "end": 10.28,
                      "word": " anyplace.",
                      "start": 9.9,
                      "probability": 0.6491216719150543
                      }
                      ],
                      "tokens": [
                      50804,
                      10246,
                      8963,
                      2436,
                      2965,
                      281,
                      747,
                      604,
                      6742,
                      13,
                      50879
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 4,
                      "end": 15.3,
                      "seek": 0,
                      "text": " And there are many miniature play sets to play with and each one comes with its own special edition micro machine vehicle and fun fantastic features that miraculously move.",
                      "start": 10.4,
                      "words": [
                      {
                      "end": 10.54,
                      "word": " And",
                      "start": 10.4,
                      "probability": 0.8727167844772339
                      },
                      {
                      "end": 10.66,
                      "word": " there",
                      "start": 10.54,
                      "probability": 0.8446416854858398
                      },
                      {
                      "end": 10.68,
                      "word": " are",
                      "start": 10.66,
                      "probability": 0.8793963193893433
                      },
                      {
                      "end": 10.82,
                      "word": " many",
                      "start": 10.68,
                      "probability": 0.8155453205108643
                      },
                      {
                      "end": 11.02,
                      "word": " miniature",
                      "start": 10.82,
                      "probability": 0.802977979183197
                      },
                      {
                      "end": 11.24,
                      "word": " play",
                      "start": 11.02,
                      "probability": 0.8290015459060669
                      },
                      {
                      "end": 11.24,
                      "word": " sets",
                      "start": 11.24,
                      "probability": 0.8442025780677795
                      },
                      {
                      "end": 11.42,
                      "word": " to",
                      "start": 11.24,
                      "probability": 0.895969808101654
                      },
                      {
                      "end": 11.52,
                      "word": " play",
                      "start": 11.42,
                      "probability": 0.8799439072608948
                      },
                      {
                      "end": 11.6,
                      "word": " with",
                      "start": 11.52,
                      "probability": 0.7744315266609192
                      },
                      {
                      "end": 11.7,
                      "word": " and",
                      "start": 11.6,
                      "probability": 0.40789568424224854
                      },
                      {
                      "end": 11.78,
                      "word": " each",
                      "start": 11.7,
                      "probability": 0.8371046185493469
                      },
                      {
                      "end": 11.92,
                      "word": " one",
                      "start": 11.78,
                      "probability": 0.8314981460571289
                      },
                      {
                      "end": 12.04,
                      "word": " comes",
                      "start": 11.92,
                      "probability": 0.8056870102882385
                      },
                      {
                      "end": 12.14,
                      "word": " with",
                      "start": 12.04,
                      "probability": 0.8167880773544312
                      },
                      {
                      "end": 12.24,
                      "word": " its",
                      "start": 12.14,
                      "probability": 0.6112188100814819
                      },
                      {
                      "end": 12.36,
                      "word": " own",
                      "start": 12.24,
                      "probability": 0.8195785880088806
                      },
                      {
                      "end": 12.58,
                      "word": " special",
                      "start": 12.36,
                      "probability": 0.9109472632408142
                      },
                      {
                      "end": 12.88,
                      "word": " edition",
                      "start": 12.58,
                      "probability": 0.7968374490737915
                      },
                      {
                      "end": 13.1,
                      "word": " micro",
                      "start": 12.88,
                      "probability": 0.7488399147987366
                      },
                      {
                      "end": 13.28,
                      "word": " machine",
                      "start": 13.1,
                      "probability": 0.71075838804245
                      },
                      {
                      "end": 13.52,
                      "word": " vehicle",
                      "start": 13.28,
                      "probability": 0.8960368037223816
                      },
                      {
                      "end": 13.66,
                      "word": " and",
                      "start": 13.52,
                      "probability": 0.8079777956008911
                      },
                      {
                      "end": 13.84,
                      "word": " fun",
                      "start": 13.66,
                      "probability": 0.8869229555130005
                      },
                      {
                      "end": 14.1,
                      "word": " fantastic",
                      "start": 13.84,
                      "probability": 0.6974602341651917
                      },
                      {
                      "end": 14.34,
                      "word": " features",
                      "start": 14.1,
                      "probability": 0.73177570104599
                      },
                      {
                      "end": 14.54,
                      "word": " that",
                      "start": 14.34,
                      "probability": 0.866608738899231
                      },
                      {
                      "end": 14.84,
                      "word": " miraculously",
                      "start": 14.54,
                      "probability": 0.9221479594707489
                      },
                      {
                      "end": 15.3,
                      "word": " move.",
                      "start": 14.84,
                      "probability": 0.8684508204460144
                      }
                      ],
                      "tokens": [
                      50879,
                      400,
                      456,
                      366,
                      867,
                      34674,
                      862,
                      6352,
                      281,
                      862,
                      365,
                      293,
                      1184,
                      472,
                      1487,
                      365,
                      1080,
                      1065,
                      2121,
                      11377,
                      4532,
                      3479,
                      5864,
                      293,
                      1019,
                      5456,
                      4122,
                      300,
                      30686,
                      25038,
                      1286,
                      13,
                      51129
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 5,
                      "end": 19.22,
                      "seek": 0,
                      "text": " Raise the boat lift at the airport, marina, man the gun turret at the army base, clean your car at the car wash, raise the toll bridge.",
                      "start": 15.64,
                      "words": [
                      {
                      "end": 15.66,
                      "word": " Raise",
                      "start": 15.64,
                      "probability": 0.8107876181602478
                      },
                      {
                      "end": 15.78,
                      "word": " the",
                      "start": 15.66,
                      "probability": 0.8148850202560425
                      },
                      {
                      "end": 15.9,
                      "word": " boat",
                      "start": 15.78,
                      "probability": 0.8849641680717468
                      },
                      {
                      "end": 15.98,
                      "word": " lift",
                      "start": 15.9,
                      "probability": 0.45141515135765076
                      },
                      {
                      "end": 16.1,
                      "word": " at",
                      "start": 15.98,
                      "probability": 0.8778955340385437
                      },
                      {
                      "end": 16.24,
                      "word": " the",
                      "start": 16.1,
                      "probability": 0.8175328373908997
                      },
                      {
                      "end": 16.36,
                      "word": " airport,",
                      "start": 16.24,
                      "probability": 0.8736236691474915
                      },
                      {
                      "end": 16.62,
                      "word": " marina,",
                      "start": 16.38,
                      "probability": 0.6979465484619141
                      },
                      {
                      "end": 16.84,
                      "word": " man",
                      "start": 16.68,
                      "probability": 0.8808432221412659
                      },
                      {
                      "end": 16.92,
                      "word": " the",
                      "start": 16.84,
                      "probability": 0.7407904863357544
                      },
                      {
                      "end": 17.1,
                      "word": " gun",
                      "start": 16.92,
                      "probability": 0.896804690361023
                      },
                      {
                      "end": 17.22,
                      "word": " turret",
                      "start": 17.1,
                      "probability": 0.9114507436752319
                      },
                      {
                      "end": 17.32,
                      "word": " at",
                      "start": 17.22,
                      "probability": 0.8769182562828064
                      },
                      {
                      "end": 17.44,
                      "word": " the",
                      "start": 17.32,
                      "probability": 0.8099021315574646
                      },
                      {
                      "end": 17.54,
                      "word": " army",
                      "start": 17.44,
                      "probability": 0.7624181509017944
                      },
                      {
                      "end": 17.66,
                      "word": " base,",
                      "start": 17.54,
                      "probability": 0.8227003216743469
                      },
                      {
                      "end": 17.88,
                      "word": " clean",
                      "start": 17.74,
                      "probability": 0.7740076780319214
                      },
                      {
                      "end": 18,
                      "word": " your",
                      "start": 17.88,
                      "probability": 0.7935739159584045
                      },
                      {
                      "end": 18.12,
                      "word": " car",
                      "start": 18,
                      "probability": 0.8899481892585754
                      },
                      {
                      "end": 18.22,
                      "word": " at",
                      "start": 18.12,
                      "probability": 0.8764775395393372
                      },
                      {
                      "end": 18.26,
                      "word": " the",
                      "start": 18.22,
                      "probability": 0.8148840069770813
                      },
                      {
                      "end": 18.48,
                      "word": " car",
                      "start": 18.26,
                      "probability": 0.9004565477371216
                      },
                      {
                      "end": 18.52,
                      "word": " wash,",
                      "start": 18.48,
                      "probability": 0.5889071226119995
                      },
                      {
                      "end": 18.78,
                      "word": " raise",
                      "start": 18.62,
                      "probability": 0.7670565843582153
                      },
                      {
                      "end": 18.94,
                      "word": " the",
                      "start": 18.78,
                      "probability": 0.8077996969223022
                      },
                      {
                      "end": 19.06,
                      "word": " toll",
                      "start": 18.94,
                      "probability": 0.9132710099220276
                      },
                      {
                      "end": 19.22,
                      "word": " bridge.",
                      "start": 19.06,
                      "probability": 0.822396993637085
                      }
                      ],
                      "tokens": [
                      51129,
                      30062,
                      264,
                      6582,
                      5533,
                      412,
                      264,
                      10155,
                      11,
                      1849,
                      1426,
                      11,
                      587,
                      264,
                      3874,
                      34544,
                      412,
                      264,
                      7267,
                      3096,
                      11,
                      2541,
                      428,
                      1032,
                      412,
                      264,
                      1032,
                      5675,
                      11,
                      5300,
                      264,
                      16629,
                      7283,
                      13,
                      51329
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 6,
                      "end": 21.22,
                      "seek": 0,
                      "text": " And these play sets fit together to form a micro machine world.",
                      "start": 19.24,
                      "words": [
                      {
                      "end": 19.5,
                      "word": " And",
                      "start": 19.24,
                      "probability": 0.8680288195610046
                      },
                      {
                      "end": 19.62,
                      "word": " these",
                      "start": 19.5,
                      "probability": 0.6982218623161316
                      },
                      {
                      "end": 19.8,
                      "word": " play",
                      "start": 19.62,
                      "probability": 0.8423182368278503
                      },
                      {
                      "end": 19.84,
                      "word": " sets",
                      "start": 19.8,
                      "probability": 0.8482057452201843
                      },
                      {
                      "end": 20.08,
                      "word": " fit",
                      "start": 19.84,
                      "probability": 0.8614595532417297
                      },
                      {
                      "end": 20.2,
                      "word": " together",
                      "start": 20.08,
                      "probability": 0.7896531820297241
                      },
                      {
                      "end": 20.42,
                      "word": " to",
                      "start": 20.2,
                      "probability": 0.8943203091621399
                      },
                      {
                      "end": 20.42,
                      "word": " form",
                      "start": 20.42,
                      "probability": 0.8038238883018494
                      },
                      {
                      "end": 20.58,
                      "word": " a",
                      "start": 20.42,
                      "probability": 0.9939543604850769
                      },
                      {
                      "end": 20.74,
                      "word": " micro",
                      "start": 20.58,
                      "probability": 0.8134252429008484
                      },
                      {
                      "end": 20.92,
                      "word": " machine",
                      "start": 20.74,
                      "probability": 0.7036716341972351
                      },
                      {
                      "end": 21.22,
                      "word": " world.",
                      "start": 20.92,
                      "probability": 0.871777355670929
                      }
                      ],
                      "tokens": [
                      51329,
                      400,
                      613,
                      862,
                      6352,
                      3318,
                      1214,
                      281,
                      1254,
                      257,
                      4532,
                      3479,
                      1002,
                      13,
                      51429
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 7,
                      "end": 25.28,
                      "seek": 0,
                      "text": " Micro machine pocket play sets so tremendously tiny, so perfectly precise, so dazzlingly detailed, you'll want to pocket them all.",
                      "start": 21.48,
                      "words": [
                      {
                      "end": 21.6,
                      "word": " Micro",
                      "start": 21.48,
                      "probability": 0.9181209206581116
                      },
                      {
                      "end": 21.78,
                      "word": " machine",
                      "start": 21.6,
                      "probability": 0.6455795764923096
                      },
                      {
                      "end": 22,
                      "word": " pocket",
                      "start": 21.78,
                      "probability": 0.7043859958648682
                      },
                      {
                      "end": 22.16,
                      "word": " play",
                      "start": 22,
                      "probability": 0.8732221722602844
                      },
                      {
                      "end": 22.24,
                      "word": " sets",
                      "start": 22.16,
                      "probability": 0.812091052532196
                      },
                      {
                      "end": 22.42,
                      "word": " so",
                      "start": 22.24,
                      "probability": 0.5316440463066101
                      },
                      {
                      "end": 22.68,
                      "word": " tremendously",
                      "start": 22.42,
                      "probability": 0.744458794593811
                      },
                      {
                      "end": 22.88,
                      "word": " tiny,",
                      "start": 22.68,
                      "probability": 0.815040647983551
                      },
                      {
                      "end": 23.04,
                      "word": " so",
                      "start": 22.96,
                      "probability": 0.9097583889961243
                      },
                      {
                      "end": 23.24,
                      "word": " perfectly",
                      "start": 23.04,
                      "probability": 0.8714672923088074
                      },
                      {
                      "end": 23.5,
                      "word": " precise,",
                      "start": 23.24,
                      "probability": 0.8715913891792297
                      },
                      {
                      "end": 23.78,
                      "word": " so",
                      "start": 23.64,
                      "probability": 0.9078233242034912
                      },
                      {
                      "end": 24.3,
                      "word": " dazzlingly",
                      "start": 23.78,
                      "probability": 0.8693957328796387
                      },
                      {
                      "end": 24.3,
                      "word": " detailed,",
                      "start": 24.3,
                      "probability": 0.7534111738204956
                      },
                      {
                      "end": 24.52,
                      "word": " you'll",
                      "start": 24.32,
                      "probability": 0.8286176919937134
                      },
                      {
                      "end": 24.62,
                      "word": " want",
                      "start": 24.52,
                      "probability": 0.7137832045555115
                      },
                      {
                      "end": 24.78,
                      "word": " to",
                      "start": 24.62,
                      "probability": 0.8862699270248413
                      },
                      {
                      "end": 24.88,
                      "word": " pocket",
                      "start": 24.78,
                      "probability": 0.7723338007926941
                      },
                      {
                      "end": 25.1,
                      "word": " them",
                      "start": 24.88,
                      "probability": 0.7235183715820312
                      },
                      {
                      "end": 25.28,
                      "word": " all.",
                      "start": 25.1,
                      "probability": 0.8980650901794434
                      }
                      ],
                      "tokens": [
                      51429,
                      25642,
                      3479,
                      8963,
                      862,
                      6352,
                      370,
                      27985,
                      5870,
                      11,
                      370,
                      6239,
                      13600,
                      11,
                      370,
                      44078,
                      1688,
                      356,
                      9942,
                      11,
                      291,
                      603,
                      528,
                      281,
                      8963,
                      552,
                      439,
                      13,
                      51629
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 8,
                      "end": 27.66,
                      "seek": 0,
                      "text": " Micro machines and micro machine pocket play sets sold separately from Galoob.",
                      "start": 25.5,
                      "words": [
                      {
                      "end": 25.68,
                      "word": " Micro",
                      "start": 25.5,
                      "probability": 0.9197527766227722
                      },
                      {
                      "end": 25.84,
                      "word": " machines",
                      "start": 25.68,
                      "probability": 0.7449283599853516
                      },
                      {
                      "end": 26,
                      "word": " and",
                      "start": 25.84,
                      "probability": 0.6610913276672363
                      },
                      {
                      "end": 26.12,
                      "word": " micro",
                      "start": 26,
                      "probability": 0.8715086579322815
                      },
                      {
                      "end": 26.32,
                      "word": " machine",
                      "start": 26.12,
                      "probability": 0.6785076856613159
                      },
                      {
                      "end": 26.5,
                      "word": " pocket",
                      "start": 26.32,
                      "probability": 0.7522760033607483
                      },
                      {
                      "end": 26.68,
                      "word": " play",
                      "start": 26.5,
                      "probability": 0.8618249297142029
                      },
                      {
                      "end": 26.78,
                      "word": " sets",
                      "start": 26.68,
                      "probability": 0.8218684792518616
                      },
                      {
                      "end": 26.96,
                      "word": " sold",
                      "start": 26.78,
                      "probability": 0.8280050158500671
                      },
                      {
                      "end": 27.16,
                      "word": " separately",
                      "start": 26.96,
                      "probability": 0.6918163895606995
                      },
                      {
                      "end": 27.4,
                      "word": " from",
                      "start": 27.16,
                      "probability": 0.8134355545043945
                      },
                      {
                      "end": 27.66,
                      "word": " Galoob.",
                      "start": 27.4,
                      "probability": 0.7426764170328776
                      }
                      ],
                      "tokens": [
                      51629,
                      25642,
                      8379,
                      293,
                      4532,
                      3479,
                      8963,
                      862,
                      6352,
                      3718,
                      14759,
                      490,
                      7336,
                      78,
                      996,
                      13,
                      51754
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      },
                      {
                      "id": 9,
                      "end": 29.5,
                      "seek": 0,
                      "text": " The smaller they are, the better they are.",
                      "start": 27.78,
                      "words": [
                      {
                      "end": 28,
                      "word": " The",
                      "start": 27.78,
                      "probability": 0.8174500465393066
                      },
                      {
                      "end": 28.2,
                      "word": " smaller",
                      "start": 28,
                      "probability": 0.7499929666519165
                      },
                      {
                      "end": 28.42,
                      "word": " they",
                      "start": 28.2,
                      "probability": 0.7381458878517151
                      },
                      {
                      "end": 28.68,
                      "word": " are,",
                      "start": 28.42,
                      "probability": 0.8937985897064209
                      },
                      {
                      "end": 28.88,
                      "word": " the",
                      "start": 28.68,
                      "probability": 0.813441812992096
                      },
                      {
                      "end": 29.02,
                      "word": " better",
                      "start": 28.88,
                      "probability": 0.8151369690895081
                      },
                      {
                      "end": 29.22,
                      "word": " they",
                      "start": 29.02,
                      "probability": 0.7374864816665649
                      },
                      {
                      "end": 29.5,
                      "word": " are.",
                      "start": 29.22,
                      "probability": 0.8918095827102661
                      }
                      ],
                      "tokens": [
                      51754,
                      440,
                      4356,
                      436,
                      366,
                      11,
                      264,
                      1101,
                      436,
                      366,
                      13,
                      51854
                      ],
                      "avg_logprob": -0.29071213478265806,
                      "temperature": 0,
                      "no_speech_prob": 0.5242696404457092,
                      "compression_ratio": 2.023206751054852
                      }
                      ]`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="mb-lh">
                      <div>
                        <p className="mb-2">transcription</p>
                        <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                          <code className="output w-full">
                            {" "}
                            This is the Micro Machine Man presenting the most
                            midget miniature motorcade of micro machines. Each
                            one has dramatic details, terrific trim, precision
                            paint jobs, plus incredible micro machine pocket
                            play sets. There's a police station, fire station,
                            restaurant, service station, and more. Perfect
                            pocket portables to take anyplace. And there are
                            many miniature play sets to play with and each one
                            comes with its own special edition micro machine
                            vehicle and fun fantastic features that miraculously
                            move. Raise the boat lift at the airport, marina,
                            man the gun turret at the army base, clean your car
                            at the car wash, raise the toll bridge. And these
                            play sets fit together to form a micro machine
                            world. Micro machine pocket play sets so
                            tremendously tiny, so perfectly precise, so
                            dazzlingly detailed, you'll want to pocket them all.
                            Micro machines and micro machine pocket play sets
                            sold separately from Galoob. The smaller they are,
                            the better they are.
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <p className="mb-2">detected_language</p>
                        <pre className="overflow-x-auto overflow-y-auto whitespace-pre-wrap max-h-96">
                          <code className="output w-full">english</code>
                        </pre>
                      </div>
                    </div>
                    <figcaption className="pt-4 text-shade">
                      Generated in <time dateTime="PT46.07S">46.07</time>{" "}
                      seconds
                    </figcaption>
                  </figure>
                </output>
              </div>
              <div className="inline-block mr-3 mb-3">
                <a
                  className="form-button-secondary"
                  href="/signin?next=/soykertje/whisper?prediction=hfagulrblado4gvy6nz3bgplm4"
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
                  href="/p/hfagulrblado4gvy6nz3bgplm4/report"
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
          complete within 8 minutes. The predict time for this model varies
          significantly based on the inputs.
        </p>
      </div>
      <div>
        <div className="mb-2lh" id="performance">
          <h4 className="mb-lh pb-2 border-b border-hairline">
            Run time and cost
          </h4>

          <p className="mb-lh">
            Predictions run on Nvidia T4 GPU hardware. Predictions typically
            complete within 8 minutes. The predict time for this model varies
            significantly based on the inputs.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default IToVDemo;
