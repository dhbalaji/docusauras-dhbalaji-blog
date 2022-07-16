---
title: Simple feature switch ReactJS component in 5 lines of code
tags:
  - frontend
date: 2020-12-14 23:07:11
authors: [dhbalaji]
---

![React component code](./assets/reactCode.webp)

Let us say your product is planning to introduce an experimental feature. Your customer may or may not like the feature. In this case, you may have to turn off the feature for some users & turn it on for the rest. This is called A/B testing. But how to build components to conditional render the content. We can build `feature-switch` components.

 
## What is a Feature switch?

Think of a switch for a light bulb. When you turn on the switch, the light is turned on. When the switch is turned off, the light goes away.

Feature switch in software is analogous to the switch in the physical world. The feature switch component has a predicate that will decide if a particular feature is to be rendered or not.

## What are the use cases of feature switch

- Feature switch helps in rapid software development. Till the feature is complete, you can turn off the feature for everyone except the developer working on it.

- Feature switches make the software flexible for A/B testing.

- Makes development scalable. There is no need to duplicate predicate code to turn a feature on/off in many places of the application.

## What are the core parts of a feature-switch component

- the feature switch component should have a predicate. The predicate is a function that returns a true or false. Based on the predicate we render the component.

- the feature switch should have a target or child component which should be rendered when the predicate returns true.

- the feature switch should be highly reusable with standard props whose data should be available wherever the feature is rendered. 

- to get the feature props, you can write a selector and reuse it.

- lastly, the feature switch should be a pure function.

## Why not use `if-else` in place of feature-switch

- Feature switch component ensures the code is DRY (Don't Repeat Yourself). 

- If-else is a maintenance nightmare. Developers are often tempted to use `&&` to make the condition complex. Complex if-else conditions make the code harder to read.

- We can write the code to look more `declarative` with components.

## Show me the code.

Let's build a farm-app that shows the fruits on the physical farm for shoppers in the city. The farm owner wants to experiment with Mango only on a few days of the week. He wants a feature switch functionality so he can show/hide based on some variable value.

The Declarative code would be like. The farm owner would be commenting on the code on a few days of the week when he wants to hide the functionality.

Code without feature switch, dev needs to comment out the component at many places in code.

```javascript
<FarmApp>
    <Display type={'Apple'} count={500}/>
    <Display type={'Mango'} count={10}/>
    /*<Display type={'Guava'} count={30}/>*/
</FarmApp>
```

Lets write the feature switch, which is a functional component.

```javascript
import React from 'react';

const YES = true;
const NO = false;

const fruitsOnSale = {
    Apple: YES,
    Mango: YES,
    Guava: NO
};

const FruitsDisplaySwitch = (props) => {
    const {type, children} = props;
    if (fruitsOnSale[fruitType]) {
        return <React.Fragment>{children}</React.Fragment>;
    }
    return null;
}

export default FruitsDisplaySwitch;
```

Using the above `FruitsDisplaySwitch` would make our code look like below. The developer need not comment anything to turn ON/OFF. Just change the `fruitsOnSale` object.

```javascript
    <FarmApp>
        <FruitsDisplaySwitch type={'Apple'}>
            <Display type={'Apple'} count={500}/>
        </FruitsDisplaySwitch>
        <FruitsDisplaySwitch type={'Mango'}>
            <Display type={'Mango'} count={10}/>
        </FruitsDisplaySwitch>
        <FruitsDisplaySwitch type={'Guava'}>
            <Display type={'Guava'} count={30}/>
        </FruitsDisplaySwitch>
    </FarmApp>      
``` 
