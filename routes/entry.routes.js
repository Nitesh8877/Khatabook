const EntryController=require('../controllers/entry.controller');
const Auth=require('../middaleware/userTakenValidate');
module.exports=function(app){
    app.post('/kba/api/entry/:customer',[Auth.isValideToken], EntryController.createEntry);
}