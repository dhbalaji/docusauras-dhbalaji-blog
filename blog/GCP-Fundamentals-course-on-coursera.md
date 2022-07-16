---
title: GCP Fundamentals core infrastructure course on Coursera
tags:
  - cloud-ops
date: 2020-11-28 22:33:19
authors: [dhbalaji]
---

![gcp fundamentals](./assets/gcpfundamentals.webp)

 The journey of a million miles starts with a single step similarly, the journey to cloud computing for a developer starts with the course on [Google cloud platform fundamentals](https://www.coursera.org/learn/gcp-fundamentals). Here is a quick recap of the good parts and the learning from the course.

 
## Wait you read books to learn things but why online course?

The times have changed. Earlier we used to get technical books from the real physical library, then came digital library, and now it's online courses. For cloud concepts, I would recommend online courses but if you are learning concepts like terminal commands or JAVA basics then a book would do. Cloud UI keeps changing and I noticed minor updates to the UI from the time the online course was recorded. Updating a course is easier than updating a paperback book.

> Better adapt or perish

So I took up an online course on [Coursera](https://www.coursera.org/). The course format is easy to learn. For instance, we have

- Goal-based learning. For instance, a set of lectures are tagged to a timeline.

- Proper course introduction and review lecture

- Concepts + demonstrations

- Lab sessions with time + resources allocated

- Quiz to check our knowledge

- A sharable certificate

## Why is this course important?

As I previously mentioned, we need to get started with a cloud platform but how to do it? We have to begin with the fundamentals. This course is all about fundamentals.

For instance, I had no idea/clue about product offerings like

- Google compute engine

- Google Kubernetes engine

- Google app engine

But towards the end of the course, I can describe these products, talk about the differences, and do a hello world program too.

## What next after this course?

Once the fundamental course is complete, we need to choose the specialization track like

- Cloud application developer

- Cloud application architect

- Cloud SRE and OPS etc

The specialization courses are much bigger than this 12-hour course

## What are the various things you learnt

1. For every task you can perform with the UI, there is an alternate `gcp` command.

2. You need to understand terms like IAAS, PAAS, SAAS and be able to relate to the google cloud concepts

3. You will learn about spinning virtual machines that are tied to a project. The billing is done on the project.

4. various IAM roles can be configured on the project

5. Kubernetes engine is the sweet spot for companies to manage & deploy their apps. You do not have to worry about load balancing, scaling up/down, application crashes, and restarts when configured correctly.

6. App engine is a hands-off approach where the code is tied to the platform APIs

7. The networking concepts and OS concepts are important. If you have never installed an OS or set up a VM before, you will be puzzled with the choices of boot disks, hard disks, CPU configurations, etc to create a VM.

8. The data storage products at GCP are exhaustive and are tailored to specific needs like cloud SQL, cloud datastore, etc. From transactional security to storing streaming data/blobs, there is a product that does its job and also scales easily.

9. The debugging and stats are provided by stack driver which is a separate product which carries a charge to use it

10. Big data & ML related services were introduced in the course at a very high level.

## Were the labs sufficient

As a developer, we need to understand that the cloud services on GCP are billed/charged to a product. There is no free lunch here. The course gives access to qwik labs which give you step by step instructions to go about the course. Something like the lab manual at my college. The hard part is the time associated with the labs. If I were to type every command and read more about it, then the time would not be sufficient.

## Was the quiz hard/easy?

If you read every line of the lab instructions and understand the concept, the quiz is easy to pass.

You get a boolean type of question where 1 of the 2 options is correct. There is another category where you have to select 3 correct options out of the 5.

The passing percentage is not jacked too high. It's mostly around 50 - 60% and you can take multiple attempts per day.


## Was the course interesting throughout

It will keep you hooked. The instructors are clear and the fundamentals are interesting to explore. 

## What are the things you need to know outside of the course to understand it better.

Of course, things change too fast. It's better to read the documentation on the google cloud website to understand things better and stay on top of it.

Cloud concepts are easy to understand and tough to program, the commands related to GCP were not explained clearly. There is an assumption that you are aware of most Linux commands, editing in `vim/nano` etc. I did not know what `sed` editor was, I quickly read about `sed` command on the internet. There is much such networking, OS related concepts, app packing with dockers, etc which we may not be familiar with.

In short, this course discusses concepts at a high level and made certain assumptions about the learner. It's the job of the learner to patch up the knowledge gaps.
