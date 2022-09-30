//0930 프로그래머스
// x만큼 간격이 있는 n개의 숫자 
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
// 배열을 x로 채운 뒤에, map메서드를 사용해 
// 반환콜백형식을 직성 
function solution(x,n) {
    return Array(n).fill(x).map((v,i) => (i+1)*v)
}