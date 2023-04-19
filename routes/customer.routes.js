const CustomerController=require('../controllers/customer.controller');
const Auth=require('../middaleware/userTakenValidate')
module.exports=function(app){
    app.post('/kba/api/customer',[Auth.isValideToken], CustomerController.createCustomer);
    app.get('/kba/api/customer/:userId',[Auth.isValideToken], CustomerController.showCustomer);
    app.put('/kba/api/customer/:customerId',[Auth.isValideToken], CustomerController.updateCustomer);
    app.delete('/kba/api/customer/costomerId',[Auth.isValideToken], CustomerController.destroyCustomer);
}