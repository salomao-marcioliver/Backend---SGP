import jwt from 'jsonwebtoken'

const JWTSecret = 'senha_secreta'

export const auth = (req, res, next) => {
  const authToken = req.headers.authorization
  if (authToken != undefined) {
    const bearer = authToken.split(' ')
    let token = bearer[1]
    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        res.status(401).json({ err: "Token inválido!" })
      } else {
        req.token = token;
        req.loggedUser = { id: data.id }
        next();
      }
    })
  } else {
    res.status(401).json({ err: "Token inválido!" })
  }
}

const DB = {
  users: [
    {
      id: 1,
      email: "admin@gmail.com",
      password: "admin123"
    }
  ]
}

export const login = (req, res) => {
  let { email, password } = req.body;
  if (email != undefined) {
    let user = DB.users.find(u => u.email === email)
    if (user != undefined) {
      if (user.password === password) {
        jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
          if (err) {
            res.status(400).json({ err: 'Falha Interna' })
          } else {
            res.status(200).json({ "user": { id: user.id, email: user.email }, token: token })
          }
        })
      } else {
        res.status(401).json({ err: "Credenciais Inválidas!" })
      }
    } else {
      res.status(404).json({ err: "O email enviado não existe na base de dados!" })
    }
  }else{
    res.status(400).json({err: "O email enviado é inválido"})
  }
}

