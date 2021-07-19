Implements a basic local web server, with Express.js.

To send a POST request, enter the command `curl -H "Content-Type: application/json" -X POST http://localhost:8787/hash -d "{\"data\": \"This is a string\"}"`, in the Command Prompt (cmd), while the local node is active.

This is what it should look like:

First, run the code on the console:
`Local Node is now active.`

Enter the POST request in command prompt:
CMD: `curl -H "Content-Type: application/json" -X POST http://localhost:8787/hash -d "{\"data\": \"This is a string\"}"`.

Console:
```Local Node is now active.

Data is:  {"data":"The Answer to Life, the Universe And Everything is 42!"}
{"hash":"be8f737bb76c34cfa62bd1a7890c346ee469dd6586ae9d5d01ffeeb61273ca35"}```

