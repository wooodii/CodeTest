// 221017 피자나눠먹기(2), (3)
const solution = (n) => {
    // 기본 피자 조각 6개
    let piece = 6 

    while(true) {
        // 딱 나누어 떨어지면 그만 n
        if(piece % n === 0) {
            break
        }
        // 아니라면 6조각 더함
        piece +=6
    }
    return piece / 6
}

function solution (n){
    let piece = 1;
    while (!Number.isInteger(piece*6 /n)) piece++;
    return piece;
}

// 피자나눠먹기 (3)
// 피자 조각 수 slice와 피자 먹는 사람 수 n
// 사람의 수를 피자 조각 수로 나눈 값 + 사람 수를 피자조각수로 나눈 값의 
// 나머지가 0이면 0을 더하고 아니면 1을 더함 

function solution(slice,n) {
    return Math.ceil(n/slice)
}

function solution(slice, n) {
    return Math.floor((n-1)/slice) + 1
}
