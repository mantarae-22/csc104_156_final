  //show or hide recipe details based on the user's choice
  function toggleDetails(divId, linkId){
    //this is the div we want to show or hide
    var divElement = document.getElementById(divId);
    //this is the anchor tag that we want to change the text for
    var linkElement = document.getElementById(linkId);

    if(divElement.style.display == 'none'){
        divElement.style.display = 'block';
        linkElement.innerHTML = "...hide details...";                
    }
    else{
        divElement.style.display = 'none';
        linkElement.innerHTML = "...show details...";  
    }
}