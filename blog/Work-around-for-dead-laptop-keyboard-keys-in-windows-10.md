---
title: Work around for dead laptop keyboard keys in windows 10
tags:
  - dev-work
date: 2020-12-13 23:56:23
authors: [dhbalaji]

---

![Sharp keys](./assets/SharpKeys.webp)

The laptop keyboard is a critical input device. It's also prone to issues like the `delete` button not working or few buttons here & there giving up. Here is a workaround with sharp keys software.

<!-- truncate -->
 
## What are the possible solutions for dead keys on the keyboard be like?

- Replacing the keyboard on the laptop. It's expensive and could risk your data when the laptop lies at the service center for days.

- Connect an external keyboard. A cheaper alternative but you need to carry the other keyboard all the time.

- Swap the key with other lesser-used keys on the keyboard through registry editing. Nobody except you will like your keyboard 😁. It's DIY and costs nothing. We are moving the functionality from a dead key to another key that you do not use often like `forward slash`.

## How to change the registry to change delete button functionality with other

1. Download `sharpkeys` software. Its a freeware. Visit <https://github.com/randyrants/sharpkeys>

2. Asks for admin permission, grant it. It's your personal computer and you want to edit the registry on Windows OS

3. Click on the add button & enter key mapping. Note: You cannot swap keys. You cannot use keys reserved for other functions like `print screen`.


![sharp keys mapping](./assets/addkeymappingSharpKeys.webp)

4. Finally write to the registry

5. Sign out and sign in on your windows. You should be able to see the new mapping working.

## What are the drawbacks of this solution

- The dead key won't work when you are booting.

- If you have multi-OS, you need to find a fix on that OS.
