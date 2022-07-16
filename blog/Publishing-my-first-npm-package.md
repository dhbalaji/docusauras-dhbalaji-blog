---
title: Publishing my first npm package
date: 2020-11-05 20:04:14
tags:
- frontend
authors: [dhbalaji]

---

![starting my first npm package](./assets/start-npm-package.webp)

How does anyone know if their customer got any JS errors/application crashes? How does the operations team know about the crash before the customer screams on email/social media? Finding an answer to this question led to the building of my first `npm` package. 


## What is the motivation behind this npm package

Every front-end app needs error reporting and monitoring.

Error reporting means, the application errors need to be sent to the developer for analysis and fixes. The next step is the monitoring for which you can run some cron job etc.

Most JS frameworks/libs do not have support for error reporting to the service. Things like Reach error boundaries can stop the app from the complete crash but how will the developer sitting elsewhere know about the crash that happened to the end-user? This is a gap which this npm package tries to solve


## What about amazing tools out there?

There could be amazing tools like sentry etc but they are cloud-based. If you are working in a company, you need manager approval, and it's a paid app. The manager will hate you because of its difficult times.

Moreover, we have to analyze the data policy. Some people think open source is free which is not true, the developer's time costs money. So setting up an open-source sentry is not an option at all.

## Was deploying to npm easy

Deploying to npm is easy but deploying the right is hard without `npm`.

1. Scaffold the npm package with `npm init`

2. create a JS module with `module.exports`

3. The functionality can depend on other packages as well.

4. Meanwhile get the login access at npmjs, set it up on the local machine & `npm deploy`

5. The source code can be exposed to Github. So push it to a repo on GitHub.

6. But you see the code and node versions are not tagged. so we need to use `npm`

## what is this npm package about 

np is a CLI utility that ensures you follow all the best practices when you do an npm publish.

publish can be hard because you need to take care of `server` & tag the version on git.

All of this is taken care of by [npm](https://www.npmjs.com/package/np). It's free to use.

## What's next?

There are useful metrics we can collect from the site of error. It could be `navigator` object information and much more.

The immediate step is to fixate on the information that will be collected & reported.

The collected information needs to be easily clubbed up with tools like `SPLUNK` for monitoring.

Of course, there is a lot of work to do.

## Anything else

After a long time, I got to write some code outside of `React`. I wrote a basic Javascript class and instantiated the object.

## References

[send-js-errors-to-backend](https://www.npmjs.com/package/send-js-errors-to-backend) on npmjs

[src on github](https://github.com/dhbalaji/package-JS-error-to-service)
