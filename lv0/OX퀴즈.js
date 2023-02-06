function solution(quiz) {
  // 공백을 기준으로 나눈뒤
  // 각 요소마다 오퍼레이터를 케이스별로 나눠서
  // 연산 후 값이 맞는지 확인 하고
  // 리턴하여 배열에 담는다.
  return quiz.map((e) => {
    const arr = e.split(" ");

    switch (arr[1]) {
      case "+":
        return Number(arr[0]) + Number(arr[2]) === Number(arr.pop())
          ? "O"
          : "X";

      case "-":
        return Number(arr[0]) - Number(arr[2]) === Number(arr.pop())
          ? "O"
          : "X";

      case "*":
        return Number(arr[0]) * Number(arr[2]) === Number(arr.pop())
          ? "O"
          : "X";

      case "/":
        return Number(arr[0]) / Number(arr[2]) === Number(arr.pop())
          ? "O"
          : "X";
    }
  });
}

// 세상엔 eval 함수라는 것이 있다.
function solution2(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}
