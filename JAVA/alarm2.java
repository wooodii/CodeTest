package JAVA;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class alarm2 {
    public static void main(String[] args) throws IOException {
        // bufferedreader을 사용하기 때문에 예외처리 사용
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] str = br.readLine().split(" ");
        // split을 통해 공백 단위로 나눠서 배열에 넣음
        // string배열에 각각 저장하기
        int H = Integer.parseInt(str[0]);
        // bufferedreader는 string으로 받았기 때문에
        // Integer.parseInt로 형변환
        int M = Integer.parseInt(str[1]);

        if (M < 45) {
            H--;
            M = 60 - (45 - M);

            if (H < 0) {
                H = 23;
            }
            System.out.println(H + " " + M);
        } else {
            System.out.println(H + " " + (M - 45));
        }
    }
}
