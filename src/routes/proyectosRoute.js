const express = require("express");
const router = express();
const {proyectosController} = require("../controllers");
const {proyectosValidation} = require("../validations");

router.get("/", proyectosController.showHomeView);
router.get("/nuevo-proyecto", proyectosController.showNewProjectView);
router.post("/nuevo-proyecto", proyectosValidation.createNewProject, proyectosController.createNewProject);



module.exports = router;