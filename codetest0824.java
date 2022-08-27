// 배열을 꺼꾸로 출력하기
// int를 10개 이상 넣을 수 있는 배열을 만들기 
// 다음 입력 배열에 for loop를 이용해 받아주고, arr[0], arr[1]에 들어가게 입력받음 

// sol.1 forloop 사용 
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];
        for (int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 9; i >= 0; i--) {
// 감소하는 for loop >  i--를적용해 감소하는 코드 작성 
            System.out.print(arr[i] + " ");
        }
    }
}

//sol.2 
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];
        for (int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < 10; i++) {
            System.out.print(arr[9 - i] + " ");
        }
    }
}

// 작성답안 
// 오류사항 : charAt 개념부족, i배열 순서 미인지, for loop i-- 적용시 
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // Your Program Goes Here
        Scanner sc = new Scanner(System.in);

        char [] arr = new char [10];
        for(int i=0; i<10; i++){
            char[i]= sc.nextInt();
        }

        for(int i =9; i<0; i--){
            System.out.print(arr[9-i]+" ");
        }
    }


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] arr = new char[10];
        
        for(int i = 0; i < 10; i++) {
            arr[i] = sc.next().charAt(0);
        }
        
        for(int i = 9; i >= 0; i--) {
            System.out.print(arr[i]);
        }
    }
} 


// 문제 2 코드트리 
// 배열의 선언 및 참조 
// 특정 숫자 도달하기
// 500이하의 정수가 10번 주어지는데 250 이상의 정수가 주어지면 
// 주어진 수를 제외하고 주어진 모든 정수들의 합계 및 평균을 구하는 프로그램 작성 
// 단, 250이상의 정수가 항상 주어지는 법은 없다고 가정해도 좋음 

// 첫번째 줄에 500이하의 양의 정수 10개가 공백을 사이에 두고 반복하며 주어짐 
// 주어지는 숫자 줄 처음은 무조건 250미만의 숫자 

// 자바에서는 배열의 선언과 동시에 각 칸에 들어있는 값이 전부 0으로 초기화 
int[] arr = new int[5];
System.out.println(arr[1]); // 0

// 개념
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[]{ 1, 3, 2, 5, 4, 6, 8, 1, 10 };

        int sum = 0;
        // 짝수만 더합니다.
        for (int i = 0; i < 9; i++) {
            if (arr[i] % 2 == 0) {
                sum += arr[i];
            }
        }
        System.out.println(sum);
    }
}

// 문제풀이 
public class Main {
    public static void main(String[] args) {
        // Your Program Goes Here
        Scanner sc = new Scanner(System.in);
        
        int[] arr = new int[10];

        arr[i]=sc.nextInt();
        int sum=0;
        for(int i =0; i<9; i++) {
            if (arr[i]>=250) {
                sum += arr[i];
            }
        }
        System.out.println(sum);
    }
}

//예제 문제풀이
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 변수 선언
        int[] arr = new int[10];
        int sum = 0;
        int cnt = 0;
        
        // 10개의 정수를 입력받습니다.
        for(int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt();
        }

        // 10개의 정수 중 250 이상의 수가 나올 때 까지의 수의 합계와 개수를 구합니다.
        for(int i = 0; i < 10; i++) {
            if(arr[i] >= 250) 
                break;
            sum += arr[i];
            cnt++;
        }
        
        // 평균을 구합니다.
        double avg = (double)sum / cnt;

        // 출력
        System.out.printf("%d %.1f", sum, avg);
    }
}



