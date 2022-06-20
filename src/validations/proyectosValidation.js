const {check} = require("express-validator");

//El escape hace que laas entidades se conviertan en entidades html => < => &lt;&lt; estop es muy importante pa que no te metan scripts que caguen tu proyecto pero si tu pones cesarino_4@hotmail.com => te devovlera igual, xq son entidades conocidad, pero si alguien te mete <script src="sadadsa"> se convierte en esto '&lt;script src=&quot;sadadsa&quot;&gt;'
const createNewProject = [
    check("name").trim().escape().notEmpty().withMessage("El proyecto es obligatorio").matches(/^[a-zA-Z0-9]*$/gm).withMessage("Ingrese un texto válido por favor")
]

module.exports = {
   createNewProject 
}