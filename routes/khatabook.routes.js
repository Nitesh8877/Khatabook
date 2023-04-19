const khatabookController=require('../controllers/khatabook.controller');
const Auth=require('../middaleware/userTakenValidate')
module.exports=function(app){
    app.post("/kba/api/khatabook",[Auth.isValideToken], khatabookController.khatabookUser);
    app.delete('/kba/api/khatabook',[Auth.isValideToken], khatabookController.khatabookDestroy);
}