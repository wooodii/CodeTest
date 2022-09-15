package JAVA;

import java.util.Arrays;

// copyOfRange Api 사용 
// copyofrange : 전달받은 배열의 지정된 범위에 해당하는 요소만 새로운 배열로 복사하여 반환
// public static int [] copyOfRange (int [] original_array, int from_index, int to_index)
// 복사할 원본 배열, 원본 배열에서 복사할 범위의 시작 인덱스, 원본 배열에서 복사할 범위의 끝 인덱스

public class K번째수1 {
    class Solution {
        public int[] solution(int[] array, int[][] commands) {
            int[] answer = new int[commands.length];

            for (int i = 0; i < commands.length; i++) {
                int[] temp = Arrays.copyOfRange(array, commands[i][0] - 1, commands[i][1]);

                Arrays.sort(temp);
                answer[i] = temp[commands[i][2] - 1];
            }
            return answer;
        }
    }

}
