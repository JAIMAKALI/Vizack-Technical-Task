
const mongoose          =   require('mongoose');
const configs           =   require('../utility/configs');
const log4jsLogger      =   require('../loggers/log4js_module');

var logger              =   log4jsLogger.getLogger('DataBase');


//'mongodb://localhost:27017/'+configs.DB_NAME

//mongodb://<dbuser>:<dbpassword>@ds139645.mlab.com:39645/vizack
mongoose.connect('mongodb://vizack:Nitpatna1@ds139645.mlab.com:39645/vizack',{useNewUrlParser: true },(err)=>{
    if(err){
        logger.error({"r":"mongodb","msg":"mongodb_connection_error","body":err});
        return;
    }
    logger.info({"r":"mongodb","msg":"Database_successfully_connected","body":"success"});
});
