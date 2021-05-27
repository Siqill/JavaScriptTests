"use strict"




{

  setInterval(() => {
    if (bodyHeader.style.color == 'unset')
      bodyHeader.style.color = 'rgb(255, 0, 0)';
    else
      bodyHeader.style.color = 'unset';
  }, 1000)

}




function tickTack() {
  let start = Date.now();
  let id = setTimeout(function tick() {
    alert("tick");
    id = setTimeout(tick, 1000);
    if (Date.now() - start > 10000) {
      alert('stop');
      clearTimeout(id);
    }
  }, 1500);
}

function printNumbersInterval(from, to) {
  let interval = setInterval(() => {
    if (from == to) clearInterval(interval);
    alert(from++);
  }, 1000);
}

function printNumbersTimeout(from, to) {
  setTimeout(function run() {
    if (from < to) printNumbersTimeout = setTimeout(run, 1000);
    alert(from++);
  }, 1000);
}


function byField(str) {
  return function (a, b) {
    return a[str] > b[str] ? 1 : -1;
  }
}
function inArray(arr) {
  return function (value) {
    return arr.includes(value);
  }
}
function inBetween(a, b) {
  return function (value) {
    return value >= a && value <= b;
  }
}


function printList(list) {
  if (list.next) {
    printList(list.next)
  }
  alert(list.value);
}


function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}


function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}


function sumTo(n) {
  return n * (n + 1) / 2;
  //return n == 1 ? n : n + sumTo(n - 1);
}


function formatDate(date) {
  let result = Math.round((new Date() - date) / 1000);
  if (result <= 1) {
    return "прямо сейчас"
  } else
    if (result > 1 && result < 60) {
      return result + " сек. назад";
    } else
      if (result / 60 < 60) {
        return result / 60 + " мин. назад";
      }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

// shows how many sec are left until the next day
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let result = tomorrow - now;
  return Math.round(result / 1000)
}

// shows how many sec have passed since the day began 
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let result = now - today;
  return Math.round(result / 1000)
}

// returns last day of а(month)
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getWeekDay(date) {
  let arr = ['SN', 'MN', 'TH', 'WE', 'TH', 'FR', 'ST'];
  return arr[date.getDay()];
}

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for (let [key, value] of Object.entries(salaries)) {
    if (value > max) {
      max = value;
      maxName = key;
    }
  }
  return maxName;
}

// clean the array from the anagrams
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    map.set(sortedWord, word);
  }

  return Array.from(map.values());
}

function unique(arr) {
  let result = [];

  for (let key of arr) {
    if (!result.includes(key)) {
      result.push(key);
    }
  }
  return result;
}

// func calculate average age in arr of objects
function getAverageAge(arr) {
  return (arr.reduce((sum, current) => sum + current.age, 0) / arr.length);
}

// перемешивание массива с (почти) одинаковой вероятностью
// при помощи алгоритма Тасование Фишера — Йетса!!!!!
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// sort objects in arr in asc order
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

// create a copy of arr, sort the copy by rows and return copy
function copySorted(arr) {
  let arrCopy = arr.slice().sort();
  return arrCopy;
}

// func searches values in the segment from a to b in аrr
// and changes the arr in place  
function filterRangeInPlace(arr, a, b) {
  arr.map((value, index) => value >= a && value <= b ?
    value : arr.splice(index, 1));
}

// func searches values in the segment from a to b in аrr
function filterRange(arr, a, b) {
  return arr.filter(value => value >= a && value <= b);
}

function camelize(str) {
  return str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

// My version of fun camelize(str)
function myCamelize(str) {
  let arr = str.split('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == "-") {
      arr[i] = arr[i].toUpperCase();
      arr.splice(i - 1, 1);
    }
  }
  str = arr.join('');
  return str;
}

// Sum of input numbers 
function sumInput() {
  let arr = [];
  let anwser = 0;
  while (true) {
    let value = prompt('Enter number');
    if (value === null || value === '') break;
    if (Object.is(+value, NaN)) continue;
    arr.push(value);
  }
  for (let value of arr) {
    anwser += +value;
  }
  alert(arr);
  return anwser;
}

// middle value of the array
function aveLength(arr, str) {
  arr.length % 2 == 1 ? arr[Math.floor(arr.length / 2)] = str : arr;
  return arr;
}

function extractCurrencyValue(str) {
  let value = "";
  for (let key of str) {
    if (Object.is(parseInt(key), NaN)) continue;
    value += key;
  }
  return +value;
}

function truncate(str, maxLength) {
  return (str.length > maxLength) ?
    str.slice(0, maxLength - 1) + "…" : str;
}

function checkSpam(str) {
  str = str.toLowerCase();

  return str.includes('viagra') || str.includes('XXX'.toLowerCase());
}

function upFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function random(min, max) {
  return (Math.random() * (max - min) + min);
}

function readNumber() {
  let value;
  while (!isFinite(value = prompt("Enter number: "))) {
    if (value === null || value === '') return null;
    alert("Please enter the number! Try again");
  }
  return value;
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Value: ", 0);
    return this;
  }
}

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { 
    alert(this.step);
    return this;
  }
};

function Calculator() {
  this.read = function () {
    this.a = +prompt("First value:", "");
    this.b = +prompt("Second value:", "");
  },

    this.sum = function () {
      return this.a + this.b;
    },

    this.mul = function () {
      return this.a * this.b;
    },

    this.a = 0;
  this.b = 0;
}

function makeUser() {
  return {
    name: "Igor",
    go() {
      return this;
    }
  };
}

function sumOfSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}