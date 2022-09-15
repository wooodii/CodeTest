// 소수 만들기 - JACASCRIPT
// 소수 - 1과 자기 자신만으로 나누어 떨어지는 큰 양의 정수, -1은 소수가 아님 
// 음수는 소수가 아님, n이소수가 되려면 2보다 크거나 같고, n보다 작은 자연수로 떨어지면 안됨 

// math.sqrt()
// n이 36일 때, 36약수는 1,2,3,4,6,9,12,18,36임
// 1*36, 2*18, 3*12, 4*9, 6*6임 
// 반비례 관계로 몫이 커지면 나누는 값이 작아짐( n의 제곱근까지 계산하면 몫과 나누는 값은 반대)
// n 의제곱근이 될때까지 반복하다보면 이 수가 소수인지 알 수 있음 


function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }

  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

// 같은문제 2번째 풀이버전
function solution(nums) {
    var answer = 0, number=0;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var l=j+1;l<nums.length;l++){
                number=nums[i]+nums[j]+nums[l];
                var count=0;
                for(var k=1;k<=number;k++){
                    if(number%k==0) count++;
                }
                if(count==2) answer++;
            }
        }
    }
    return answer;
}