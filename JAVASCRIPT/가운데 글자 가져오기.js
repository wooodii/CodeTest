//0922 프로그래머스 
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// sol1)
// 배열길이 체크하고 설정하기
// 배열 길이 확인 .length
function solution(s) {
    var ans = "";
    if(s.length %2 ==0 ){
        ans =s[s.length / 2-1] + s[s.length/2]
    }else {
        ans= s[Math.floor(s.length/2)]
    }
    return ans;
}

//sol2) 
// substr과 삼항연산자 사용 
// substr(start, length) 문자열에서 특정 위치에 시작해 특정 문자수만큼 반환
function solution(s) {
    return s.substr(Math.ceil(s.length /2) -1, s.length %2 === 0 ? 2 : 1);
}