import conn from "../database/db.js";

export const getStudent = async(_, res) => {
    const q = "select b.num_matricula, b.nome, b.curso, b.instituto, pc.titulo, pc.nome_coord from bolsista b join projeto_coordenador pc on b.codprojeto = pc.codprojeto;"

    conn.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.status(200).json(data.rows);
        }
    });
}

export const addStudent = async(req, res) => {
  const q = 'insert into bolsista (num_matricula, nome, data_nascimento, curso, instituto, codprojeto) values ($1, $2, $3, $4, $5, $6)'

  conn.query(q, [
    req.body.num_matricula,
    req.body.nome,
    req.body.data_nascimento,
    req.body.curso,
    req.body.instituto,
    req.body.codprojeto
  ], (err) => {
    if(err){
      res.json(err)
    }else{
      res.status(200).json("Bolsista adicionado com sucesso!")
    } 
  })
}

export const removeStudent = (req, res) => {
  const q = "delete from bolsista where num_matricula = $1"

  conn.query(q, [req.params.id], (err) => {
    if(err){
      res.json(err)
      console.log(err)
    }else{
      res.status(200).json("Bolsista removido com sucesso!")
    }
  })
}

export const updateStudent = (req, res) => {
  const q = "update bolsista set num_matricula = $1, nome = $2, data_nascimento = $3, curso = $4, instituto = $5, codprojeto = $6 where num_matricula = $7;"

  conn.query(q, [
    req.body.num_matricula,
    req.body.nome,
    req.body.data_nascimento,
    req.body.curso,
    req.body.instituto,
    req.body.codprojeto,
    req.params.id
  ], (err) => {
    if(err) {
      res.json(err);
    }else{
      res.status(200).json('Os dados do bolsista foram atualizados com sucesso!')
    }
  })
}