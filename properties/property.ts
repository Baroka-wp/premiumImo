import { Router } from "express";
import { supabase } from "../superbase/db";
import { pipeline } from '@xenova/transformers'
import { createEmbeding } from "../utils/utils";



const propertyRouter = Router();


// GET /properties
propertyRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from('property').select('title, description, price, superficie,localisation, ville, adresse, pays, disponible, photo');
    if (error) throw error;
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});


// POST /properties

propertyRouter.post("/", async (req, res) => {
  const { title, description, price, superficie,localisation, ville, adresse, pays, disponible, photo } = req.body;


  try {
      
    const sumarize = `${title} - ${description} - ${price} - ${superficie} - ${localisation} - ${ville} - ${adresse} - ${pays}`
    const embedding = await createEmbeding(sumarize);

    const { data, error } = await supabase.from('property').insert([
      { title, description, price, superficie,localisation, ville, adresse, pays, disponible, photo, embedding }
    ]).select('title');

    if (error) throw error;
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});



export default propertyRouter;