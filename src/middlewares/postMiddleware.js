import db from "../database/db.js";

export async function postValidation(req, res, next){
    
    const token = req.headers.authorization?.replace("Bearer ", "");
}