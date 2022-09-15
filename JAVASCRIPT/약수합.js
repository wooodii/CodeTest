// 0915
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수 solution
// 0 =< n =< 30000


// sol1
function solution(n) {
    let sum = 0;
    for (let i=1; i<=n; i++){
        if(n %i === 0){
            sum +=i
        }
    } return sum;
}

// sol2
// 계산량을 줄이기 위해 n까지 다 하지 않고,  
// 제곱근까지만 돈 다음, 나누어 떨어지는 값이 있다면 바로 더해줌 
// ? 
function solution(n) {
    var sum =0;
    let i;
    for(i =1; i<=Math.sqrt(n); i++){
        if(!(n%1)){
            sum += (i+n/i);
        }
    }
    i--;
    return(i === n/i) ? sum-i : sum;
}
