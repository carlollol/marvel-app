$(document).ready(function() {

    // footer click functions to show search modals
    $("#findHero").on("click", function(){
	$("#findHeroModal").modal({backdrop: true});
    });

    $("#beHero").on("click", function(){
	$("#beHeroModal").modal({backdrop: true});
    });

    $("#adopt").on("click", function(){
	$("#adoptModal").modal({backdrop: true});
    });

    
}); // close ready function
