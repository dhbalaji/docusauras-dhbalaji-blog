---
title: Snap package manager in ubuntu discussed
tags:
  - software-tools
date: 2021-04-20 23:28:38
authors: [dhbalaji]
---

![lady-installing-snap-ubuntu](./assets/lady-installing-snap-ubuntu.webp)

Ubuntu software center, Apt, and multiple others ways to install the software in Ubuntu but what is this snap. Looks like it's the new cool. Let's find out more about snap.

<!-- truncate -->

I want to keep this article short because Wikipedia has discussed at length about snap.

## Why snap?

When you develop applications, we want to keep the application in such a way it's easy to distribute. In Ubuntu, the applications were built in .deb format which means the apps are packaged in the format which is tied to the distro. For instance, we cannot instance .deb in fedora.

With a snap, the software is packaged in such a way the distro dependencies are eliminated. The same snap packages can be installed on different distros by the developer.

## Looks like it's a win-win, is there any catch?

Now the developers have more power to distribute the apps easily on all distros which means a few good and bad things.

The good parts are 

1. Easy to distribute and spread your app

2. Monetization is easier because you have a wider audience and your app is not tied to a cross-section of Linux users.

3. Bugs could be reduced as platform dependencies are reduced.

The bad parts are 

1. Easy to spread bad apps, malware, miners, etc

2. The developer needs to keep things up to date. The distro team has no interference or responsibility to check the package. However, a bot will check the snap for malware, etc but I do not think its fool a proof strategy against attacks that could come through snaps

## The difference between snaps and apt packages is not clear yet.

- Snaps are distributed from snap stores but apt packages are distributed from official repositories maintained by the distro team

- Distro team has no say on what app can go into the snap store and which can be installed on the distro later

- Building an app in snap format is less complex compared to other traditional packaging systems. The tool kit involved in developer workflow is different however the archives, package management concepts remain the same.

- snaps carry their dependencies making the apps bulkier but apt packages have shared dependencies

- snaps are automatically updated but apt packages are manually updated

- In the case of both apt and snap, the discretion of the user to choose the developer is required. Some fraud developer can trick the systems

## Are most popular apps already in the snap format

Yes, they are in snap format. For instance, the IDE which I am using (Webstorm) is provided by Jetbrains themselves on [snap store website](https://snapcraft.io/). I am convinced about snap packaging and if I ever launch an app on Ubuntu it would be a snap app. Btw I see some nice shiny apps in the snap store including shareware and trialware.

To know if an app is a snap, do run the command

```shell
whereis webstorm
```

To see all the snaps

```shell
snap list
```

To install a snap

```shell
sudo snap install packageName
```

To uninstall a snap

```shell
sudo snap remove packageName
```

I do not think you need a command to update snaps, the snap packages are auto-updated. 

```shell
snap refresh
```

Find out more information like build number of app using

```shell
snap info packageName
```

You can also disable and enable snaps like mobile apps.

## One thing to remember

> Snap is both a command-line interface and an application package format, snaps can be found on snap store

https://snapcraft.io/docs/
