$(document).on("click", ".copy", function () {
  let copyText = $(this).parent().children(0).text();
  navigator.clipboard.writeText(copyText);
});
$("footer > #copyright").html("Copyright &copy; 2023-" + new Date().getFullYear() + " Igor Ratajczak All Rights Reserved");
$("#nav-mobile").on("click", function () {
  $("nav").addClass("grid");
  $(".close").removeClass("none");
  $(".close").addClass("grid");
});
$(".close").on("click", function () {
  let element = $(this).attr("data-close");
  $(`${element}`).removeClass("grid");
  $(".close").removeClass("none");
});
