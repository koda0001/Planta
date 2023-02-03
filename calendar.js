var day =0;
var month = 0;
var year=0;

function calendar(date){
    if(date == null)
     date = new Date();

    console.log("Calculating date: " + date);
    
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    console.log("Dzień: " + day + "  Miesiąc: " + month + "  Rok: " + year);

    months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

    this_month = new Date(year, month, 1);
    next_month = new Date(year, month + 1, 1);

    console.log("this month is:  " + this_month);
    console.log("next month is:  " + next_month);

    first_week_day = this_month.getDay();
    days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));

    console.log("first day is:  " + first_week_day);
    console.log("Days in this month: " + days_in_this_month);
}


function createCalendar() {    

    var cellNum =0; //wazne!
    let luty = 5;
    if(days_in_this_month < 29){
        luty = 4;
    }
    var cali = document.getElementById("cali");
    for (let i = 0; i<luty; i++){
        let row = cali.insertRow(i);
        for (let j = 0; j<7; j++){
            let cell = row.insertCell(j);
            cellNum = cellNum + 1;
            cell.id = cellNum;
            cell.innerHTML = cell.id;
            cali.rows[i].cells[j].onclick = function() {

                caliAdd(this);

            }
            if(cell.id == days_in_this_month ){
                break;
            }
        }
    }

        

}

function caliAdd(cell){
    console.log('hujjj + ' + cell.id);
    document.getElementById('adder').style.display = "block";
    document.getElementById("adderBtn").addEventListener("click", addEvent(cell));
}

function addEvent(cell){
    console.log('Dodawanie działa ale :' + cell.id);
}

function bob(){document.getElementById('adder').style.display = 'none';}

function monthChangeMinus(){
    month =- 1;
    console.log("miesiąc po zmianie na MINUS: " + month);
}
function monthChangePlus(){
    month =+ 1;
    console.log("miesiąc po zmianie na PLUS: " + month);

}