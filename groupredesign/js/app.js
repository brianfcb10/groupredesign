$(function(){
 let menuToggler = $("nav button.navbar-toggler");

menuToggler.on("click", function(e){
  e.preventDefault();
  let navigation = $(this).attr("data-target");
  $(navigation).toggleClass("open");

});
});
