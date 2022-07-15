---
title: Cache busting GET calls with cache-control headers
tags:
  - frontend
date: 2020-12-09 07:58:41
authors: [dhbalaji]
---

![cache calls](./assets/cachecalls.webp)

One of the performance optimization techniques is to serve data from the cache and lookup for the network if the cache fails. It's called cache first then network strategy. Life moves fast and if the API has to get updated information, it's impossible because we are reading the cache always. Is there a way to bypass cache in this setup? Yes, it's cache-control headers.


 
## What is cache in programming & a little bit about related jargon

The cache is similar to duplicating a response to use serve the response when required. The cache may be used as-is or after validating for changes from the server.

The place where we store the cache is called `store`.

Caching about the frontend can happen in the browser, on the server-side, or at the CDN level, we can have caches.

The cache is beneficial only when managed correctly, when it reaches a stage it's unmanageable then it will be a problem. A cache should serve the local data only as long as the data at the source has not changed otherwise the user might see old data.

There are 2 types of cache. The private cache is like a private car. To be used by one client. The other variant is the shared cache. The shared cache could be caching the home page on the server which will be served to multiple users.

> HTTP caching is applicable for GET calls & it cannot be applied for other HTTP methods. the URL becomes the key in the cache

## Cache-Control header? What's that?

Now that we know the cache & its types. We need a control mechanism for the cache. Its provided by the `Cache-Control` header.

Before we take more about it, the reader should know what is a header. The header is present in both the request and the response. In the request, it's called the request header. On the response, it's called the response header. The request header can be modified by JS code in the browser.

## How to bust browser GET calls cache?

The old school way is to ensure the GET call URL looks different or is different.

1. In webpack we have the hashing of build files so that the URLs are reaching the server to get the new files after the new build.

2. In `REST` get calls the query param is changed so that the browser thinks it's a new request and bypasses cache. For instance, using `Date.now()` as the query hash. The common versioning by API number is a commonly accepted syntax.

> In the case of browser get calls we cannot do header change to do cache busting, we have to fallback to generate unique URLs.

## How to cache bust API Calls generated from code?

If you use a package like `axios` or any other to generate GET calls, we have the API to generate request headers for the API calls dynamically.

For instance, we can set the header to cache bust when the user clicks on the `refresh` button else get the response from `cache`.

## What are the header options to no cache?

> Technically we want to instruct the browser not to store the GET call in the cache. We call it no-store

We can use `Cache-Control: no-store`. The request and the response will not be stored. If an existing cache exists, it will be ignored. If you have a request header with `no-cache`, the request is sent to the server and the full response will be downloaded.

## What if we want to validate the cache with the server each time?

We want to serve fresh data as much as possible at the same time use cache if possible. So we use `no-cache`. Though it sounds confusing at first. `no-cache` is about checking correctness with the server before using the cache.

> no-cache should technically be called cached but validate each time

## How do I prevent a cache from stored in public caches

We can enforce rules to cache. For instance, I do not want my bank GET calls to be cached by my ISP. In that case, the developers need to use

`Cache-Control: private`

To recap, private means cache for one user. Public means the request can be cached and served for multiple users.

`Cache-Control: public`

## What if I want my cache to expire in one day

We have `max-age` which takes time value in seconds. If you set the max-age to 3600 seconds. Then the cache is considered for one hour since the request has been initiated.

`Cache-Control: max-age=3600`

## What if I want my cache to be private, validated each time

We can separate the values for `Cache-Control` by a comma.

`Cache-Control: private, max-age=3600`

## What's the browser support

`Cache-Control` was introduced in HTTP 1.1. For backward compatibility, we can use the `pragma` header.

## Can we classify the data in the cache

The cache data can be classified as 

1. Fresh - means its relevant and data has not reached expiry date

2. Stale - it's past the expiry date set by the max-age

## How much cache can we store in the browser

There are a few things about cache

- Cache is dependent on the resources

- Not all of my cache will be stored on my browser forever. The cache works in LIFO format. Let's say I have a cache key that was not used for a long time. It might get dropped when there is a resource constraint. Technically we call it `cache eviction`.

## How does this conditional validation of cache work

We can trigger a conditional request. Think of it like a ternary operator in JS.

`const isIndian = hasAadharCard ? true : false; // lol`

In the above example, based on the `hasAadharCard` value. We are assigned a boolean to `isIndian`.

If the request header has an `If-None-Match` header, then we are triggering a special variant of HTTP call which will get

- Full response downloaded when the data has changed on the server. This call is similar to the GET call getting a status code of 200. This change is based on a comparison of the `ETag` code.

- No response when the data has not changed on the server. This call gets an empty response because the cache is going to be released in the place of response by the browser. The status code is `304`

behind the scenes, we send an extra header

`If-none-match: "329772378483289832989328932893298ndo28938293"` the code is the `ETag` code which is sent as part of response header. ETag is like the version number for your cache. If the version number (etag code) matches, then the cache version is used

> When the ETag codes are the same, then we can sure that the cached content is the same byte for byte so we can use the cache on the browser in place of response. That's why the server sends a 304 status code.

Sometimes browsers are smart enough to cache data and compare it with the server without the developer writing any code for caching functionality. But it's unreliable so it'
s better to take better control by setting `Cache-Control` headers.

## If header values are comma-separated, what's the precedence

Here are a couple of things to know

- Some combination of header values makes it invalid

- If you have max-age and the value is valid. Let's say you set the cache age to 1 year. The data is considered fresh for a whole one year and the data validation does not occur. Unless you have `no-cache` mentioned.

## Why does one prefer to use cache

- It's for performance reasons. The benefits are manifold

- If the server returns 304, then the transmission of data over wire is reduced. It's a performance gain.

- If an asset is a cache for some time. The subsequent API calls are returned from disk instead of the server. That's a huge performance gain.

- Caching content on the server can be served to multiple users. This is called the public cache.
