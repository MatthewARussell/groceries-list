/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$("li.hot").removeClass("hot");
$("li").addClass("cool");

// traverse the elements
$("#one")
  .next()
  .next()
  .text("milk");

// add a new element

// add by clicking the plus sign
$("add").click(addElement);

function addElement() {
  // add a new element
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

//  click the li element will change the changeStyle
function changeStyle() {
  if ($(this).hasClass("complete")) {
  }
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
}
