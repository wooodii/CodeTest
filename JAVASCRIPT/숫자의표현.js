// 0920 프로그래머스 
// 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
// 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요
// 브루투포스 완전탐색문제 

// sol1) 이중 for문 활용 
function solution(n){
    let ans = 0; // n의 연속한 자연수 저장
    let cnt = 0; // 가지수 저장

    for(let i =1; i<=n; i++){
        for(let j =i; j<=n; j++){
            ans += j;
            if(ans === n){ 
                cnt++;
                ans=0;
                break;
            }
            else if(ans>n){
                ans =0;
                break;
            }
        }
    }
    return cnt;
}


// sol2
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 
// 주어진 수의 홀수인 약수 개수는 같음 !
// 홀수로 주어진 15와 같은 홀수의 경우 약수는 홀수밖에 나오지 않음 
function solution(n) {
    let answer =0;

    for(let i =0; i <=n; i++){
        if (n%1 === 0 && i%2 === 1) answer++;
    }
    return answer;
}