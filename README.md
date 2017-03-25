# Project - {Marvel Volunteer App}

## Live Link
https://thenerdyfeline.github.io/marvel-app/

## Description

Herolution was born out of a love for everything Marvel and the idea to be able to find our favorite superheroes. Placing superheroes in the human element is obviously fun: getting to see and search for them but there's nothing more powerful than extending yourself and becoming a hero through volunteer work. With Herolution, we felt that there was plenty of room for our users to brush up on their Marvel knowledge but what we're doing is creating emotional connections- inspiring the user to be an active hero in their own community.

The app is built around three primary functions: finding a hero, being a hero and finding a sidekick. Each of these elements allows for our user to engage with the platform in different ways.

These functionalities allow you to search for your favorite superhero, adopt a sidekick (like a new puppy!) or find your inner hero and volunteer within your community. Each of these enables you to become your own definition of a hero.
                    
## Requirements
####

•Must uses at least two APIs
•Must use AJAX to pull data
•Must utilize at least one new library or technology that we haven’t discussed
•Must have a polished front-end / UI
•Must meet good quality coding standards (indentation, scoping, naming)
•Must NOT use alerts, confirms, or prompts (look into modals!)
•Must have some sort of repeating element (table, columns, etc)
•Must use Bootstrap or Alternative CSS Framework
•Must be Deployed (Heroku or Firebase)
•Must have User Input Validation
•Utilize Firebase for Persistent Data Storage (Consider this basically a
requirement).
•Mobile Responsive
•Use an alternative CSS framework like Materialize

## Technologies Used
#### 
•jQuery for DOM Manipulation
•AJAX for API get requests the Google Maps API and the Volunteer Match API.
•HTML5/CSS3 for creating structure, modal, and specific designs
•Bootstrap for responsive design and its classes for aesthetics.
•JavaScript for further implementation of modal, etc.


## Code Explanation
Index.html (Main Page)
    - Google Maps API + Geocoding + Places Library
        - We convert addresses (Zip Code, City Name, State, etc) to geographic             coordinates (latitude and longitude)
Button #1 – Find a Hero
    - Pulls data of all heroes from database (Firebase and Array), to dropdown in         real-time.
    - Pulls location property from the array of heroes stored as objects and processes     value to Google Maps.
Button #2 – Be a Hero
    - User can change preset volunteer opportunities via dropdown, and narrow their     search for opportunities. Places Library helps identify specific preset option in     a radius around the user input address.
    - Volunteer Match’s Public Use API AJAX call – Shows total number of opportunities     available in the address inputted.
Button #3 – Adopt a Sidekick
    - User input address is processed, and Places Library helps identify pet shelters     around a preset radius.
- For-loop that goes through an array of preexisting heroes.
    - Creates HTML elements based off the properties of each object in an array
    - Integrates Bootstrap classes in HTML elements to create a dynamic accordion list     of heroes.
- Form in the bottom half portion of page used to input custom heroes.
    - Takes in user input and upon triggering the on-click function via submit button,     all the information is stored in Firebase.
    - Firebase pushes all that information as an object into the same array used to     construct the accordion-styled list of heroes. 
    - Appends all the information in the same format into the accordion.
