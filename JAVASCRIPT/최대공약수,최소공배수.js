// 0925 프로그래머스 
// 최대공약수와 최소공배수 
// 유클리드 호제법
// 주어진 인풋 중 큰 값을 a, 작은값은 b 로 해서
// a %b =r 이라, 위과정을 반복하면 나머지가 0 이 됨 
// input으로 주어진 자연수를 2개 곱하고 최대공약수로 나누어 최소공배수를 구함 

// sol1
function solution(n, m) {
    var answer = [];
    const great = (a, b) => {  
        if (b === 0) return a   
        return great(b, a % b)  
    }
    const least = (a,b) => (a*b) / great(a,b)
    return [great(n,m), least(n,m)]
}

// sol2
// true, false 조건을 r=a%b로 판별 
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b; r = a % b; a = b, b = r){}
    return [b, ab/b];
}


// sol3 다른 답 
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));