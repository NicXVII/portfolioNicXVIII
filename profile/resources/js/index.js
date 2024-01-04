$(document).ready(function(){
    var scrolled = false;
    //console.log("Enter functions");

    // Sposta l'assegnazione dell'altezza all'interno di $(document).ready()
    var navHeight = $('#nav').height();
    //console.log("Navheight: " + navHeight);

    $(window).scroll(function(){
        if ($(window).scrollTop() > navHeight){
            //console.log("Add");
            $('#nav').addClass('scroll');
        } else {
           // console.log("Remove");
            $('#nav').removeClass('scroll');
        }
    });

    var scrolled = false;

    document.querySelectorAll('#nav li').forEach(function(navItem) {
        // Click event listener
        navItem.addEventListener('click', function(event) {
           // console.log('Clicked:', event.target);
            handleLiClick(event);
        });
    });
    
    // Add scroll event listener to the document
    if (scrolled) { 
        document.addEventListener('scroll', function(event) {
            console.log('Document Scrolled:', event);
            handleDocumentScroll(event);
        });
    }
    
    function handleLiClick(event) {
        scrolled = true;
        document.querySelectorAll('#nav li').forEach(li => {
           // console.log('Removing from:', li);
            li.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    }
    
    function handleDocumentScroll(event) {
        scrolled = false;
        console.log('Document Scrolled:', event);
        document.querySelectorAll('#nav li').forEach(li => {
            console.log('Removing from:', li);
            li.classList.remove('selected');
        });
    }
    
});
