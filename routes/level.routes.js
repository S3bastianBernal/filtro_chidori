const { Router } = require("express");
const { getLevels, getLevel, postLevel, deleteLevel } = require("../controllers/level.controller");
const { check } = require("express-validator");
const { validateDocuments } = require("../middlewares/validate.documents");
const { existeUser } = require("../helpers/db.validators");
const { validateJWT } = require("../middlewares/validate.jwt");
const { isAdminRole } = require("../middlewares/validate.rol");


const router = Router();

router.get('/',getLevels);

router.get('/:id',[
check('id','Object id no valido').isMongoId(),
check('id').custom(existeUser),
validateDocuments
],getLevel)

router.post('/',[
    validateJWT,
    check('nombre', 'nombre no puede estar vacio').not().isEmpty(),
    validateDocuments
],postLevel)

router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id','Object id no valido').isMongoId(),
    check('id').custom(existeUser),
    validateDocuments
],deleteLevel)

module.exports = router