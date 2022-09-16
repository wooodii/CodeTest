//0916 프로그래머스
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수x의 제곱인지 아닌지 판단 
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴 

// sol1
// num이 정수 = 정수의 성질 중 1로 나누었을 때 나머지가 0
function soluton(n){
    let a = 0;
    a = Math.sqrt(n);
        // Math.sqrt(121) // 11 (제곱근)
    
    if( n  % a === 0){
        return Math.pow(a+1, 2)
        // Math.pow(대상 숫자, 거듭제곱 횟수) > 거듭제곱

    }else {
        return -1
    }
}

// sol2
function solution(n){
    let num = Math.sqrt(n);
    if(num % 1 === 0) return (num+1) * (num+1)
    else return -1
}
