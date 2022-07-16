---
title: Understanding google data storage options in GCP
tags:
  - cloud-ops
date: 2020-12-04 20:48:24
authors: [dhbalaji]
---

![google data storage](./assets/googledatastorage.webp)

As a developer, the most confusing part of GCP are the storage options. In this blog post, I explain the data storage options with some classification that makes sense for developers.

 
## Why do you think data storage has so many options?

"Every company is a data company," says Google. It means the way a company handles data will give it a differentiating factor from its competition. Data on the web is of many types.

- Let's say you run a podcast website for your business. The data is audio files stored on the cloud-optimized for many reads and fewer updates.

- Let's say your business depends on streaming unstructured data for analytics purposes then you would need a data warehouse after which you can perform the query.

- We cannot ignore the commonly known SQL & NOSQL data which power many websites.

To conclude there is no one-stop fit for customer data needs. We need many products for different business domains.

## Can you classify the suite of google storage products

**Storing data objects/blobs** - Google cloud storage

**SQL Types** - cloud SQL, cloud spanner

**NoSQL Types** - Cloud Data store, Cloud big table

**Dataware house** - Big query

**Realtime DB** - firebase

**Frequency of use** - Hotline, coldline

## Are there any concepts that you did not understand wrt databases

As a developer, I did not work with production-level database coding. I did not understand horizontal scaling, sharding, ACID updates, atomic, etc.

## Can you give a use case for each product in GCP storage

Big query - analytics

Cloud data store - document DB like MongoDB, can store like terabytes of data

Big table - document DB but you can store petabytes of data

Google cloud storage - website photos/videos

Cloud data store - relational DB, fits transactional data

Cloud spanner - relational DB, fully managed service built for scale

## What are the different transaction workflows wrt DB

OLTP - Online Transaction Processing (OLTP) is focused on transaction-oriented tasks which typically involve inserting, deleting, or updating a few tables. In short, the data in the database is altered or added frequently.

OLAP - Online Analytics Processing (OLAP) is focused on processing the existing data. It's more reads than writes in the DB.




