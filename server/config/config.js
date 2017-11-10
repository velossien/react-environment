// sets our environment -if we are on production or testing - the first option will be set and if not will be in development

let env = process.env.NODE_ENV || "development";
console.log("Environment: ", env);

if(env === "development" || env==="test"){
    let config = require("./config.json");
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    }); 
};