// 220930 프로그래머스
// 221003 프로그래머스 38line 
// 221004 프로그래머스 64line
// 221006 프로그래머스 102line

// x만큼 간격이 있는 n개의 숫자 
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
// 배열을 x로 채운 뒤에, map메서드를 사용해 
// 반환콜백형식을 직성 
function solution(x,n) {
    return Array(n).fill(x).map((v,i) => (i+1)*v)
}


// 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보를 보낼 때 고객들의 
// 전화번호 일부를 가림. 문자열의 폰넘버로 주어졌을 때
// 전화번호 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수

function solution(phone_number) {
    const answer = phone_number.length-4 ;
    return '*'.repeat(answer) + phone_number.substring(answer); 
}

const solution = n => [...n].fill("*", n.length-4).join('');

// 정규 표현식 
// \d{4} 는 숫자가 4번 반복되는 문자열 
// x(?=y) 오직 y 가 뒤따라오는 x에만 대응
function hide_number(s) {
    return s.replace(/\d(?=\d{4})/g,'*');
}


// 221003 프로그래머스 
function solution(num1,num2){
    let ans = num1 / num2 * 1000;
    return parseInt(ans);
}

const solution = (num1, num2) => Math.floor(num1/num2 * 1000);

function solution(num1,num2){
    var ans = Math.floor((num1/num2)*1000);
    return ans; 
}

//Math.trunc : 소수점 삭제하고 정수만 반환
function solution (num1, num2) {
    return Math.trunc(num1/num2*1000);
}

// ~~ 틸트 연산자 == Math.floor
function solution(num1, num2) {
    return ~~(num1/num2*1000);
}


// 배열 두배 만들기
// sol1
function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++){
        answer.push(numbers[i]*2);
    }
    return answer;
}

// sol2
function solution(numbers) {
    return numbers.map(i=>i*2);
}

//sol3 
function solution(numbers) {
    // reduce 배열 ((previous, currentValue) => previous +currentValue), initalValue);
    return numbers.reduce((a,b) => [(a,b) =>  [...a,b*2],[]]);
}

// 중앙값 구하기 
// sol1
const solution = array => {
    const mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// sol2 
// at메소드 : 정수 값을 받아서 배열 값에 해당하는 인덱스 요소를 반환 
// 양/음수 모두 지정가능하고 음수 의 경우 배열의 뒤에서부터 인덱스를 셈
function solution(array) {
    return array.sort((a,b) => {return a-b;}).at(Math.floor(array.length/2))
}


// 점의 위치를 받아서 몇사분면인지 구하기
function solution(dot) {
    const [x, y] = dot; // 배열 안에 변수를 넣어주기 !!!
    if (y > 0) return x > 0 ? 1 : 2;
    return x < 0 ? 3 : 4;
}


function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

//1006
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수 작성하기 
function solution(array) {
    const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
    const max = Math.max(...Object.values(counts));
    const modes = Object.keys(counts).filter(key => counts[key] === max);
    return modes.length === 1 ? +modes[0] : -1;
    }

