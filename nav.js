$(function () {
  $(".kuan").on("click", function () {
    $(".nav").css("border", "2px solid blue");
  });
  $(".kuan").on("mouseout", function () {
    $(".nav").css("border", "1px solid gray");
  });
  $(".row").on("mouseover", function () {
    $(this).css("backgroundColor", "#dcdcdc");
  });
  $(".row").on("mouseout", function () {
    $(this).css("backgroundColor", "");
  });
});
