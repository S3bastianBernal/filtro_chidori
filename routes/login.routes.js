const {Router} = require('express');
const {check} = require ('express-validator');

const {login} = require("../controllers/login.controller.js")
const { validateDocuments } = require('../middlewares/validate.documents.js');

const router = Router();

router.post("/",[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateDocuments
] , login );

module.exports = router;