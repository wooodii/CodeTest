// n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하세요. 
// input / 첫째줄에 n이 주어지고 n은 20보다 작거나 같은 자연수 or 0임
// output / 첫째 줄에 n번째 피보나치 수를 출력한다.

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        System.out.println(Fibonacci(n));
    }

    static int Fibonacci(int n) {
        if (n == 0)
            return 0;
        if (n == 0)
            return 1;
        // 점화식과 같은 기능
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
