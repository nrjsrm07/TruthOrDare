var np = sessionStorage.getItem("np");
var a2 = document.getElementById("a1");

function score_table() {
    var nn = ''
    for (var i = 0; i < np; i++) {
        var namee = sessionStorage.getItem('name' + i);
        var scoree = sessionStorage.getItem('score' + i);
        var n = '<tr class="table-info"><td>' + namee + '</td><td>' + scoree + '</td></tr>';
        nn = nn + n
    }
    a2.innerHTML = nn;
}

var bcd = Number.parseInt(sessionStorage.getItem('bcd_value'));
var current_player_name=''

function cpname() {
    if (bcd == np) { 
        bcd = 0;
    }
    current_player_name = 'name' + bcd;
    sessionStorage.setItem('bcd_value', bcd+1);
    return current_player_name;
}

function print_name(){
    var cpname1 = cpname();
    var namee = sessionStorage.getItem(cpname1);
    var turnid = document.getElementById("turn_id");
    var abcd = '<h1> <b>' +   namee + '</b>, choose level and than anyone from Truth or Dare</h1>';
    turnid.innerHTML = abcd;
}   

function score_update(level, type){
    var key='score'+(bcd-1);
    var nnn=Number.parseInt(sessionStorage.getItem(key))
    if (level=='soft' && type =='Truth'){
        nnn=nnn+5;
    }
    else if (level=='hard' && type =='Truth'){
        nnn=nnn+7;
    }
    else if (level=='extreme' && type =='Truth'){
        nnn=nnn+10;
    }
    else if (level=='soft' && type =='Dare'){
        nnn=nnn+6;
    }
    else if (level=='hard' && type =='Dare'){
        nnn=nnn+9;
    }
    else if (level=='extreme' && type =='Dare'){
        nnn=nnn+13;
    }
    sessionStorage.setItem(key, nnn);
}

score_table();

print_name();


function donefn(level, type) {
    score_update(level, type);
    window.location = 'QuestionPage.html';
}
function notdonefn() {
    window.location = 'QuestionPage.html';
}