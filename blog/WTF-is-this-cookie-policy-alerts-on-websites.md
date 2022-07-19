---
title: WTF is this cookie policy alerts, third pary cookies on websites, etc
tags:
  - how-it-works
date: 2021-01-09 22:02:17
authors: [dhbalaji]
---

![website cookies](./assets/website-cookies.webp)

A cookie is a simple and important feature in frontend engineering. In fact, without cookies, most web apps may not be able to identify you. For instance, your Gmail won't remember you. You have to enter login and password again. If cookies are a must-have, why are websites asking for permission about cookie usage? Let's find out below.

<!-- truncate -->
 
## What are the uses of cookies on the internet?

Some of the use cases are indispensable for a web application to work. For instance storing login information, user preferences, etc. We do not need permission for this stuff.

Things get complicated when we use cookies for purposes related to tracking your activity. For instance,
 
 > what if my website uses cookies that are collecting data about your activity and reselling the data to another third party

Using cookies for tracking and marketing purposes is a huge industry. Most websites on the internet are supported by ads and not subscriptions. This calls for cookie usage for tracking purposes to augment the revenue to run the business.

> When cookies, tracking, data collections were caught, new rules were put. Based on your permission the tracking continues or discontinues in theory.

Things like tracking user behavior, selling data is something to be done based on user consent. That's why many companies changed their terms of use and spammed our inboxes when GDPR was announced.

This is the reason why websites ask for user consent when working with cookies for other purposes. My blog does not have a cookie policy because there are no ads or tracking except for google analytics.

## How to implement third party cookie on your website

To understand this we need to know how a cookie is set. A cookie is sent and received by the browser through HTTP request headers. When an HTTP request contains a cookie header then the cookie gets set for that domain from where it loaded.

Before we get there we need to know about the 2 basic terminologies.

1. First party cookie - They are generated, set on the same domain. Dhbalaji. dev website sets a cookie to Dhbalaji. dev. In programming, anything "First" has certain enhanced features. In the first-party cookie, we can set and read the cookie from Dhbalaji. dev.

2. Third-party cookie - This cookie is generated from another website and set to that website through an intermediate site. For instance, I have 2 websites (one not working though) bookstoc.com & Dhbalaji. dev. I want to track if the user visiting Dhbalaji. dev is visiting bookstoc.com. 

I would set a cookie to the bookstoc.com website from Dhbalaji. dev. In this case, the cookie can never be read from Dhbalaji. dev but it can be read from bookstoc.com. Based on cookie content I can be aware of user behavior.

## Let's get to the code

Understanding that cookies are transported through HTTP request headers is an important concept. It's not uncommon to find developers not knowing how cookies get transported on the internet.

**User story**: Given the business owner has 2 websites, when the visitors visit his first website A1 then the cookie needs to be set on another website A2

**Analysis**: Though setting a cookie on the same domain happens through `document. cookie` Javascript, but the same cannot be used to set cookies to A2. We need to use an HTTP request from the A2 website/domain.

**Solution**: Load a 1px transparent pixel from the A2 website from A1. You need to add an image tag, since it's a small image there will neither layout change nor performance issue. I do not recommend using hidden images, they are never loaded to DOM. When the image loads then the cookie is set to A2 from A1

## Any caveats?

It's the browser on which the above user story needs to be tested. For instance, browsers can completely block cookies or some extensions can block third party cookies, etc. So 100% working solutions cannot be guaranteed.

## What goes into cookie content?

I was not very curious about cookie content. Here is my guess. The cookie can have an encrypted code which the network of websites can decipher or share information.

For example, the ad networks can have cookie set of different websites which contain tracking information useful for serving ads.
