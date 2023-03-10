function solution(chicken) {
  // 10으로 나눈 나머지는 저장해둔다.
  // 본 값에서 10을 나눠 처음 쿠폰으로 받을 값을 구한다.
  // 쿠폰으로 받은 치킨과 나머지를 더한다.
  // 반복한다.
  // 재귀식으로 풀어boza
  const rest = chicken % 10;
  const coupon = (chicken - rest) / 10;

  if (rest + coupon >= 10) {
    return coupon + solution(rest + coupon);
  } else {
    return coupon;
  }
}

// 내가 작성한 코드가 레퍼런스보다 0.1MB 만큼 용량이 작고 그만큼 빠르겠다
// 무려 0.1 MB!!
// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.4MB)

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 테스트 10 〉	통과 (0.03ms, 33.4MB)
