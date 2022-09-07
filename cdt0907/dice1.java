package cdt0907;
// 주사위 3개를 던져서 규칙에 따라 상금 

// 같은 눈 3개 ,2개, 다 다르게 나올 경우 적용

import java.io.*;
import java.util.*;

public class dice1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        if (a == b && a == c) {
            System.out.print(10000 + a * 1000);
        } else if (a == b) {
            System.out.print(1000 + a * 100);
        } else if (a == c) {
            System.out.print(1000 + a * 100);
        } else if (b == c) {
            System.out.print(1000 + b * 100);
        } else {

            // Max.max로 최대값 찾기
            // 입력값으로 받은 0개 이상의 숫자 중 가장 큰 수를 반환
            System.out.print(Math.max(a, Math.max(b, c)) * 100);
        }
    }
}
