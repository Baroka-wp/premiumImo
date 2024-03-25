import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../constants';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // This is the default and can be omitted
});



export const createEmbeding = async (message:any) =>{
    let embeddingRes = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message
    });

    let embedding = embeddingRes.data[0].embedding;
    return embedding;
}