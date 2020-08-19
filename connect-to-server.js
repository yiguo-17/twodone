// Loads our todos in.
const loadTodos = function() {
  // this function will run as an event listener... do the bottom part first!
  const handleLoadedTodos = function() {
    const arr = JSON.parse(xhr.responseText);// xhr has a `responseText` property, which, in this case, will hold our JSON response. Run JSON.parse on it, and we'll get back our todos property from our todos.json, an array of todos. Put it in a variable.

    for(const todo of arr){todos.push(todo)}//Now either splice our global todos and, while looping through our loaded todos, push them each in, or just change our todos array to be defined using `let` in the other file and reassign it here to be the loaded in todos instead of whatever used to be in there.

    clearTodos();
    printTodos();// Now call your helper function(s) from your front end to clear the todos from the dom and re-print them. and you're done!

  }

  const xhr = new XMLHttpRequest()// Make a new XHR object using XMLHttpRequest(). Don't forget the `new`!

  xhr.addEventListener('load',handleLoadedTodos);// Add the above helper function as an event listener on our xhr using xhr.addEventListener. It's just like a node element's event listener, but the event we want is 'load'.

  xhr.open("GET",'http://localhost:3000/todos');// call the xhr's `open` method, passing it the request type of 'GET' and the url of our localhost with the port 3000 and '/todos' on the end.

  xhr.send();// Now call our xhr's send method, and our event listener will be called when the server gives us a response!

}

// When you're all done with the above function, call it here in the global space so it runs on page load. We can test it works by adding a new todo manually to the JSON file (watch your double quotes and commas!) and reloading the page to see if it grabbed the new data. Make sure your server is running!

loadTodos();

// This function takes in a todo and uses xhr to send it to our database.
const postTodo = function(todo) {
  // An event listener function (could be done inline instead!)
  const handleNewTodo = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
  }// For a post, we just want to check if it posted!
    // The response if it did will just be our new todo object.
    // So for now, just parse the responseText and console.log it.

  }

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',handleNewTodo);
  xhr.open("POST",'http://localhost:3000/todos')// Create a new XHR, add the above function as an event listener, and open it, just like before. Use 'POST' instead of 'GET' is the only difference so far!

  // Here's where things get a bit different.
  const str = JSON.stringify(todo);// Create a data variable that's the JSON.stringified vesrsion of the passed-in todo object.
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(str);
  // Then use xhr.setRequestHeader to tell the server we're sending JSON. Quick bit of code, but you will have to research it!
  // Then, when you use xhr.send, pass in the data variable, as we're actually sending something this time!

}

// When you're all done with the above function, test it by wiring it up in your Add Button event listener on the front end. Call it along with your addTodo and printTodo, passing in your new todo.


// Stretch goal: update todos with their completeness changed. Write an updateTodo function that takes in a todo from the front end, jsonnifies it, and sends it with a PUT request. The main difference from post is that we send it to todos/[id], where the id is the id of the todo we want to update.

// You can test it by wiring it into your todos' click event listener. After you toggle the `todo` object's completeness, pass it to this stretch goal function. If you did it right, when you click on the todo, the JSON file will change, with the todo's `complete` changing from false to true and back.
