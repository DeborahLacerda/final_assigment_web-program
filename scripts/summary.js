const url = new URL(location.href);
const obj = {
  Duck_Name: url.searchParams.get("dname"),
  Quantity: url.searchParams.get("quantity"),
  Date: url.searchParams.get("date"),
  Color: url.searchParams.get("color"),
  Gift_Wrapping: url.searchParams.get("gif"),
  Duck_Eyes: url.searchParams.get("eyes"),
  amount1: url.searchParams.get("amountduck-in-a-row-1"),
  amount2: url.searchParams.get("amountduck-in-a-row-2"),
  amount3: url.searchParams.get("amountduck-in-a-row-3"),
  amount4: url.searchParams.get("amountduck-in-a-row-4"),
  amount5: url.searchParams.get("amountduck-in-a-row-5"),
  amount6: url.searchParams.get("amountduck-in-a-row-6"),
};
console.log(obj);

function populatesection(obj) {
  const section = document.querySelector(".summary");

  const req2 = document.createElement("h2");
  req2.textContent = "Result Q2";

  const myList = document.createElement("ul");

  const listItem = document.createElement("li");
  listItem.textContent = "Duck Name: " + obj.Duck_Name;

  const listItem1 = document.createElement("li");
  listItem1.textContent = "Quantity: " + obj.Quantity;

  const listItem2 = document.createElement("li");
  listItem2.textContent = "Date: " + obj.Date;

  const listItem3 = document.createElement("li");
  listItem3.textContent = "Color: " + obj.Color;

  const listItem4 = document.createElement("li");
  listItem4.textContent = "Gift Wrapping: " + obj.Gift_Wrapping;

  const listItem5 = document.createElement("li");
  listItem5.textContent = "Duck Eyes: " + obj.Duck_Eyes;

  section.appendChild(req2);
  section.appendChild(myList);
  myList.appendChild(listItem);
  myList.appendChild(listItem1);
  myList.appendChild(listItem2);
  myList.appendChild(listItem3);
  myList.appendChild(listItem4);
  myList.appendChild(listItem5);

  const req4 = document.createElement("h2");
  req4.textContent = "Result Q4";
  const secondList = document.createElement("ol");

  const list1 = document.createElement("li");
  list1.textContent = "Barista: " + obj.amount1;

  const list2 = document.createElement("li");
  list2.textContent = "Fitness: " + obj.amount2;

  const list3 = document.createElement("li");
  list3.textContent = "Gamer-girl: " + obj.amount3;

  const list4 = document.createElement("li");
  list4.textContent = "Gamer-boy: " + obj.amount4;

  const list5 = document.createElement("li");
  list5.textContent = "Santa: " + obj.amount5;

  const list6 = document.createElement("li");
  list6.textContent = "X-mas-tree: " + obj.amount6;
  section.appendChild(req4);
  section.appendChild(secondList);

  secondList.appendChild(list1);
  secondList.appendChild(list2);
  secondList.appendChild(list3);
  secondList.appendChild(list4);
  secondList.appendChild(list5);
  secondList.appendChild(list6);
}
populatesection(obj);
