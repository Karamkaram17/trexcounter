//type column variables
let z1 = document.getElementById("col212") ;
let z2 = document.getElementById("col222") ;
let z3 = document.getElementById("col232") ;
let z4 = document.getElementById("col242") ;
let z5 = document.getElementById("col252") ;
let z6 = document.getElementById("col312") ;
let z7 = document.getElementById("col322") ;
let z8 = document.getElementById("col332") ;
let z9 = document.getElementById("col342") ;
let z10 = document.getElementById("col352") ;
let z11 = document.getElementById("col412") ;
let z12 = document.getElementById("col422") ;
let z13 = document.getElementById("col432") ;
let z14 = document.getElementById("col442") ;
let z15 = document.getElementById("col452") ;
let z16 = document.getElementById("col512") ;
let z17 = document.getElementById("col522") ;
let z18 = document.getElementById("col532") ;
let z19 = document.getElementById("col542") ;
let z20 = document.getElementById("col552") ;
//player1 column variables
let a1 = document.getElementById("col213") ;
let b1 = document.getElementById("col223") ;
let c1 = document.getElementById("col233") ;
let d1 = document.getElementById("col243") ;
let e1 = document.getElementById("col253") ;
let f1 = document.getElementById("col313") ;
let g1 = document.getElementById("col323") ;
let h1 = document.getElementById("col333") ;
let i1 = document.getElementById("col343") ;
let j1 = document.getElementById("col353") ;
let k1 = document.getElementById("col413") ;
let l1 = document.getElementById("col423") ;
let m1 = document.getElementById("col433") ;
let n1 = document.getElementById("col443") ;
let o1 = document.getElementById("col453") ;
let p1 = document.getElementById("col513") ;
let q1 = document.getElementById("col523") ;
let r1 = document.getElementById("col533") ;
let s1 = document.getElementById("col543") ;
let t1 = document.getElementById("col553") ;
//player2 column variables
let a2 = document.getElementById("col214") ;
let b2 = document.getElementById("col224") ;
let c2 = document.getElementById("col234") ;
let d2 = document.getElementById("col244") ;
let e2 = document.getElementById("col254") ;
let f2 = document.getElementById("col314") ;
let g2 = document.getElementById("col324") ;
let h2 = document.getElementById("col334") ;
let i2 = document.getElementById("col344") ;
let j2 = document.getElementById("col354") ;
let k2 = document.getElementById("col414") ;
let l2 = document.getElementById("col424") ;
let m2 = document.getElementById("col434") ;
let n2 = document.getElementById("col444") ;
let o2 = document.getElementById("col454") ;
let p2 = document.getElementById("col514") ;
let q2 = document.getElementById("col524") ;
let r2 = document.getElementById("col534") ;
let s2 = document.getElementById("col544") ;
let t2 = document.getElementById("col554") ;
//player3 column variables
let a3 = document.getElementById("col215") ;
let b3 = document.getElementById("col225") ;
let c3 = document.getElementById("col235") ;
let d3 = document.getElementById("col245") ;
let e3 = document.getElementById("col255") ;
let f3 = document.getElementById("col315") ;
let g3 = document.getElementById("col325") ;
let h3 = document.getElementById("col335") ;
let i3 = document.getElementById("col345") ;
let j3 = document.getElementById("col355") ;
let k3 = document.getElementById("col415") ;
let l3 = document.getElementById("col425") ;
let m3 = document.getElementById("col435") ;
let n3 = document.getElementById("col445") ;
let o3 = document.getElementById("col455") ;
let p3 = document.getElementById("col515") ;
let q3 = document.getElementById("col525") ;
let r3 = document.getElementById("col535") ;
let s3 = document.getElementById("col545") ;
let t3 = document.getElementById("col555") ;
//player4 column variables
let a4 = document.getElementById("col216") ;
let b4 = document.getElementById("col226") ;
let c4 = document.getElementById("col236") ;
let d4 = document.getElementById("col246") ;
let e4 = document.getElementById("col256") ;
let f4 = document.getElementById("col316") ;
let g4 = document.getElementById("col326") ;
let h4 = document.getElementById("col336") ;
let i4 = document.getElementById("col346") ;
let j4 = document.getElementById("col356") ;
let k4 = document.getElementById("col416") ;
let l4 = document.getElementById("col426") ;
let m4 = document.getElementById("col436") ;
let n4 = document.getElementById("col446") ;
let o4 = document.getElementById("col456") ;
let p4 = document.getElementById("col516") ;
let q4 = document.getElementById("col526") ;
let r4 = document.getElementById("col536") ;
let s4 = document.getElementById("col546") ;
let t4 = document.getElementById("col556") ;
//player name row variables
let v1 = document.getElementById("col13") ;
let v2 = document.getElementById("col14") ;
let v3 = document.getElementById("col15") ;
let v4 = document.getElementById("col16") ;
//player name column variables
let w1 = document.getElementById("col211") ;
let w2 = document.getElementById("col311") ;
let w3 = document.getElementById("col411") ;
let w4 = document.getElementById("col511") ;
//result row variables
let u1 = document.getElementById("col556") ;
let u2 = document.getElementById("col556") ;
let u3 = document.getElementById("col556") ;
let u4 = document.getElementById("col556") ;
//row arrays
let arr1=[a1,a2,a3,a4]
let arr2=[b1,b2,b3,b4]
let arr3=[c1,c2,c3,c4]
let arr4=[d1,d2,d3,d4]
let arr5=[e1,e2,e3,e4]
let arr6=[f1,f2,f3,f4]
let arr7=[g1,g2,g3,g4]
let arr8=[h1,h2,h3,h4]
let arr9=[i1,i2,i3,i4]
let arr10=[j1,j2,j3,j4]
let arr11=[k1,k2,k3,k4]
let arr12=[l1,l2,l3,l4]
let arr13=[m1,m2,m3,m4]
let arr14=[n1,n2,n3,n4]
let arr15=[o1,o2,o3,o4]
let arr16=[p1,p2,p3,p4]
let arr17=[q1,q2,q3,q4]
let arr18=[r1,r2,r3,r4]
let arr19=[s1,s2,s3,s4]
let arr20=[t1,t2,t3,t4]
let myarr=[z1,z2,z3,z4,z5,z6,z7,z8,z8,z9,z10,z11,z12,z13,z14,z15,z16,z17,z18,z19,z20]
//displaying players names
document.getElementById("submitbutton").onclick = function(){
   let player1 = document.getElementById("player1").value ;
      v1.innerHTML=w1.innerHTML=player1 
   let player2 = document.getElementById("player2").value ;
      v2.innerHTML=w2.innerHTML=player2
   let pc3 = document.getElementById("player3").value ;
      v3.innerHTML=w3.innerHTML=pc3
   let pc4 = document.getElementById("player4").value ;
      v4.innerHTML=w4.innerHTML=pc4
}
//displaying the type for each row 
let typecond = function(ref){
   let x = window.prompt(`T: Trex \nL: Ltouch\nB: Banet\nD: Dinere\nR: Khoury koubba`)
   ref.innerHTML = x
}
for(let j=0; j<21; j++){
myarr[j].onclick= function (){typecond(myarr[j])}
}
//players divs function
let cond=function(reference,shownresult){
   let numb = Number(window.prompt("Enter number of cards"));
   let type = reference.textContent
   let x = shownresult
      if (type =="L" || type=="l"){
         x.innerHTML= numb* -15
      }
      else if(type=="T" || type=="t"){
         x.innerHTML=250 - numb* 50
      }
      else if(type=="B" || type=="b"){
         x.innerHTML= numb* -25
      }
      else if(type=="D" || type=="d"){
         x.innerHTML= numb* -10
      }
      else if(type=="R" || type=="r"){
         x.innerHTML= numb* -75      
      }
}
for(let i=0; i<4; i++){
   arr1[i].onclick = function (){cond(z1,arr1[i])}
   arr2[i].onclick = function (){cond(z2,arr2[i])}
   arr3[i].onclick = function (){cond(z3,arr3[i])}
   arr4[i].onclick = function (){cond(z4,arr4[i])}
   arr5[i].onclick = function (){cond(z5,arr5[i])}
   arr6[i].onclick = function (){cond(z6,arr6[i])}
   arr7[i].onclick = function (){cond(z7,arr7[i])}
   arr8[i].onclick = function (){cond(z8,arr8[i])}
   arr9[i].onclick = function (){cond(z9,arr9[i])}
   arr10[i].onclick = function (){cond(z10,arr10[i])}
   arr11[i].onclick = function (){cond(z11,arr11[i])}
   arr12[i].onclick = function (){cond(z12,arr12[i])}
   arr13[i].onclick = function (){cond(z13,arr13[i])}
   arr14[i].onclick = function (){cond(z14,arr14[i])}
   arr15[i].onclick = function (){cond(z15,arr15[i])}
   arr16[i].onclick = function (){cond(z16,arr16[i])}
   arr17[i].onclick = function (){cond(z17,arr17[i])}
   arr18[i].onclick = function (){cond(z18,arr18[i])}
   arr19[i].onclick = function (){cond(z19,arr19[i])}
   arr20[i].onclick = function (){cond(z20,arr20[i])}
}
//displaying results in result row
document.getElementById("refreshbutton").onclick=function(){
   document.getElementById("col62").innerHTML=
      Number(a1.textContent)+Number(b1.textContent)+Number(c1.textContent)+
      Number(d1.textContent)+Number(e1.textContent)+Number(f1.textContent)+
      Number(g1.textContent)+Number(h1.textContent)+Number(i1.textContent)+
      Number(j1.textContent)+Number(k1.textContent)+Number(l1.textContent)+
      Number(m1.textContent)+Number(n1.textContent)+Number(o1.textContent)+
      Number(p1.textContent)+Number(q1.textContent)+Number(r1.textContent)+
      Number(s1.textContent)+Number(t1.textContent)
   document.getElementById("col63").innerHTML=
      Number(a2.textContent)+Number(b2.textContent)+Number(c2.textContent)+
      Number(d2.textContent)+Number(e2.textContent)+Number(f2.textContent)+
      Number(g2.textContent)+Number(h2.textContent)+Number(i2.textContent)+
      Number(j2.textContent)+Number(k2.textContent)+Number(l2.textContent)+
      Number(m2.textContent)+Number(n2.textContent)+Number(o2.textContent)+
      Number(p2.textContent)+Number(q2.textContent)+Number(r2.textContent)+
      Number(s2.textContent)+Number(t2.textContent)
   document.getElementById("col64").innerHTML=
      Number(a3.textContent)+Number(b3.textContent)+Number(c3.textContent)+
      Number(d3.textContent)+Number(e3.textContent)+Number(f3.textContent)+
      Number(g3.textContent)+Number(h3.textContent)+Number(i3.textContent)+
      Number(j3.textContent)+Number(k3.textContent)+Number(l3.textContent)+
      Number(m3.textContent)+Number(n3.textContent)+Number(o3.textContent)+
      Number(p3.textContent)+Number(q3.textContent)+Number(r3.textContent)+
      Number(s3.textContent)+Number(t3.textContent)
   document.getElementById("col65").innerHTML=
      Number(a4.textContent)+Number(b4.textContent)+Number(c4.textContent)+
      Number(d4.textContent)+Number(e4.textContent)+Number(f4.textContent)+
      Number(g4.textContent)+Number(h4.textContent)+Number(i4.textContent)+
      Number(j4.textContent)+Number(k4.textContent)+Number(l4.textContent)+
      Number(m4.textContent)+Number(n4.textContent)+Number(o4.textContent)+
      Number(p4.textContent)+Number(q4.textContent)+Number(r4.textContent)+
      Number(s4.textContent)+Number(t4.textContent)
}