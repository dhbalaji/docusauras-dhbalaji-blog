---
title: How to fix, external dvd drive not working on windows 10
tags:
  - tech-solved-it
date: 2022-11-21 15:30:22
authors: [dhbalaji]
---

![](./assets/dvd-lg-website.webp)

Though you may argue that the end of the DVD era has already begun, I had run into scenarios where CD/DVD is still a suitable storage device given the read-only nature of the device. The data once written cannot be tampered with or overwritten, though one can scratch a lot and make it worthless.

With this task in hand, I dusted my old LG DVD drive which is ideally built to be assembled inside CPUs but we geeks push their limits. So I replaced the SMPS power supply with an adapter and the SATA cable with a USB portable SATA connector.

Given the two mods, the LG dvd writer can work with any laptop or desktop without an issue. However, on windows 10, the CD/DVD drive icon would not show up on my computer. But what could have gone wrong?

## Steps to troubleshoot

We geeks don't believe in talent but we believe in the process. The process to troubleshoot the strange behavior is as follows

1. Observe if the LG/DVD writer powers on. If yes, press the button to eject the tray. This step worked

2. The second step was to look at my computer to see if any new icon has shown up, but nothing showed up. So fire up the device manager and look for dvd devices

3. Right-click on the USB DVD drive and uninstall the driver. Then reinstall the driver. Even after this step, the icon would not show up.

4. Right-click and goto properties and goto volumes. Click on the populate button. A new name should have been created for this device and the corresponding icon would show up on my computer.

5. Once the icon is available, double-clicking should eject the tray. It works as expected.


## Conclusion

Thanks to the LG website for clarifying that no special drivers are required for the DVD RW device since they are plug-and-play only. That means they would work on any Operating system ideally. Later I found windows 10 just put in an extra step that prevented me from using the drive or rather thinking it was dead.

> Pinch of common sense, curiousity and passion can open the doors for you in tech.