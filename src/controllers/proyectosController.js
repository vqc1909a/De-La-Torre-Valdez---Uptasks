const path =require("path");
const {validationResult} = require('express-validator');


exports.showHomeView = (req, res) => {
    return res.render(path.join(__dirname, "../views/pages/home"), {
        title: "Proyectos",
        description: "Descripción de la página proyectos de Uptasks",
        protocol: req.protocol,
        host: req.headers.host,
    });
}

exports.showNewProjectView = (req, res) => {
    return res.render(path.join(__dirname, "../views/pages/newProject"), {
        title: "Nuevo Proyecto",
        description: "Descripción de la página nuevo proyecto de Uptasks",
        protocol: req.protocol,
        host: req.headers.host,
    });
}

exports.createNewProject = (req, res) => {
    //!Validar formulario (ajv, joi, express-validator)
    const errors = validationResult(req);
    console.log(errors);
    // Result {
    //     formatter: [Function: formatter],
    //     errors: [
    //         {
    //         value: '<<<<<<<',
    //         msg: 'Ingrese un texto válido por favor',
    //         param: 'name',
    //         location: 'body'
    //         }
    //     ]
    // }
    if(errors.errors.length !== 0 ){
        const error = errors.array()[0].msg;
        return res.render(path.join(__dirname, "../views/pages/newProject"), {
            title: "Nuevo Proyecto",
            description: "Descripción de la página nuevo proyecto de Uptasks",
            protocol: req.protocol,
            host: req.headers.host,
            error
        })
    }
    res.send("Todo Correcto")

}
 