//0917 프로그래머스
function solution(n) {
    // 제한 조건 
    // : n은 3이상이므로 나누는 수의 최소값이 1이 될 수 없음 
    // for문을 사용해 i값을 2 이상으로 시작 
    for(let i =2; i<n; i++){
         if(n%i ===1) return i;
     }
}

// sol2 
// while문과 증감연산자를 통해 조건인 x가 2부터 시작할 수 있도록 설정 
 function soultion(n, x =1 ){
    while(x++){
        if (n % x ===1 ){
            return x;
        }
    }
 }

 // sol3 삼항연산자로 표현
 function solution (n, x=0){
    return n%x ===1 ? x : solution(n,x+1);
 }

 //sol4 화살표함수로 표현
 const solution = (n) => {
    for (let i =2; i<n; i++){
        if(n % 1 ===1){
            return i; 
        }
    }
 }