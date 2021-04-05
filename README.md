## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


Goal: Randomize 3 Pokemon to appear on screen, select one and on the tenth iteration display results.


Visually: 3 pokemon options with a button to choose selected beneath it (same as RPS)


Randomize 3 Pokemon:
-Create Pokemon Array: include id, encountered, and captured data pairs
-use Math.Random to create random numbers
-This should occur on page load, and after each button click

Display the pokemon using DOM and local Storage:
-Store and Get pokemon in/out of local storage using functions
-Display elements using querySelector


Implement tools from RPS and Shopping Cart:
-Radio Buttons/selected input
-iterating arrays and searching by id
-appending values returned from functions


Display Results:
Hard code on day one
using chart.js day two