let gameDOM = document.getElementById("gamediv");
let submitBtn = document.getElementById("submitbutton");
//player name row variables
let a1 = document.getElementById("col13");
let a2 = document.getElementById("col14");
let a3 = document.getElementById("col15");
let a4 = document.getElementById("col16");
//player name column variables
let b1 = document.getElementById("col211");
let b2 = document.getElementById("col311");
let b3 = document.getElementById("col411");
let b4 = document.getElementById("col511");
//player names input
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

//JSON
//displaying the available select elements
for (let j = 1; j < 21; j++) {
  let typenb = `type${j}`;
  let typedestination = document.getElementById(`${typenb}`);
  localStorage.getItem(`${typenb}`)
    ? (typedestination.innerHTML = JSON.parse(
        localStorage.getItem(`${typenb}`)
      ))
    : null;
}
//displaying the available calculation
for (let i = 3; i < 7; i++) {
  for (let k = 1; k < 6; k++) {
    for (let j = 2; j < 6; j++) {
      let name = `col${j}${k}${i}`;
      let target = document.getElementById(`${name}`);
      target.innerHTML = JSON.parse(localStorage.getItem(`${name}`));
    }
  }
}
//displaying the available selected types
for (let k = 1; k < 6; k++) {
  for (let j = 2; j < 6; j++) {
    let name = `col${j}${k}2`;
    if (document.getElementById(`${name}`)) {
      let target = document.getElementById(`${name}`);
      target.value = JSON.parse(localStorage.getItem(`${name}`));
      cond2(target.id);
    }
  }
}
//displaying available names
for (let j = 1; j < 5; j++) {
  let playertarget = document.getElementById(`player${j}`);
  let namee = document.getElementById(`col1${j + 2}`);
  let nameee = document.getElementById(`col${j + 1}11`);
  playertarget.value =
    namee.innerHTML =
    nameee.innerHTML =
      JSON.parse(localStorage.getItem(`player${j}`));
}
//========= end of json ===========

//manual refresh session storage and refresh page
document.getElementById("refreshssbutton").onclick = () => {
  let res = window.confirm(`are you sure you want to reset ?`);
  if (res == true) {
    localStorage.clear();
    location.reload();
  }
};

//automatic refresh result
window.addEventListener("load", () => {
  refreshresult();
});

//page operator
gameDOM.addEventListener("click", function (event) {
  let targetID = event.target.id;
  let reference = document.getElementById(`${rLC(targetID) + 2}`);
  let x = document.getElementById(`${targetID}`);
  if (targetID.length == 6 && targetID[targetID.length - 1] == 2) {
    x.value
      ? localStorage.setItem(`${targetID}`, JSON.stringify(x.value))
      : null;
    reference.onchange = cond2(targetID);
  }
  if (targetID.length == 6 && targetID[targetID.length - 1] > 2) {
    if (document.getElementById(`${rLC(targetID) + 2}`)) {
      let v1 = document.getElementById(`${rLC(targetID) + 3}`);
      let v2 = document.getElementById(`${rLC(targetID) + 4}`);
      let v3 = document.getElementById(`${rLC(targetID) + 5}`);
      let v4 = document.getElementById(`${rLC(targetID) + 6}`);
      cond(targetID, reference, v1, v2, v3, v4, x);
      cond2(targetID);
      refreshresult();
      localStorage.setItem(`${targetID}`, JSON.stringify(x.textContent));
    }
  }
});
//submit btn operator
submitBtn.addEventListener("click", function () {
  a1.innerHTML = b1.innerHTML = player1.value;
  localStorage.setItem(`player1`, JSON.stringify(player1.value));
  a2.innerHTML = b2.innerHTML = player2.value;
  localStorage.setItem(`player2`, JSON.stringify(player2.value));
  a3.innerHTML = b3.innerHTML = player3.value;
  localStorage.setItem(`player3`, JSON.stringify(player3.value));
  a4.innerHTML = b4.innerHTML = player4.value;
  localStorage.setItem(`player4`, JSON.stringify(player4.value));
});

//functions for editing strings
function rLC(str) {
  return str.substring(0, str.length - 1);
}
function rL2C(str) {
  return str.substring(0, str.length - 2);
}
function rL3C(str) {
  return str.substring(0, str.length - 3);
}
//function to determine type and giving according to type available choises for user to choose from
let cond = function (targetID, reference, v1, v2, v3, v4, x) {
  let type = reference.value;
  let msg;
  let numb;
  let dv1 = Number(v1.innerText);
  let dv2 = Number(v2.innerText);
  let dv3 = Number(v3.innerText);
  let dv4 = Number(v4.innerText);
  let dx = Number(x.innerText);
  if (type == "l") {
    msg = 13 - dv1 / -15 - dv2 / -15 - dv3 / -15 - dv4 / -15 + dx / -15;
    msg != 0
      ? (numb = parseInt(
          window.prompt(`Enter number of cards between 0 & ${msg} `)
        ))
      : (numb = parseInt(window.prompt(`Enter 0`)));
  } else if (type == "t") {
    msg = [1, 2, 3, 4];
    vs = [v1, v2, v3, v4];
    vs.forEach((elm) => {
      if (elm.id != targetID) {
        elm.innerText > 0
          ? msg.splice(msg.indexOf(5 - Number(elm.innerText) / 50), 1)
          : (msg = msg);
      }
    });
    msg.length == 0
      ? (numb = Number(window.prompt(`Enter 0`)))
      : msg.length == 1
      ? (numb = Number(window.prompt(`Enter the following number ${msg} `)))
      : (numb = Number(
          window.prompt(`Enter one of the following numbers ${msg} `)
        ));
  } else if (type == "b") {
    msg = 4 - dv1 / -25 - dv2 / -25 - dv3 / -25 - dv4 / -25 + dx / -25;
    msg != 0
      ? (numb = parseInt(
          window.prompt(`Enter number of cards between 0 & ${msg} `)
        ))
      : (numb = parseInt(window.prompt(`Enter 0`)));
  } else if (type == "d") {
    msg = 13 - dv1 / -10 - dv2 / -10 - dv3 / -10 - dv4 / -10 + dx / -10;
    msg != 0
      ? (numb = parseInt(
          window.prompt(`Enter number of cards between 0 & ${msg} `)
        ))
      : (numb = parseInt(window.prompt(`Enter 0`)));
  } else if (type == "r") {
    msg = 1 - dv1 / -75 - dv2 / -75 - dv3 / -75 - dv4 / -75 + dx / -75;
    msg != 0
      ? (numb = parseInt(window.prompt(`Enter 0 or 1 `)))
      : (numb = parseInt(window.prompt(`Enter 0`)));
  }
  //calculation
  if (type == "l") {
    numb < msg + 1 && numb > 0 ? (x.innerHTML = numb * -15) : (x.innerHTML = 0);
  } else if (type == "t") {
    if (msg.includes(numb) || numb == 0) {
      numb < 5 && numb > 0
        ? (x.innerHTML = 250 - numb * 50)
        : (x.innerHTML = 0);
    }
  } else if (type == "b") {
    numb < msg + 1 && numb > 0 ? (x.innerHTML = numb * -25) : (x.innerHTML = 0);
  } else if (type == "d") {
    numb < msg + 1 && numb > 0 ? (x.innerHTML = numb * -10) : (x.innerHTML = 0);
  } else if (type == "r") {
    numb == msg ? (x.innerHTML = numb * -75) : (x.innerHTML = 0);
  }
};
//function to determine if selected row calculation is correct if so ? => generate a new select on new row
function cond2(targetID) {
  let reference = document.getElementById(`${rLC(targetID) + 2}`);
  let v1 = document.getElementById(`${rLC(targetID) + 3}`);
  let v2 = document.getElementById(`${rLC(targetID) + 4}`);
  let v3 = document.getElementById(`${rLC(targetID) + 5}`);
  let v4 = document.getElementById(`${rLC(targetID) + 6}`);
  let parent = reference.parentNode;
  let type = reference.value;
  let totalrowresult =
    Number(v1.textContent) +
    Number(v2.textContent) +
    Number(v3.textContent) +
    Number(v4.textContent);
  let op0 = () => {
    reference.style.backgroundColor = "lightblue";
    parent.style.backgroundColor = "lightblue";
  };
  let op1 = () => {
    reference.style.backgroundColor = "lightblue";
    parent.style.backgroundColor = "lightblue";
    reference.setAttribute("disabled", "");
    reference.style.fontWeight = "bolder";
    addSelect(reference);
  };
  let op2 = () => {
    reference.style.backgroundColor = "red";
    parent.style.backgroundColor = "red";
  };
  if (type == "l") {
    totalrowresult == -195 ? op1() : op2();
  } else if (type == "t") {
    totalrowresult == 500 ? op1() : op2();
  } else if (type == "b") {
    totalrowresult == -100 ? op1() : op2();
  } else if (type == "d") {
    totalrowresult == -130 ? op1() : op2();
  } else if (type == "r") {
    totalrowresult == -75 ? op1() : op2();
  } else {
    op0();
  }
}
//function operate with select element
function addSelect(reference) {
  let referenceId = reference.id;
  if (referenceId[3] == 2) {
    newSelect(referenceId, 2, 0);
  }
  if (referenceId[3] == 3) {
    newSelect(referenceId, 3, 5);
  }
  if (referenceId[3] == 4) {
    newSelect(referenceId, 4, 10);
  }
  if (referenceId[3] == 5) {
    newSelect(referenceId, 5, 15);
  }
}
//function to create select and give it the available options
function newSelect(referenceId, i, p) {
  let select = document.createElement("select");
  let nb = referenceId[4];
  let nbplus = Number(nb) + 1;
  let typenbplus = nbplus + p;
  if (nb < 5) {
    select.id = `col${i}${nbplus}2`;
    let place2 = document.getElementById(`type${typenbplus}`);
    if (place2.innerHTML == "") {
      let types = ["", "t", "l", "r", "b", "d"];
      for (let j = 1; j < 5; j++) {
        document.getElementById(`col${i}${j}2`)
          ? types.splice(
              types.indexOf(document.getElementById(`col${i}${j}2`).value),
              1
            )
          : null;
      }
      types.forEach((elm) => {
        elm == "" ? (select.innerHTML += `<option value=""></option>`) : null;
        elm == "t"
          ? (select.innerHTML += `<option value="t">Trex</option>`)
          : null;
        elm == "r"
          ? (select.innerHTML += `<option value="r">R<span>&hearts;</span></option>`)
          : null;
        elm == "l"
          ? (select.innerHTML += `<option value="l">Ltouch</option>`)
          : null;
        elm == "b"
          ? (select.innerHTML += `<option value="b">Banet</option>`)
          : null;
        elm == "d"
          ? (select.innerHTML += `<option value="d">&diams;</option>`)
          : null;
      });
      place2.appendChild(select);
      localStorage.setItem(
        `type${typenbplus}`,
        JSON.stringify(place2.innerHTML)
      );
    }
  }
  if (
    nb == 5 &&
    document.getElementById(`type${typenbplus}`) &&
    document.getElementById(`type${typenbplus}`).innerHTML == ""
  ) {
    document.getElementById(`type${typenbplus}`).innerHTML = `<select id="col${
      i + 1
    }12"><option value=""></option><option value="t">Trex</option><option value="r">R<span>&hearts;</span></option><option value="l">Ltouch</option><option value="b">Banet</option><option value="d">&diams;</option></select>`;
    localStorage.setItem(
      `type${typenbplus}`,
      JSON.stringify(document.getElementById(`type${typenbplus}`).innerHTML)
    );
  }
}

//displaying results
let refreshresult = function () {
  for (let i = 3; i < 7; i++) {
    let res = 0;
    for (let k = 1; k < 6; k++) {
      for (let j = 2; j < 6; j++) {
        let target = document.getElementById(`col${j}${k}${i}`);
        let result = document.getElementById(`col6${i - 1}`);
        result.innerHTML = res += Number(target.textContent);
      }
    }
  }
};
