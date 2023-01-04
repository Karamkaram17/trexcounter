var gameDOM = document.getElementById("gamediv");
var submitBtn = document.getElementById("submitbutton");
//player name row variables
var a1 = document.getElementById("col13");
var a2 = document.getElementById("col14");
var a3 = document.getElementById("col15");
var a4 = document.getElementById("col16");
//player name column variables
var b1 = document.getElementById("col211");
var b2 = document.getElementById("col311");
var b3 = document.getElementById("col411");
var b4 = document.getElementById("col511");
//player names input
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
//resetbtn
var resetBtn = document.getElementById("refreshssbutton");
//manual refresh session storage and refresh page
resetBtn
    ? (resetBtn.onclick = function () {
        var res = window.confirm("are you sure you want to reset ?");
        if (res == true) {
            localStorage.clear();
            location.reload();
        }
    })
    : null;
//automatic refresh result
window.addEventListener("load", function () {
    json1();
    json2();
    json3();
    json4();
    refreshresult();
});
//page operator
gameDOM.addEventListener("click", function (event) {
    var targetID = event.target.id;
    var reference = document.getElementById("".concat(rLC(targetID) + 2));
    var x = document.getElementById("".concat(targetID));
    if (x) {
        if (targetID.length == 6 && targetID[targetID.length - 1] === "2") {
            x.value
                ? localStorage.setItem("".concat(targetID), JSON.stringify(x.value))
                : null;
            reference.onchange = cond2(targetID);
        }
        if (targetID.length == 6 && Number(targetID[targetID.length - 1]) > 2) {
            if (document.getElementById("".concat(rLC(targetID) + 2))) {
                var v1 = document.getElementById("".concat(rLC(targetID) + 3));
                var v2 = document.getElementById("".concat(rLC(targetID) + 4));
                var v3 = document.getElementById("".concat(rLC(targetID) + 5));
                var v4 = document.getElementById("".concat(rLC(targetID) + 6));
                cond(targetID, reference, v1, v2, v3, v4, x);
                cond2(targetID);
                refreshresult();
                localStorage.setItem("".concat(targetID), JSON.stringify(x.textContent));
            }
        }
    }
});
//submit btn operator
submitBtn.addEventListener("click", function () {
    a1.innerHTML = b1.innerHTML = player1.value;
    localStorage.setItem("player1", JSON.stringify(player1.value));
    a2.innerHTML = b2.innerHTML = player2.value;
    localStorage.setItem("player2", JSON.stringify(player2.value));
    a3.innerHTML = b3.innerHTML = player3.value;
    localStorage.setItem("player3", JSON.stringify(player3.value));
    a4.innerHTML = b4.innerHTML = player4.value;
    localStorage.setItem("player4", JSON.stringify(player4.value));
});
//functions for editing strings
function rLC(str) {
    return str.slice(0, -1);
}
function rL2C(str) {
    return str.slice(0, -2);
}
function rL3C(str) {
    return str.slice(0, -3);
}
//function to determine type and giving according to type available choises for user to choose from
var cond = function (targetID, reference, v1, v2, v3, v4, x) {
    var type = reference.value;
    var msg = 0;
    var msg2 = [1, 2, 3, 4];
    var numb = 0;
    var dv1 = Number(v1.innerText);
    var dv2 = Number(v2.innerText);
    var dv3 = Number(v3.innerText);
    var dv4 = Number(v4.innerText);
    var dx = Number(x.innerText);
    if (type == "l") {
        msg = 13 - dv1 / -15 - dv2 / -15 - dv3 / -15 - dv4 / -15 + dx / -15;
        msg != 0
            ? (numb = Number(window.prompt("Enter number of cards between 0 & ".concat(msg, " "))))
            : (numb = Number(window.prompt("Enter 0")));
    }
    else if (type == "t") {
        var vs = [v1, v2, v3, v4];
        vs.forEach(function (elm) {
            if (elm.id != targetID) {
                elm.innerText.length > 0
                    ? msg2.splice(msg2.indexOf(5 - Number(elm.innerText) / 50), 1)
                    : (msg2 = msg2);
            }
        });
        msg2.length == 0
            ? (numb = Number(window.prompt("Enter 0")))
            : msg2.length == 1
                ? (numb = Number(window.prompt("Enter the following number ".concat(msg2, " "))))
                : (numb = Number(window.prompt("Enter one of the following numbers ".concat(msg2, " "))));
    }
    else if (type == "b") {
        msg = 4 - dv1 / -25 - dv2 / -25 - dv3 / -25 - dv4 / -25 + dx / -25;
        msg != 0
            ? (numb = Number(window.prompt("Enter number of cards between 0 & ".concat(msg.toString(), " "))))
            : (numb = Number(window.prompt("Enter 0")));
    }
    else if (type == "d") {
        msg = 13 - dv1 / -10 - dv2 / -10 - dv3 / -10 - dv4 / -10 + dx / -10;
        msg != 0
            ? (numb = Number(window.prompt("Enter number of cards between 0 & ".concat(msg, " "))))
            : (numb = Number(window.prompt("Enter 0")));
    }
    else if (type == "r") {
        msg = 1 - dv1 / -75 - dv2 / -75 - dv3 / -75 - dv4 / -75 + dx / -75;
        msg != 0
            ? (numb = Number(window.prompt("Enter 0 or 1 ")))
            : (numb = Number(window.prompt("Enter 0")));
    }
    //calculation
    if (type == "l") {
        numb < msg + 1 && numb > 0
            ? (x.innerHTML = (numb * -15).toString())
            : (x.innerHTML = "0");
    }
    else if (type == "t") {
        if (msg2.indexOf(numb) != -1 || numb === 0) {
            numb < 5 && numb > 0
                ? (x.innerHTML = (250 - numb * 50).toString())
                : (x.innerHTML = "0");
        }
    }
    else if (type == "b") {
        numb < msg + 1 && numb > 0
            ? (x.innerHTML = (numb * -25).toString())
            : (x.innerHTML = "0");
    }
    else if (type == "d") {
        numb < msg + 1 && numb > 0
            ? (x.innerHTML = (numb * -10).toString())
            : (x.innerHTML = "0");
    }
    else if (type == "r") {
        numb == msg ? (x.innerHTML = (numb * -75).toString()) : (x.innerHTML = "0");
    }
};
//function to determine if selected row calculation is correct if so ? => generate a new select on new row
function cond2(targetID) {
    var reference = document.getElementById("".concat(rLC(targetID) + 2));
    var v1 = document.getElementById("".concat(rLC(targetID) + 3));
    var v2 = document.getElementById("".concat(rLC(targetID) + 4));
    var v3 = document.getElementById("".concat(rLC(targetID) + 5));
    var v4 = document.getElementById("".concat(rLC(targetID) + 6));
    if (reference) {
        var parent_1 = reference.parentNode;
        var type = reference.value;
        var totalrowresult = Number(v1.textContent) +
            Number(v2.textContent) +
            Number(v3.textContent) +
            Number(v4.textContent);
        var op0 = function () {
            reference.style.backgroundColor = "lightblue";
            parent_1.style.backgroundColor = "lightblue";
        };
        var op1 = function () {
            reference.style.backgroundColor = "lightblue";
            parent_1.style.backgroundColor = "lightblue";
            reference.setAttribute("disabled", "");
            reference.style.fontWeight = "bolder";
            addSelect(reference);
        };
        var op2 = function () {
            reference.style.backgroundColor = "red";
            parent_1.style.backgroundColor = "red";
        };
        if (type == "l") {
            totalrowresult == -195 ? op1() : op2();
        }
        else if (type == "t") {
            totalrowresult == 500 ? op1() : op2();
        }
        else if (type == "b") {
            totalrowresult == -100 ? op1() : op2();
        }
        else if (type == "d") {
            totalrowresult == -130 ? op1() : op2();
        }
        else if (type == "r") {
            totalrowresult == -75 ? op1() : op2();
        }
        else {
            op0();
        }
    }
    return null;
}
//function operate with select element
function addSelect(reference) {
    var referenceId = reference.id;
    if (referenceId[3] == "2") {
        newSelect(referenceId, 2, 0);
    }
    if (referenceId[3] == "3") {
        newSelect(referenceId, 3, 5);
    }
    if (referenceId[3] == "4") {
        newSelect(referenceId, 4, 10);
    }
    if (referenceId[3] == "5") {
        newSelect(referenceId, 5, 15);
    }
}
//function to create select and give it the available options
function newSelect(referenceId, i, p) {
    var select = document.createElement("select");
    var nb = Number(referenceId[4]);
    var nbplus = Number(nb) + 1;
    var typenbplus = nbplus + p;
    if (nb < 5) {
        select.id = "col".concat(i).concat(nbplus, "2");
        var place2 = document.getElementById("type".concat(typenbplus));
        if (place2.innerHTML == "") {
            var types = ["", "t", "l", "r", "b", "d"];
            for (var j = 1; j < 5; j++) {
                var target = document.getElementById("col".concat(i).concat(j, "2"));
                target ? types.splice(types.indexOf(target.value), 1) : null;
            }
            types.forEach(function (elm) {
                elm == "" ? (select.innerHTML += "<option value=\"\"></option>") : null;
                elm == "t"
                    ? (select.innerHTML += "<option value=\"t\">Trex</option>")
                    : null;
                elm == "r"
                    ? (select.innerHTML += "<option value=\"r\">R<span>&hearts;</span></option>")
                    : null;
                elm == "l"
                    ? (select.innerHTML += "<option value=\"l\">Ltouch</option>")
                    : null;
                elm == "b"
                    ? (select.innerHTML += "<option value=\"b\">Banet</option>")
                    : null;
                elm == "d"
                    ? (select.innerHTML += "<option value=\"d\">&diams;</option>")
                    : null;
            });
            place2.appendChild(select);
            localStorage.setItem("type".concat(typenbplus), JSON.stringify(place2.innerHTML));
        }
    }
    if (nb == 5) {
        if (document.getElementById("type".concat(typenbplus))) {
            var target = document.getElementById("type".concat(typenbplus));
            if (target.innerHTML == "") {
                target.innerHTML = "<select id=\"col".concat(i + 1, "12\"><option value=\"\"></option><option value=\"t\">Trex</option><option value=\"r\">R<span>&hearts;</span></option><option value=\"l\">Ltouch</option><option value=\"b\">Banet</option><option value=\"d\">&diams;</option></select>");
                localStorage.setItem("type".concat(typenbplus), JSON.stringify(target.innerHTML));
            }
        }
    }
}
//displaying results
var refreshresult = function () {
    for (var i = 3; i < 7; i++) {
        var res = 0;
        for (var k = 1; k < 6; k++) {
            for (var j = 2; j < 6; j++) {
                var target = document.getElementById("col".concat(j).concat(k).concat(i));
                var result = document.getElementById("col6".concat(i - 1));
                result.innerHTML = (res += Number(target.textContent)).toString();
            }
        }
    }
};
//JSON
//displaying the available select elements
function json1() {
    for (var j = 1; j < 21; j++) {
        var typenb = "type".concat(j);
        var target = document.getElementById("".concat(typenb));
        var storage = localStorage.getItem("".concat(typenb));
        storage ? (target.innerHTML = JSON.parse(storage)) : null;
    }
}
//displaying the available calculation
function json2() {
    for (var i = 3; i < 7; i++) {
        for (var k = 1; k < 6; k++) {
            for (var j = 2; j < 6; j++) {
                var name_1 = "col".concat(j).concat(k).concat(i);
                var target = document.getElementById("".concat(name_1));
                var storage = localStorage.getItem("".concat(name_1));
                storage ? (target.innerHTML = JSON.parse(storage)) : null;
            }
        }
    }
}
//displaying the available selected types
function json3() {
    for (var j = 2; j < 6; j++) {
        for (var k = 1; k < 6; k++) {
            var name_2 = "col".concat(j).concat(k, "2");
            var target = document.getElementById("".concat(name_2));
            if (target) {
                var storage = localStorage.getItem("".concat(name_2));
                if (storage) {
                    target.value = JSON.parse(storage);
                    cond2(target.id);
                }
            }
        }
    }
}
//displaying available names
function json4() {
    for (var j = 1; j < 5; j++) {
        var playertarget = document.getElementById("player".concat(j));
        var namee = document.getElementById("col1".concat(j + 2));
        var nameee = document.getElementById("col".concat(j + 1, "11"));
        var storage = localStorage.getItem("player".concat(j));
        storage
            ? (playertarget.value =
                namee.innerHTML =
                    nameee.innerHTML =
                        JSON.parse(storage))
            : null;
    }
}
