"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmbeding = void 0;
const openai_1 = __importDefault(require("openai"));
const constants_1 = require("../constants");
const openai = new openai_1.default({
    apiKey: constants_1.OPENAI_API_KEY, // This is the default and can be omitted
});
const createEmbeding = (message) => __awaiter(void 0, void 0, void 0, function* () {
    let embeddingRes = yield openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message
    });
    let embedding = embeddingRes.data[0].embedding;
    return embedding;
});
exports.createEmbeding = createEmbeding;
