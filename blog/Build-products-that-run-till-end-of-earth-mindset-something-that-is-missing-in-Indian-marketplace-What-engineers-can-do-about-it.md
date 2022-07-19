---
title: >-
  Build products that run till end of earth mindset, something that is missing
  in Indian marketplace. What engineers can do about it?
tags:
  - essays
date: 2021-09-07 19:57:29
authors: [dhbalaji]
---

![engineer planning](./assets/engineer-planning.webp)

At least 3 out of 5 electronic goods do not work at peak performance for 5 years without a repair. Many open-source repositories go unmaintained after a few months of activity. What if every engineer takes an oath to develop products that run till the end of the earth without a major outage? What system design decisions and quality benchmarks would be needed to achieve a long shelf life of the hardware, software, services, or firmware product? Let's discuss it.

<!-- truncate -->

## The declining quality in the Indian marketplace

India as a country has low purchasing power parity. Having said that, the hack to push more sales is to market products at attractive prices. But attractive pricing is used as a mask to sell substandard goods and services. This mindset is going to hinder Indian products from becoming world-class. Indian techies have a tough time finding the right car because of the quality and longevity issues of the model. Adding to the problem, we never know which company will close the shop leaving customers in the cold. We need a change in a product development mindset. We need to build products that last a long time.

For software, lasting a long time means more extensibility, scalability, and fewer defects.

For hardware, lasting a long time means easy to repair, high quality, and availability of spares.

For firmware, lasting a long time means frequent updates, bug fixes, and no change in performance with time.

For services, deliver what you promise.

Let me introduce you to an interesting ideology we followed at my first software development assignment.

> We build software that runs till the end of the earth. Every meeting, design decision, and architecture discussion was centered around this idea of "Build product that would last a very long time".

Even though the marketplace for that product moved away but the software was solid in terms of how it was designed to handle the problem. The solution was inspiring. I carry a decade of working experience in building software components.  Having worked with many teams and mindsets, I believe "Build product that would last a very long time" is the way we should be approaching product development.

I cannot give you a prescription or a model to emulate, rather I can discuss a use case to emphasize building products that would last a long time for hardware, software, and firmware.

## Designing hardware for longevity

The common piece of hardware that Indians are aware of would be the "Wall clock". The wall clock does one thing, that is to tell the time. To do this, the wall clock needs a power supply from the battery and a mechanical engine to move the needle at the right interval.

What if the product engineer had the "Built to last till the end of the earth" requirement? The mechanical engine would be power efficient so battery life is prolonged or make it run on solar-like calculators. The clock runs with really high accuracy. The company ensures that the small watch repair shops have access to the spare parts in case the watch should run into issues like water spills or mechanical failure.

## Designing software for longevity

The common piece of software that all sections of people have used or impacted would be the core banking system. It's also the complex software taking care of everyone's savings.

For software to work for a long time we need

- Small isolated components which are loosely coupled, these isolated component's performance needs to be decided and monitored by architects. Thanks to distributed architectures, microservices, and message brokers, running apps without major outages is easier than ever before

- Software should be extensible, nobody can predict the future. We need to keep room for extensibilities in the design plan. For example instead of fixating the UI design for 2 hyperlinks in the top navbar. What if a new requirement needs to show 3 links. It should not involve CSS changes.

- Scalability is not everything even though it guarantees profits till the market is happy using your software. SRE to be given more emphasis. One software breach would turn the story upside down.

- As a customer, abrupt change in data usage policies is a turnoff. I never expected when I started using the app.

  Refer to the image at https://www.splunk.com/content/dam/splunk2/images/data-insider/what-is-site-reliability-engineering/sre-key-practices.jpg

## Designing firmware for longevity

Wifi routers are commonly used firmware. I can use a wifi router even if it's slow but I need to be confident that the firmware would secure me from online threats. In the case of tech firmware, the risk of hacking decides the longevity along with performance degradation over time.

The unanswered question for Indian EV space would be the performance over time. How will my OLA S1 work and perform after 5 years from the date of purchase? In the case of IC-based engines, unless the quality is awful. The owner would be riding it normally after 5 years because of fewer bells and whistles attached.

### Does the longevity of the product lead to more cost for everyone involved

I do not agree that longevity would lead to more costs. To give you an example, any product needs a marketing budget. Let's say a company manufactures 10 substandard models, the cost of marketing would be high because they would never build a fan base. Instead, if the company chooses to build something like RE Bullet motorcycles (btw they carry the tag line Built like a gun) which run effortlessly even after 20 years, then the cost for producer and consumer would come down in a long run. As a thrift customer, I would not buy a new motorcycle until my current motorcycle gives up.

The burden on the environment is reduced. If people are not discarding their electronic goods all the time, then the resources needed to mine copper, produce and transport goods, recycle waste, etc would come down.

In the world of software, instead of hurrying to open source software only to maintain it for the next 2 months is not healthy. Similarly, developers and corporations should think of long term shelf life of products and how it's going to make money. Instead of abruptly turning off services, a piece of information is to be given to the end-user. Fabulous paid android apps were lost by me because the developer has taken the app away from the store and I had no clue that happened after changing my phone.

## Summary

Do not let your business strategy, changing market space, or predatory pricing ideas ruin the product. Be the swiss knife of quality and usability. Building products that work for a long time is a USP to be proud of. That mindset would give our country an economic edge over others.
