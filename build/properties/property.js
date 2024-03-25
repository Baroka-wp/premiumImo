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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../superbase/db");
const utils_1 = require("../utils/utils");
const propertyRouter = (0, express_1.Router)();
// GET /properties
propertyRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield db_1.supabase.from('property').select('title, description, price, superficie,localisation, ville, adresse, pays, disponible, photo');
        if (error)
            throw error;
        return res.json(data);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}));
// POST /properties
propertyRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, superficie, localisation, ville, adresse, pays, disponible, photo } = req.body;
    try {
        const sumarize = `${title} - ${description} - ${price} - ${superficie} - ${localisation} - ${ville} - ${adresse} - ${pays}`;
        const embedding = yield (0, utils_1.createEmbeding)(sumarize);
        const { data, error } = yield db_1.supabase.from('property').insert([
            { title, description, price, superficie, localisation, ville, adresse, pays, disponible, photo, embedding }
        ]).select('title');
        if (error)
            throw error;
        return res.json(data);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}));
exports.default = propertyRouter;
