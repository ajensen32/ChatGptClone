import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KAY,
});

export default openai;