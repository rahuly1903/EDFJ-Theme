var twoToneflag = false;
var steelFlag = false;

localStorage.setItem("mytime", "first-div");

$(document).on('click', '.cpb-category-f73OSSGKkwh86-Ywy9IeL7zx .cpb-category-options-container span div img', function(e){
  //   alert(123);
  setTimeout(function(){
    $('.cpb-category-LLo-cExMB9-zdW9jOXQBbivq .cpb-category-options-container span:first div').click().addClass("cpb-active");
    $('.cpb-category-FY8eAzKyjazAgzJXhp1gi0G7 .cpb-category-options-container span:first div').click().addClass("cpb-active");
  },500);
});

$(document).on('click', '.cpb-category-LLo-cExMB9-zdW9jOXQBbivq .cpb-category-options-container span.option-type-img div div', function(e){
  setTimeout(function(){
    var x = localStorage.getItem("mytime");
    if(x=="first-div"){
      $('.cpb-category-FY8eAzKyjazAgzJXhp1gi0G7 .cpb-category-options-container span:first div').click().addClass("cpb-active");
    }else{
      $('.cpb-category-FY8eAzKyjazAgzJXhp1gi0G7 .cpb-category-options-container span:last div').click().addClass("cpb-active");
    }
  },500);
});

$(document).on('click', '.cpb-category-FY8eAzKyjazAgzJXhp1gi0G7 .cpb-category-options-container span.option-type-img div div', function(e){
  var img_alt = $(this).find("img").attr("alt");
  console.log(img_alt);
  if(img_alt.indexOf("4 Prongs")>-1){
	localStorage.setItem("mytime", "last-div");
  }else{
    localStorage.setItem("mytime", "first-div");
  }
});