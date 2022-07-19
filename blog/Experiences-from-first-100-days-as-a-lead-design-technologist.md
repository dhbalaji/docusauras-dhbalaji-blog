---
title: Experiences from first 100 days as a lead design technologist
tags:
  - frontend
date: 2022-01-19 10:34:16
authors: [dhbalaji]
---

![Javascript bundle](./assets/javascript-bundle-contents.webp)

I moved into a design tech team that takes care of enterprise design language. It's completely a front-end job. It has been more than 90 days since I moved into this job and here is my learning experiences. Here are my top 10 learning experiences from my new job role as "Lead design technologist".

<!-- truncate -->
 
## Short intro to your new job role

The job title is "Lead design technologist". The work is about translating Figma designs to working react components. These components should cater to UX needs, UI needs, and accessibility.

Here are the primary job roles

1. Work with a distributed team of developers to develop EDL in React
2. Develop React components with multiple variants showcased in storybook
3. Lead the tech initiatives at repo like typescript migrations
4. Plan the npm package releases
5. Work on code quality, unit tests, visual tests, and issues downhill like CSS libraries.

Other auxiliary roles would be

1. Consult with product teams when they have set up issues with the EDL library
2. Check with product teams when they have an enhancement request
3. Work on defects
4. Promote EDL library in internal events & with marketing teams.

## Learnings on the job

1. We work on 100% React most of the time. Another team takes care of vanilla JS and CSS.
2. We touch base on not so popular react APIs like forwarding refs and refs
3. We are fully into functional components and hooks with typescript
4. Typescript migration can be hard when half of the components are in JS. But that calls for a better migration plan.
5. Remote teams only get a few hours for synchronous communication. That cannot be lost for normal stuff like stand-up meetings, instead, focus on architecture discussions or design discussions.
6. Building components can be overlooked as something simple. If the developer is not cautious, you can easily complicate with not-so-obvious props, variants, etc. When things enter the erroneous zone, back off and have a discussion.
7. Enhanced takes more time than development because it's another variant and an increased number of props is not a good developer experience.
8. We expect developers to write very minimal markup, that is why we are building a library.
9. Starter apps are critical for easing the barriers and increasing adoption.
10. Lab or demo storybook repository helps us to check out the library with popular libraries out there before the developers spot the bugs.


## Tough parts of the job

1. Accessibility is another reason people use EDL components, as the EDL library developer I need to ensure the accessibility aspects are in place. The issue is that accessibility testing can be hard and not many experts are around to discuss accessibility.
2. The community expects the repository maintainers to be quick, flexible, and nice to their pull requests. Especially if the pull request is an enhancement, it's going to take a few weeks to get merged because it needs a design team review.
3. Adoption of EDL is hard especially when we have multiple versions. The teams seldom migrate to the latest because of tech debt or difficulties with migrations. The new teams choose to build their components because the new components are a better match for their design thinking. This is detrimental to the enterprise design language philosophy.

## Next steps for me

1. Get better at tech initiatives
2. Get better at the leading team of developers especially when they are in a timezone that has very less overlap with yours
3. Get out of your comfort zone and spread the buzz about the EDL and the repo.