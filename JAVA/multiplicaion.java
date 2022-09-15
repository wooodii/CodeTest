package JAVA;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class multiplicaion {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int a = Integer.parseInt(br.readLine());
        br.close();

        StringBuilder sb = new StringBuilder();

        for (int i = 1; i < 10; i++) {
            // append() 인수로 전달된 갓을 문자열로 변환
            // 해당 문자열의 마지막에 추가
            // String 클래스의 concat()메소드와 같은 결과
            // 그러나 내부 처리 속도가 훨씬 빠름
            // append()을 사용하기 위해서는 StringBuffer()를 import
            sb.append(a + " * " + i + " = " + a * i + "\n");
        }
        System.out.print(sb);
    }
}
