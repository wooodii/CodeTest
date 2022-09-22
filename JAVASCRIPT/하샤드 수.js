// 0922 프로그래머스 
// 양의 정수 x가 하샤드 수이려면 자릿수의 합으로 x가 나누어져야 함 
// 하샤드 수인지 검사하는 solution 작성 

// sol1
function solution(x) {
    let sum =0;
    let arr = String(x).split("");
    
    for(let i = 0; i<arr.length; i++){
        sum += Number(arr[i]);
    }

    return (x%sum == 0)? true : false;
}


// sol2 
// 재귀함수 
function solution(x, i=0, sum=0){
    return String(x).length == i ? x%sum ==0 : solution(x, i+1, sum +String(x)[i]*1);
}

// sol3
// ans를 true로 정해, x%n == 0해당하는 인자들을 출력할 수 있도록 함 
function solution(x) {
    var ans = true
    var n = String(x).split('').reduce((a,b) => Number(a) + Number(b));

    ans = x % n == 0? true : false;

    return ans; 
}