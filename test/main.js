function Aaa(params) {
  
}

const a = new Aaa();

const b = Object.create(a)

b.name = "huang"

console.log(b);