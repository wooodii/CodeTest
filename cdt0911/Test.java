package cdt0911;

import java.util.Scanner;

public class Test {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for(int i =0; i<T; i++){
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Case #"+(i+1)+": "+ a+" + "+b+" = "+(a+b));
        }
    }
}