---
title: Horizontal vs vertical scaling and CAP theorom
tags:
  - performance-eng
date: 2021-03-17 12:27:51
authors: [dhbalaji]
---

![Some alt text](./assets/scaling-plants.webp)

Scaling software is managers pride and engineers headache, Just kidding. Scaling software is a discipline in performance engineering where the software is unable to work normally due to resource constraints arising due to high workload. Let's discuss scaling techniques in detail.

<!-- truncate -->
 
## Which is better, building scaled software or building software that can scale?

I was fortunate to work in both scenarios. Let me explain a little deeper.

Scenario A: Software house decides to build a well-scaled product from day 1.

Scenario B: Software house decides to build software that has the potential to scale when the demand arises.

Now let's do the cost-benefit analysis in software terms

time: scenario A will take a longer time because the team tries to build a perfectly scaled app. The capacity or load testing is driving more load to the app with bots regularly to check if the app can handle the expected load. scenario B is quicker to complete.

scope: Scenario B has a more relevant scope than the synthetic scope induced in scenario A. The more synthetic scope is a risk for startups and manageable for existing products or migration projects.

budget: Scenario A has more fixed costs since the beginning. Scenario B has elastic costs based on how the software performs in the real world.

> Building products that have the potential to scale is a nice way to reduce software wastage. Software waste means the software that nobody buys or uses or sometimes never shipped.

## Whats vertical scaling

Imagine you had a normal individual house in India. The house occupied most of the land. To increase the capacity of the house, you have to build more rooms on the terrace and grow vertically. 

In the world of infrastructure, the infrastructure is given a boost by replacing parts of the hardware with more capacity like more CPU cores, more RAM, etc. But after a point, we cannot scale it any further because of limitations. The risk of failure is high in vertical scaling.

## What about horizontal scaling

Getting back to house example, to horizontally scale a house is to buy the house next door and use it for our purpose. Now you have 2 separate houses under your control.

In infrastructure, horizontal scaling is about adding more units of physical servers to handle the load. Horizontal scaling is a preferred technique because if one server fails, the others are still operational.

The software packaging and distribution is complex in horizontal scaling when compared to vertical scaling. Imagine a web application running on separate servers, we need a load balancer to distribute the workload. We also need to keep databases in sync.

## Is horizontal and vertical scaling relevant in the cloud

yes, it's relevant.

## What is the CAP theorem

CAP theorem is mostly associated with distributed databases that store data on more than one computer or node. The data is getting persisted almost randomly onto the nodes by the user. Such a system cannot guarantee all the three

1. Consistency - means the data is the same on all nodes

2. Availability - means the system can return any data without a downtime

3. Partition tolerance - the system continues to operate despite data loss that can arise due to network partition.

The CAP theorem says any distributed database can have CA, AP, or CP but never all the three

CA - SQL databases

CP - Cassandra, CouchDB

AP - NoSQL datastores

read more at https://dzone.com/articles/quick-notes-what-cap-theorem#
