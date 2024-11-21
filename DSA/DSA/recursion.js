function app(n) {
  if (n === 0) {
    return n;
  }
  return `${n} ${app(n - 1)} ${n}`;
}
app(9);
console.log("aman", app(9));
