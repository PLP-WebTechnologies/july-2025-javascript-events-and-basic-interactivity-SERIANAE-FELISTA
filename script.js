// =====================
// Part 1: Basics
// =====================
function checkAge() {
  let age = prompt("Enter your age:");
  age = parseInt(age);

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").innerText = "❌ You are underage.";
  }
}

// =====================
// Part 2: Functions
// =====================
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalResult").innerText = `Total: $${total}`;
}

function formatName(name) {
  let formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  document.getElementById("nameResult").innerText = `Formatted: ${formatted}`;
}

// =====================
// Part 3: Loops
// =====================
function countdown(start) {
  let result = "";
  for (let i = start; i >= 1; i--) {
    result += i + " ";
  }
  document.getElementById("countdownResult").innerText = result;
}

function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear old items
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// =====================
// Part 4: DOM Manipulation
// =====================
function toggleMessage() {
  let text = document.getElementById("toggleText");
  text.classList.toggle("hidden");
}

function changeHeading() {
  document.querySelector("h1").innerText = "🚀 JavaScript is Awesome!";
}

function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item " + (list.children.length + 1);
  list.appendChild(newItem);
}
