module.exports = function reverse (n) {
  let nString = Math.abs(n).toString().split("");
  return (Number(nString.reverse().join("")));
}
