---
title: How chrome lite version works and how it impacts your page/app
tags:
  - frontend
date: 2021-03-13 15:41:07
authors: [dhbalaji]
---

![chrome lite](./assets/chromelite.webp)

Mobile data is expensive. The browsers need to think about their customer's mobile data before serving the full website which on average weighs 3MB. In chrome we have a setting called data saver, let us dig deeper into it.

<!-- truncate -->
 
## What is the objective of the data saver?

Before we understand more about chrome lite or data saver setting, we need to understand that data saving is an option only on the Android Chrome browser. The data saver on chrome is not applicable for Desktop chrome or IOS devices.

The data saver objectives could be 

1. Loading page faster when the page loads slowly on mobile data.

2. Save mobile data utilization.

> The documentation says that chrome data saving works mostly when the phone is using mobile data. I believe it's ignored mostly when on Wifi connections. But it might kick in when the page loads slowly on mobile.

## How does chrome data saver works

The documentation uses a phrase called "Google servers" or "Google data compression proxy".

The page is loaded on the google servers first and the light-weight version is sent to the Android chrome browser so that the objectives are met.

## Can it affect your web app functionality

The answer is a yes and a no.

Static content which gets rendered at once will work normally. The dynamic content like lazy loading etc might face some issues. These issues can be identified quickly with a proof of concept at the beginning stages of the application.

However, the defects arising out of the data saving mode would be minimal in my opinion because it makes Android chrome an unreliable platform for developers.

## Other things about data saving

- The data saving setting is not clearly under our influence. The Google servers can change the rules suddenly which can impact our website.

- Testing on newer versions of Android chrome with Canary builds can mitigate the risk of some functionality not working on Android chrome with data saver.

- Data saving won't work with incognito mode or private windows like guest mode.

- Images will be optimized by google servers before sending to Android chrome while on mobile data.

## How to programmatically detect data saving in chrome

All things related to the browser are mostly with navigator objects. We can check with the navigator property.

```javascript
if (navigator.connection.saveData) {
    console.log("data saver on");
}
```

## How to know more about "Chrome lite mode"?

You should google for "Google data compression proxy". A detailed article can be found at <a href="https://research.google/pubs/pub43447/">Google research</a> but the article is outdated.
