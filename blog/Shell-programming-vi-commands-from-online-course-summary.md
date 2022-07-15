---
title: 'Shell programming, vi & Linux commands from the online course - summary'
tags:
  - learning
date: 2020-12-19 15:22:23
authors: [dhbalaji]
---

![online course](./assets/online-course.webp)

I love online courses, it resembles the computer lab at college. The recent operations issues at work demanded me to get educated to combat the sudden hiccups. Here we go, the summary of the online course by a fellow Indian.


## What was the motivator to take up this course?

Any good software engineer should know 2 things,

1. How would his/her application work outside of localhost or in production mode?

2. What factors could affect the performance of the application in production because the localhost is generally an unconstrained environment? 

As a frontend engineer, the amazing react components and well cached static assets would be useless if the REST APIs do not give the response in time or they timeout.

When the user traffic increases, the server resources get constrained like the CPU, memory, or the hard disk running out of space. When we wear the `operations engineer` hat, we should know to check the state of Linux servers. That's where I found the knowledge gap. Commands like `grep`, `find` were new to me. So I took up this course.


## Talk about the course

The course was well structured into 3 categories

1. The basic Linux commands, user management

2. Check health status, find & grep

3. Vim editor, shell programming & crontab

## Linux commands that were discussed

Before we jump into the commands, we need to know the Linux variants like Ubuntu, Red hat enterprise, etc. The commands might have little variation.

`whoami`, `who`, `clear`, `hostname`, `ifconfig`, `sudo`, `id`

Every user is part of one or more groups. Users with Sudo access are part of `sudo` group or `wheel` in RHEL.

> Sudo is also a user group in Linux

Here are the user management commands

`adduser`, `usermod`, `deluser` & `su`

when a new user is added, an entry is created in `/etc/passwd`

Other file related commands `compress`, `cd`, `cd -`, `ls -lart`,

To create nested folders `mkdir -p` & to have an interactive remove `rm -i`. To remove the empty folder `rmdir`. If the folder has contents `rm -rf`.

To see the content of the files

- `cat` - displays all the contents of the file.
- `less`
- `head`
- `tail`

Single letters which have a meaning when using `chmod`

a - all
w - write
r - read
x - execute
u - user
g - group
o - other

## Shell scripting basics

> shell scripts need executable permission

1. the Linux commands work inside the shell script

2. There are 2 ways you can input data to shell script. They are through the `read` command and others are `arguments`. The args can be found in `$1, $2` but `$0` is taken.

3. The conditional and looping constructs are available in shell scripts

4. I am not sure about garbage collection etc if they are available 

5. Each shell script has its process id. The shell script could be running in the foreground or background.

6. `bash -x` to debug shell script. Simplest debugging experience than in any language.

## Server health check commands and kill the process in Linux

You need to know about how the process gets created and gets deleted.

To know all running process `ps -ef`. To kill the process `kill -1 PID`

PID stands for process id, PPID stands for parents process id.

### Memory, Disks

To know the free memory `free -h` in a human-readable format.

To know the free space on the disk `df -h`, for disk usage or size of files its `du -skh folderName`.

`top` command to know more about system resources in one go.

> `$$` will give the process id of the bash shell itself

To filter out a particular process you will need to grep it `ps -ef | grep $pid`

## Transfer control from one command to another

`>` where data is inputted to the script on the right, the data originated from the expression on the left side of the `>`. 

`<` where data is inputted to the script on the right. The others are the same as `>`

`>>` Append the input data to the file on the right of `>>`

`|` pipe, by far the most used operator where you can chain commands to work on the data. Executed from left to right. Eg. `ps -ef | grep 3728`

## Other useful ones

`find` command, it takes a variety of filters like type, size, updated date, name wildcard. `find ./ -type f -name *.txt | head -10`

To exec action on the output of find, we can use `-exec` or pipe with `| xargs`

Search for text with `grep -i word`, for multiple words `-e`, to avoid a word `-v`.
     
 I got used to VI editor but the ability to turn on line numbers was new `set number`. `yy` to copy the line and `p` to paste the line.
 
## How did you practice the commands
 
 Red hat enterprise 7 on the windows 10 pro-Hyper V and ubuntu 20.04 on the windows subsystem for Linux.
 
## Were there any new commands that were new to you

crontab for executing cron jobs on the Linux. That's a timed background process with the ability to capture the output or log the response to a file for debugging. All of what I said above in a line. Linux is full of surprises.

## Best way to remember Unix commands? 

Cheatsheets & use it frequently. If you are a nodeJS guy like me, checkout `tldr` global package.

