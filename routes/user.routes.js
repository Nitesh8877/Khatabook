const UserController=require('../controllers/user.controller');

module.exports=function(app){
    app.post('/kba/api/signup',UserController.signup);
    app.post('/kba/api/signin',UserController.signin);
}