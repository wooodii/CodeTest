package cdt0912;
import java.util.Scanner;

public class star {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        for(int i=1; i<=N; i++){
            for(int j =1; j<=i; j++){
                System.out.print("*");
            } System.out.print('\n');
        }
    }
}