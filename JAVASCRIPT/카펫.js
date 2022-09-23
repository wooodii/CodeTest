// 0923 프로그래머스 카펫 - 완전탐색 
// 타일 규칙성 
// 갈색 타일 개수 = ((노란색 타일 가로 *2) + 4) + (노란색 타일 세로 *2)

// x>=y조건,  brown은 직사각형이 테두리 한줄 

//sol1 
function solution (brown, yellow){
    let ans = [];

    // 카펫가로세로길이
    let yellowWidth = 0 ;
    let yellowHeight = 0;

    for (let i =1; i<=yellow; i++){
        yellowWidth = i;
        if(yellow % yellowWidth >0){
            continue;
        }
        yellowHeight = yellow / yellowWidth;

        //brown 개수 확인
        if(((yellowWidth*2)+4) + (yellowHeight*2) === brown){
            if(yellowWidth >= yellowHeight){
                ans.push(yellowWidth+2); 
                ans.push(yellowHeight+2);
                break;
            }
        }
    }
    return ans; 
}

//sol2
function solution(brown, yellow) {
    // 전체 블록 개수 저장 
    const b = brown + yellow;
    // x선언으로 b의 제곱근을 구해 정수를 구함 
    let x = Math.ceil(Math.sqrt(b));
    
    // while문으로 b값이 될때 까지
    while (x <= b) {
        const y = b / x;
        
        if (Number.isInteger(y) && yellow === (x - 2) * (y - 2)) {
            return [x, y]
        }
        //y값이 정수가 나오지 않는 경우, 1씩 증가 
        x++;
    }
}