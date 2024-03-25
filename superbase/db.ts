import { createClient } from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_KEY} from '../constants';

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Les variables d\'environnement SUPABASE_URL et SUPABASE_KEY doivent être définies.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
