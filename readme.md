## 1)  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: - getElementById -> Gets an element by its id
        - grtElementByClassName -> Gets all element by the class name
        - querySelector -> Gets the first element that matches the given selector
        - querySelectorAll -> Gets all element that matches the given selector



## 2) How do you create and insert a new element into the DOM?
Answer: 
To create an element I will use document.createElement('') and write what element to create in the first bracket. Then I will use .innerText or innerHTML to add content.
To insert the element I will use .appendChild() 



## 3) What is Event Bubbling and how does it work?
Answer:
When an event starts from its target element or the element that started it, it goes through its parent element, grandparents element, ancestor element up to the root like a bubble emerges from the bottom to the top of water and this mechanism is called event bubbling.

if a button's position is like body> parent-div> div> button  then if the button is clicked the buttons event will be activated, then div event, then parent event, then body.


## 4) What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is a method where instead of attaching event listener to every child, it is added to a common parent.

It is useful because -
        - it reduces the code by adding a single listener
        - it works even if new child is added


## 5) What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() stops the default action of an event like it preventing submit button from submitting the form, preventing a link from following the url, etc.

stopPropagation() stops an event from being called again and again or in other words it stops event bubbling.