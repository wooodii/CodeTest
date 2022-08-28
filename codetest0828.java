// public class codetest0828 
import java.util.Scanner;

public class codetest0828 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int y = sc.nextInt();
        
        System.out.println(y - 543);
    

        // 킹, 폰 , 비숍. 퀸 ,나이트,룩이 모자란 갯수 세기
        int king = sc.nextInt();
        int queen = sc.nextInt();
        int rook = sc.nextInt();
        int bishop = sc.nextInt();
        int knight = sc.nextInt();
        int pawn = sc.nextInt();
        
        System.out.println(1-king);
        System.out.println(1-queen);
        System.out.println(2-rook);
        System.out.println(2-bishop);
        System.out.println(2-knight);
        System.out.println(8-pawn);
    
        // 나머지 연산 
        int a  =sc.nextInt();
        int b  =sc.nextInt();
        int c  =sc.nextInt();
        
        System.out.println((a+b)%c);
        System.out.println((a%c+b%c)%c);
        System.out.println((a*b)%c);
        System.out.println((a%c*b%c)%c);
        

        Scanner in = new Scanner(System.in);
        //곱셈과정 계산하기
        int A = in.nextInt();
		String B = in.next();
        
		in.close();
 
		System.out.println(A * (B.charAt(2) - '0'));
		System.out.println(A * (B.charAt(1) - '0'));
		System.out.println(A * (B.charAt(0) - '0'));
		System.out.println(A * Integer.parseInt(B));
    }

}

