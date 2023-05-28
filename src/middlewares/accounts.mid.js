function VerifyObject(req, res, next){
    const object = req.body
    if (object.name && object.email && object.passwd){
        next()
    } else {
        res.json({ mensaje: 'Estructura de la cuenta no es correcta' })
    }
}

export { VerifyObject }