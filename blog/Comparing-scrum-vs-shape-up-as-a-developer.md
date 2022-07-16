---
title: Comparing scrum vs shape-up as a developer
tags:
  - project-management
date: 2020-12-01 11:55:56
authors: [dhbalaji]
---

![meeting](./assets/meeting.webp)

On my first dev job around a decade ago, I worked as an agile team member. Ever since every project I worked on used some variant of scrum framework like agile, broken agile, pseudo agile, etc. There is a new kid in the block called [shape up](https://basecamp.com/shapeup) which also talks about executing projects with a team. Here are some differences and similarities between scrum and shape-up.

 
 
## What about the 4 main events in a sprint?

Before we talk about the 4 main events in a sprint, I want to emphasize that there is no concept of a sprint in shape-up. Instead, you pick up a chunk of work, hammer down the scope so that you can finish the frontend, backend within a fixed time of `6 weeks`.

The 6 weeks looks like a sprint but it's not because the team works on a new project/piece of functionality after 6 weeks leaving behind the past work. For long projects, we can have a cycle of work done in 6 weeks and keep the cycle going.

In agile sprints, we mostly work on the same projects and working on a different task.

Coming back to the question about 4 main events in a sprint. The 4 events are 

1. Sprint planning

2. Standup meeting

3. Sprint end meeting

4. Retrospection meeting

Sprint planning is replaced by a full-fledged async planning session called shape-up meetings.

Standup meeting does not exist in shape-up instead we have hill charts which show where the work is progressing.

Sprint end & retro meeting does not exist in shape-up.

## What about the definition of done

The definition of done is the goal we want to hit in a sprint in the Scrum framework. It could be finishing a unit of work etc but in shape-up the done means `deploying` to the customers.

Done definition in shape-up is apt because the 6 weeks was meant to finish the usable functionality.

## What about work that does not get done in 6 weeks

That's interesting because scope creep is real in the normal world. In the shape-up world, the scope is hammered down. The team asks themselves about the value of the scope that's pending. If found indispensable, then the minimum viable product is built else the scope is dropped.

There is a concept of `circuit breaker` which means after 6 weeks no work on the same project will be done. This is also called `appetite`.

## Does shape up has a manifesto, like agile

I do not think so. The home page makes a ridicule of sprint calling it as going in circles. There are principles outlined in the shape-up book but they are mostly applicable on a per case basis. The principles are focused on product discovery and implementation keeping the balance between autocratic and slippery requirements.

For example, a mockup is set in stone. Most conversations will be about how to get it done. The senior management has likely given a nod for the mockup and the development team has less scope for their creativity.

## We have rally / JIRA for agile, what about shape-up

No surprises here, it's a base-camp web & mobile app. FYI post-it notes won't work with shape up.

## What are the problems which shape up seems to solve in contrast to scrum

Scrum comes with planning overhead. Every 2 weeks we have planning, sprint end meetings where we make decisions. The meetings translate to long meetings with the whole team. It means a loss in hours of productivity.

There are no slow down hours in the scrum. At one of my employers, the workload was kind of balanced and we were given slow down hours where we can do R&D, do bug fixes, etc. But in high-performance Scrum teams it's run, run & run while balancing user stories and defects.

> Slow down hours is one concept I wish scrum teams adopt from shape-up quickly.

When we know that there are some awful ideas, whacky ideas, and costly ideas to implement in a project. The scrum team treats almost all ideas equally by giving them a parking area called `backlog`. But in shape-up, there is no backlog which means if a feature is important then it will be brought back to discussions

## What about team sizes and variants in the shape-up team?

A shape-up team has a designer and 2 programmers. There is no mention of if the developers are a mix of backend/frontend or full-stack/mobile app dev.

In the Scrum teams, I worked we limit to 8 people with all disciplines.

## What about scrum master role or other roles

As of now, there are no roles mentioned in the shape-up explicitly. There is a mention of a designer + experts requirement in some of the meetings.

I am sure when the scaling of shape-up or shape-up adoption starts then the new roles might come up. 

## What about planning poker

Haha, we have the betting table here at shape-up. The company makes a bet that they will be working on this project for the next 6 weeks. At this stage, the project is called a bet.

## Is shape-up opinionated about documentation

In agile projects, the emphasis was on working prototypes over documentation. That does not mean any documentation. Many times I worked on projects which had nice word documents that were developed before the requirements were implemented. The project is that there was no standard structure of the documents generated by the team member. In shape-up, we have a nice structure. Its as follows

1. Problem - idea/use case

2. Appetite - how much time to spend on this

3. Solution - core elements in an easy to understand the way

4. Rabbit holes - risk management stuff

5. No-gos - scope or functionality that are discovered but excluded so that later someone does not get excited about it.

## What type of companies will best benefit from this 

The minimalist companies will benefit from this. The cost center projects will benefit from this because they would be able to save money and avoid running over the deadlines.

For services companies, it's tough because there is a risk of work not getting extended after 6 weeks unless the team follows 6-week cycles.

> Shape-up is best when the experts do the project shaping up correctly and hand over the work to the best men/women freelancers who would get things done in 6 weeks.

For product teams, 6 weeks is an ideal time to ship something meaningful out of the door. This is something I want scrum teams to adopt. I have hardly seen any meaningful unit of work done in 2 weeks cycle.

I would not give 9 months of work to a freelancer. In all likelihood that work will never get delivered.

## Any good news for developers in shape-up

I would not call it good news but a difference in approach mentioned in shape-up

- The 6 weeks' time is guarded against defect fixes. That means lesser distraction. I am still skeptical about distraction because the production issues can creep in.

- The code review approvals are not a must, in fact, the seniors will look at them when they got the time or want to take a break.

- There is no mention of a QA member in the shape-up team, it means that the dev team is responsible for the quality.

More information can be found at [Shape up book](https://basecamp.com/shapeup/webbook).
