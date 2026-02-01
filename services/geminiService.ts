
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMerchIdea = async (brandDescription: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a unique merchandise strategy and catchy slogans for a brand described as: "${brandDescription}". 
      Return the ideas as structured JSON with concepts, suggested items, and high-impact brutalist slogans.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brandAngle: { type: Type.STRING },
            suggestedItems: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            slogans: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            visualDirection: { type: Type.STRING }
          },
          required: ["brandAngle", "suggestedItems", "slogans", "visualDirection"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
