
// Dummy AI responses for development without @google/genai installation
const DUMMY_RESPONSES: Record<string, string> = {
  "sakura": "Sakura trees bloom beautifully in spring, symbolizing renewal in Japanese culture.",
  "planting": "Plant Sakura trees in well-drained soil with full sunlight for best growth.",
  "varieties": "Popular varieties include Somei Yoshino and Kwanzan, each with unique characteristics.",
  "default": "The blossoms whisper their wisdom. Please ask me about Sakura trees, planting, or varieties."
};

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Return dummy response based on keywords
    const lowerPrompt = userPrompt.toLowerCase();
    for (const [key, response] of Object.entries(DUMMY_RESPONSES)) {
      if (lowerPrompt.includes(key)) {
        return response;
      }
    }
    
    return DUMMY_RESPONSES.default;
  } catch (error) {
    console.error("Dummy AI Error:", error);
    return "The wind has scattered my thoughts. (Error - Please try again)";
  }
};
