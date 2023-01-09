# Notes Part 2

## Web Accessibility for Developers, essential skills for web developers

### WCAG

WCAG - Web Content Accessibility Guidelines is the primary specification adopted around the world and describes how `web content` should be created so it will be accessible to people with disabilities. The content should follow POUR principles.

- Perceivable
- Operable
- Understandable
- Robust

WCAG also introduces conformance levels. Conformance levels can be thought of in terms of their importance toward removing barriers, with  Level A being the most important.

**Level A**: These issue `must` be resolved or some group will not be able to access the content. Example missing alt text

**Level AA**: These issue `should` be resolved or some group will find it difficult to access or use the content. example, keyboard navigation

**Level AAA**: These issues `could` be resolved to improve usability for all groups.

Level AA is generally accepted level of conformance most websites should aim for. Very few websites will comply at level AAA apart the most basic of sites.

### WAI-ARIA

WAI is a subgroup of W3C. The WAI has developed a specification Accessible Rich Internet Applications, typically referred to as WAI-ARIA.

WAI-ARIA is generally used with Javascript. It complements HTML5 and gives developers more freedom to build custom content, web applications and interface controls.

HTML has built in semantics and can operate without WAI-ARIA when used in a standard way. When HTML is used in a non standard way like making a button out of div, then WAI-ARIA is useful.

```html
  <div role="button" aria-pressed="true" tabindex="0">Button</div>
```

> tabindex="0" is called null tabindex

### Popular screen readers

ChromeVox, JAWS and NVDA

### In depth WAI-ARIA

WAI-ARIA is a framework for adding attributes to identify features for their user interaction, how they relate to each other and their user interaction. WAI-ARIA provides semantics for custom widgets and web applications.

#### Types of roles

Roles

  - Roles to identify sections of the webpage
  - Roles to describe type of widget

Properties
  - Properties to describe state of the widget
  - Properties to define live regions of the page
  - Properties for drag drop

Keyboard navigation  

  - Way to provide keyboard navigation

### Application of accessibility elements

They can be used on their own or they can be added/removed dynamically. Web ARIA is used to convey the meaning to assistive technologies and in human understandable form. For native `html` elements, there is no need to fix the accessibility aspects. HTML validators will still give you warnings about the redundant roles, but you can safely ignore these.

> RSP - Roles, State & Properties

## Roles

Role is a main indicator of type of widget. Once a element is assigned with the role, the `role` must not change on user input or over time. They must be the same or the entire element needs to be changed.

Roles fall into 6 categories

1. Abstract role - not to be used by authors, base for WAI-ARIA

2. Widget role

3. Document structure role

4. Landmark role

5. Live region role

6. Window role

## States

A state is a dynamic property expressing the charecter of an object that might change on events. States show change in data or user interaction possiblities. eg aria-checked

## Properties

Attributes that are essential to the nature of the given object. eg aria-valuetext

Here are some of the aria properties whose values do not change

- aria-describedby
- aria-atomic
- aria-autocomplete
- aria-colcount
- aria-controls

If you do not use javascript, most of the properties are going to be static in the document. They are classified as global static properties.

- aria-describedby: Identifies the element that describes the object
- aria-labelledby: Identifies the element that labels the current element
- aria-label: defines the string value that labels the current element
- aria-controls: Identifies the element whose contents or presence is controlled by current element

others aria-owns, aria-details,

### Widget static attributes

- aria-haspopup
- aria-modal
- aria-readonly
- aria-required


### Live static regions

- aria-live
- aria-atomic
- aria-relevant

## Browser and screen reader support

> Like cross browser testing for web apps, testing aria across multiple browsers and screen readers is necessary. If any deviation, provide a work around.

Developers can adopt progressive enhancement or graceful degradation technique. Progressive enhancement is preferred over graceful degradation.

Not all AT support the modern HTML5 semantic tagss like the browsers, the work around is to provide the role attribute. These roles are redundant in modern browserss and AT. However HTML vaidators will throw a warning.

