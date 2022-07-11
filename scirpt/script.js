var check = (callback)=>{
    if(document.getElementById("username").value == "admin",
    document.getElementById("password").value == 12345){
        callback();
        document.getElementById("error").style.color = "green";
        document.getElementById("error").innerHTML = "Logged In Sucessfully";
        return true;
    }else{
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Wrong Credential";
        return false;
    }
}

function redirect(){
    document.getElementById("form").action="home.html";
}