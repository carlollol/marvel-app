var heroes = [{
    alias: "Iron Man",
    name: "Anthony Edward 'Tony' Stark",
    powers: "Tony has a genius level intellect that allows him to invent a wide range of sophisticated devices, specializing in advanced weapons and armor. He possesses a keen business mind.",
    video: "media/ironman1.mp4",
    mapcoords: "new google.mapsLatLng(18.520266,73.856406);",
    location: "Asgard, Midgard"
}, {
    alias: "Captain America",
    name: "Steven 'Steve' Rogers",
    powers: "Captain America represented the pinnacle of human physical perfection. He experienced a time when he was augmented to superhuman levels, but generally performed just below superhuman levels for most of his career. Captain America had a very high intelligence as well as agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed. The Super-Soldier formula that he had metabolized had enhanced all of his bodily functions to the peak of human efficiency. Most notably, his body eliminates the excessive build-up of fatigue-producing poisons in his muscles, granting him phenomenal endurance.",
    video: "media/america1.mp4",
    mapcoords: "new google.mapsLatLng(18.520266,73.856406);",
    location: "Asgard, Midgard"
}, {
    alias: "Hulk",
    name: "Robert Bruce Banner",
    powers: "The Hulk possesses an incredible level of superhuman physical ability. His capacity for physical strength is potentially limitless due to the fact that the Hulk's strength increases proportionally with his level of great emotional stress, anger in particular. The Hulk uses his superhumanly strong leg muscles to leap great distances. The Hulk has been known to cover hundreds of miles in a single bound and once leaped almost into orbit around the Earth. The Hulk can also use his superhumanly leg muscles to run at super speeds, although his legs have limitless strength he does not have limitless speed and once he reaches a certain speed his legs become too strong and destroy the ground giving him no friction to run on, therefore he jumps to travel. The Hulk can slam his hands together creating a shock wave, this shock wave can deafen people, send objects flying and extinguish fires. His thunderclap has been compared to hurricanes and sonic booms. The Hulk has shown a high resistance to physical damage nearly regardless of the cause, and has also shown resistance to extreme temperatures, mind control, nuclear explosions, poisons, and all diseases. In addition to the regeneration of limbs, vital organs, and damaged or destroyed areas of tissue at an amazing rate. The Hulk also has superhuman endurance.The Hulk's body also has a gland that makes an 'oxygenated per fluorocarbon emulsion', which creates pressure in the Hulk's lungs and effectively lets him breathe underwater and move quickly between varying depths without concerns about decompression or nitrogen narcosis.",
    video: "media/hulk1.mp4",
    mapcoords: "new google.mapsLatLng(18.520266,73.856406);",
    location: "Asgard, Midgard"
}, {
    alias: "Thor",
    name: "Thor Odinson",
    powers: "As the son of Odin and Gaea, Thor's strength, endurance and resistance to injury are greater than the vast majority of his superhuman race. He is extremely long-lived (though not completely immune to aging), immune to conventional disease and highly resistant to injury. His flesh and bones are several times denser than a human's.As Lord of Asgard, Thor possessed the Odinforce, which enabled him to tap into the near-infinite resources of cosmic and mystical energies, enhancing all of his abilities. With the vast magical power of the Odinforce, Thor was even able to dent Captain America’s virtually indestructible shield with Mjolnir.Thor complete powers, Click here for complete list of Thor's powers",
    video: "media/thor1.mp4",
    mapcoords: "new google.mapsLatLng(18.520266,73.856406);",
    location: "Asgard, Midgard"
}

];




// {
// 	alias: "",
// 	name: "",
// 	powers: ""
// }.


for (var i = 0; i < heroes.length; i++) {
    var temp2 = "map" + [i];
    var start = $("<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + [i] + "'>" + heroes[i].alias + "</a></h4></div><div id='collapse" + [i] + "' class='panel-collapse collapse'><div class='panel-body' id='info" + [i] + "'><section><strong><h5>Name:</strong> "+heroes[i].name+"</h5><strong><h5>Powers: </strong>"+heroes[i].powers+"</h5><video height='300px' autoplay muted loop class='bgvid'><source src='"+heroes[i].video+"' type='video/mp4'></video><div id='"+temp2+"' style='width:350px; height:350px; float:right'></div></section></div></div></div>");
    var temp1 = "mapOption" + [i];
  
    var temp3 = "mapMarker" + [i];
    var temp5 = "map" + i;

    console.log(temp1 + temp2 + temp3 + temp5)
    // // var temp4 = google.maps.Map(document.getElementById(temp2), temp1)
    // temp1 = {
    // 	zoom: 15,
    // 	center: heroes[i].mapcoords,
    // 	mapTypeId: google.maps.MapTypeId.TERRAIN
    // };
    // // new google.maps.Map(document.getElementById("map1"), temp1);
    // temp3 = new google.maps.Marker({
    // 	position: heroes[i].mapcoords,
    // 	map: temp2,
    // 	title: heroes[i].location 
    // });
    // $(".bgvid").attr("src", heroes[i].video)
    // var heroName = $("<p>Name:</p>" + heroes[i].name);
    // $("section").append(heroName)
    // console.log(heroes[i].name + heroes[i].powers)
    // $("section").append(heroes[i].powers);
    $("#accordion").append(start);
}


