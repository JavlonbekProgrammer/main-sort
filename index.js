let Tbody = document.getElementById("tbody");
let inner = document.getElementById("inner");

let users = [
  { id: 1, age: 12, fullname: "Hasan", money: 9000 },
  { id: 2, age: 45, fullname: "Husan", money: 4500 },
  { id: 3, age: 15, fullname: "Eldor", money: 5000 },
  { id: 4, age: 51, fullname: "Javlonbek", money: 122000 },
  { id: 5, age: 27, fullname: "Sundar", money: 100 },
];

function handleRich() {
  users = users.sort((a, b) => b.money - a.money).slice(0, 2);
  draw();
}

function handlePoor() {
  users = users.sort((a, b) => a.money - b.money).slice(0, 2);
  draw();
}

function handle18() {
  users = users.filter(item => item.age > 18)
  draw();
}

function handleAll() {
  let count = 0
  for (let i = 0; i < users.length; i++) {
    if(users[i].money > 0) {
        count += users[i].money
    }    
  }
  inner.innerHTML = count
  users = []
  draw;
}

function draw() {
  let s = "";
  users.map((item, index) => {
    s += `
        <tr>
            <td>${item.id}</td>
            <td>${item.fullname}</td>
            <td>${item.age}</td>
            <td>${item.money}</td>
        </tr>
    `;
  });
  Tbody.innerHTML = s;
}
draw();
