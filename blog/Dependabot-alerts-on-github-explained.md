---
title: Dependabot alerts on github explained
tags:
  - software-tools
date: 2021-03-14 09:39:24
authors: [dhbalaji]
---

![Some alt text](./assets/dependabot.webp)


Dependabot is a bot or assistant that can help with security updates of your dependencies. Phew, that's cool right. A bot taking care of your application security threats. Here are more details about the dependabot.

 
 
## What is the link between GitHub and dependabot?

Dependabot is a GitHub company. Looks like they got acquired by GitHub so dependabot services are exclusive for the GitHub platform. There is no mention of integrating dependabot with Bitbucket or GitLab.

## How to enable Dependabot alerts?

The more appropriate question would be how to disable dependabot alerts because by default when you go to settings > security & analysis you will see

1. Dependency graph which is enabled and no way to disable it so all your app dependencies are always scanned for security issues.

2. Dependabot alerts - the bot communicates with you (the repo owner) through alerts. The alerts could also be related to new vulnerabilities which impact the dependencies.

3. Dependabot security updates - This is a priceless feature. The easy upgrade of dependencies is provided through a pull request whenever a security update is found.

## How to see dependabot alerts

If you are the repo owner, there is a new tab called a security that is seen alongside the wiki tab.

Inside the security tab, you can find vertical tabs with dependabot alerts.

When you click on the alert, the detailed description can be seen along with the code. The fix can be converted to a pull request by the repo owner/admin.

## How about pull requests created by the bot.

For very high severity security issues, the bot will automatically create a pull request. The repo owner can merge the pull request in one click.

The dependabot also follows good practices like creating a branch and put a pull request with a good title.

## I want to configure dependabot further, what can I do

1. Login with your GitHub account on dependabot website

2. Select the repo you want to configure

3. Choose from options like frequency of updates etc

you can create a config file under `.github`

Here is the sample yaml file

```yaml
version: 2
updates:
- package-ecosystem: npm
  directory: "/"
  schedule:
    interval: weekly
  open-pull-requests-limit: 10
```

Read more at https://docs.github.com/en/code-security/supply-chain-security/configuration-options-for-dependency-updates
