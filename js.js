function login(){
    let login = document.getElementById('login').value;
    var passwd = document.getElementById('passwd').value;
    if (login == "a" && passwd == "a"){
        console.log("Please enter");
        window.open("main.html","_self",false);
    }else{
        console.log("no entry" + passwd + "  " + login);
    }
}

function openMain(){
    window.open("main.html","_self",false);
}
function openCalendar(){
    window.open("calendar.html","_self",false);
}
function openMyGarden(){
    window.open("garden.html","_self",false);
}
function openDatabase(){
    window.open("database.html","_self",false);
}

function plantAdderPhoto(){
    var image = document.getElementById("imageToSwap");
	var dropd = document.getElementById("plantChoice");
	image.src = dropd.value;	
}