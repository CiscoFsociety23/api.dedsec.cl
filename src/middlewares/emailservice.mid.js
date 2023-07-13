function CheckData(req, res, next){
    const { ...data } = req.body
    if (!data.name || !data.email || !data.phone || !data.message){
        res.json({
            title: 'Error',
            text: 'Faltan completar datos del formulario. Complete la informacion e intente nuevamente.',
            icon: 'error',
        })
    } else {
        if (RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(data.email) === false){
            res.json({
                title: 'Error',
                text: 'Correo electronico invalido. Compruebe la informacion e intente nuevamente.',
                icon: 'error',
            })
        } else if (RegExp(/^([9])\d{4}\d{4}$/).test(data.phone) === false) {
            res.json({
                title: 'Error',
                text: 'Numero de telefono invalido. Formato { 9XXXXXXXX }. Compruebe la informacion e intente nuevamente.',
                icon: 'error',
            })
        } else {
            next()
        }
    }
}

export { CheckData }