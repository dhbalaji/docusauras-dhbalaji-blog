---
title: Must know terminal commands before touching production servers
date: 2020-11-15 13:25:08
tags:
- software-tools
authors: [dhbalaji]
---


 ![ls command](./assets/ls-command.webp)
 
 I use windows 10 on a day to day basis. My colleagues and friends use windows too. The problem starts when the GUI disappears and we just have `SSH` access to the production boxes. On a production machine, running one wrong Unix/Linux command could risk your job. Here I am compiling the must know Unix/Linux commands keeping in mind the deployment and operations related tasks. 
 

## 1. What is the terminal about
 
 The Terminal is a fancy name for `command prompt` in Unix/Linux versions. The terminal allows you to enter a command to interact with the operating system. When you ssh into another machine, the terminal can be used as an interface to work with other OS. When you get on a terminal, check where your commands are going to run especially when working with higher development environments like Cert, Prod.
 
## 2. How to practice Linux commands on Windows 10.
 
 There are multiple ways to run Linux commands on Windows 10 depending on if you have a home or pro license. Here is my approach as I have windows 10 pro
 
 - Install ubuntu on the hypervisor
 - SSH to the guest OS would have been cool, if you do not want to SSH then use the terminal inside the VM.
 - I did an SSH from windows Powershell. `ssh username@IPAddressOfVM`. Powershell because of the color of the shell and it gives color to the text which is easy to read. Putty does not show colors but it can be useful to save the host etc.
 - To get IP address, use `ifconfig` or in GUI. `sudo apt-get install net-tools` to install `ifconfig` package.
 
 > For setting up [SSH with Hyper V](https://superuser.com/questions/1445288/port-forwarding-with-hyper-v-virual-machine-on-windows-10#:~:text=To%20set%20up%20an%20external,Click%20OK.). SSH would not work with the default switch.
 
## 3. What are the basic CRUD commands
 
     1. Create a file `touch hello.txt`
     2. Edit a file `cat hello.txt`
     3. Update a file
        - You can use editors like `vim` or `nano` or whatever is available
        - In all likely hood you will have `vim` editor so use `vi` commands
     4. Delete a file `rm hello.txt`
     5. Rename a file  `mv hello.txt helloOld.txt`
     6. Copy a file `cp hello.txt folderName/`
 
## 4. How about commands to handle folders
 
     1. Create a folder `mkdir nameOfFolder`
     2. Change directory
        - level above  `cd ..`
        - level below `cd folderName`
     3. Remove folder  `rmdir folderName`. If folder has contents, use `rm -r folderName`
     4. Move folder (also used for renaming folder) `mv -r foldername path`
     5. Copy folder `cp -r folderName path`
 
## 5. Are there any specific commands which advanced developers use
 
 I would call these commands as slightly esoteric as only a few will use them.
  
  1. to see the last few lines of the log file as and when they get updated. `tail -f someFile.log`
  
  2. to check the permissions of the file on the server along with the most recently updated file at the bottom. `ls -ltr`
  
  3. List all the files recursively in a folder. `ls -R`
  
  4. Change permissions for users, users of a group, etc. Here is a good link having clear details about [Chmod](https://www.pluralsight.com/blog/it-ops/linux-file-permissions) command. 
  
 the first 3 chars represent permission for the group, the next for users of the group and the last 3 is for everyone else.
  
  To change use `chmod 664 fileName/folderName`
  
  5. Set environment variables `export MODE=PROD` & to retrieve `$MODE`. To see the mode use `echo $MODE`.
  
  6. To see file sizes in human-readable format use option `-h`, like `ls -lth`.
  
  7. Using wildcard char to filter out files in the selection, like `*`
  
  8. Using symbolic links
  
  9. Watching the resource utility on the VM instances with `top`.
  
  10. Clearing old log files if they are in the same box.
  
  11. Bouncing applications when they have errored or misbehaving.
  
## 6. Are there any interesting keyboard shortcuts to know?
  
  Let's say we have a long command & it's hard to navigate.
  
  `ctrl + a` takes you to the beginning of the command
  `ctrl + e` takes you to the end of the command
  `up / down` arrow will take you to previously typed commands
  `tab` key will autocomplete the path
  
  > If the file or folder name had space, wrap it with double-quotes.
  
  
## 7. Are there any reserved words worth remembering?
  
  Yeah, we have a few of them. The noteworthy is the `~` which takes you to the root dir. The others are
  
  - echo
  - pwd 
  
## 8. What are these symbolic links
  
  They are similar to `windows shortcuts`. They are pointers to other files. They are created by `ln `. The link files are treated like any other files. They can be renamed, deleted, etc.
  
  They have many use-cases like you can skip copying a bulky folder by referencing it with a symbolic link.
  
 
## 9. What about the find files command.
  
  It's a powerful command that is used to filter files, directories, fileTypes, files recursively.
  
  `find [Directory] [fileType/Name] NameOrPatternToBeSearched`
  
  example, `find . -name 'hello.txt'` -- finds hello.txt in the same folder
  
  You can chain conditions with `-or`, `-and`.
  
## 10. What about file content search
  
  We use the `grep` command. Grep takes in options followed by the pattern we need to search.
  
  `grep "Hey" *"`
  
  To open the result file in nano editor use `nano "$(grep -ilr "Hey" * | head -1)"`
  
## 11. How do I set execute permission only to the owner
  
  `chmod u+x fileName` -- u for the user, g for group, o for others, a for all. You can chain permissions like `+rwx` or give numbers like `chmod 777 a.txt`
  
  More fine-grained access can be given like `chmod u=rwx, g=rw, o= file.txt`
  
## 12. Is learning vim editor necessary
  
  I have seen developers who are accustomed to `git gui` that they cannot use git outside of it. I have some dependency on the IntelliJ idea for resolving conflicts. The problem is that I do not get IntelliJ on prod servers so I have to fall back to git commands. So is life without learning vim? There is an assumption that vim is installed on UNIX/Linux servers universally. There is no guarantee that nano is present on prod servers. So better learn vim.
  
  Actually, to get the ball rolling you need to 
  
  1. Know about reading & insert mode
  2. Save file & discard the changes
  3. Scrolling through & jumping to the beginning, end of line
  4. Searching for keywords, replacing text
  
## 13. Whats this PIPE operator
  
  as the word says, it's an operator that takes the output of the first statement and gives it as input to the second.
  
## 14. How to find the process which is taking the most CPU
  
  We can use the `top` command and order the CPU column. `top -o CPU`. You can see the top process of the user by `ps -cvx` and further narrow it down with grep `ps -cvx | grep firefox`.
  
## 15. How do you terminate a process?
  
  Managing processes happen through signals. We can use the term or `kill` command. `kill $PID` will kill the application. The process id will change after the restart of the same app so do not cache the ID or store it in a variable.
  
## 16. How do you create your own command to do a bunch of stuff
  
  Basically, we need to create a method in the bash profile and invoke it.
  
## 17. How to set alias & invoke it
  
  `alias myAlias="ll -ltr"`. Call the alias with myAlias after restarting or sourcing the bash profile.
 
## 18. How to know if your password is expiring soon in Linux
  
  The password management policies are quite strict on production machines so remember to change the password periodically or someday it might get locked. To know the expiry date of your password and other details, type

  `chage -l $(whoami)`
        
  To change the password, you must know your existing password. If you do not know your password then its better you raise a ticket to reset the password.
        
  `passwd $(whoami)`
  
## Switch user account in unix/linux

  Due to permission issues you will be expected to switch to another functional account. In that case do
    
   `su - username` and enter the password associated with the username. Verify by executing `whoami`
