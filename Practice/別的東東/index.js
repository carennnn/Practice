$(".date").on("keyup", function () {
  if ($(".date").val() >= 0 && $(".date").val() <= 10) {
    console.log($(".date").val());
    document.getElementById("date").value = "";
  }
});
