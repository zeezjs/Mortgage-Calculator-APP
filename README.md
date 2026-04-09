# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/screenshots/Screenshot%20(51).png)
![](./assets/screenshots/Screenshot%20(52).png)
![](./assets/screenshots/Screenshot%20(53).png)
![](./assets/screenshots/Screenshot%20(55).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla.js
- Mobile-first workflow


### What I learned

Html and css
- learnt more about containers and box model (padding, and also borders in particular)
- learn't how to add prefixs and suffixs to input fields

JavaScript
- understood the dom and how to manipulate it better
- learn't how to clean and accept user inputs
- understood the event object better (e.value is within the dom and not explicitly stored in memory)
- learnt more about the return keyword 

```html
 <div class="form-group option-grp">
              <p class="calc-label">Mortgage Type</p>
              <label for="mtgType-Repay" class="radio-grp">
                <input type="radio" name="type" id="mtgType-Repay" value="A"/>
                <span>Repayment</span>
              </label>
              <label for="mtgType-Intrest" class="radio-grp">
                <input type="radio" name="type" id="mtgType-Intrest" value="B"/>
                <span>Interest Only</span>
              </label>
              <span class="error">This field is required</span>
            </div>
<div class="mtg-term-container">
                <label for="mtgTerm" class="calc-label">Mortgage Term</label>
                <div class="mtg-term-wrapper input-wrapper">
                  <input type="text" inputmode="numeric" pattern="[0-9,]*" name="" id="mtgTerm" class="calc-input">
                  <span class="suffix">years</span>
                </div>
                <span class="error">This field is required</span>
              </div>
```
```css
.input-wrapper:focus-within{
    border: 1px solid var(--prim-lime);
}
.input-wrapper:focus-within .prefix,
.input-wrapper:focus-within .suffix{
    background-color: var(--prim-lime);
}
.prefix,
.suffix{
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: var(--Slate-700);
    background-color: var(--Slate-100);
    font-weight: 700;
    margin: 0;
}
.input-wrapper{
    padding: 0;
}
.prefix,
.suffix{
    transition: background-color 0.2s ease;
}
```
```js
const format = rawValue =>{
    let value = rawValue.replace(/[^\d.]/g, "").replace(/(\...*)\./g, '$1');
    //console.log(value)
    if(!value){
     return "";  
    };
    return Number(value).toLocaleString();
};
```


### Continued development

- validating user inputs
- 


### AI Collaboration
- I made use of ChatGPT & deepsek AI for brainstorming solutions
- What worked well? What didn't?


## Author

- Website - [Hamed Azeez](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

