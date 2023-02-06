function solution(i, j, k) {
  // 모든 수를 string 화 하여 더한다.
  // 더한 문자열을 split하고
  // 1의 갯수를 셈한다.

  return (
    new Array(j - i + 1)
      .fill(0)
      .map((e, idx) => idx + i)
      .reduce((acc, cur) => acc + cur, "")
      .split(k).length - 1
  );
}

function solution2(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

// 레퍼런스보다 내 꺼가 응답속도가 더 늦다.

// 테스트 1 〉	통과 (22.07ms, 46MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (1.73ms, 34.3MB)
// 테스트 5 〉	통과 (0.78ms, 33.9MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.19ms, 33.4MB)
// 테스트 8 〉	통과 (6.35ms, 37.6MB)

// 테스트 1 〉	통과 (17.31ms, 44.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (1.13ms, 34.2MB)
// 테스트 5 〉	통과 (0.58ms, 33.9MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.5MB)
// 테스트 8 〉	통과 (5.93ms, 38.6MB)
