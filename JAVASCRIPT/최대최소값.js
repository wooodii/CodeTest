// 0918 최대최소값 
// 배열에 담아서 출력
// const arr1 =  new Array(1,2,3);
// const arr2 = [1,2,3]; 


//sol1
function solution(n){
    const arr = n.split(' '); 
    // string.split(sepateror, limit)
    // 문자열을 일정 구분자로 잘라서 각각의 문자열을 limit 크기 이하의 배열로 저장
    return Math.min(...arr) + ' ' +Math.max(...arr);
    // ...arr > 배열에 담긴 객체를 가져옴
}


//sol2
function solution(n){
    var ans ='';
    
    let trim =n.split();
    // 문자열의 공백 제거 후 배열에 저장 
    let max  =Math.max.apply(null,trim);
    // apply(thisArg, [argsArray]) 
    // thisArg : func를 호출하는데 제공될 this값(non-strict-mode 코드함수인경우,null or undefined로 대체)
    // null을 쓴 이유는 Math가 내장객체이기 때문에 this를 기반으로 제공할 필요가 없음
    // arrgsArray : func가 호출되어야 하는 인수를 지정하는 유사 배열 객체
    let min =Math.min.apply(null,trim);

    ans =min + ' ' +max; 
    // 출력값은 최대 최소사이에 공백이 있는 문자열 
    return ans; 
}

// sol3 
function solution(s) {
    let newS = s.split(" ").map(a=>Number(a));
    // map() 은 콜백함수를 가지고 실행한 결과 새로운 배열을 만듦(a)
    return `${Math.min(...newS)} ${Math.max(...newS)}`;
}