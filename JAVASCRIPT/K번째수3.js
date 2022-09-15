// K번째 수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수 구하기
// 배열 array, [i,j,k]를 원소로 가진 2차원 배열 commands 가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return하도록 solution함수를 작성하시오
// ** 제한사항 : array길이 및 원소는 1이상 100이하, commands의 길이는 1이상 50이하, 
// commands의 길이는 1이상 50이하, commands의 각 원소는 길이가 3 

function solution(array, commands) {
     // 주어진 array를 commands의 0,1,2번째 인덱스의 첫번째 인덱스와
     // 두번째 인덱스를 이용해 array를 잘라내서 추출
    var answer = [];
    var sorted = [];
     // 잘라낸 값들을 숫자용 sort 함수를 사용해 오름차순 정렬
     // 결과 값에 추출 후, 정렬된 array 값을 command의 가장 마지막 값을 가지고 옴 
    for(var i in commands){
        sorted = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=> a-b); 
        // 해당 값에 있는 인덱스를 이용해 값을 answer에 push하고 return 
        // * commands 에서 추출한 값을 -1한 이유는, commands에 있는 값이 2면 array의 두번째 값을 추출
        // 인덱스상 2번째 값인 array[1]값을 추출해와야 하기 때문에 -1을 기재   
        answer.push(sorted[commands[i][2]-1])
    }
    return answer;
}
