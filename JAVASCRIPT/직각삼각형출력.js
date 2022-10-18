//221018 프로그래머스 
// pow 제곱합수 (밑, 지수)
function solution(n, t) {
    return n*Math.pow(2,t);
}
// 산술연산자
// 숫자 값을 피연산자로 가지고 하나의 숫자 값을 반환 
// ++(증가), -- (감소), **(곱)
function solution(n,t) {
    return n* (2**(t))
}

// 문자열 뒤집기 
function solution(my_string) {
    return my_string.split('').reverse().join(""); 
}

function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

// 직각삼각형 출력하기 
// "*" 의 높이와 너비를 1이라고 할 때, "*"을 이용해 직각이등변삼각형을 그림 
// 정수 n이 주어지면 높이와 너비가 n이 직각이등변삼각형 출력
// (**** 자바스크립트 콘솔에서 값 입출력받기 )
// sol1 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= +input[0]; i++) console.log('*'.repeat(i));
});
);

// sol2
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    [...new Array(Number(input[0])).keys()].forEach(i=>console.log(new Array(i+1).fill('*').join('')))
});
