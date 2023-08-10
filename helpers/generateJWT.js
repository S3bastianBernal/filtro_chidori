const jwt = require('jsonwebtoken');


const generateJWT = (uid = '') =>{
    
    return new Promise ((resolve,rejects)=>{

        const payload = {uid};

        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn: "2h",

        },(err, token)=>{
            if (err) {
                console.log(err);
                rejects('no funca el jwt')
            }
            else{
                resolve(token)
            }
            
        });

    })
}

module.exports = {generateJWT}