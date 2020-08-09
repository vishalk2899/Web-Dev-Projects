//
// const imh = document.querySelector(".image");
//
// const tl = new TimelineMax();
//
// // tl.fromTo(slider, 1, {x:"-100%"}, {x:"0%", ease:Power2.easeInOut})
//
// tl.fromTo(imh,1, {height:"0%"}, {height:"100%", ease: Power2.easeInOut})
// .fromTo(
//     imh,
//     1,
//     { width: "96%"},
//     { width: "85%", ease: Power2.easeInOut}
// )




function scrollAppear(){
  var head = document.querySelector('.jumbotron-3');
  var introPosition = head.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  console.log(introPosition);
  console.log(screenPosition);

  if(introPosition < screenPosition){
    head.classList.add('jumbotron-3-appear');
  }
}

window.addEventListener('scroll',scrollAppear);


$(".btn1").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});

$(".btn2").click(function() {
    $('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
});

$(".btn3").click(function() {
    $('html,body').animate({
        scrollTop: $("#section3").offset().top},
        'slow');
});
