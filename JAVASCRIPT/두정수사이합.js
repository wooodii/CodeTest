// 0929 프로그래머스 두 정수 사이의 합 

function solution(a,b) {
    let sum =0;
    if(a<=b) {
        for(let i =a; i<=b; i++){
            sum +=i;
        }
    
    }    else{
            for(let i =b; i<=a; i++){
            sum += i;
        }
    }
    return sum;
}

// sol2
// 양끝의 합 * 양끝의 합의 개수 > 가우스공식 
function add(a,b) {
    var sum =0
    return (a+b)*(Math.abs(b-a)+1)/2;
}


//sol2
function add(a,b,s=0) {
    for(var i = Math.min(a,b); i <= Math.max(a,b); i++) 
    s += i;
    return s;
}