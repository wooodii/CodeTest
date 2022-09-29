// 0929 피로도 순열
// 던전 입장 순서가 중요하고, 첫 던전을 방문할 것인지 / n번째 던전을 방문할것인지 따라 결과 도출 
// 한번 던전에 입장하면 피로도가 차감 >>>>> 순열 

// 각 순열을 탐새 

// 피로도 시스템이 있고, 일정 피로도를 사용해 던전을 탐험 
// 탐험을 시작하기 위해 필요한 최소 필요피로도,
// 탐험을 마쳤을 때, 소모되는 소모 피로도가 있음 

// 각 던전별 최소 필요 피도로, 소모 피로도가 담긴 2차원 배열이 매개변수로 
// 주어질 때, 유저가 탐험할 수 있는 최대 던전 수 return

function solution(k,dungeons) {
    const len = dungeons.length;
    // 모든 경우의 수를 확인하기 위한 배열 
    const visited = new Array(len).fill(false);
    // 왜 fill? 
    // 클리어횟수
    let clearCnt = 0;
    
    // 모든 경우의수 확인을 위한 재귀 
    const dfs = (k, curCnt) => { 
        // 현 클리어 횟수와 전의 클리어 횟수 비교
        clearCnt = Math.max(curCnt, clearCnt);
    
        for(let i =0; i<len; i++){
            const[minK, useK] = dungeons[i];

            // 현 피로도보다 크고 확인한 적이 없다면
            if(k >= minK && !visited[i]){
                //확인 ,피로도 감소 및 카운트 증가 후 재귀 
                visited[i] = true;
                dfs(k-useK, curCnt + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k,0);
    return clearCnt; 
}



// sol2
function solution (k,dungeons) {
    const length = dungeons.length;
    const visited = Array(length).fill(false);
    let ans = 0;
    let temp = 0;
    
    const dfs = (currentK, cnt) => {
        for(let i =0; i<length; i++){
            // 해당 던전방문 전, 던전의 최소 피로도가 현 피로도보다작거나 같으면
            if(!visited[i] && currentK >= dungeons[i][0]){
                visited[i] = true;
                dfs(currentK - dungeons[i][1], cnt +1 );
                visited[i] = false;
            }
        }
        // 최대 던전수 갱신 
        // 가장 큰 숫자를 반환 
        ans = Math.max(ans, cnt);
        return;
    }
    combination(k,0);
    return ans;
}