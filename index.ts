let gameDOM = document.getElementById("gamediv") as HTMLDivElement;
let submitBtn = document.getElementById("submitbutton") as HTMLButtonElement;
let resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

//loading available data
json1(); //select divs
json2(); //select types
json3(); //calculations
json4(); //player names

//manual refresh session storage and refresh page
resetBtn.onclick = () => {
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
gameDOM.addEventListener("click", function (event: any) {
  let targetID: string = event.target.id;
  let reference = document.getElementById(
    `${rLC(targetID) + "2"}`
  ) as HTMLSelectElement;
  if (reference) {
    let x = document.getElementById(`${targetID}`) as HTMLDataElement;
    let parent = reference.parentNode as HTMLDivElement;
    let parentId = parent.id;
    let v1 = document.getElementById(
      `${rLC(targetID) + "3"}`
    ) as HTMLDivElement;
    let v2 = document.getElementById(
      `${rLC(targetID) + "4"}`
    ) as HTMLDivElement;
    let v3 = document.getElementById(
      `${rLC(targetID) + "5"}`
    ) as HTMLDivElement;
    let v4 = document.getElementById(
      `${rLC(targetID) + "6"}`
    ) as HTMLDivElement;
    //if the selected target is in the column of types
    if (
      targetID.length == 6 &&
      targetID[targetID.length - 1] === "2" &&
      targetID[0] == "c" &&
      parent
    ) {
      x.value ? cond2(targetID) : null;
      localStorage.setItem(`${reference.id}`, JSON.stringify(reference.value));
      if (parent.textContent !== "" || parent.textContent !== undefined) {
        localStorage.setItem(`${parentId}`, JSON.stringify(parent.innerHTML));
      }
    }
    //it the selected target is in the players columns
    if (
      targetID.length == 6 &&
      Number(targetID[targetID.length - 1]) > 2 &&
      targetID[0] == "c" &&
      parent
    ) {
      cond(targetID, reference, v1, v2, v3, v4, x);
      cond2(targetID);
      refreshresult();
      reference.addEventListener("change", selectOnChange);
      localStorage.setItem(`${targetID}`, JSON.stringify(x.textContent));
      localStorage.setItem(`${reference.id}`, JSON.stringify(reference.value));
      if (parent.textContent !== "" || parent.textContent !== undefined) {
        localStorage.setItem(`${parentId}`, JSON.stringify(parent.innerHTML));
      }
    }
  }
});
//submit btn operator
submitBtn.addEventListener("click", function () {
  for (let j = 1; j < 5; j++) {
    let playertarget = document.getElementById(
      `player${j}`
    ) as HTMLInputElement;
    let name1 = document.getElementById(`col1${j + 2}`) as HTMLDivElement;
    let name2 = document.getElementById(`col${j + 1}11`) as HTMLDivElement;
    name1.innerHTML = name2.innerHTML = playertarget.value;
    localStorage.setItem(`player${j}`, JSON.stringify(playertarget.value));
  }
});
//selectfunction
function selectOnChange(event: any) {
  let targetID: string = event.target.id;
  let v1 = document.getElementById(`${rLC(targetID) + "3"}`) as HTMLDivElement;
  let v2 = document.getElementById(`${rLC(targetID) + "4"}`) as HTMLDivElement;
  let v3 = document.getElementById(`${rLC(targetID) + "5"}`) as HTMLDivElement;
  let v4 = document.getElementById(`${rLC(targetID) + "6"}`) as HTMLDivElement;
  let vArray = [v1, v2, v3, v4];
  vArray.forEach((elm) => {
    elm.innerHTML = "";
    localStorage.setItem(`${elm.id}`, JSON.stringify(elm.textContent));
  });
}
//functions for editing strings
function rLC(str: string): string {
  return str.slice(0, -1);
}
function rL2C(str: string): string {
  return str.slice(0, -2);
}
function rL3C(str: string): string {
  return str.slice(0, -3);
}
//function to determine type and giving according to the chosen type the available choises for user to choose from
let cond = function (
  targetID: string,
  reference: HTMLDataElement,
  v1: HTMLDivElement,
  v2: HTMLDivElement,
  v3: HTMLDivElement,
  v4: HTMLDivElement,
  x: HTMLDataElement
): void {
  let type = reference.value;
  let msg: number = 0;
  let msg2: number[] = [1, 2, 3, 4];
  let numb: number = 0;
  let dv1 = Number(v1.innerText);
  let dv2 = Number(v2.innerText);
  let dv3 = Number(v3.innerText);
  let dv4 = Number(v4.innerText);
  let dx = Number(x.innerText);
  if (type == "l") {
    msg = 13 - dv1 / -15 - dv2 / -15 - dv3 / -15 - dv4 / -15 + dx / -15;
    msg != 0
      ? (numb = Number(
          window.prompt(`Enter number of cards between 0 & ${msg} `)
        ))
      : (numb = Number(window.prompt(`Enter 0`)));
  } else if (type == "t") {
    let vs = [v1, v2, v3, v4];
    vs.forEach((elm) => {
      if (elm.id != targetID) {
        elm.innerText.length > 0 && Number(elm.innerText) !== 0
          ? msg2.splice(msg2.indexOf(5 - Number(elm.innerText) / 50), 1)
          : (msg2 = msg2);
      }
    });
    msg2.length == 0
      ? (numb = Number(window.prompt(`Enter 0`)))
      : msg2.length == 1
      ? (numb = Number(window.prompt(`Enter the following number ${msg2} `)))
      : (numb = Number(
          window.prompt(`Enter one of the following numbers ${msg2} `)
        ));
  } else if (type == "b") {
    msg = 4 - dv1 / -25 - dv2 / -25 - dv3 / -25 - dv4 / -25 + dx / -25;
    msg != 0
      ? (numb = Number(
          window.prompt(`Enter number of cards between 0 & ${msg.toString()} `)
        ))
      : (numb = Number(window.prompt(`Enter 0`)));
  } else if (type == "d") {
    msg = 13 - dv1 / -10 - dv2 / -10 - dv3 / -10 - dv4 / -10 + dx / -10;
    msg != 0
      ? (numb = Number(
          window.prompt(`Enter number of cards between 0 & ${msg} `)
        ))
      : (numb = Number(window.prompt(`Enter 0`)));
  } else if (type == "r") {
    msg = 1 - dv1 / -75 - dv2 / -75 - dv3 / -75 - dv4 / -75 + dx / -75;
    msg != 0
      ? (numb = Number(window.prompt(`Enter 0 or 1 `)))
      : (numb = Number(window.prompt(`Enter 0`)));
  }
  //calculation
  if (type == "l") {
    numb < msg + 1 && numb > 0
      ? (x.innerHTML = (numb * -15).toString())
      : (x.innerHTML = "0");
  } else if (type == "t") {
    if (msg2.indexOf(numb) != -1 || numb === 0) {
      numb < 5 && numb > 0
        ? (x.innerHTML = (250 - numb * 50).toString())
        : (x.innerHTML = "0");
    }
  } else if (type == "b") {
    numb < msg + 1 && numb > 0
      ? (x.innerHTML = (numb * -25).toString())
      : (x.innerHTML = "0");
  } else if (type == "d") {
    numb < msg + 1 && numb > 0
      ? (x.innerHTML = (numb * -10).toString())
      : (x.innerHTML = "0");
  } else if (type == "r") {
    numb == msg ? (x.innerHTML = (numb * -75).toString()) : (x.innerHTML = "0");
  }
};
//function to determine if selected row calculation is correct if so ? => generate a new select on new row
function cond2(targetID: string): null {
  let reference = document.getElementById(
    `${rLC(targetID) + 2}`
  ) as HTMLSelectElement;
  let v1 = document.getElementById(`${rLC(targetID) + 3}`) as HTMLDivElement;
  let v2 = document.getElementById(`${rLC(targetID) + 4}`) as HTMLDivElement;
  let v3 = document.getElementById(`${rLC(targetID) + 5}`) as HTMLDivElement;
  let v4 = document.getElementById(`${rLC(targetID) + 6}`) as HTMLDivElement;
  if (reference) {
    let parent = reference.parentNode as HTMLDivElement;
    let type: string = reference.value;
    let totalrowresult =
      Number(v1.textContent) +
      Number(v2.textContent) +
      Number(v3.textContent) +
      Number(v4.textContent);
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
      op2();
    }
  }
  return null;
}
//function operate with select element
function addSelect(reference: HTMLDataElement) {
  let referenceId = reference.id;
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
function newSelect(referenceId: string, i: number, p: number) {
  let select = document.createElement("select");
  let nb = Number(referenceId[4]);
  let nbplus = Number(nb) + 1;
  let typenbplus = nbplus + p;
  if (nb < 5) {
    select.id = `col${i}${nbplus}2`;
    let place2 = document.getElementById(`type${typenbplus}`) as HTMLDivElement;
    if (place2.innerHTML == "") {
      let types: string[] = ["t", "l", "r", "b", "d"];
      for (let j = 1; j < 5; j++) {
        let target = document.getElementById(`col${i}${j}2`) as HTMLDataElement;
        target ? types.splice(types.indexOf(target.value), 1) : null;
      }
      types.forEach((elm) => {
        elm == "t"
          ? (select.innerHTML += `<option value="t">Trex</option>`)
          : elm == "r"
          ? (select.innerHTML += `<option value="r">R<span>&hearts;</span></option>`)
          : elm == "l"
          ? (select.innerHTML += `<option value="l">Ltouch</option>`)
          : elm == "b"
          ? (select.innerHTML += `<option value="b">Banet</option>`)
          : elm == "d"
          ? (select.innerHTML += `<option value="d">&diams;</option>`)
          : null;
      });
      select.style.backgroundColor = "red";
      place2.style.backgroundColor = "red";
      place2.appendChild(select);
      localStorage.setItem(
        `type${typenbplus}`,
        JSON.stringify(place2.innerHTML)
      );
    }
  }
  if (nb == 5) {
    let target = document.getElementById(`type${typenbplus}`) as HTMLDivElement;
    if (target) {
      if (target.innerHTML == "") {
        target.style.backgroundColor = "red";
        target.innerHTML = `<select style="background-color: red" id="col${
          i + 1
        }12"><option value="t">Trex</option><option value="r">R<span>&hearts;</span></option><option value="l">Ltouch</option><option value="b">Banet</option><option value="d">&diams;</option></select>`;
        localStorage.setItem(
          `type${typenbplus}`,
          JSON.stringify(target.innerHTML)
        );
      }
    }
  }
}

//displaying results
let refreshresult = function () {
  for (let i = 3; i < 7; i++) {
    let res = 0;
    for (let k = 1; k < 6; k++) {
      for (let j = 2; j < 6; j++) {
        let target = document.getElementById(
          `col${j}${k}${i}`
        ) as HTMLDivElement;
        let result = document.getElementById(`col6${i - 1}`) as HTMLDivElement;
        result.innerHTML = (res += Number(target.textContent)).toString();
      }
    }
  }
};

//JSON
//displaying the available calculation
function json1() {
  for (let i = 3; i < 7; i++) {
    for (let k = 1; k < 6; k++) {
      for (let j = 2; j < 6; j++) {
        let name = `col${j}${k}${i}`;
        let target = document.getElementById(`${name}`) as HTMLDivElement;
        let storage = localStorage.getItem(`${name}`);
        storage ? (target.innerHTML = JSON.parse(storage)) : null;
      }
    }
  }
}
//displaying the available select elements
function json2() {
  for (let j = 1; j < 21; j++) {
    let typenb = `type${j}`;
    let target = document.getElementById(`${typenb}`) as HTMLDivElement;
    let storage = localStorage.getItem(`${typenb}`);
    storage ? (target.innerHTML = JSON.parse(storage)) : null;
    target.addEventListener("change", selectOnChange);
  }
}
//displaying the available selected types
function json3() {
  for (let j = 2; j < 6; j++) {
    for (let k = 1; k < 6; k++) {
      let name = `col${j}${k}2`;
      let target = document.getElementById(`${name}`) as HTMLSelectElement;
      if (target) {
        let storage = localStorage.getItem(`${name}`);
        if (storage) {
          target.value = JSON.parse(storage);
          cond2(target.id);
        }
      }
    }
  }
  let selectDOM = document.querySelectorAll("select");
  selectDOM.forEach((element) => {
    cond2(element.id);
  });
}
//displaying available names
function json4() {
  for (let j = 1; j < 5; j++) {
    let playertarget = document.getElementById(
      `player${j}`
    ) as HTMLInputElement;
    let name1 = document.getElementById(`col1${j + 2}`) as HTMLDivElement;
    let name2 = document.getElementById(`col${j + 1}11`) as HTMLDivElement;
    let storage = localStorage.getItem(`player${j}`);
    if (storage) {
      playertarget.value =
        name1.innerHTML =
        name2.innerHTML =
          JSON.parse(storage);
    }
  }
}
