/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('li.hot').removeClass('hot');
$('li').addClass('cool');

// traverse the elements
$("#one").next().next().text("milk");

// add a new element


// add by clicking the plus sign
$('add').click(addElement);

function addElement() {
  // add a new element
  
}


//  click the li element will change the changeStyle
function changeStyle() {
if($(this).hasClass('complete')){

}
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
 
 
}
