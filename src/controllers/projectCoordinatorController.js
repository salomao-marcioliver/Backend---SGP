import conn from "../database/db.js"

export const getProject = async (_, res) => {
    const q = "select pc.codprojeto, pc.titulo, to_char( pc.data_inicio, 'DD/MM/YYYY') as data_inicio, to_char( pc.data_termino, 'DD/MM/YYYY') as data_termino , pc.codcoord, pc.nome_coord, pc.instituto_coord from projeto_coordenador pc;"

    conn.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        } else {
            return res.status(200).json(data.rows)
        }
    })
}

export const addProject = (req, res) => {
    const q = "insert into projeto_coordenador (titulo, data_inicio, data_termino, codCoord, nome_coord, instituto_coord) values ($1, $2, $3, $4, $5, $6);"
    conn.query(q, 
        [
            req.body.titulo, 
            req.body.data_inicio, 
            req.body.data_termino, 
            req.body.codCoord, 
            req.body.nome_coord,
            req.body.instituto_coord
        ], (err) => {
        if (err) {
            res.json(err);
            console.log(err)
        } else {
            res.status(200).json("Projeto adicionado com sucesso!")
        }
    })
}

export const deleteProject = (req, res) => {
    const q = `DELETE FROM projeto_coordenador p WHERE p.codprojeto = $1`;

    conn.query(q, [req.params.id], (err) => {
        if (err) {
            return res.json(err);
        } else {
            return res.status(200).json("Usuário deletado com sucesso.")
        }
    });
}

export const updateProjet = (req, res) => {
    const q = `update projeto_coordenador set titulo = $1, data_inicio = $2, data_termino = $3, codcoord = $4, nome_coord = $5, instituto_coord = $6 where codprojeto = $7; `
    
    conn.query(q, 
        [
            req.body.titulo,
            req.body.data_inicio,
            req.body.data_termino, 
            req.body.codCoord, 
            req.body.nome_coord,
            req.body.instituto_coord,
            req.params.id
         ], (err) => {
            if(err){
                return res.json(err);
            }else{
                res.status(200).json("Projeto atualizado com sucesso.");
            }
        })
}
