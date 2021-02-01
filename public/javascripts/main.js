$(document).ready(function(e) {
    $("#userSignInSignUp").on("click", function(e){
      console.log("Clicked");
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
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $("#myCarousel .carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
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
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = $("#" + selector + " .carousel-item").length - 1;
      var totalItems = $("#" + selector + " .carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
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