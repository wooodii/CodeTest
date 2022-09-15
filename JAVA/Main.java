package JAVA;

import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), "");

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());

        int x = gcd(a, b);

        System.out.println(x);
        System.out.println(a * b / x);
    }

    public static int gcd(int a, int b) {
        int r = a % b; // 나머지

        while (b != 0) {
            int k = a % b; // 나머지를 구해준다.

            a = b;
            b = r;
        }

        return a;
    }
}