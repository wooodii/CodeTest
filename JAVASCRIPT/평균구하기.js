// 0915 백준
// 정수를 담고 있는 배열 arr 의 평균값을 return하는 함수 

// arr은 길이 1이상, 100이하의 배열 
// arr의 원소는 -10,000이상 10,000이하인 정수 

//sol.1
function solution(arr){
    let ans = 0;
    
    for(let i=0; i<arr.length; i++){
        ans += arr[i]; 
    }
    ans = ans /arr.length;
    return ans;
}

//sol.2
//reduce 함수 사용
function average(array){
    return array.reduce(((a,b) => a+b) / array.length) 
}