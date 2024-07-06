---
title: React Nexus 2024, Good Parts. A Consise Summary in 100 points.
tags:
  - react-conferences
date: 2024-07-05 17:30:30
authors: [dhbalaji]
---

<head>
  <meta charSet="utf-8" />
  <meta property="og:title" content="React Nexus 2024, Good Parts. A Consise Summary in 100 points." />
  <meta property="og:image" content="/img/2024/react-nexus.jpg" />
  <meta property="og:url" content="http://dhbalaji.dev/blog/2024/react-nexus-2024-good-parts" />
  <meta property="og:description" content=" This concise blog post highlights the React Nexus 2024's best aspects, helping you recap the big ideas that were discussed!" />
  <meta property="og:type " content="article" />
  <meta name="twitter:title" content="This concise blog post highlights the React Nexus 2024's best aspects, helping you recap the big ideas that were discussed!" />
  <meta name="twitter:image" content="/img/2024/react-nexus.jpg" />
  <meta name="twitter:description" content="This concise blog post highlights the React Nexus 2024's best aspects, helping you recap the big ideas that were discussed!" />
</head>

![](../assets/2024/react-nexus.jpg)

The objective of this post is to summarize the key points discussed in React Nexus 2024 conference in 100 points. I call them good parts of React Nexus 2024. I add my commentary along the way. Hope you like it and read all the way from good parts #1 to #100.

## Good Parts

### Venue & Arragements

1. The selection of [React Nexus 2024 Venue](https://reactnexus.com/#venue) was Apt, not just easy for attendees but also in line with react nexus 2023 venue. Radison Blu Marathahalli is our 2 day adda (means a social gathering or hangout spot).

2. The rockstars of the conference, the speakers were simply meritorious and profound. The full list along with their linkedin and X handles can be found on [React Nexus Speakers Section](https://reactnexus.com/#speakers) 

3. The conference vibe was kindled by a giant screen resembling a movie theatre and JBL speakers playing [deep dope beats](https://www.youtube.com/watch?v=DA-ChrNuyO0&pp=ygUPZGVlcCBkb3BlIG11c2lj). Further momentum was added by [charismatic emcees](https://reactnexus.com/#mcs) who knew tech and humour.

4. The conference goodies included an name card tag, tshirt which is true to its size variant and few stickers. Minimalistic and useful.

5. The overall conference was jam packed with surprises like traditional yakshagana dance, activities which felt like cardio & desk yoga, standup comedy, Bhangra dance which resembled flash mob, timely coffee and great food.

### Day 1 of React Nexus 2024

6. The first speaker was Naman Goel, spoke about "Designing for design: API decisions for long-term success". Naman is a maintainer at [StyleX JS](https://stylexjs.com/) at Meta. He spoke about the design decisions, importance of inspiration and lineage in developing libraries and quick demos of stylex.

7. Finish your side project to be successful. I do not think this needs any explaination. Simple advice yet profound.

8. React was inspired by functional programming so hooks were inevitable and a natural progression. The same inspiration is a hidden force in stylex JS as well.

9. Evolution of ReactJS be like.. React create class --> JSX --> Real classes --> Functional Components --> hooks --> React server components..

10. Conference talk idea. "Algebraic effects". This is a react concept which is discussed on [Dan Blog](https://overreacted.io/algebraic-effects-for-the-rest-of-us/) and referenced in Naman Goel speech.

11. Trade offs help us to reach the sweet spot in design decisions. I cant agree more, without tradeoff programming would be simply hard for many.

12. React fiber underwent a complete rewrite 8 years ago due to which we are able to add further enhancements to React like hooks, React Server Components (RSC), etc. Its always a good value add to hear directly from maintainers at Meta.

13. The second speaker Nurul Sundarani, spoke about "Beyond the Backend: The Rise of React Server Components". He gave a lightning introduction to React Server Components (RSC in short) and how we can use them with [Prisma](https://www.prisma.io/docs/getting-started).

14. In the era of RSC, every frontend developer will be a fullstack developer too. Tools like Prisma should help you with that transformation.

15. RSC can directly talk to databases, render only on the server so they can have API keys, good for SEO as the HTML and CSS alone can add value to the web crawlers, make the website quick by avoiding render fetch, etc.. The list goes on. Bottomline learn RSC ASAP. Good for you and your business.

16. The third speaker Akash Hamirwasia, spoke about "Enhancing your Static Sites with React Server Components". Yes, RSC can be used on the static website. Sounds contrary? then read on.

17. [Static websites](https://akashhamirwasia.com/) too run on a server and RSC can make use of the file server to do more. I was not able to find the code on Speaker Github but you need to know that its a possibility to do RSC on static websites.

18. I was impressed with ease and confidence with which the relatively young speaker Akash was able to put his point across the room. While I was watching his speech, I was convinced without a doubt. Bottomline, the speaker had exceeding levels of communications skills and confidence. Sometimes you pick up a thing or two non tech skills in a tech conference.

19. The fourth speaker Stefinie Fernando spoke about "Building Secure React Apps with Choreo IDevP". The software Choreo had some similarity with GCP app engine. In choreo the role of the developer ends with commiting code and packaging app into a image. The rest is taken care by Choreo platform.

20. The Choreo platform boasts of complete software development cycle support ranging from CI/CD to deployment on a cluster. To playaround, visit [Choreo website](https://wso2.com/choreo/).

21. Next JS which is a react framework has good levels of RSC support. Other react frameworks like remix are not behind. Think RSC, think react frameworks. RSC have friends too, they are called React server actions. `use server` directive, heard of it?

> If there were one word that was repeated a lot during react nexus 2024, it would be RSC

22. The fourth speaker Vamshi Suram spoke about "Scalable mock data injection into Apollo (GraphQL) Client". Overall the speaker was confortable on stage talking about his open source project [apollo-mock-http](https://github.com/intuit/apollo-mock-http) which helps us with data mocking even in enterprise level applications.

23. Mocking should be done away from application layer so that they can be toggled with a feature switch. This is not advice specific to apollo client but frontend in general. I like this application design pattern. 

24. Good mocking should not hinder or interfere with UI rendering because you loose out on the UI interactivity and animation. This advice is given with the context of react components where devs set data to props directly to mock the data.

25. The fifth speaker Sweta Tanwar spoke about "Defensive Development: Testing Tactics for React Native Resilience". This was the first speech referencing React Native in React Nexus 2024. The content was actionable and could easily be blown up into a full book. 

26. Defensive application development can be broken into 3 categories. Code practices, Testing and CI/CD automation. More details in the next thread.

27. Code practices include code quality checks, error handling with graceful degradation and error boundaries, component isolation before testing

28. Testing practices include Unit testing with Jest, Integration testing with Enzyme and E2E testing with Detox/Appium. On react we are mostly talking about React testing with Vitest and playwright testing.

29. The pyramid visualization was used to show that an app needs more unit tests which are efficient and integration testing at the top of the pyramid which are comprehensive. The pyramid slide will be referenced in my future discussions with architects on why unit, e2e and integration.

30. CI/CD automation of tests can be done to catch regression issues in a automated fashion. We can use tools like circle CI, Travis, etc.

31. The Sixth Speaker Rajat Vijay spoke about "Experiments with AI-Generated Tests". I see the testing theme, pre lunch to be a good idea. Good job organizers. I can sense that Rajat has seen good amount of tests in his career. He clearly outlined the problem with Copilot generated tests and how he intends to fix them.

32. Rajat mentioned a tool titled "auto guardian" which instructs AI tools about the expected quality and style of testing. It looks like a config file for AI testing. I feel this would bring uniformity in the AI testing.

33. Rajat spilled a few interview questions. userEvent vs fireEvent? Whats the difference and which is better. getByRole vs getByText. I will write a blog about these topics soon

34. Rajat referenced https://www.promptingguide.ai/ to understand more about writing better prompts. I believe the future auto guardian would refer to these prompting standards.

35. The testing demo was fun to watch and clearly the quality of tests can be increased greatly. The link to github repo is broken. Rajat plz toggle the repo to public if its private.

36. The seventh speaker were from freshworks, spoke about "AI-Assisted Development: Harnessing the Freshworks Freddy Copilot Toolkit for App Development". The second sponsor speech on day 1. Its interested to see the no code movement gaining steam. Developers can build a full fledged application with a few apps and monetise on the platform. Thats insane.

37. The Freedy Copilot had lot of similarities with github copilot. It needed registration, installation on vs code, type your requirement on chat. Freedy can also deploy to their marketplace. Finally no code app generation is in reach / at times free to use.

38. The different stages from an idea to app. Requirements gathering, design, implemenation & refactoring, testing can be handled by Freedy.

39. Freedy can also build UI for the developers based on the prompt. frontend engineers, gulp it down. Yes AI can build UI. Freedy relies on vision models for generating UI for freshworks marketplace.

40. The engineering behind Freedy copilot was also discussed by second presenter Nagaraj. All I could injest into my mind were LLM, AI and more of it. Finally Day 1 Lunch hour.

41. The post lunch first session featured a panel discussion comprising none other than the react core team from meta, how cool is that. We had Satya talk about the working on React compiler. Yes I heard it for the first time. I know only about React fiber but React compiler is a thing. True to its name, it compiles your react app into something sophisticated.

42. The react compiler could potentially free us from writing useMemo and useCallback as the compiler could do better code optimization compared to a normal developer. However if the compiler identifies a tricky code or hacky code, it will assume that developer is the best judge and shall not mess with it.

43. In React 19, ref is a regular prop. I hope to miss forwardExoticComponentRef in my life.

44. There was a short and sweet answer to breaking changes, if you had been following the modern standards of react development. Then there are no breaking changes that should bother you. So legacy app developers brace yourself, modern app developers rejoice and upgrade to react 19.

45. eslint plugin for react is now updated and optimized for react compiler. However there are many bugs that could escape the eslint and get inferred by React compiler. Code better and do not just trust eslint for react.

46. React Strict DOM (RSD) is an integration of React DOM and StyleX, aiming to streamline and standardize the development of styled React components for web and native targets. We had Stylex maintainer Naman Goel talk about the possibilities of RSD.

47. The conversation quickly moved towards RSC (React Server Components) best practices. Don't waste time hydrating components that are not read/used.

48. Render as you fetch or fetch as you render? An another interview question to note. The panel favoured Render as you fetch as mentioned this is how apps to be built be it RSC or RN

49. use operator is used for reading resources outside of the render. However it being a panel discussion, no demo or code was shown about the use operator. An another speech topic for potential speakers.

50. The road ahead for react team looks like this. Compilation improvements, eslint plugin updates, lot of tooling related work is expected. I remember panel mentioning NextJS, Remix, etc. The panel discussion felt short but Tapas (the moderator) was well prepared with sharp questions.

51. The eighth speaker Prateek Surana spoke about "Elevate your routing game with TanStack Router". Definitely I felt slightly outdated or an idiot for not use tanstack router after his demo. The power and relevance for enterprise use cases were amazing and would prevent developers from reinventing the wheel around routing.

52. Tanstack router is file based, which is easy to understand and relatively hard to scale. To me the most killer feature was auto filter param rename in runtime. Let us say if param was misspelled, tanstack query can correct it for us without breaking the application

53. The overall tanstack tools are squarely built around scaled react usecases which is beyond a simple ecommerce use case. I recommend checking out other tanstack tools and I am also excited to see how the tanstack fullstack comes out to be.

54. The nineth speaker Palak Bansal spoke about "Mastering Image Optimization Techniques for Web Performance in React Applications". Let us face it, images can be hard to optimize and Addy osmani has written a book about it. Palak rightly hit the nail on the head by telling "Best practices keep changing which makes image optimization harder"

55. Broadly there are 3 image optimization techniques that were discussed. They are lazy loading, responsive  images and image CDN.

56. Lazy loading can be done on the <img/> tag with a attribute called lazy. The responsive images can be based on width of the client or pixel density of the client. Image cdn can be self managed or third party cdn which generate images on the fly specially for the client

57. If you are wondering if the talk around image optimization is not as comprehensive as [Addy Osmani](https://www.smashingmagazine.com/2021/04/image-optimization-pre-release/) book, you are right. This is a small talk format, some speeches are smaller than others.

58. The tenth speaker Jerad Rutnam spoke about "Simplify React App Login". The reasons for having a login feature are access control and personalization. But having a solid authentication logic can be hard and there were the sponsor of the event pitched his humble React component which was part of [Asgardeo sdk](https://wso2.com/asgardeo/)

59. As part of Asgardeo team, the recommendation from Jerad was to delegate complex parts of the app and focus on business logic implementation which could be your goto market strategy. Cannot deny if everyone had good budget, flexibility in the code and restrictions around data.

60. The eleventh speaker Apurv Khare spoke about "Flashpoint Performance". Is that even a thing or library or concept? Before I could stop wondering, the speaker was sprinting at the speed of flash with his speech. Lots of concepts discussed and I had tough time writing down the ideas from his speech. But the speaker knew his tools and he explained with confidence.

61. Measure performance first and optimize later. The speaker took us through different categories of performance metrics like Browser metrics, Core web vitals, Lab data & Field data. The optimization techniques include compression techniques, optimizing JS, optimizing CSS, resource hints and optimized Largest Contentful Paint (LCP). 

62. The speaker idea was to give a crash course on measure performance and also optimizing the performance with some numbers/reports from the tools wherever required. But I do not think the speaker showed us any tool called flashpoint.

63. Browser metrics - Time To First Byte (TTFB), Speed Index. Core web vitals / User experience metrics - Largest Contentful Paint (LCP), Interaction to Next Paint (INP), First Input Delay (FID), Cumulative Latest Shift (CLS)

64. Here are some of the tools to measure website performance. App run at lab condition / lab data - Lighthouse, webpage test. App run at field condition / field data - Chrome UX report (CrUX), Pagespeed insights

65. The network waterfall was well discussed with webpageTest and web vitals were discussed. The important performance concept, Critical Rendering Path was discussed. Of course, the speaker mentioned how CSSOM is built and how its different from JS DOM.

66. Website performance testing on first load vs repeat load was interesting to me because we generally measure the first load only. Wherever flat text files or documents are served from server to client, we must enable one of the gzip, brottli or other compression techniques

67. For optimizing JS - Pause blocking JS, defer it as much as possible. For Optimizing CSS - download CSS ASAP on the device in one chunk so that CSSOM gets built and the user can see the content rendered. Use resource hints like rel, as to pre load the content before it gets used. When prefetching multiple resources, use fetch priority.

68. The day 1 post noon, performance speeches continue. The 12th speaker and last speaker of the day was Saurabh Daware and he spoke about "Debugging Performance Issues of Your Website". The previous speech was theoretical and this speech was practical to the best.

69. Performance issues are like any other bugs, for debugging performance issues just do not put a break point. The first place to look for is the network waterfall whenever we face an issue.

70. The speaker was running a static site featuring Razorpay landing page, he demonstrated First Contentful Paint and Last Contentful Paint. The speaker attempted to showcase perceived performance optimization and how his attempted interfered with other metrics like LCP.

71. The speaker showcased how he cleverly chose to improve the perceived performance by booting the webcontainer only when code gets focus, until that point he shows the static output which gives the user the perception of fast. Its kind of fake it until you make it logic.

### Day 2 of React Nexus 2024

72. Day 2 felt somewhat slow to me as we did not waste time at registration desk. But things took a turn when we begun the day 2 with a lightening talk about Yoga. The speaker gave a mini talk focussed on breathing, expanding spine length and some posture correction tips. We need to take 10 minutes a day to see the difference.

73. The key exercises mentioned were neck stretches, breathing slow and deep, shoulder roll, cat cow pose while sitting. If you are yoga geek, then Tadasana and Garudasana were mentioned. If you feel stiff like wood, then remember range of motion increases with consistency.

74. The 13th speaker Alex Lobera spoke about "Future-proofing state management at scale". He showcased the app he works on "Miro" and there is definitely lot of user state, sync state happening in the app. The app looks like scrum board and renders on canvas/webGL based on the client.

75. The author somehow connected the PHP era with RSC era. We were essentially connecting to DB and building UI all in one php file. We are doing the same in RSC. Just the server was not in the picture during SPA era and now its back. Congrats, everyone is now a full stack engineer.

76. Client can access server state but server cannot access client state. The server is coming back to the picture, this time its different. The server can help us build a state in RSC era. fyi day 2 had lot of speakers flying into India for the conference. Alex was from Portugal.

77. The 14th speaker Tapas Adhikary spoke about "Do You Really Need React Query For Your Applications?". I was one of the user of React Query and I got hooked. The real threat to React Query was change in context due to RSC. Now the client can talk to DB directly. However for complex use cases we might still need tanstack query.

78. The 15th speaker K Kamalakannan spoke about "Simplifying Complex Logic: Leveraging XState in React Development". I appreciate the state machine part, orchestration and visualization aspect of XState.

79. The 16th speaker Ankit Tailor spoke about "How I built a Powerful Typed System?". He had worked on a design sytem called gluestack where he has authored CSS in JS which needs to be type safe. I could appreciate the use case for generic data types in designing type systems.

80. The speaker mentions different aspects of DX like linting, debugging tools, typescript type checks and he showcased a CLI diagnostic tool which could show the size of generated types file which is absolutely needed for performance reasons. npx tsc --diagnostics 

81. The 16th and 17th speaker were Mike Grabowski & Eric Vicenti speaking about a new paradigm "How you can Server-Render without Rendering on the Server". At the core we are trying to use web sockets to communicate with client UI on realtime to render changes. The use case was showcases interactively like a theatre play by 2 speaker on the stage with live coding.

82. The speakers showcased their npm component library which could react to our code listening via WS protocol. The links to the code or library cannot be found on google. Watch out for [rise.tools](https://rise.tools/). Not just the rendering library, rise.tools also has a component library so that developers can quickly build apps along with a playground.

83. The 18th speaker Sanket Sahu spoke about "Building Back-End Driven Universal Apps". Conceptually Sanket is attempting to solve the same problem as Mike & Eric. Instead of too much code which looks like config. We have syntactically simpler code which can be generated by chatgpt to a very high level of accuracy. Thats in line with no code development of the future.

84. The 19th speaker Shruti Arya spoke about "Measuring UI performance at scale". The talk was mostly about React native app on low end android devices. The github project was called component-profiler. Surprisingly I could not catch hold of the link to it. The goal was to prevent long re-renders so that there is no jankiness.

85. The 20th speaker Santosh Yadav spoke about "Improve your Developer Experience with Nx". When the pain point that Nx tries to fill was lengthy build times on any machine, be it CI/CD or cloud or local. The NX tool intelligently creates a graph of the code and precisely knows the impact of the code change. Then runs the required build tasks instead of running every single build step on the entire code base.

86. The 21st speaker Apoorv Taneja spoke about "Creating beautiful experiences with Framer-Motion on web". [Framer motion](https://www.framer.com/motion/) helps anyone without indepth css knowledge build animations. The speaker precisely showed us how to use framer to create interactivity on the UI components.

87. The 22nd speaker Yashpreet Bathla spoke about "Avoid flickering user interfaces". The presentation deck resembled windows 95 and it was amazing. The speaker explained the concepts like call stack, micro task queue, macro task queue and render queue in detail. He also mentioned the need to maintain 60FPS, and one render in 16.6ms to have a jank free interface. He also showed how using useLayoutEffect helps in preventing jankiness when compared to useEffect

88. The 23rd speaker Mohit Kumar Toshniwal spoke about "Building XR applications using React Three Fiber". As speaker rightly said, the AR/VR usage has increased. Be it shopping on amazon or navigating with google maps. We can build AR/VR apps in react with react three fiber, drei, leva, react-xr etc

89. Then a panel discussion follows but this time the theme is state of react native. Panelists mentioned that react native is yet to reach v1.0.0. The expo eco system is quite mature and visiting expo.new is the way to get started with React native.

90. The 24th speaker Neha Sharma spoke about "Connecting Worlds: Enhancing Accessibility in React Native TV Applications". Her talk was more about building accessible react native apps for smart TVs. On the mobile, the accessible is missing unlike accessible semantic html. This calls for more empathy from react native developers. The attributes like accessible are must have to make app accessible on TVs. The speaker reiterated that accessiblity is hard, its not a requirement but a feature to have.

91. The 25th speaker Siddharth Kshetrapal spoke about Building accessible reusable react components. Having worked at primer.style, he is proficient in comprehending accessiblity issues and uses his tech speaker skills to make it interesting and understandable to audience. The speaker used 2 commonly used github widgets and tried to make them accessible.

92. Siddharth referenced the importance of [APG](https://www.w3.org/WAI/ARIA/apg/) over WCAG in some use cases. he cleverly used the voice over to illustrate the pain, which the disabled people undergo due to our incorrect coding. I was thrilled and hooked to this speech, will certain share this speech to A11 enthusiasts.

### Other wonders from React Nexus 2024

93. I watched the react documentary trailer for the first time and happy to see the people behind React and the collective team spirit. You should watch it too, I mean the full video on youtube titled ["How A Small Team of Developers Created React at Facebook | React.js: The Documentary"](https://www.youtube.com/watch?v=8pDqJVdNa44).

94. The sponsors were unintrusive, I was not bored by their presence on the stage or at the booth. Both of them answered the questions earnestly. The Freedy developer, aka AI tool for freshworks marketplace developers booth at the conference was showering goodies to the successful quiz winners and they had a lucky draw too.

95. The Asgardio platform which is a simple managed Authentication platform for developers conducted a workshop post the day 1 session which I felt was a generous  offering for attendees. The choreo platform which was an another stall was a useful utility for individual developers and small teams who want to have managed backend service. I love their stickers and pens kept for visitors. 

96. The audience were diverse in terms of demographics and their roots. Some of them were from students at Scalar academy, managers at Microsoft, founders of companies and in between. The Javascript community is quite strong like a giant multinational company having its subsidaries for their interests. We have JS Lovers, Chennai React, Delhi React, React Day Bangalore, team shiksha, etc

97. Emcee Jobs are hardest and demands Charisma. Aakansha Doshi was simply bold and energetic. The cardio session to beat the sleep was a masterstroke by Aakansha.

98. From timely humor to manager jokes, the second emcee Sahil Kalyani was equally charismatic on the stage. The third emcee Yashraj Nayak, whom I would remember for "how is the josh" was unique. He had deep connections with speakers and he was able to discuss some enjoyable anecdotes from his experience working with the speaker. Lastly "How is the Josh?"

100. The one last thing would be the presentation aids prepared by the tech speakers were spellbound. I would appeciate the amount of time, thought and content the speakers have put into the presentations aids / PPT material. I could not differentiate if its online editor or powerpoint tools or excalidraw or just 10x creative powers of the speakers who were frontend engineers.

Thats enough about react nexus and my commentary on React nexus 2024, have a good day.