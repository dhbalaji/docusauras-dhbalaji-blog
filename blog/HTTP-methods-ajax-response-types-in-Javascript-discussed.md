---
title: HTTP methods, timeout & ajax response types in Javascript discussed
tags:
  - frontend
date: 2021-06-10 23:59:13
authors: [dhbalaji]
---

![Some alt text](./assets/async-service.webp)

GET and POST are the two commonly used HTTP methods. The REST API calls can return a variety of response data types like text, array buffer, blob, document, and JSON. Let us discuss the lesser-known response datatypes in this article.

<!-- truncate -->
 
## Creating an Ajax call in Javascript

After working with tools like Axios, fetch APIs, and other wrappers, I had almost forgotten what it is like to create an XMLHttpRequest in Javascript. This is close to my heart because this piece of code helped me clear the director round interview of my second job.

```javascript
var xml = new XMLHttpRequest();
xml.open('POST', '/api/endpoint', true);
xml.setRequestHeader( 'Content-Type', 'text/xml');
xml.send('username');
```

The above piece of code helps you with the request, the response would look as below

```javascript
xml.responseType = 'blob';
xml.addEventListener('load', callBack, false);

function callBack(event) {
    if (this.status == 200) {
        var blob = new Blob([this.response], {type: 'img/png'});
    }
}
```

There are 5 data types that a responseType can accommodate, they are 

1. document
2. text
3. JSON
4. blob
5. array buffer

Document: Results are assumed to an XML document. It could be an HTML document as well. The server is responsible for validating and sending the HTML to the client.

Text: Response contains a string of text.

JSON: Response contains a JSON document. This is a very popular format in the REST calls.

ArrayBuffer: Response contains an array of binary data. The developer cannot manipulate or display the array buffer contents directly. Instead, the developer needs to use a typed array view that can process the array buffer. As the name suggests, they are used in streaming audio/video to the frontend.

> Array buffer is a built-in Javascript object

Blob: Response contains a file-like object of raw data.

## Read the percentage completion of a request

The loader animation can be changed on certain ajax events like

- onLoadStart

- progress

- load

- error

- timeout

- abort - triggered when the user cancels the download in this case

```javascript
var request = new XMLHttpRequest();
request.timeout = 5000;
request.addEventListener('loadstart', callback, false);
```
