// 0916 프로그래머스

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태
// n이 12345이면 [5,4,3,2,1]을 리턴

// sol1
function solution(n){
    let a = n.toString().split('');
    let ans = [];
    
    for (let i=a.length-1; i>=0; i--){
        ans.push(Number(a[i]));
        // .push() 배열 끝에 하나 이상 요소 추가
        // 배열의 새로운 길이를 반환 
    }
    return ans; 
}

//sol2
// do~while 사용해 
// n을 10으로 나누어서 각 자리 자연수 도출
// Math.floor사용해 소수점 이하는 버림 
function solution(n){
    var arr =[];
    
    do{
        arr.push(n%10);
        n =Math.floor(n/10);
        // 소수점 이하는 버림
    } while(n>0);

    return arr; 
}

