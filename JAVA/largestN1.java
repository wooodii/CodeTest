package JAVA;

// n x n 행렬
// 모든 수는 자신의 한칸 위에 있는 수보다 크다는 것 
// 표가 주어졌을 때, n번째 큰 수를 찾는 프로그램을 작성
// 1 =< n =< 1500 이고 첫째줄에 n이 주어짐 
// 각 줄마다 n개의 수가 주어짐 
// 첫째 줄에 n번째 큰 수를 출력한다. 

// n*n크기의 배열에 값을 다 넣고,정렬 > 뒤에서 n번째 수 출력

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class largestN1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] num = new int[n * n];

        int idx = 0;
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            for (int j = 0; j < n; j++) {
                num[idx++] = Integer.parseInt(st.nextToken());
            }
        }

        Arrays.sort(num);

        System.out.print(num[num.length - n]);
    }
}
