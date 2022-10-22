import getData from "./dataModules.js";
getData(5).then((data)=>console.log(data)).catch((e)=>console.log(e))