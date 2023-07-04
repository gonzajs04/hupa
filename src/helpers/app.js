export  function generarKey(){
    const rand = Math.random().toString(36).substring(2); //Genera una ID Random
    const date = Date.now().toString(36);
    const randate = rand +date;
    return randate;
}