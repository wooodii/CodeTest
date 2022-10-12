// 220930 프로그래머스
// 221003 프로그래머스 38line 
// 221004 프로그래머스 64line
// 221006 프로그래머스 102line
// 221007 프로그래머스  122line

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

// 1006 
// 점의 위치를 받아서 몇사분면인지 구하기
function solution(dot) {
    const [x, y] = dot; // 배열 안에 변수를 넣어주기 !!!
    if (y > 0) return x > 0 ? 1 : 2;
    return x < 0 ? 3 : 4;
}


function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

// 최빈값  
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수 작성하기 
function solution(array) {
    const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
    const max = Math.max(...Object.values(counts));
    const modes = Object.keys(counts).filter(key => counts[key] === max);
    return modes.length === 1 ? +modes[0] : -1;
    }

const solution = (array) => {
    const cnt = array.reduce((acc,cur) =>({
        ...acc, [cur] : (acc[cur] || 0) + 1
    }), {})

    const items = Object.keys(counter).map((key) => [
        Number(key), counter[key]
    ]).sort((a,b) => b[1] - a[1])

    if(items[0][1] === items?.[1]?.[1]) {
        return -1
    }
    return items[0][0];
}


function solution(array) {
    let m = new Map();
    array.forEach(e=>m.set(e,m.get(e)+1||1));
    m=[...m].sort((a,b)=>b[1]-a[1]);
    let max=m[0][1];
    m = m.filter(e=>e[1]===max).map(e=>e[0]);
    return m.length > 1 ? -1 : m[0]
}

function solution(array) {
    array.sort((a, b)=>a-b);
    var answer = 0;
    var CH = Array.from(new Set(array));
    var VA = {};
    for(let i of array){
        if(String(i) in VA) VA[i]++;
        else VA[i] = 1;
    }
    let sorted = Object.entries(VA).sort((a, b) => b[1] - a[1]);
    answer = (sorted.length === 1) || sorted[0][1] !== sorted[1][1] ? 
        Number(sorted[0][0]) : -1

    return answer;
}


// 1007 프로그래머스 짝수는 싫어요
function solution(n) {
    const answer  = []
    for(let i =1; i<=n; i++ ){
        if(i%2 !== 0) {
            answer.push(i)
        }
    }
    return answer; 
}
function solution(n) {
    let nums = [];
    for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) nums = [...nums, i];
    }
    return nums;
}

  // 유사배열객체 
const solution = (n) => 
Array.from({length:n}, (_,i) => i+1).filter( i=> i %2  !== 0);

function solution(n) {
    return Array(n).fill(1).map((v,i) => n+i).filter(v=> v%2 === 1);
}

