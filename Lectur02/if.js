const status = 200;
if (status === 200) {
    console.log("operation was successful")
   
}
 else if (status === 400) {
      console.log("operation was successful")

}    
    else {
        console.log("unknown status")
}

switch (status) {
    case 200:
        console.log("operation was successful");
        break;
    case 400:
        console.log("Bad request. please check again");
        break;
    default:
        console.log("an unknown error occurred");
}


const message = (status === 200) ? "ok!" : 'error!';
console.log(message);