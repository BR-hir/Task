'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const Hiragana = {
  rowA : ["あ" , "い" , "う" , "え" , "お"],
  rowKa : ["か" , "き" , "く" , "け" , "こ"],
  rowSa : ["さ" , "し" , "す" , "せ" , "そ"],
  rowTa : ["た" , "ち" , "つ" , "て" , "と"],
  rowNa : ["な" , "に" , "ぬ" , "ね" , "の"],
  rowHa : ["は" , "ひ" , "ふ" , "へ" , "ほ"],
  rowMa : ["ま" , "み" , "む" , "め" , "も"],
  rowYa : ["や" , "ゆ" , "よ"],
  rowRa : ["ら" , "り" , "る" , "れ" , "ろ"],
  rowWa : ["わ" , "を" , "ん"],
}

//何処かの釦が押されたらのトリガー

let firstValue = "";
let classValue = "";
let indexcount = 0;
let judgeCount = 0;
let h1Element = document.getElementsByTagName("h1")[0];

function getDivElement(){
  let test = this.className;
  let test2 = test.split(" ")[1];
  let addString = "";
  let result = "";
  let removeElement = document.getElementsByTagName("p")[0];
  let element = removeElement.textContent;

  // console.log(element);
  if (test2 === "aRow"){
    classValue = "rowA";
  }else if (test2 === "kaRow"){
    classValue = "rowKa";
  }else if (test2 === "saRow"){
    classValue = "rowSa";
  }else if (test2 === "taRow"){
    classValue = "rowTa";
  }else if (test2 === "naRow"){
    classValue = "rowNa";
  }else if (test2 === "haRow"){
    classValue = "rowHa";
  }else if (test2 === "maRow"){
    classValue = "rowMa";
  }else if (test2 === "yaRow"){
    classValue = "rowYa";
  }else if (test2 === "raRow"){
    classValue = "rowRa";
  }else if (test2 === "waRow"){
    classValue = "rowWa";
  }

  let clickCount = judgeElement(classValue,firstValue);
  let judgeAddCount = judgeStringAdd(classValue,firstValue);
  
  addString = Hiragana[classValue][clickCount];

  if (element === ""){
    removeElement.innerHTML = addString ;
  }else if (judgeAddCount === 0){
    removeElement.innerHTML = element + addString ;
  }else {
    result = element.slice(0,-1);
    removeElement.innerHTML = result + addString;
  }  
  firstValue = classValue;

}

function delString(){
  let removeElement = document.getElementsByTagName("p")[0];
  let element = removeElement.textContent;
  let result = ""

  result = element.slice(0,-1);
  removeElement.innerHTML = result;
}

function judgeStringAdd(oldClass,newClass){

    if (oldClass === newClass){
      judgeCount += 1;
    }else{
      judgeCount = 0;
    }
  console.log(judgeCount);
  return judgeCount;

}

function judgeElement(oldClass,newClass){
  
  if (indexcount < 4){
    if (oldClass === newClass){
      indexcount += 1;
    }else{
      indexcount = 0;
    }
  }else{
    indexcount = 0;
  }
  // console.log(indexcount);
  return indexcount;
}

let buttonA = document.getElementsByClassName("div")[0];
let buttonKa = document.getElementsByClassName("div")[1];
let buttonSa = document.getElementsByClassName("div")[2];
let buttonTa = document.getElementsByClassName("div")[3];
let buttonNa = document.getElementsByClassName("div")[4];
let buttonHa = document.getElementsByClassName("div")[5];
let buttonMa = document.getElementsByClassName("div")[6];
let buttonYa = document.getElementsByClassName("div")[7];
let buttonRa = document.getElementsByClassName("div")[8];
let buttonWa = document.getElementsByClassName("div")[10];
let buttonDel = document.getElementsByClassName("div")[11];

buttonA.addEventListener("click",getDivElement);
buttonKa.addEventListener("click",getDivElement);
buttonSa.addEventListener("click",getDivElement);
buttonTa.addEventListener("click",getDivElement);
buttonNa.addEventListener("click",getDivElement);
buttonHa.addEventListener("click",getDivElement);
buttonMa.addEventListener("click",getDivElement);
buttonYa.addEventListener("click",getDivElement);
buttonRa.addEventListener("click",getDivElement);
buttonWa.addEventListener("click",getDivElement);
buttonDel.addEventListener("click",delString);
