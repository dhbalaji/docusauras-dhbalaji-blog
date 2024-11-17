# NextJS 15 Learning Notes

## Day 1

- Visit [nextJS website](https://nextjs.org/) and scan the homepage
- NextJS is react framework for building websites
- Hardparts such as optimizations, some parts of backend development are built in, RSC or React Server Components is now everywhere. Learn App router as it has RSC support since NextJS 13.
- Quickly we can do a hello world with `create-next-app`. You will learn about app router, layout and page modules
- There are 3 core parts that you need to master in NextJS 15, they are
  - Routing
  - Rendering
  - Data fetching
- Studying NextJS is overwhelming because as a framework, all the use cases are solved or solutions are provided. Unlike ReactJs where we find solutions only when the use case occurs. For instance we think about routing when we need one. Its definitely has some content which may not be useful to you based on your application use case.
- Routing has couple of important concepts, before we get there we need to be aware of whether we are building client side rendering, server side rendering or incremental rendering.
- Some of the router concepts to learn are Route segments, base routes, private folders, folder organization, redirect, dynamic routes, grouping routes, slug, etc
- `Aha moment` - Once you understand the order in which the components are rendered, then it becomes easy to grasp the logic. Layout is the top most and the page is the inner most/last rendered. In between we have Loading, Error boundary etc.
