package cdt0911;

// 정수 n개가 주어졌을 때,n개의 합 
public class ab8_1{
        // 기존의 Main 클래스에 main 함수를 두고 풀어온 것과 달리
        // long형의 a 배열 정수합 작성 
            long sum(int[] a){
            long sum =0; 

            for(int i =0; i<a.length; i++){
                sum += a[i];
            }

            return sum;
            // 함수를 반환하는 키워드 
            // sum함수를 탈출
        }
}