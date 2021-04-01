$(function () {
  $(".documents .dropdown-menu a").each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var aText = $(this).text();
      $(".documents .dropdown-toggle").text(aText);
    });
  });

   $(window).scroll(function () {
     /* affix after scrolling 100px */
     if ($(document).scrollTop() > 30) {
       $(".navbar").addClass("pdFixed");
     } else {
       $(".navbar").removeClass("pdFixed");
     }
   });
  $("#dropdown-2 a").each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var aText = $(this).text();
      $("#dropdown-2 .btn2").text(aText);
    });
  });

  $("#dropdown-3 a").each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var aText = $(this).text();
      $("#dropdown-3 .btn3").text(aText);
    });
  });

    $("#dropdown-5 a").each(function () {
      $(this).click(function (e) {
        e.preventDefault();
        var aText = $(this).text();
        $("#dropdown-5 .btn5").text(aText);
      });
    });

      $("#dropdown-4 a").each(function () {
        $(this).click(function (e) {
          e.preventDefault();
          var aText = $(this).text();
          $("#dropdown-4 .btn4").text(aText);
        });
      });

  $(".list-tabs li").on('click',function (e) {
    var dataTabs = $(this).data("tabs");
    $(".tab-content > div").fadeOut(200);
    $(dataTabs).fadeIn(200)
  });



    $('table td img').click(function(){
var tabelLanght = $("table tbody:first-of-type tr  ").length;

      $(this).parent().parent().remove()
            // console.log(tabelLanght);
      // if( tabelLanght === 1){
      //   $('#oooo').remove()
      // }

    })
});

