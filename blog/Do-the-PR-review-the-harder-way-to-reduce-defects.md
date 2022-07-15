---
title: How do you ensure that the software you develop has less defects?
tags:
  - quality-assurance
date: 2021-04-23 00:04:13
authors: [dhbalaji]
---

![software-bug-check](./assets/software-bug-check.webp)

__How do you ensure that the software you develop has fewer defects?_ is my favorite interview question that I ask candidates. PR review is my preferred way to reduce defects for a developer in a team. How do you perform PR review when you have a lot of work to do yourself. Follow a checklist.

 
 
> Approach the PR review with the checklist instead of rubber-stamping or filling it with comments which pull down team morale.

## Checklist for PR review 

1. Developer self verifies his PR for syntax, log statements, unit test updations,  style guide deviations, etc

2. Senior dev checks if the components are used correctly in the blank, ideal and overloaded state. The basic sanity test is done at localhost to identify behavioral issues.

3. QA team members do a remote sharing or loads branch on his vagrant to do manual verification against a user story. The QA also tests the app under varying configurations. The business logic is also tested.

4. The CI process runs ensuring the app runs as expected without regression issues.

5. The code gets merged to the trunk after which a bumped daily build gets generated. Developer/QA verifies if functionality works well in a different environment.

## Why makes checklists hard to use while PR reviews

It's hard because, in real teams, many things go wrong

- devs do not have a style guide or established pattern to follow so self-verification becomes hard. each dev on the team does things his way.

- the reviewers are loaded with work so they resort to rubber stamping
  
- the existing tech debt is too much to make any good judgment or suggestion

- some unrelated QA is engaged only after daily build.
  
## Why should manual testing happen before PR gets merged. 
  
I recommend the QA step because most teams have trust in CI which runs unit and automation tests before the merge, why not manual testing too so we are generating builds with better quality? Defects logged at this stage can be rectified before the merge. This QA step is important if you are shipping frontend-related work on tight schedules.

## Discussions, comments, and complaints during PR reviews

> Discussions during PR is a friendly way to learn, mentor other developers. Discussions to be held by code owners.

I prefer a screen-sharing discussion if it's a short PR with minor changes. When there are multiple issues, then commenting on the code is unavoidable.

Try and avoid lengthy PRs containing both frontend and backend especially if you have separate SMEs for frontend and backend. Cross-track dependency will increase the PR review time.

> Comments can be a valuable thing when used sparingly. Other team members will join the discussion to correct things or share their thoughts.

I comment when I want other team members' opinions about the new code. For instance, I post a comment about a condition used incorrectly. If I were wrong, someone on the team can correct me.

> Complaints are exchanged when the developer disrespects or acts sneakily around the comments. Of course, not everyone is equally passionate about the same subject/topic

 so they tend to ignore few things. That could lead to frustration and complaints. Make sure you request such developers to put shorter PRs so that it's easy to guide them. 

> Troublesome developers and many PR comments do not go well. They simply invite more complaints.

A successful PR is a combination of a checklist and a personalized approach. 
