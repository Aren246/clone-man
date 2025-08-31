let cookies = Number(localStorage.getItem("cookies")) ; 0;
let cps = Number(localStorage.getItem("cps")) ; 0;
let perClick = Number(localStorage.getItem("perClick")) ; 1;

function save() {
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("perClick", perClick);
}

function render() {
  document.getElementById("count").textContent = cookies;
  document.getElementById("cps").textContent = cps;
  document.getElementById("perClick").textContent = perClick;
}

document.getElementById("cookie").addEventListener("click", function () {
  cookies += perClick;
  save();
  render();
});

const upgrades = [
  { name: "+1 CPS", cost: 10, cps: 1 },
  { name: "+1 Click", cost: 15, perClick: 1 }
];

function buyUpgrade(upgrade) {
  if (cookies >= upgrade.cost) {
    cookies -= upgrade.cost;

    if (upgrade.cps) cps += upgrade.cps;
    if (upgrade.perClick) perClick += upgrade.perClick;

    save();
    render();
  } else {
    alert("Not enough cookies!");
  }
}

function setupShop() {
  const shop = document.getElementById("shop");
  upgrades.forEach(upgrade => {
    const button = document.createElement("button");
    button.textContent = upgrade.name + " (Cost: " + upgrade.cost + ")";
    button.addEventListener("click", function () {
      buyUpgrade(upgrade);
    });
    shop.appendChild(button);
  });
}

setInterval(function () {
  cookies += cps;
  save();
  render();
}, 1000);

setupShop();
render();

