const {check} = require('express-validator')
const Router = require('express')
const {getCampers,postCamper,deleteCamper, putCamper} = require('../controllers/campers.controllers.js');
const { validateIndenti, exiteEmail, existeUser, isValidRole, isValidProgreso } = require('../helpers/db.validators.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.rol.js');

const router = Router();

router.get('/',getCampers);

router.post('/',[
    validateJWT,
    isAdminRole,
    check('nombre','nombre tiene que ser llenado').not().isEmpty(),
    check('email','formato de email invalido').isEmail(),
    check('email').custom(exiteEmail),
    check('contraseña','contraseña muy corta').isLength({min:8}),
    check('NroIdentificacion','documento de identidad muy corto o muy largo').isLength({min:10},{max:10}),
    check('tipoIdentificacion').custom(validateIndenti),
    check('rol').custom(isValidRole),
    validateDocuments
],postCamper)

router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id','Object id no valido').isMongoId(),
    check('id').custom(existeUser),
    validateDocuments
],deleteCamper);

router.put('/:id',[
    validateJWT,
    isAdminRole,
    check('id','Object id no valido').isMongoId(),
    check('id').custom(existeUser),
    check('levelState').custom(isValidProgreso),
    validateDocuments
],putCamper)
module.exports = router