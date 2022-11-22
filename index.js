//type column variables
let z1 = document.getElementById("col212");
let z2 = document.getElementById("col222");
let z3 = document.getElementById("col232");
let z4 = document.getElementById("col242");
let z5 = document.getElementById("col252");
let z6 = document.getElementById("col312");
let z7 = document.getElementById("col322");
let z8 = document.getElementById("col332");
let z9 = document.getElementById("col342");
let z10 = document.getElementById("col352");
let z11 = document.getElementById("col412");
let z12 = document.getElementById("col422");
let z13 = document.getElementById("col432");
let z14 = document.getElementById("col442");
let z15 = document.getElementById("col452");
let z16 = document.getElementById("col512");
let z17 = document.getElementById("col522");
let z18 = document.getElementById("col532");
let z19 = document.getElementById("col542");
let z20 = document.getElementById("col552");
//player1 column variables
let a1 = document.getElementById("col213");
let b1 = document.getElementById("col223");
let c1 = document.getElementById("col233");
let d1 = document.getElementById("col243");
let e1 = document.getElementById("col253");
let f1 = document.getElementById("col313");
let g1 = document.getElementById("col323");
let h1 = document.getElementById("col333");
let i1 = document.getElementById("col343");
let j1 = document.getElementById("col353");
let k1 = document.getElementById("col413");
let l1 = document.getElementById("col423");
let m1 = document.getElementById("col433");
let n1 = document.getElementById("col443");
let o1 = document.getElementById("col453");
let p1 = document.getElementById("col513");
let q1 = document.getElementById("col523");
let r1 = document.getElementById("col533");
let s1 = document.getElementById("col543");
let t1 = document.getElementById("col553");
//player2 column variables
let a2 = document.getElementById("col214");
let b2 = document.getElementById("col224");
let c2 = document.getElementById("col234");
let d2 = document.getElementById("col244");
let e2 = document.getElementById("col254");
let f2 = document.getElementById("col314");
let g2 = document.getElementById("col324");
let h2 = document.getElementById("col334");
let i2 = document.getElementById("col344");
let j2 = document.getElementById("col354");
let k2 = document.getElementById("col414");
let l2 = document.getElementById("col424");
let m2 = document.getElementById("col434");
let n2 = document.getElementById("col444");
let o2 = document.getElementById("col454");
let p2 = document.getElementById("col514");
let q2 = document.getElementById("col524");
let r2 = document.getElementById("col534");
let s2 = document.getElementById("col544");
let t2 = document.getElementById("col554");
//player3 column variables
let a3 = document.getElementById("col215");
let b3 = document.getElementById("col225");
let c3 = document.getElementById("col235");
let d3 = document.getElementById("col245");
let e3 = document.getElementById("col255");
let f3 = document.getElementById("col315");
let g3 = document.getElementById("col325");
let h3 = document.getElementById("col335");
let i3 = document.getElementById("col345");
let j3 = document.getElementById("col355");
let k3 = document.getElementById("col415");
let l3 = document.getElementById("col425");
let m3 = document.getElementById("col435");
let n3 = document.getElementById("col445");
let o3 = document.getElementById("col455");
let p3 = document.getElementById("col515");
let q3 = document.getElementById("col525");
let r3 = document.getElementById("col535");
let s3 = document.getElementById("col545");
let t3 = document.getElementById("col555");
//player4 column variables
let a4 = document.getElementById("col216");
let b4 = document.getElementById("col226");
let c4 = document.getElementById("col236");
let d4 = document.getElementById("col246");
let e4 = document.getElementById("col256");
let f4 = document.getElementById("col316");
let g4 = document.getElementById("col326");
let h4 = document.getElementById("col336");
let i4 = document.getElementById("col346");
let j4 = document.getElementById("col356");
let k4 = document.getElementById("col416");
let l4 = document.getElementById("col426");
let m4 = document.getElementById("col436");
let n4 = document.getElementById("col446");
let o4 = document.getElementById("col456");
let p4 = document.getElementById("col516");
let q4 = document.getElementById("col526");
let r4 = document.getElementById("col536");
let s4 = document.getElementById("col546");
let t4 = document.getElementById("col556");
//result row variables
let u1 = document.getElementById("col62");
let u2 = document.getElementById("col63");
let u3 = document.getElementById("col64");
let u4 = document.getElementById("col65");
//player name row variables
let v1 = document.getElementById("col13");
let v2 = document.getElementById("col14");
let v3 = document.getElementById("col15");
let v4 = document.getElementById("col16");
//player name column variables
let w1 = document.getElementById("col211");
let w2 = document.getElementById("col311");
let w3 = document.getElementById("col411");
let w4 = document.getElementById("col511");
//row arrays
let arr = [
  [z1, a1, a2, a3, a4],
  [z2, b1, b2, b3, b4],
  [z3, c1, c2, c3, c4],
  [z4, d1, d2, d3, d4],
  [z5, e1, e2, e3, e4],
  [z6, f1, f2, f3, f4],
  [z7, g1, g2, g3, g4],
  [z8, h1, h2, h3, h4],
  [z9, i1, i2, i3, i4],
  [z10, j1, j2, j3, j4],
  [z11, k1, k2, k3, k4],
  [z12, l1, l2, l3, l4],
  [z13, m1, m2, m3, m4],
  [z14, n1, n2, n3, n4],
  [z15, o1, o2, o3, o4],
  [z16, p1, p2, p3, p4],
  [z17, q1, q2, q3, q4],
  [z18, r1, r2, r3, r4],
  [z19, s1, s2, s3, s4],
  [z20, t1, t2, t3, t4],
  [u1, u2, u3, u4],
];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];
//JSON
for (let x = 0; x < 20; x++) {
  for (let i = 1; i < 5; i++) {
    arr[x][i].innerHTML = JSON.parse(
      sessionStorage.getItem(`${letters[x]}${i}`)
    );
  }
  arr[x][0].value = JSON.parse(sessionStorage.getItem(`z${x + 1}`));
}
v1.innerHTML = w1.innerHTML = JSON.parse(sessionStorage.getItem("player1"));
v2.innerHTML = w2.innerHTML = JSON.parse(sessionStorage.getItem("player2"));
v3.innerHTML = w3.innerHTML = JSON.parse(sessionStorage.getItem("player3"));
v4.innerHTML = w4.innerHTML = JSON.parse(sessionStorage.getItem("player4"));
//manual refresh session storage and refresh page
document.getElementById("refreshssbutton").onclick = () => {
  sessionStorage.clear();
  location.reload();
};
//automatic refresh result
window.addEventListener("load", () => {
  refreshresult();
  for (let j = 0; j < 20; j++) {
    cond2(arr[j][0], j);
  }
});
//displaying players names
document.getElementById("submitbutton").onclick = function () {
  let player1 = document.getElementById("player1").value;
  v1.innerHTML = w1.innerHTML = player1;
  sessionStorage.setItem(`player1`, JSON.stringify(player1));
  let player2 = document.getElementById("player2").value;
  v2.innerHTML = w2.innerHTML = player2;
  sessionStorage.setItem(`player2`, JSON.stringify(player2));
  let pc3 = document.getElementById("player3").value;
  v3.innerHTML = w3.innerHTML = pc3;
  sessionStorage.setItem(`player3`, JSON.stringify(pc3));
  let pc4 = document.getElementById("player4").value;
  v4.innerHTML = w4.innerHTML = pc4;
  sessionStorage.setItem(`player4`, JSON.stringify(pc4));
};
for (let j = 0; j < 20; j++) {
  arr[j][0].onchange = function () {
    cond2(arr[j][0], j);
    sessionStorage.setItem(`z${j + 1}`, JSON.stringify(arr[j][0].value));
  };
}
//displaying the calculation for each div
let cond = function (reference, shownresult) {
  let numb = Number(window.prompt("Enter number of cards"));
  let type = reference.value;
  let x = shownresult;
  if (type == "l") {
    numb < 14 && numb > 0 ? (x.innerHTML = numb * -15) : (x.innerHTML = 0);
  } else if (type == "t") {
    numb < 5 && numb > 0 ? (x.innerHTML = 250 - numb * 50) : (x.innerHTML = 0);
  } else if (type == "b") {
    numb < 5 && numb > 0 ? (x.innerHTML = numb * -25) : (x.innerHTML = 0);
  } else if (type == "d") {
    numb < 14 && numb > 0 ? (x.innerHTML = numb * -10) : (x.innerHTML = 0);
  } else if (type == "r") {
    numb == 1 ? (x.innerHTML = numb * -75) : (x.innerHTML = 0);
  }
};
let cond2 = function (reference, j) {
  let type = reference.value;
  let totalrowresult =
    Number(arr[j][1].textContent) +
    Number(arr[j][2].textContent) +
    Number(arr[j][3].textContent) +
    Number(arr[j][4].textContent);
  let op1 = () => {
    reference.style.backgroundColor = "lightblue";
  };
  let op2 = (reference.style.backgroundColor = "red");
  if (type == "l") {
    totalrowresult == -195 ? op1() : op2;
  } else if (type == "t") {
    totalrowresult == 500 ? op1() : op2;
  } else if (type == "b") {
    totalrowresult == -100 ? op1() : op2;
  } else if (type == "d") {
    totalrowresult == -130 ? op1() : op2;
  } else if (type == "r") {
    totalrowresult == -75 ? op1() : op2;
  } else {
    op1();
  }
};
//displaying results
let refreshresult = function () {
  for (i = 1; i < 5; i++) {
    let res = 0;
    for (j = 0; j < 20; j++) {
      arr[20][i - 1].innerHTML = res += Number(arr[j][i].textContent);
    }
  }
};
//page operator
for (let j = 0; j < 20; j++) {
  for (let i = 1; i < 5; i++) {
    arr[j][i].onclick = function () {
      cond(arr[j][0], arr[j][i]);
      cond2(arr[j][0], j);
      refreshresult();
      sessionStorage.setItem(
        `${letters[j]}${i}`,
        JSON.stringify(arr[j][i].textContent)
      );
    };
  }
}
