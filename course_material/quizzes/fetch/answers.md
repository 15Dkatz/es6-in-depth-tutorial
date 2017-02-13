Optional Quiz: Revisiting Fetch and HTTP

​Here you have the option to take a quiz on Fetch and HTTP. Hopefully a couple questions will strengthen the knowledge you gained when learning about Fetch and HTTP.

1)

Which HTTP request method retrieves data from a resource and has no secondary effect?

**a) GET** //answer

Explanation: Correct!

b) POST

Explanation: Incorrect. The POST HTTP request method sends data to a server for it to update existing resources.

c) HEAD

Explanation: Incorrect. The HEAD HTTP request method finds meta-information such as the title of a resource.



2)

Which of the following demonstrates a proper use of the fetch API function? Assume that 'root' is defined: root = 'https://exampleapi/posts/1'.

**a) fetch(root, {method: 'GET'})** //answer

Explanation: Correct! To consume the promised data, add a couple .then() statements to the fetch.

b) fetch().then(root).then(data => data.json());

Explanation: Incorrect. The fetch function takes a path as its first parameter, and any specifications in an object as the optional second parameter.
