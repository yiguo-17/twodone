// Loads our todos in.
const loadTodos = function() {
  // this function will run as an event listener... do the bottom part first!
  const handleLoadedTodos = function() {
    // xhr has a `responseText` property, which, in this case, will hold our JSON response. Run JSON.parse on it, and we'll get back our todos property from our todos.json, an array of todos. Put it in a variable.

    //Now either splice our global todos and, while looping through our loaded todos, push them each in, or just change our todos array to be defined using `let` in the other file and reassign it here to be the loaded in todos instead of whatever used to be in there.

    // Now call your helper function(s) from your front end to clear the todos from the dom and re-print them. and you're done!

  }

  // Make a new XHR object using XMLHttpRequest(). Don't forget the `new`!

  // Add the above helper function as an event listener on our xhr using xhr.addEventListener. It's just like a node element's event listener, but the event we want is 'load'.

  // call the xhr's `open` method, passing it the request type of 'GET' and the url of our localhost with the port 3000 and '/todos' on the end.

  // Now call our xhr's send method, and our event listener will be called when the server gives us a response!

}

// When you're all done with the above function, call it here. We can test it works by adding a new todo manually to the JSON (watch your double quotes and commas!) and reloading the page to see if it grabbed the new data. Make sure your server is running!



// This function takes in a todo and uses xhr to send it to our database.
const postTodo = function(todo) {
  // An event listener function (could be done inline instead!)
  const handleNewTodo = function() {
    // For now, just parse the responseText and console.log it.
    // For a post, we just want to check if it posted!
    // The response if it did will just be our new todo object.

  }

  // Create a new XHR, add the aboe function as an event listener, and open it, just like before. Use 'POST' instead of 'GET' is the only difference so far!

  // Here's where things get a bit different.
  // Create a data variable that's the JSON.stringified vesrsion of the passed-in todo object.
  // Then use xhr.setRequestHeader to tell the server we're sending JSON. Quick bit of code, but you will have to research it!
  // Then, when you use xhr.send, pass in the data variable, as we're actually sending something this time!

}
