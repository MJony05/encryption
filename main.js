let a = document.querySelector(".shifrlash");
let b = document.querySelector(".deshifrlash");
let s;
a.addEventListener("click", function (e) {
  e.preventDefault();
  s = document.querySelector(".textBox").value;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i).toString(2));
  }
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 7; j++) {
      if (arr[i][j] == 1) {
        arrNew.push("$");
      } else {
        arrNew.push("#");
      }
    }
  }

  if (s) {
    document.querySelector(".result").textContent =
      "cipherText: " + arrNew.join("");
  } else {
    document.querySelector(".result").textContent = "Nimadir yozing";
  }
});
b.addEventListener("click", function () {
  let aa = document.querySelector(".textBox").value;
  let ar = "";

  for (let i = 1; i <= aa.length; i++) {
    if (aa[i - 1] == "$") {
      ar += "1";
    } else {
      ar += "0";
    }

    if (i % 7 == 0) {
      ar += " ";
    }
  }
  let arr = ar.split(" ");
  arr.splice(arr.length - 1, 1);
  let arrNum = arr.map(function (val) {
    return Number(val);
  });

  let arr10 = arrNum.map(function (val) {
    return parseInt(val, 2);
  });
  let arrl = arr10.map(function (val) {
    return String.fromCharCode(val);
  });
  if (aa) {
    document.querySelector(".result").textContent =
      "decrytionText: " + arrl.join("");
  } else {
    document.querySelector(".result").textContent = "Nimadir yozing";
  }
});
/*
let ab = 76;
let str = "";
let arrs = String(ab).split("");
let arr = arrs.map(function (val) {
  return Number(val);
});
switch (arr[arr.length - 3]) {
  case 1:
    str += "biryuz ";
    break;
  case 2:
    str += "ikkiyuz ";
    break;
  case 3:
    str += "uchyuz ";
    break;
  case 4:
    str += "tortyuz ";
    break;
  case 5:
    str += "beshyuz ";
    break;
  case 6:
    str += "oltiyuz ";
    break;
  case 7:
    str += "yettiyuz ";
    break;
  case 8:
    str += "sakkizyuz ";
    break;
  case 9:
    str += "toqqizyuz ";
    break;
}
switch (arr[arr.length - 2]) {
  case 1:
    str += 'o"n';
    break;
  case 2:
    str += "yigirma";
    break;
  case 3:
    str += "ottiz";
    break;
  case 4:
    str += "qirq";
    break;
  case 5:
    str += "ellik";
    break;
  case 6:
    str += "oltmish";
    break;
  case 7:
    str += "yetmish";
    break;
  case 8:
    str += "sakson";
    break;
  case 9:
    str += "toqson";
    break;
}
switch (arr[arr.length - 1]) {
  case 1:
    str += " bir";
    break;
  case 2:
    str += " ikki";
    break;
  case 3:
    str += " uch";
    break;
  case 4:
    str += " tort";
    break;
  case 5:
    str += " besh";
    break;
  case 6:
    str += " olti";
    break;
  case 7:
    str += " yetti";
    break;
  case 8:
    str += " sakkiz";
    break;
  case 9:
    str += " toqqiz";
    break;
}
console.log(str);
*/
