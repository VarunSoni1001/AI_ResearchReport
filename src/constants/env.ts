export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "My App",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  API_URL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:3000/api",
  GOOGLE_GEMINI_API_KEY: import.meta.env.VITE_GOOGLE_GEMINI_API_KEY || "",
};
