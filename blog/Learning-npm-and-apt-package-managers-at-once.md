---
title: Learning npm and apt package manager commands at once
tags:
  - software-tools
date: 2021-01-09 21:59:32
authors: [dhbalaji]
---

![gift packages](./assets/packages.webp)

You cannot be a professional developer without an encounter with Unix/Linux systems. Linux is the preferred operating system of choice for cloud machines. `SSH` is a magical technology to control the cloud machine without making a trip to the data center. All said but how to install and manage software on the Linux operating systems? The answer is **Package Managers**.

<!-- truncate -->

## Why are you comparing npm and APT?

I am comparing `npm` with `apt` because both implement the same interface called `Package Managers`. Might have sounded more Javaish but the point is that both npm and apt are package managers.

Familiarity with `npm` makes it easy to learn `apt`. Another easy way would be to compare the app store with `apt` however we do not execute commands on the app store. But the concept is the same, you can look up software, install it, upgrade it or even remove it.

## What are the operations performed by package managers? 

The package manager is part of a package called `Package management system`. The package management system has a bunch of tools to perform operations on the software like maintaining a registry of available software, performing a lookup when searched for, notifying or maintaining versions of the software. For the node platform, we have `npm`, for python, it's `pip`, etc. Depending on the Linux OS the package managers vary.

## What about GUI based package managers?

I enjoy using GUI based package managers like synaptic package manager on my laptop but never on cloud computing because they do not have GUI. It's just `SSH`.

## Package managers do CRUD?

CRUD stands for Create Read Update Delete operations in general. Package managers help you similar, in place of creating we have `install`.

To create a package

npm - `npm init`
apt - no equivalent command exists

To install a package(s)

npm - `npm install`
apt - `apt i`

Multiple packages are separated with a space like `apt i pack1 pack2.

To install a package with a specific version. In npm, we use the same install command to reinstall the package. In apt, we pass `--reinstall`.

npm - `npm install packageName@1.1.0`
apt - `apt i packageName=1.1.0`

To remove a package

npm - `npm remove packageName`
apt - `apt remove packageName`

To update a package

npm - `npm update packageName`
apt - `apt update packageName`

To upgrade a package (a breaking release can be considered an upgrade. Bugfixes are considered an update).

npm - `npm upgrade packageName`
apt - `apt upgrade packageName`

To upgrade all packages, `npm upgrade` or `apt upgrade`.

To remove unwanted packages along with configuration files

npm - `npm purge packageName`
apt - `apt purge packageName`

To list the existing packages

npm - `npm list -g --depth=0`
apt - `apt list`

## How to clear the cache

The cache is the area where the packages are downloaded. We have one location where the packages are cached per user in an OS.

npm - `npm cache clear`
apt - `apt clean`

## Are there other things to know

As a publisher of not so popular npm package [send JS errors to service](https://www.npmjs.com/package/send-js-errors-to-backend), I was looking for equivalents of `npm publish`, `npm login` however I did not find an equivalent in `apt`.
