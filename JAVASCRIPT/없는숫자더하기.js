// 프로그래머스 1012
// 없는 숫자 더하기 

// sol1 
function solution(numbers) {
  return  45 - numbers.reduce((a, b) => a + b);
}

// sol2 
// includes() 배열이 특정 요소를 포함하고 있는가 true / false 
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}

// sol3 
function solution(numbers) {
    let number = [0,1,2,3,4,5,6,7,8,9];
            var answer = 0;

            number.forEach((idx) => {
                if(!numbers.includes(idx)) {
                    answer += idx;
                }
            });

            return answer;
}

// 각도기에 따른 1~4 번호 호출
function solution(angle) {
    if (angle === 180) return 4;
    if (angle > 90) return 3;
    if (angle === 90) return 2;
    return 1;
  }

function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// filter 사용해 조건에 맞는 함수의 길이 출력
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}


// 피자 나눠 먹기 
function solution(n) { // floor: 내림 
    return Math.floor((n - 1) / 7) + 1;
  }
  

function solution(n) { // ceil : 올림 
    return Math.ceil(n / 7)
}
