var twoToneflag = false;
var steelFlag = false;

localStorage.setItem("mytime", "first-div");

$(document).on('click', '.cpb-option-type-img', function(e){
  //   alert(123);
  var $options = $(this).closest('.cpb-panel-wrapper').nextAll('.cpb-panel-wrapper').find('.cpb-option-type-img:first');
  $options.each(function(idx, el) {
    setTimeout(function() {
      $(el).addClass("cpc-active");
      console.log(el);
    },10000)
  })
});

// Code to change product title 
$(document).on("click",".cpb-panel-categories-container .cpb-category:nth-child(2) .cpb-option-type-img",function(e){
  var title = $(this).find(".cpb-option-label").text();
  console.log(title);
  var split_title1 = title.split("CT.")[0];
  var split_title2 = split_title1.split(" ")[1];
  $("h2.cpb-panel-title span").text(split_title2);
});
