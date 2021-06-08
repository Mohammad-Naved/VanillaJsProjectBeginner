const btn = document.querySelector(".submit-btn");

btn.addEventListener("click", function () {
  var maths = Number(document.getElementById("maths").value);
  var physics = Number(document.getElementById("physics").value);
  var chemistry = Number(document.getElementById("chemistry").value);
  var english = Number(document.getElementById("english").value);
  var totalMarks = 400;
  var marksObtained = maths + physics + english + chemistry;
  var percentage = (marksObtained / totalMarks) * 100;
  var grade = "";
  document.getElementById("percentage").innerHTML = percentage + "%";

  if (percentage > 90) {
    grade = "A+";
  } else if (percentage < 90 && percentage > 80) {
    grade = "A";
  } else if (percentage < 80 && percentage > 60) {
    grade = "B";
  } else if (percentage < 60 && percentage > 40) {
    grade = "C";
  } else if (percentage < 40) {
    grade = "F";
  }
  document.getElementById("grade").innerHTML = grade;

  if (percentage < 40) {
    document.getElementById("pass").innerHTML = "Sorry! You Failed";
  } else {
    document.getElementById("pass").innerHTML = "You Passed";
  }
});
