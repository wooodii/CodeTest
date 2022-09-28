// 0928 프로그래머스 같은 숫자는 싫어 

// sol1 
function solution(arr) {
    var ans = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]) answer.push(arr[i])
    }
}return ans;

//sol2 filter 이용 
function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}

// sol3 
function solution(arr) {
    var answer = [],
    count = 0;
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == arr[i-1]){
            continue
        }
        answer.push(arr[i])
    } return ans;
}