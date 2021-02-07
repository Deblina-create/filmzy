$(document).ready(function(e) {
    $("#userSignInSignUp").on("click", function(e){
      //console.log("Clicked");
      let message = "";
      const password = $("#password").val();
      const confirmPassword = $("#confirmPassword").val();
      const mode = $("#hidMode").val();
      if(mode === "Sign up"){
        if(!validatePassword(password, confirmPassword)){
          message = "Passwords do not match";
          e.preventDefault();
        }
        $("#errorMessage").html(message);
      }
    });
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      let $e = $(e.relatedTarget);
      let idx = $e.index();
      let itemsPerSlide = 3;
      let totalItems = $("#myCarousel .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      let it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel .carousel-item")
            .eq(i)
            .appendTo("#myCarousel .carousel-inner");
        } else {
          $("#myCarousel .carousel-item")
            .eq(0)
            .appendTo($(this).find("#myCarousel .carousel-inner"));
        }
      }
    }
  
     
    });

    let genreWiseMovies = JSON.parse($("#hidGenreWiseMovies").val());
    for(let i=0; i < genreWiseMovies.length; i++){
      //console.log(genreWiseMovies);
      bindCarouselEvents(genreWiseMovies[i].genre.name + "Carousel");
    }
  });

  function validatePassword(password, confirmPassword){
    return password === confirmPassword;
  }

  function bindCarouselEvents(selector){
    console.log(selector);
    $("#" + selector).on("slide.bs.carousel", function(e) {
      let $e = $(e.relatedTarget);
      let idx = $e.index();
      let itemsPerSlide = 3;
      let totalItems = $("#" + selector + " .carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          
          if (e.direction == "left") {
            $("#" + selector + " .carousel-item")
              .eq(i)
              .appendTo("#" + selector + " .carousel-inner");
          } else {
            $("#" + selector +  " .carousel-item")
              .eq(0)
              .appendTo($(this).find("#" + selector + " .carousel-inner"));
          }
        }
      }
    });
  }
  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("activeNav");
        } else {
            
           $(".navbar").removeClass("activeNav");
        }
    });
});
$('#movieModal').on('shown.bs.modal', function (e) {
  let movieUrl = $(e.relatedTarget).children("input:hidden").val();
  let movieId = movieUrl.split("v=")[1];
  //console.log(movieUrl);
  //console.log(movieId);
  let frame = document.createElement("iframe");
  frame.setAttribute("width", "480px");
 
  frame.setAttribute("height", "380px");
  
  frame.setAttribute("src", "https://www.youtube.com/embed/" + movieId);
  frame.setAttribute("allowfullscreen", "allowfullscreen");
  $(".modal-body").empty();
  $(".modal-body").append(frame);
  $('.card.start').trigger('focus')
});

$('#movieModal').on('hidden.bs.modal', function (){
  $(".modal-body").empty();
});