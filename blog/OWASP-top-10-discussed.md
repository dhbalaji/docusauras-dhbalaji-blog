---
title: OWASP top 9 & 10 vulnerabilities discussed with simple examples
date: 2020-11-02 10:27:44
tags:
- performance-eng
authors: [dhbalaji]
---

![online security](./assets/online-security.webp)

Here in this blog post I discuss the Top 9 & 10 of the common security vulnerabilities in a Q&A format.

<!-- truncate  -->

 
# 9. Using Components with Known Vulnerabilities

### Are they talking about React components or web components here?

React/Web components could be a part of the set of components that OWASP talks about. But let's understand it this way.

No system is carved out from a single monolith codebase. We have components/software packages/applications that interact with each other. Right now, I am writing this blog on IntelliJ running on Windows 10. If IntelliJ or windows 10 has a security loophole, then my blog post drafts can be compromised and leaked before I publish.

The unit of software is what they call a `Component`.

### Are there any simple examples of web devs to understand.

WordPress is an amazing CMS that powers several million websites but there are many plugins for WordPress which become a compromised component leading to the website getting hacked.

The component could be a framework, operating system, or anything.

### What should you do to prevent component with vulnerabilities?

Its obvious, you should not have components with vulnerabilities. For that it always helps to automate the scan for components with vulnerabilities. When a component is known to have a risk, we need to patch the software.

### What about hardware components

The hard truth is that some IOT devices have hardware-level vulnerabilities that cannot be fixed. We have to stop using them.

# 10. Insufficient Application Logs and Monitoring of logs

### What is logging & monitoring in this context

Let us understand logging and monitoring in short.

**Logging** - logging is a task in which application messages are written to a `logfile`. The messages can be given by developers and their recording mechanism can be controlled.

**Monitoring** - monitoring is a task in which we analyze and alert the observers when a certain pattern/event has been found. The monitoring can be configured on the logs.

### Logging & Developers

As a developer, we implement application logging on the server-side. These logs have various levels like 

- Info

- Error

- Warnings

- Fatal

- Trace etc

Other examples of bad logs are

1. There were cases where the passwords entered by users were wrongly logged to files. This is a serious security risk.

2. Recording of events is not sufficient. For instance, if you are not logging all the transactions for whatever reasons. In some scenarios, the logs are misleading or confusing. The developer might have copy-pasted the log statement in a hurry. There is hardly any QA looking at the logs.

3. The logs are stored locally. In this case, the hacker can delete the log file.

### where do things go wrong?

There are 3 scenarios where things can go wrong

1. Insufficient logging/logs not getting captured. Logs have crucial information about application usage and health. When there are no logs, there is no way we can know if the system is working as expected or compromised. This is what we call **Insufficient logging**. Opposite of insufficient logging can trigger excess alerts which the ops team might find hard to manage.

2. Insufficient/No monitoring but only logging - This is a common case in my opinion. The logs are filling up hard disks but there is hardly any system in place to monitor the logs. Even if there were a system to monitor logs, it may not be scanning the logs for security breaches. 

3. Logs stored locally are no good. The hacker can get away by tampering with the logs before the monitoring or forensics happen.

> Logs when analyzed can give information upon which we can take timely action.

Unmonitored logs help the hackers to exploit the system easily. It's like a bank without a guard at the door.



