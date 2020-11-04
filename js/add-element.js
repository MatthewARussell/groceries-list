/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('li.hot').removeClass('hot');
$('li').addClass('cool');

// traverse the elements
$("one").next().next().text("milk");

// add a new element


// add by clicking the plus sign

$('#add').click(addElement);
function addElement() {
  // add a new element
  $('#todo').append("<li> <input type='text'> </li>");
  $('input').blur(function(){
    console.log('reach');

    $(this).parent().addClass('cool');

    var userinput = $(this).val();
    $(this).parent().text(userinput);
    $("li").click(changeStyle);
  });
  
}


//  click the li element will change the changeStyle
$("li").click(changeStyle);
function changeStyle() {
if ($(this).hasClass("complete")) {
    $(this).removeClass("complete");
    $(this).addClass("cool");
  }
  if ($(this).hasClass("cool")) {
    $(this).removeClass("cool");
    $(this).addClass("complete");
  }
  if ($(this).hasClass("hot")) {
    $(this).removeClass("hot");
    $(this).addClass("cool");
  } else {
    $(this).addClass("complete");
  }
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
 $('li.complete').remove();
 
}
