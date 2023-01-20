import conn from "../database/db.js";

export const getStudent = async(_, res) => {
    const q = "SELECT * FROM bolsista"

    conn.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.status(200).json(data.rows);
        }
    });
}