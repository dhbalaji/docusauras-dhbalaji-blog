---
title: Introducing Google analytics product for developers - Part 1
date: 2020-10-24 15:38:36
tags:
- frontend
authors: [dhbalaji]
---

 
![Google-analytics for dhbalaji.dev blog](./assets/dhbalaji-google-analytics-homescreen.webp)

Google Analytics is a common product used for web analytics. I had been using google analytics since my first blog in 2010. It was google analytics which told me that I had 60,000 plus visits to my blog post related to Micromax Ezpad phone and how to share the phone internet connection with Ubuntu OS.

As a front-end engineer, you cannot get away without writing or copy-pasting analytics code. To work with analytics code effectively, developers need to understand the terms/jargon used by Google analytics. In this blog post, I will share with you an introduction to google analytics in a developer-friendly language.


## 1. Lets take a look at the product to begin with...

This is how the google analytics product looks like for my blog


 ![Google-analytics for dhbalaji.dev blog](./assets/dhbalaji-google-analytics-homescreen.webp)
 
 For developers who are familiar with other Google products like Google cloud platform UI, the UI should sound similar. Its the same material UI and dashboards.
 
 The product has all the 
 
 * Functionality related UI on the left of the screen.
 
 * The home page of Google analytics has reports which are customizable. This is by virtue of dashboard logic. Yes, all dashboards need to be customizable by default.
 
 * The information of the user using the analytics application is on the top right. There are a multitude of user privileges you can have in google analytics. It means there will be an admin, a user who can only view, someone who can view and also edit, etc.
 
 * Towards the bottom left is the UI to perform admin operations.
 
### 2. Can you describe Google analytics as a system?

yes, google analytics is a software system with the below specs.

**Primary use** - Analyze the user traffic on the app/web and track conversions.

**Input** - Data collected on the website/app/any source by Javascript tracking code.

**Output** - Data is shown to the professionals for analytics purposes. The output of google analytics mostly reports.

**Processing operations** - Data from trackers code is captured at different stages of the customer journey which is later analyzed by google analytics and saved in a read-only database.

**Presentation logic** - A lot of data is collected about the user like his age, demographics, browser, etc. By using the right filters, we can simplify the data for presentation and analysis.

**Privacy controls** - Google analytics is privacy-aware, it means you can instruct the system to exclude certain data from getting collected from the user. 

## 3. How does Google analytics identify each website or app using it?

The identification happens through a **unique ID** which is included in the Javascript trackers code. This unique ID is generated in the admin section of the Google analytics


## 4. Is data analytics limited to the web?

The source of data to Google analytics is called **data streams**. The web is of course a popular data stream. The most popular data streams are the 

* Web
* IOS app
* Android app

For instance, a web data stream contains information about page views and events performed by the user.


## 5. Are there any must know jargon/terms?

Yes, there are a few of them.

**Session** - Can also be called a Page session. The session life cycle is as follows. When a user lands on your website, the session is started. The user then performs some action on your website which is called session events/events. The user leaves your website which marks the end of the session. 30 minutes of user inactivity also marks the end of the session.

**Customer Journey** - It is the sequence of steps taken by the user to achieve your goal. Let us say you run an online apparel e-commerce store. Your expected customer journey would be 
    
    1. Visit the product page
    
    2. Enter payment information and
    
    3. Place an order for the product. 
    
Each customer journey has a series of steps to be taken by the user. We will be tracking how many users complete each step of the journey. One hundred percent of users on step 1 will not be completing step 3 which leads to another concept called a funnel.
 
**Conversion funnel** - Tracking the number of users at each step of the user journey is called the Conversion funnel. It is also called a sales funnel.

**Views** - This is synonymous with a screen/view in a web application. The user of google analytics needs to configure the view for a particular goal, like to view the users on some stage of the customer journey. Once configured, google analytics will capture and process the data required by the view. The collection of data for the view starts when the view is created. One view is deleted, it can be restored for a limited time.

## 6. Can I access google analytics with a normal Gmail account?

Absolutely yes, a normal Gmail account can be used to access Google analytics. however, if you are working in a business house, the admin of google analytics will decide if you will have the privilege to access to property and view.

## 7. What is google analytics property and view?

The property and view constitute the information hierarchy in Google analytics.

In any product we have information, the information will be organized in a certain manner for retrieval and use. For instance, in MS Excel, we call it `sheets`. On MS Powerpoint we call it `slides`.

Let's say I have a dhbalaji.pptx file with a slide named "Google Analytics". The same in Google analytics would be like a property called Dhbalaji and a view called "google analytics".

The app/website becomes property. The data which you want to analyze becomes a view.

## 8. What is the first step for developers to do with Google analytics

For learning purposes,

1. Sign in with your Gmail account

2. Create a property
    1. Creating property gives you tracking code & global site tag
    2. Tracking code is unique for your property and you need to put it in the site tag if it's not included.
    3. Global site tag is a piece of code we need to put in the head section of every page of your website.

3. Tag is a keyword to remember. Tags are used for site tracking. When you have multiple tags, we need to manage the tags with the google tag manager.

4. Verifying the tag setup is easy. You can see the real-time report and find out the number of active users on your website. The real-time report showed 1 when I set up my Google Analytics on my website.

5. For debugging, you have [Tag assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk). Its a free chrome extension offered by Google to work with global site tag code.


![gtag.js on dhbalaji.dev blog](./assets/gtagJS-on-dhbalaji.dev.webp)

## 9. Show me something advanced that you can do with google analytics

1. You can do site linking. It means you can collect sessions from 2 unrelated websites and link them as a single session. It can happen that your user journey runs through 2 websites but the session is treated as one. Is it that not advanced.

2. Whether you like it or not, google analytics will set cookies for you. There will be a unique cookie ID for a domain. In the case of site linking. You need to set the same cookie ID for different domains. To do this successfully, you need to know how to set cookies with the response header.

3. Google Analytics will not only track the session and the events but also the referrer of the session. Let's say a user comes to the Dhbalaji.dev website from LinkedIn. Then LinkedIn becomes the referrer. 

4. Outbound links to other websites can be tracking with extra JS code in the corresponding event handlers.

## 10. What are the out-of-the-box features provided by google analytics?

Let us say you set up Google analytics with a global site tag on your website. The following things will happen.

1. the page view measurement will happen by default

 > A single session can have multiple page view. To know why think about the session life cycle.


