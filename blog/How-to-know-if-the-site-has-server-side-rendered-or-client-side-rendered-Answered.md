---
title: >-
  Server-side rendering vs client-side rendering. Which one should you choose?
date: 2020-10-17 19:48:50
tags:
    - frontend
authors: [dhbalaji]
---

![JS bundles client-side rendering](./assets/client-side-rendered.jpg)

Let's understand the word rendering. Rendering in front-end engineering means, you are generating an HTML view for the user. There are different approaches to render a view. Client-side rendering, server-side rendering are 2 of them

Let us say I request a home page from the server. If the server sends the full document aka HTML to the browser then we call it server-side rendered. If you `view source` of the page, we can see full HTML under the `body` tag. This blog for example is server-side rendered theoretically. In the case of [React SSR](https://reactjs.org/docs/react-dom-server.html), the reacts components are rendered on the backend, and HTML is sent to the client. Hydration of components will happen on the frontend. During hydration, the event handlers are attached to the markup.


If the server sends a `root` div under the `body` tag where the react DOM will be rendered later by the client, then we call it client-side rendered. When implemented correctly, the client-side rendered apps will have a seamless transition between different pages of the application. By seamless, I mean without reloading the whole page, the web app will behave like a mobile app, loading the screen quickly.

> Look for HTML markup under `body` tag. If a full document is found, then its server-side rendered page. If only a placeholder `div` was found, it's client-side rendered.

On a side note, there are a subset of apps where the layout DOM is cached on the client. Its also called [app shell](https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73) and the HTML/JSON for the remaining parts are sent from the server.

## The technical side of building client-side rendered apps

In client-side communication, we have to take care of 3 important elements of the app. i.e.

1. Routing - the URL is matched to the page on the client-side. It simply means there is no HTML page for each route, the router code does the magic of creating a page for the route. If the route is not matching, the client-side logic throws a 404 page if configured. In react, all of this routing is handled by React-router.

2. Managing application data - the application data has to be shared between different pages. This calls for better state management which can be done by Redux. Redux is a concept, to make it compatible with reactJS. We use react-redux which gives the right bindings.

3. Communicate with the server - We need to persist the user data to the database. This calls for REST API or GraphQL servers.

Overall, we are engineering a lot of code to run efficiently on the browser. It means there will megaBytes of minified JS bundles running the app for us.



## The technical side of building server-side apps

1. The HTML code is written in a templating language like PUG and the data is compiled with the template to generate a page on the server. The generated HTML markup is sent over the network to the browser. The browser's time taken for first contentful paint can be reduced significantly by taking a server-side rendering approach.

2. We need a more powerful server-side infrastructure because sending JSON data via API is less memory & CPU consuming than sending the whole page to the client

{% asset_img server-side-infra.jpg server-infra for server-side rendering %}

## Client-side or Server-side rendering? Which one triumph?

If client-side rendering is a clear winner, we would not have libraries like NEXTJS. If the server-side was a clear winner, we would not have an explosion of Javascript frameworks like React stack, Angular, etc.

We have something to learn from NextJS.

1. The first request for a page is server-rendered. The client quickly gets to display the document instead of having to parse the JS.

2. Subsequent requests are rendered by the client, reducing the load on the servers, reducing resource time & enhanced UX. 

I prefer the mix of both server + client-side rendering. This combination enhances user experience.

#### References

[Toptal blog](https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering)

[NextJS](https://nextjs.org/)
