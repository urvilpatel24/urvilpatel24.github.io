var cnt=0;
var flag=0;
var wct=0;

function clr(){
    localStorage.setItem("ux1","");
    localStorage.setItem("ux2","");
    localStorage.setItem("acnt", "");
    localStorage.setItem("awct", "");
}
function prtx() {
    document.getElementById("sp_d").innerHTML = "WINNER IS " + localStorage.ux1;
    dis('X');
}

function prto() {
    document.getElementById("sp_d").innerHTML = "WINNER IS " + localStorage.ux2;
    dis('O');
}

function go() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var l1 = n1.value.length;
    var l2 = n2.value.length;
    localStorage.setItem("ux1", document.getElementById("n1").value);
    localStorage.setItem("ux2", document.getElementById("n2").value);
    if (n1.value == "" || n2.value == "" || n1.value == n2.value)
        alert("Usernames can't be equal or empty");
    else if(l1>10 || l2>10)alert("Username can have maximum 10 charachters.");
    else {
        window.open("html/game.html", "_self");
    }
}
function go2() {
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var l1 = n3.value.length;
    var l2 = n4.value.length;
    localStorage.setItem("ux1", document.getElementById("n3").value);
    localStorage.setItem("ux2", document.getElementById("n4").value);
    if (n3.value == "" || n4.value == "" || n3.value == n4.value) {
        alert("Usernames can't be equal or empty");
    }
    else if(l1>10 || l2>10)alert("Username can have maximum 10 charachters.");
    else {
        window.open("html/game.html", "_self");
    }
}

function onld() {
    document.getElementById("pl1").innerHTML = localStorage.ux1;
    document.getElementById("pl2").innerHTML = localStorage.ux2;
    document.getElementById("main_dv").style.display = 'none';
    document.getElementById("pl1").style.display = 'none';
    document.getElementById("pl2").style.display = 'none';
    document.getElementById("lh").style.display = 'none';
    document.getElementById("lx").style.display = 'none';
    document.getElementById("ro").style.display = 'none';
}

function msg() {
    var x = document.getElementById("msg");
    x.style.display = 'none';
    document.getElementById("main_dv").style.display = '';
    document.getElementById("pl1").style.display = '';
    document.getElementById("pl2").style.display = '';
    document.getElementById("lh").style.display = '';
    document.getElementById("lx").style.display = '';
    document.getElementById("ro").style.display = '';
}

function fn(d) {
    var b1 = document.getElementById("d1");
    var b2 = document.getElementById("d2");
    var b3 = document.getElementById("d3");
    var b4 = document.getElementById("d4");
    var b5 = document.getElementById("d5");
    var b6 = document.getElementById("d6");
    var b7 = document.getElementById("d7");
    var b8 = document.getElementById("d8");
    var b9 = document.getElementById("d9");
    var lh = document.getElementById("lh");
    var rh = document.getElementById("rh");
    var lk = "O";
    if (d.innerHTML == "" && flag == 0) {
        if (cnt % 2 != 0) {
            rh.style.visibility = 'hidden';
            lh.style.visibility = 'visible';
            d.innerHTML = lk;
            cnt++;
            remove(cnt);
        } else {
            lh.style.visibility = 'hidden';
            rh.style.visibility = 'visible';
            d.innerHTML = "X";
            cnt++;
            remove(cnt);
        }
    }
    if (cnt > 4 && flag == 0) {
        win(b1, b2, b3);
        win(b4, b5, b6);
        win(b7, b8, b9);
        win(b1, b4, b7);
        win(b2, b5, b8);
        win(b3, b6, b9);
        win(b1, b5, b9);
        win(b3, b5, b7);
    }
    if (cnt == 9) {
        win_display('DRAW');
    }
}

function win(p, q, r) {
    wct++;
    if (p.innerHTML == "X" && q.innerHTML == "X" && r.innerHTML == "X") {
        flag = 1;
        win_display('X',cnt,wct);
    } else if (p.innerHTML == "O" && q.innerHTML == "O" && r.innerHTML == "O") {
        flag = 1;
        win_display('O',cnt,wct);
    }
}

function remove(c) {
    var x1 = document.getElementById("x5");
    var x2 = document.getElementById("x4");
    var x3 = document.getElementById("x3");
    var x4 = document.getElementById("x2");
    var x5 = document.getElementById("x1");
    var o1 = document.getElementById("o5");
    var o2 = document.getElementById("o4");
    var o3 = document.getElementById("o3");
    var o4 = document.getElementById("o2");
    var o5 = document.getElementById("o1");
    switch (c) {
        case 1:
            x1.style.visibility = 'hidden';
            break;
        case 2:
            o1.style.visibility = 'hidden';
            break;
        case 3:
            x2.style.visibility = 'hidden';
            break;
        case 4:
            o2.style.visibility = 'hidden';
            break;
        case 5:
            x3.style.visibility = 'hidden';
            break;
        case 6:
            o3.style.visibility = 'hidden';
            break;
        case 7:
            x4.style.visibility = 'hidden';
            break;
        case 8:
            o4.style.visibility = 'hidden';
            break;
        case 9:
            x5.style.visibility = 'hidden';
            break;
    }
}

function win_display(z,cnt,wct) {
    localStorage.setItem("acnt",cnt);
    localStorage.setItem("awct",wct);
    if (z == 'DRAW') { 
        window.open("winner_draw.html", "_self");
    } 
    else if (z == 'X') {
        window.open("winner_x.html", "_self");
    } 
    else if (z == 'O') {
        window.open("winner_o.html", "_self");
    }
}

function go2gm() {
    window.open("game.html", "_self");
}

function go2lg() {
    window.open("../play_game.html", "_self");
} 
function dis(Z){
    if(localStorage.acnt==6)
        localStorage.awct=localStorage.awct-8;
    else if(localStorage.acnt==7)
        localStorage.awct=localStorage.awct-16;
    else if(localStorage.acnt==8)
        localStorage.awct=localStorage.awct-24;
    var q1=document.getElementById("q1"); 
    var q2=document.getElementById("q2"); 
    var q3=document.getElementById("q3"); 
    var q4=document.getElementById("q4"); 
    var q5=document.getElementById("q5"); 
    var q6=document.getElementById("q6"); 
    var q7=document.getElementById("q7"); 
    var q8=document.getElementById("q8"); 
    var q9=document.getElementById("q9"); 
    switch(localStorage.awct)
        {
            case '1' : 
                q1.innerHTML=Z;
                q2.innerHTML=Z;
                q3.innerHTML=Z;
                break;
            case '2' :
                q4.innerHTML=Z;
                q5.innerHTML=Z;
                q6.innerHTML=Z;
                break;
            case '3' :
                q7.innerHTML=Z;
                q8.innerHTML=Z;
                q9.innerHTML=Z;
                break;
            case '4' :
                q1.innerHTML=Z;
                q4.innerHTML=Z;
                q7.innerHTML=Z;
                break;
            case '5' :
                q2.innerHTML=Z;
                q5.innerHTML=Z;
                q8.innerHTML=Z;
                break;
            case '6' :
                q3.innerHTML=Z;
                q6.innerHTML=Z;
                q9.innerHTML=Z;
                break;
            case '7' :
                q1.innerHTML=Z;
                q5.innerHTML=Z;
                q9.innerHTML=Z;
                break;
            case '8' :
                q3.innerHTML=Z;
                q5.innerHTML=Z;
                q7.innerHTML=Z;
                break;
        }
/*    localStorage.setItem("b1",document.getElementById("d1").innerHTML);
    localStorage.setItem("b2",document.getElementById("d2").innerHTML);
    localStorage.setItem("b3",document.getElementById("d3").innerHTML);
    localStorage.setItem("b4",document.getElementById("d4").innerHTML);
    localStorage.setItem("b5",document.getElementById("d5").innerHTML);
    localStorage.setItem("b6",document.getElementById("d6").innerHTML);
    localStorage.setItem("b7",document.getElementById("d7").innerHTML);
    localStorage.setItem("b8",document.getElementById("d8").innerHTML);
    localStorage.setItem("b9",document.getElementById("d9").innerHTML);
    
    if(localStorage.b1=='' ||localStorage.b2=='' ||localStorage.b3=='' ||localStorage.b4=='' ||localStorage.b8=='' ||localStorage.b7=='' ||localStorage.b6=='' ||localStorage.b5=='' ||localStorage.b9=='')
    q1.innerHTML=localStorage.b1;
    q2.innerHTML=localStorage.b2;
    q3.innerHTML=localStorage.b3;
    q4.innerHTML=localStorage.b4;
    q5.innerHTML=localStorage.b5;
    q6.innerHTML=localStorage.b6;
    q7.innerHTML=localStorage.b7;
    q8.innerHTML=localStorage.b8;
    q9.innerHTML=localStorage.b9;*/
}