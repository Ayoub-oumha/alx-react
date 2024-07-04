function getFullYear() {
    let getFullYear = new Date().getFullYear()
    return getFullYear
}


function getFooterCopy(isIndex){
    if(isIndex){
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
}
function getLatestNotification(){
    return "<strong>Urgent requirement</strong> - complete by EOD";
}
module.exports = {
    getFooterCopy ,
    getFullYear,
    getLatestNotification
}