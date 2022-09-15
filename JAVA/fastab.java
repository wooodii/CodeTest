package JAVA;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class fastab {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());

        StringTokenizer st;

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            // stringTokenizer 생성과 동시에 문자를 입력받음
            bw.write((Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken())) +
                    "\n");
            // StringTokenizer의 토큰을 반환하고, 반환타입이 string이므로 Integer.parseInt를 통해 int로 변환
            // 바꾼 두 토크늘 더해 BufferedWriter.write()에 넣기
        }
        br.close();

        bw.flush(); // 버퍼를 비움
        bw.close(); // 버퍼 닫기

    }
}
