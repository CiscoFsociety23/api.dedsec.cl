function VerifyObject(req, res, next){
    const object = req.body
    if (object.name && object.email && object.passwd){
        next()
    } else {
        res.json({ mensaje: 'Estructura de la cuenta no es correcta' })
    }
}

function VerifyId(req, res, next){
    const id = req.query.id
    !id ? res.json({ mensaje: 'Debe proporcionar un id' }) : next()
}

function VerifyEmail(req, res, next){
    const email = req.query.email
    !email ? res.json({ mensaje: 'Debe proporcionar un correo electronico' }) : next()
}

export { VerifyObject, VerifyId, VerifyEmail }