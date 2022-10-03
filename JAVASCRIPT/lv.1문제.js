//0930 프로그래머스
// 221003 프로그래머스 38line 
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