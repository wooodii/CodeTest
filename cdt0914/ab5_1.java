package cdt0914;

import java.util.Scanner;

public class ab5_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int a = sc.nextInt();
            int b = sc.nextInt();

            if (a == 0 && b == 0) {
                sc.close();
                break;
            }
            System.out.println(a + b);
        }

    }
}
