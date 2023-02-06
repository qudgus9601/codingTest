function solution(bin1, bin2) {
  // toString으로 이진법 교환이 있는거로 안다.

  console.log(parseInt(bin1, 2));
  return (Number(parseInt(bin1, 2)) + Number(parseInt(bin2, 2))).toString(2);
}

console.log(solution("10", "11"));
