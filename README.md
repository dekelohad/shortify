# Shortify App

Shortify allows users to shorten their URLs and save them conveniently.
Short url is a way to count the number of hits per URL, we should save the original URL and redirect to the original URL.

# Mockups:
list https://ibb.co/80KvwQN  <br>
new URL https://ibb.co/G5jdqSH

## Technologies:
React ,Redux Toolkit, Node.js, Express.js, MongoDB.


## API routes:

### The API contains 4 routers.

  * POST	api/urls - Create a new short url.<br>
  *	DELETE api/urls/:shortUrl - delete a url by shortUrl id.<br>
  *	GET api/urls/ - get the list of all the saved URLS
  *	GET api/urls/:shortUrl - get url by shortUrl and redirect the user to the orginal url.



### The Client consist of 4 pages:

1.  404 Error Page:
    *	If the user tries to go to an undefined route he will get to the 404 error page which allows him to redirect to the Homepage.


2.  Admin Page:
     * Describes the features of the app to the user.

3.  NewUrl Page:
    *	Allows the user to create and save urls.

4.  Reports Page:
    *	Displays all the URLs of the user in the table, the user can delete any URL he wants.<br>

The app state is managed by Redux Toolkit and we presist the state using redux-persist , the state is consists of 1 slice: the userSlice. 
The asynchronous parts of the app are managed by redux-thunk.


## Getting started

### How to run the  Client Side?

```
$ git clone https://github.com/dekelohad/shortify.git
$ cd shortify/client
$ npm install
$ npm start
navigate to http://localhost:3000
 ```


### How to run the Server Side?
 

```
$ cd shortify
$create a .env file in the root of the project directory and within it, you will need to enter your MongoDB credentials.
$ npm install
$ npm run server
navigate to http://localhost:5000
```

 
 


 
