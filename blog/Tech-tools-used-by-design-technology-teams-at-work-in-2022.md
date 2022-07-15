---
title: Tech tools used by design technology teams at work in 2022
tags:
  - dev-teams
date: 2022-01-20 11:28:56
authors: [dhbalaji]
---

![tech at design teams](./assets/design-work.webp)

On each working day, I get to see UI libraries and design language technology developed by the community of developers across the world. In this post, I am compiling the tools that design technology teams use across the world.

 
 
## What is a design tech team?

A niche team in the organization develops UI libraries and components for the products to consume. Bootstrap is a popular design tech repository we can relate to. Most popular companies have their design libraries developed in-house and to be used within the organization.

## What's the experience and background of design tech teams?

Design tech teams are essentially small groups of members with the senior and above level of experience either in design or in frontend specialization or someone with interest in frontend. The design tech teams have 3 variants of engineers.

1. People who do the design for a large part of their job
2. People who do design and little coding
3. People who do coding and less of design work

I have not seen a dedicated QA team member in design tech teams, most of the testing happens at the PR stage.

## What are the terms used in design tech teams?

Here are the top 10 terms developers hear at the design tech teams

1. UI components
2. Variants
3. Edge case
4. Accessibility
5. Meetings
6. Mockup
7. Markup
8. Details
9. Npm package
10. React or whatever mainstream library we develop the components in

## What are the tools and tech used in design tech teams?

IDE - VS code or Webstorm
Frontend - HTML, CSS, ES Next, Typescript
View lib - React or whatever the whole org has agreed to use
Tooling - Babel with bundler
Display components - storybook
Unit tests - React testing lib, puppeteer, Jest
Version control - whatever the org decides to use, mostly GitHub
Npm package repo - whatever the org decides to use, sometimes npmjs
Hardware - mostly macs, sometimes windows pro

## Tools that you won't find at the design tech repository?

Mostly we don't have to communicate with the backend like actual product teams so there would be no

1. Redux
2. Redux logger
3. Redux middleware
4. Router
5. Selector lib
6. User journey mapping
7. Making mockups for specific products

## Trends in design tech libraries

1. Each component along with its variants is hosted as a separate npm package.
2. The community contribution is kept in a separate package and consumed separately if required
3. Documentation of the requirement and why a design decision was taken
4. Engaging with the community with events, video courses, and mailers
5. Migrating to the latest versions of tech, libraries, and tooling which pushes for a new release in most cases


## Why does it take longer to roll out new releases of libraries?

- The code contracts established by previous versions
- The backward compatibility
- Impact surface if something goes wrong, that hundred-plus products that get impacted
- The urge for perfection because the components are going to be used by many teams
- Long list of variants and numerous edge cases

