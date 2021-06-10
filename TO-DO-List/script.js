"use Strict";
var add = $("#addItem");
var sort = $("#sortItem");
var reset = $("#resetItem");
var clean = $("#cleanItem");
var taskInput = $("#taskName");
var listItems = $(".listItems");

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    clickitem();
  }
});
add.click(() => {
  clickitem();
});

reset.click(() => {
  taskInput.val(" ");
});

clean.click(() => {
  $(".completed").remove();
});
sort.click(() => {
  $("ul .completed").appendTo(listItems);
});

function clickitem() {
  if (taskInput.val() === "") {
    alert("There is no input");
  } else {
    var list = $("<li>", {
      class: "list-group-item item ",
      text: taskInput.val(),
    });
    listItems.append(list);
    taskInput.val(" ");
    list.click((event) => {
      $(event.target).toggleClass("completed");
    });
  }
}
