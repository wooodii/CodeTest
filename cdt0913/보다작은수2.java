package cdt0913;

import java.util.Scanner;

public class 보다작은수2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();
        int X = in.nextInt();

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < N; i++) {
            int v = in.nextInt();
            // 입력받음과 동시에 if문으로 검사
            // 보다 작은 경우 stringbuilder 로 저장
            if (v < X) {
                sb.append(v + " ")
                // string은 고정 길이이기 때문에, 
                // 작성한 문자 열 귀에 문자열을 추가하게 되면 
                // 새로운 문자열 작성하게 됨 
                // 그래서 stringbuilder를 사용해 
                // 문자를 추가해도 새로운 오브젝트를 작성하지 말고 
                // 문자열을 추가함
        }
        System.out.println(sb);
    }
}
