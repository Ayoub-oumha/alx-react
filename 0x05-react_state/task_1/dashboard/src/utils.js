function getFullYear() {
    let getFullYear = new Date().getFullYear()
    return getFullYear
}


function getFooterCopy(isIndex){
    if(isIndex){
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard"
    }
}
module.exports = {
    getFooterCopy ,
    getFullYear
}