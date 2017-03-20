$(document).ready(function() {

    // footer click functions to show search modals
    $("#findHero").on("click", function(){
	$("#findHeroModal").modal(("show")({backdrop: true}));
    });

    $("#beHero").on("click", function(){
	$("#beHeroModal").modal(("show")({backdrop: true}));
    });

    $("#adopt").on("click", function(){
	$("#adoptModal").modal(("show")({backdrop: true}));
    });

    
}); // close ready function
