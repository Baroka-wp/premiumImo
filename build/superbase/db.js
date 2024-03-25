"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const constants_1 = require("../constants");
const supabaseUrl = constants_1.SUPABASE_URL;
const supabaseKey = constants_1.SUPABASE_KEY;
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Les variables d\'environnement SUPABASE_URL et SUPABASE_KEY doivent être définies.');
}
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
