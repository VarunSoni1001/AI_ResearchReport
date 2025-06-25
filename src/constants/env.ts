export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "app_name_not_defined_in_env",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "app_version_not_defined_in_env",
  API_URL: import.meta.env.VITE_APP_BASE_URL || "app_base_url_not_defined_in_env",
  GOOGLE_GEMINI_API_KEY: import.meta.env.VITE_GOOGLE_GEMINI_API_KEY || "api_key_not_defined_in_env",
  GOOGLE_GEMINI_MODEL: import.meta.env.VITE_GOOGLE_GEMINI_MODEL || "gemini_model_not_defined_in_env",
};
