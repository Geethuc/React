// This block of code creates an `h1` element with the text "Hello World from JavaScript"
// and appends it to the element with the ID "root" in the DOM.

/*

 const heading=document.createElement('h1');
 heading.innerHTML="Hello World from javascript";
const root=document.getElementById('root');
root.appendChild(heading);

*/


// This block of code creates a complex element structure using React and renders it 
// within the element with the ID "root" in the DOM.


/*

const heading=React.createElement("h1",{id:"heading"},"Hello World from javascript");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*/



// Create a parent div element with an id of "parent" using React.createElement.
// The parent element contains two child div elements: "child1" and "child2".

const parent = React.createElement("div", {id: "parent"}, 
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ])
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);