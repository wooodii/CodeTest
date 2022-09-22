// 0919 프로그래머스 
// 정수 내림차순으로 배치 (배열 뒤집기)
// 12345 -> 54321

//sol1)
function solution(n) {
        let answer = Number(n.toString().split("").sort((a,b) => b - a).join(''));
        return answer;
    // join(구분자) 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듦 
}

//sol2) 
function solution(n){
    const newN = n+"";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        // reverse()메서드는 배열의 순서를 반전 
        // 첫번째 요소는 마지막 요소가 되며 마지막 요소는 첫 요소가 됨 
        .join("");

    return +newArr; 
    // js에서 자동형변환을 하면 number+string => string, string*number => number
    // 1+"" => "1", "1"*1 => 1 
}
