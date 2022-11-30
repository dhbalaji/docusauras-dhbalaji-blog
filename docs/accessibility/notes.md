# Notes

## Web accessibility

**Web Accessibility** generally refers to the ability of people to access the World Wide Web. The application of technical solutions to the design of a website is good practice which aims to improve accessibility - particularly for people who use assistive technologies, such as screen readers, screen magnification, or electronic Braille. A well-known example is the application of alternative text using the ALT Tag to describe images (pictures, photos, graphical icons etc) which enables screen reading technology and Braille output to interpret for the user what the image is depicting.

Web accessibility relies on the software’s ability to read and understand the
content and instructions contained in web pages. When the code includes all the
markup and tags to communicate meaning accurately, the information on the
page is programmatically determinable, and a browser or other device can read
and act on it.

## Web Usability

**Web usability** generally refers to the experience the user has when reading and interacting with a website, whether using assistive technology or a standard computer set-up. Although the terms accessibility and usability are sometimes blurred, in practice accessibility tends to be technology led and usability tends to be user led.

## Four principles of WCAG (POUR)

1. Content must be **perceivable** to each user

2. User interface components in the content must be **operable** by each other

3. Content and controls must be **understandable** to each other

4. Content must be **robust** enough to work with current and future technologies

## Section 508 vs WCAG

Section 508 is a national regulation in the US, similarly EU and other regions have their own. WCAG 2.0 or Web Content Accessibility Guidelines is a standard published by W3C.

## Equations

> Ability + Barrier = Disability

Then how do we avoid creating barriers and thus increase the access of the product. The answer is by adopting accessibility.


> Design + Accessibility = Inclusive design

A universal web is designed for all, inclusive of geography, language and culture.

The terms `universal design`, `inclusive design`, `barrier free design`, `human centered design` & `design for all` are all targeted to make user experience the first concern while making design decisions and include a wide range of human ability.

> WCAG + Universal Design + Design Thinking = A Web for Everyone

Accessibility should not be approached as a last minute checklist to add to an existing product but rather a set of features that are included from start.

## W3C WAI

World Wide Web - Web Accessibility Initiative develops guidelines and standards for web and software developers.

### Design thinking for accessibility

Design thinking could transform the practice of web accessibility. Much of the work on accessibility has focused mainly on modifying code to comply with guidelines and specifications. This approach can only achieve incremental improvements. But applying design thinking to the challenge of accessibility shifts to an innovative approach that could yield substantive new ideas—for example, holistic approaches that incorporate accessibility into design.

Instead of designing for a few and then bolting on accommodations for people with disabilities, you can include them in your thinking from the beginning. And with design thinking, you can use your designer’s toolkit—exploration, prototyping, and testing—to integrate accessibility into elegant, accessible products.

## Web Accessibility Initiative (WAI)

WAI is a project of the Worldwide Web Consortium (W3C). WAI produces guidelines for accessible websites and web applications.

- Web Content Accessibility Guidelines (WCAG)

- WAI-ARIA, the Accessible Rich Internet Applications Suite

- User Agent Accessibility Guidelines (UAAG)

- Authoring Tool Accessibility Guidelines (ATAG)

- IndieUI (Independent User Interface)

## Sectioning markup

Sectioning markup is a way of  associating a group of elements programmiticaly and then giving a label.

WAI ARIA - application, banner, complementary, contentinfo, form, main, navigation, search

## Use semantic markup for content

Semantic markup makes information meaningful to software. And when software can read and make sense of information, wonderful things happen for those of us who use the software.

Headings are particularly important, because most screen readers provide a helpful list of headings on a page so that users can use them to navigate the hierarchy of information.

## WCAG 2.0 and Solid Structure

Solid structure makes the site Robust, coded so that it can be ready by variety of browsers and other technologies for accessing the web, including assistive technologies. It is also perceivable because content structure and relationships can be read by technology.

The requirements of solid structure are

1. Information represented through presentation is also explained in text or through code

2. Meaningful sequence - the sequence of the content can be programmatically determined

3. Focus order

4. Language of page

5. Parsing 

6. Name, role, value


## Use basic HTML codes correctly

Label `<label>` should be before the input field. The label is related using `<label for="">` which programmatically connects the label with the input field. The label for attribute and input field attribute is making the connection.

## Use WAI-ARIA for complex elements

In case of accordion, we can use `aria-expanded` to inform the state to assistive tech.

Error messages are coded with `role="alert"` so that helpful in-line error messages can be announced to the screen reader users.

For assistive tech to enable feedback or read content, the dynamic content should be present below the cursor. 

Sequencing matters for instructions, error messages, etc

Support keyboard interaction wherever possible and do not rely on the mouse all the time.

> The text of the link and the title of the target page should be similar, if not identical.

## HTML5 and ARIA Navigation

1. article - article
2. aside - complementary
3. footer - contentinfo
4. header - banner
5. nav - navigation
6. section - region
7. main - main

## Providing alternate ways to navigate

There is no fit for all solution when it comes to navigation. Some people prefer menu, tree, site-map but search beats all of them.

---

## Notes from Adaptive web design book

### Think of the user not the browser

#### Progressive enhancement
Progressive enhancement - gold standard of how to approach web. Its aimed at crafting experiences that serve the users by giving them access to content without technological restrictions.

Progressive enhancement relies on fault tolerance. Its the ability of a system to operate when it encounters an unexpected error.

Browsers play by the rules of fault tolerance and ignore anything they did not understand. Fault tolerance has been a part of HTML and CSS since the beginning. They are forever forward compatible.

We all have special needs, progressive enhancement wins.

#### Graceful degradation

When the first graphical browser came to use, it got `img`, later audio, then video, then interaction. We lost sight of fault tolerance and began building according to latest fashion. Few of the sites were usable, even fewer were accessible.

Graceful degradation offered a full course meal to latest browsers, while tossing few scraps to the older and less capable browsers.

This attitude led to testing the website on the browser with largest market share only.

> HTML, CSS are fault tolerant but Javascript is not.

The users were left to fend themselves.

#### Rise of tolerance

Use javascript to identify capabilities and come to a compromise. We started working around all or nothing proposition.

The baseline experience is always in the form of text. Next to written text, semantics of html language prove useful.

> Do not say alt tag, its actually alt attribute. Simply `alt` text would do.

In HTML5, each `section` creates a new context and its okay to use `h1` again.

> Browsers ignore anything they do not understand

The web and its functions are a hybrid of print, television, radio, video games, kiosk or an application. W3C added ability to target styles to specific medium. `@media`.

Media assignments are incredibly powerful because they allow us to create layouts that adapt to the medium in which they are presented. eg. printer friendly.

Media queries are incredibly powerful and allow you to really fine-tune your designs for specific devices.

Media queries support `AND` and `NOT` keyword.

#### Resting and active classes

1. Add a suffix of `-on` to the base class. `.accordion` and `.accordion-on`.

2. Add another class `.auto-submit` and `.auto-submit.active`.

3. Change form of the class `.replace` and `.replaced`.

> Callback is a function that you supply to an another function so that its called at a predetermined time


#### aria-hidden

Hiding content with aria is pretty straight forward, simply employ the `aria-hidden` attribute.

```html
<p aria-hidden="true"> I am accessibly hidden</p>
```

#### aria states

All the attributes prefixed with `aria-` provide valuable information to the user about what is going on with a given element. eg. `aria-hidden`.

`aria-controls` takes an `id` reference for a value and that `id` should belong to the element whose contents is controlled by the element to which attribute is applied.

ARIA's states and properties go a long way toward helphing keep the user informed, but few concepts in ARIA area as simple and immediately useful as `Live Regions`.

`aria-live` - off / polite / assertive

#### Screen reading tools

JAWS, Windows Eyes, NVDA and ORCA

#### tabindex

`tabindex` when assigned a value of `-1` turns off the default tab order

`tabindex` when assigned a value of `0` turns on the default tab order

> ARIA role & state are 2 important concepts in WCAG-ARIA