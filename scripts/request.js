async function populate() {
  const requestURL = "data.json";
  const request = new Request(requestURL);

  fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on server!");
      }
    })
    .then((obj) => {
      populatesection(obj);
      populateDucks(obj.members);
    })
    .catch((error) => {
      console.error(error);
    });
}

function populatesection(obj) {
  const section = document.querySelector(".top");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.DuckName;
  section.appendChild(myH1);
}

function populateDucks(ducks) {
  const section = document.querySelector(".container");

  const header = document.createElement("div");
  header.className = "duck-table-row";

  addTextColumn(header, "Item", "item");
  addTextColumn(header, "Value", "value");
  addTextColumn(header, "Amount", "amount");
  addTextColumn(header, "Subtotal", "sub-total");

  section.appendChild(header);

  for (const duck of ducks) {
    const rowId = `duck-in-a-row-${duck.id}`;
    const duckRow = document.createElement("div");

    duckRow.className = "duck-table-row";
    duckRow.id = rowId;

    const itemColumn = document.createElement("div");
    itemColumn.className = "item";
    const img = document.createElement("img");
    img.src = duck.img;

    // fazendo a conta  olha o evento
    img.addEventListener("click", function () {
      const totalInput = document.querySelector("#total");
      let total = parseInt(totalInput.value);
      total += duck.value;
      totalInput.value = total;

      const amountCol = duckRow.querySelector(".amount");
      let amount = parseInt(amountCol.textContent);
      amount += 1;
      amountCol.innerText = amount;

      const subtotalCol = duckRow.querySelector(".sub-total");
      subtotal = amount * duck.value;
      subtotalCol.innerText = subtotal;

      const amountCol1 = duckRow.querySelector(".amount1");
      let amount1 = parseInt(amountCol1.value);
      amount1 += 1;
      amountCol1.value = amount1;
    });

    itemColumn.appendChild(img);
    duckRow.appendChild(itemColumn);

    addTextColumn(duckRow, duck.value, "value");

    addTextColumn(duckRow, 0, "amount");

    const column = document.createElement("input");
    column.setAttribute("type", "hidden");
    column.className = "amount1";
    column.name = "amount" + rowId;
    column.value = 0;
    duckRow.appendChild(column);

    addTextColumn(duckRow, 0, "sub-total");

    section.appendChild(duckRow);
  }
}

function addTextColumn(container, text, columnClass) {
  const column = document.createElement("div");
  column.className = columnClass;
  column.innerText = text;
  container.appendChild(column);
}

populate();
