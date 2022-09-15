package JAVA;

import java.util.Scanner;

// 어떤 자연수 p와 q가 있을 때, 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수이다. 
// 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 N과 K가 빈칸을 사이에 두고 주어진다. N은 1 이상 10,000 이하이다. K는 1 이상 N 이하이다.
// 첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다. 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.
public class codetest0830 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N;
        int K;

        N = sc.nextInt();
        K = sc.nextInt();

        for (int i = 1; i <= N; i++) {
            if (N % i == 0)
                K--;

            if (K == 0) {
                System.out.println(i);
                break;
            }
        }
        sc.close();

        if (K != 0)
            System.out.println(0);

        // 양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때 1의 위치를 모두 찾는 프로그램을 작성하시오.
        // 최하위 비트(least significant bit, lsb)의 위치는 0이다.
        // 입력/첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다.
        // (1 ≤ T ≤ 10, 1 ≤ n ≤ 106)
        // 출력/각 테스트 케이스에 대해서, 1의 위치를 공백으로 구분해서 줄 하나에 출력한다. 위치가 낮은 것부터 출력한다.

        // sol1
        // 이진수의 값으로의 치환은
        // toBinaryStirng()함수를 이용하면 문자열로 간단하게 출력할 수 있다.
        // 문제에서 요구한 자릿수 출력은 루프문을 반대로 돌린다음에 length-j-1을 하면
        // 자릿수를 오른쪽에서 부터 출력
        int N1 = sc.nextInt();
        for (int i = 0; i < N1; i++) {
            int Bi = sc.nextInt();

            String Bin = Integer.toBinaryString(Bi);
            for (int j = Bin.length() - 1; j >= 0; j--) {
                if (Bin.charAt(i) == '1') {
                    System.out.print(Bin.length() - j - 1 + " ");
                }
            }
            System.out.println();
        }

        // sol2

        // public class B3_3460 {
        // public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        int ne = sc.nextInt();
        // 2진수 담을 String 배열
        String[] binary = new String[ne];
        // 2진수 구하기
        for (int i = 0; i < ne; i++) {
            int num = sc.nextInt();
            String tmp = "";
            while (num != 1) {
                tmp += num % 2;
                num /= 2;
            }
            tmp += num;
            binary[i] = tmp;
        }
        // 1의 위치 찾아 출력하기
        for (String tmp : binary) {
            for (int i = 0; i < tmp.length(); i++) {
                if (tmp.charAt(i) == '1') {
                    System.out.print(i + " ");
                }
            }
        }
    }
}
