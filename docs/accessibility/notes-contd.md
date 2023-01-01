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

- Roles to identify sections of the webpage
- Roles to describe type of widget
- Properties to describe state of the widget
- Properties to define live regions of the page
- Properties for drag drop
- Way to provide keyboard navigation

