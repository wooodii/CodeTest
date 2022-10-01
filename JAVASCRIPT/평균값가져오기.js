//1001 프로그래머스 평균값 가져오기


// 이 for 문은 실행되지 않음 
// 값이 더해지는 것이 아닌 나열만 됨
// typeof로 numbers를 확인하면 object임 각 객체로 출력이 됨 
// 문자열, 숫자변환해 사용? 
function solution(numbers) {
    const arr = [];
    for (let i = 0; i<arr.length; i++) {
        document.write(arr[i])
    }
}

// sol1 
// arr.reduce(콜백,첫번째 인수값)
// (누적 계산값, 현재값) => {return 계산값}; 
// *** 콜백( 반환값, 배열 내 처리되고 있는 요소, 요소 인덱스, 호출에 사용되는 원배열  )
function solution(arr) {
    return arr.reduce((sum, cnt) => sum + cnt) / arr.length; 
}

function solution(arr) {
    var answer = numbers.reduce((a,b) => a+b,0) / number.length;
}

// sol2 
function solution(numbers) {``
    var ans = 0;
    for(i of numbers) {
        ans += i
    }
    return ans / numbers.length; 
}