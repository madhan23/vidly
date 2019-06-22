import Raven from "raven-js";
function init(){

Raven.config('https://e5dd4026601711e985114201c0a8d02b@sentry.io/1439885').install();
                      
}
function log(error){
    Raven.captureException(error);
}

export default{
    log,
    init
}