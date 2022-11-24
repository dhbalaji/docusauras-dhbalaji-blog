---
sidebar_position: 1
slug: "rtl"
---

# Github Codespaces & Dev Containers

![](./assets/code-spaces.png)

I have worked with several software teams where setting up the localhost ranges between initimidating to impossible. This resulted in wasted hours of development and a new category of bugs.

I was looking for a wonderful development environment where I don't have to worry about switching node JS versions, or setting up some specific environment variables. This would have been a fantasy if it wasn't for `dev containers`.

## Dev containers

For those who are new to dev containers this is a new concept where we use docker images for development of software. We essentially take a VM, run a image with OS of choice. Later customize the image with tools required for development. Most of this activity happens through code configuration making is easy to automate.

> Good bye, setup document. You were always out of date too.


## Github codespaces

I want to discuss about how GitHub code spaces is helping developers do great things with less work especially in relation with their code, workstation configuration & local setup

Before I jump into code spaces I want to emphasize that codespaces is based on a spec which clearly indicate how to use containers for development purposes. GitHub took the idea to a new level by introducing docker container that can be run on the cloud.  when you want something on the cloud it includes a lot of cost. Is GitHub giving all these resources for free the answer is yes and no. It is yes when you consider the 1200 minutes or so container time that you have for a free account in GitHub. It's a no, when you want an advanced virtual machine to work with because by default you get a fixed configuration to work with.

## Getting started 

To try out the development containers, here is the first thing that you need to do.  pick between the established IDEs which support dev containers. You need vs-code or jetbrains IDE. when you have vs-code you also are required to download an extension which is going to or give more powers to the IDE. Then the IDE is in a position to do the sync between your local file system and the container so that you are code which right is not just executed within the container but the copy is also saved on your local hard drive when you shutdown the container. You also get meaningful alerts like open in container, rebuild container & open the forwarded port.

You don't have to write a lot of code to spin up at the container but you definitely have to write a good amount of configuration, for example familiarity with with docker is always going to help you when you work with dev container however I do not have a great family it with docker except for that I know that you can run containers, create and manage containers. 

The first step for you is to create the configuration file which would help you create the container you wanted to work with. The configuration file sits inside a folder called `.devcontainer`. the .devcontainer contains JSON file which includes the name of the image, nodeJS, container hooks and features you want the image to include. The container has access to the same host network so that you don't have to write any extra proxy or anything but this is one separate machine that is running inside your host.

### Advantages

 Over all it reduces the time for setting up and sharing the development set up because all of your development setup is now in the configuration and it should execute seamlessly as long as the other person is also running the docker desktop or its equivalent on their machine.

## Verdict

If your team has powerful computers and wanted localhost to be up all the time, then dev containers is the right tool for you.

If your team uses localhost sparingly, like marketing website updates etc. Then the github codespaces would be a fantastic option.


## Sample devcontainer.json of this blog

```json
{
  "name": "dhbalaji-blog",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  "settings": {
    "terminal.integrated.shell.linux": "/bin/bash"
  },
  "extensions": [
    "dbaeumer.vscode-eslint",
    "isudox.vscode-jetbrains-keybindings",
    "esbenp.prettier-vscode"
  ],
  // Use 'postCreateCommand' to run commands after the container is created.
  "postAttachCommand": {
    "server": "npm start"
  },
  "portsAttributes": {
    "3000": {
      "label": "Blog",
      "onAutoForward": "openPreview"
    }
  },
  "hostRequirements": {
    "cpus": 4,
    "memory": "8gb",
    "storage": "8gb"
  }
}
```

## References

[containers.dev](https://containers.dev/)

[VS code dev containers](https://code.visualstudio.com/docs/devcontainers/containers)

[Github codespace](https://github.com/codespaces)