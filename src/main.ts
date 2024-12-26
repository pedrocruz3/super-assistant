
import dotenv from "dotenv";
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY as string;
const configuration = new GoogleGenerativeAI(apiKey);

const model = configuration.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());