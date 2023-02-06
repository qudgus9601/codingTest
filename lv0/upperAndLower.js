function solution(my_string) {
  // 아스키 코드 65 ~ 90 대문자
  // 아스키 코드 97 ~ 122 소문자
  return my_string
    .split("")
    .map((e) => {
      return e.charCodeAt() > 64 && e.charCodeAt() < 91
        ? e.toLowerCase()
        : e.toUpperCase();
    })
    .join("");
}

function solution2(my_string) {
  // 대문자화 했는데 현재랑 같으면 대문자
  return my_string
    .split("")
    .map((e) => {
      return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
    })
    .join("");
}
