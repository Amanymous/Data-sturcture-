const letters = new Set(["a","b","c"])
let text = "";
letters.map(function(value) {
  text += value;
})
console.log(letters);

for(let i = 0 i <= 20_000_00; i++){
  sql = `INSERT INTO users (id,name,email,age,sex) VALUES { insert fake data here }`
  d.execute(sql)
}