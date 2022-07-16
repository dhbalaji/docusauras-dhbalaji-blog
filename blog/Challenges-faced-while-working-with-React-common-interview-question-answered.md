---
title: 'What are the challenges faced while working with React? the most common interview question answered'
date: 2020-10-17 16:56:15
tags:
- frontend
- interview
authors: [dhbalaji]
---

![React challenges](./assets/reactChallenges.webp)

Not a single interview goes by without asking "What are the challenges you faced while working with ReactJS". My friend asked me to answer this. Here I go...

Before I answer, let me tell me why the interviewer is asking this question. The reasons could be

1. It was in their questions script 🙂. It's an obvious question right, just like tell me about yourself.

2. They wanted to gauge your professional expertise. The people who work on basic apps won't have many challenges that they can flaunt.

3. Some questions need preparation. Just like tell me about yourself needs decent preparation, this question too needs prepared and sincere candidature to answer.

I have to admit that I flunked an interview because I could not give a convincing answer as I had a vague memory of the challenge I faced at work. 

> Narrating an incident from vague memory could be a mess, especially under stress.

Here is my tip. Talk about advanced topics like

a. **Performance issues** which you surmounted on the view layer. In large applications react can be slow, in that case, you need to look into profiler, etc. Talk about it.

b. **Making choices**, like the selection of npm-packages. You can even talk about `Redux` vs `Rematch`.

c. Workflow pipelines, deployment issues are real. Talk about it. Sometimes customer-facing issues and resolutions make good heroic developer stories.

d. Process/Code improvements can be discussed. It could be introducing `React hooks` over `React classes` to the team and going about the migration journey.

e. The unit test case that annoyed you, in case you remembered nothing.

Let me give you 2 scenarios (I may update the scenarios anytime, so better bookmark this page) where I had serious challenges with React.

1. We had a performance issue in one of our <abbr title="Product Display Page">PDP</abbr> page. There was a noticeable delay when the user clicks on 'Add to cart'. We found that the code had some issues like
    
    a. The selectors were not memoized, leading to delays in providing data. Some selectors did `.toJS()` which gives a new object leading to a re-render of the component.
    
    b. At the component level, we had issues due to unnecessary re-renders. Some of the components were doing a deeper check for the props, they were replaced by `PureComponent`. React profiler helps us identify react component which get re-rendered a lot or get impacted during re-render. The wider the yellow bar, the longer the component took to re-render. The component needs to be fixed. Generally not passing too many props to a component is a good thing.
    
2. The other issue was with the React stack itself. Almost every component that you need is on NPM which is good and it's the way it should be. Should we use them directly without scrutinizing them? Absolutely not. I was evaluating react-content editable which was 5.1kB which was huge given that React is itself 6.1kB. Keeping in sight the features that you use and bundle size is important while choosing the npm-packages. It's a good practice to constantly check the size of packages and their equivalents.

**Final tip:** Prepare your answer in advance and do not rely on memory. The answer you say will be judged during the interview. There are plenty of engineering challenges, its about discovery, resolution and documentation so that you can refresh your memory before the interview.
    
    
Other links

[Bundle phobia](https://bundlephobia.com/result?p=react@16.14.0) -- a tool which tells the size of npm packages
