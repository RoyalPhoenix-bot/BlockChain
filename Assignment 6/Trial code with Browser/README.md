This implements the same code with interaction with the web browser.

Steps to run: 

1. Run the code, so that local node is activated.
	Console: `If I'm printed, the Local Node is Active.` (It listens on node 8787).

2. Open a web browser and go to the url: `localhost:8787/hash`
3. Enter the data (only string) on the browser.
4. After pressing Submit, the hash is displayed on the browser. And the console also displays: 
	```
	If I'm printed, the Local Node is Active.
	
	Data is:  {"data":"The Answer to Life, the Universe And Everything is 42!"}
        {"hash":"be8f737bb76c34cfa62bd1a7890c346ee469dd6586ae9d5d01ffeeb61273ca35"}
	```
 