import "./styles.css";

function1();
function $(x) {
  return document.getElementById(x);
}

function function1() {
  const emtpy = document.getElementById("empty-table");
  emtpy.addEventListener("click", function () {
    document
      .querySelectorAll("#menu-table td")
      .forEach((item) => item.remove());
  });

  const form = document.getElementById("theForm");

  form.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();

    const submit = document.getElementById("submit-data");
    const table1 = document.getElementById("menu-table");
    var row = table1.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = $("input-username").value;
    cell2.innerHTML = $("input-email").value;
    cell3.innerHTML = $("input-address").value;
    var checked = $("input-admin").checked;
    console.log(cell1 + cell2 + (cell3 === ""));
    var x = "";
    if (checked) {
      x = "X";
    }
    cell4.innerHTML = x;
    if (cell1 === "" || cell2 === "" || cell3 === "") {
      row.remove();
    }
    form.reset();
  });
}

function function2(form) {}
