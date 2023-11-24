# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/mobile-FAQ.png)
![](./images/desktop-FAQ.png)

### Links

- Solution URL: [github](https://github.com/michaelr47/FAQ-AccordionCard)
- Live Site URL: [FAQ Accordion](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

Adding background images in containers was fun yet complex to do. Finding the correct positioning of the image was a challenge, let alone two images layered on top.

The before and after psuedo selectors allowed me to add these images in the background of one container.

```css
/* women illustration */
#faqCard::before {
  content: "";
  background: url(images/illustration-woman-online-mobile.svg) no-repeat;
  width: 268px;
  height: 185px;
  position: absolute;
  top: -1%;
  left: 50%;
  transform: translate(-45%, -55%);
}
/* pattern */
#faqCard::after {
    content: "";
    background: url(images/bg-pattern-mobile.svg) no-repeat;
    width: 245px;
    height: 105px;
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%, 1%);

}

```


### Useful resources

- [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) - For the illustration
- [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) - For the pattern

*
## Author

- Frontend Mentor - [@michaelr47](https://www.frontendmentor.io/profile/michaelr47)
