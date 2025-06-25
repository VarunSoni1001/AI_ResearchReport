import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "../constants/env";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = ENV.GOOGLE_GEMINI_API_KEY;
const GEMINI_MODEL = ENV.GOOGLE_GEMINI_MODEL;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined");
}

// OLD
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

const getReport = async (prompt: { keywords: string[] }) => {
  let systemInstruction = "";

  if (prompt.keywords.length > 0) {
    systemInstruction = `You are an expert in generating research reports based on the following keywords: ${prompt.keywords.join(
      ", "
    )}. Please provide a detailed report.`;
  } else {
    systemInstruction =
      "You are an expert in generating research reports. Please provide a detailed report.";
  }

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt.keywords.join(", ") }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.5,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
      },
      systemInstruction,
    });

    const response = await result.response.text();
    return response;
  } catch (error) {
    console.error("Error fetching RAG response:", error);
    return "Error generating response";
  }
};

// NEW
const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const getReportNew = async (prompt: { keywords: string[] }) => {
  let systemInstruction = "";

  if (prompt.keywords.length > 0) {
    systemInstruction = `You are an expert in generating research reports based on the following keywords: ${prompt.keywords.join(
      ", "
    )}. Please provide a detailed report.`;
  } else {
    systemInstruction =
      "You are an expert in generating research reports. Please provide a detailed report.";
  }

  try {
    const result = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt.keywords.join(", ") }],
        },
      ],
      config: {
        // maxOutputTokens: 1000,
        // temperature: 0.5,
        // topP: 1,
        // frequencyPenalty: 0,
        // presencePenalty: 0,

        // thinking configurations
        thinkingConfig: {
          thinkingBudget: 1000,
          includeThoughts: true,
        },
      },
    });

    return result.text;
  } catch (error) {
    console.error("Error fetching Report Response:", error);
    return `Error fetching Report Response: ${error}`;
  }
};

export const aiService = {
  getReport,
  getReportNew,
};
