package JAVA;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class startree {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        br.close();
        // 첫번째줄부터 공백을 추가한 후에 * 을 작성
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
