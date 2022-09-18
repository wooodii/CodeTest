//0918 프로그래머스
//arr 배열 길이만큼 divisor과 나눈 나머지가 0인 값을 배열에 push

function solution(arr, divisor){
    var ans = [];

    ans=arr.filter(v => v%divisor ===0);
    // filter 새로운 배열을 필요로 할때 만들어줌 
    ans = ans.length === 0 ? [-1] : ans.sort((a,b) => a-b);
    return answer; 
}

//sol2 
function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if( arr[i] % divisor === 0) answer.push(arr[i]);
    }
    if(answer.length === 0) answer.push(-1);
    answer.sort((a, b) => (a-b));
    // sort(정렬 함수) : a-b가 0보다 작은 경우 a를 b보다 낮은 색인을 정렬 (오름차순)
    return answer;
}