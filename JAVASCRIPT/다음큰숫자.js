//0927 프로그래머스
// 다음 큰 숫자는 n보다 큰 자연수 
// 2진수로 변환했을 때 1의 개수가 같음 
// n의 다음 큰 숫자는 조건 1,2를 만족하는 수중 가장 작은 수 

//2진수로 변환후, 문자열로 바꾸고 
// 문자열 하나하나를 배열에 담음 
// 1인 문자열 개수가 같고  n보다 크다면 return 

function solution(n) {
    var ans = n+1; 
    
    while(true){
        let length = n
        .toString(2).split("").filter((a) => a === "1").length;
        let Length = ans
        .toString(2).split("").filter((a) => a === "1").length;
        if (length === Length) {
            break;
        }
        ans++;
    }
    return ans; 
}

//sol2
// 정규 표현식에서 g 플래그를 사용하면 일치한 부분의 문자열고 ㅏ인덱스를 하나씩 순차적 반환 
function solution(n) {
    let val = n.toString(2).match(/[1]/g).length

    for(let i = n+1; i<100000; i++) {
        let ival = i.toString(2).match(/[1]/g).length;
        if(ival = val) return i
    }
}

//sol3 재귀함수 
// match 특정 텍스트 안에 단어/ 패턴 을 검색할 수 있음 
function solution(n, a=n+1) {
    return n.toString(2).match(/1/g).length ==
    a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

// sol4 shift 
function nextBigNumber(n) {
    var i, j;
    for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
    for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
    for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
    for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
    return n;
}