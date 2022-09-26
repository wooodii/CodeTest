// 0926 프로그래머스 
// 모든 단어의 첫 문자는 대문자, 그외의 소문자인 문자열 리턴 
// 문자열을 나누어서 출력할 때 사용하는 메서드 
// substr, substring, slice,charAt
// 인덱스 배열로 출력할 경우 공백도 인덱스값으로 인식되기 때문에 주의해서 작성


//sol1
function solution(s) {
    return s.toLowerCase().split(" ").map((v)=> v.charAt(0).toUpperCase()+v.substring(1)).join(" ");
}

//sol2
function solution(s){
    var ans = '';
    for(let i =0; i<s.length; i++){
        if(i === 0 || s[i-1] === " ") {
            ans += s[i].toUpperCase();
        }else {
            ans += s[i].toLowerCase();
        }
    }
    return ans;
}