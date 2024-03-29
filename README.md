# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./Screenshot(7).png)
![](./Screenshot(8).png)
![](./Screenshot(9).png)


### Links

- Solution URL: [Add solution URL here](https://profemmy.github.io/calculator)
- Live Site URL: [Add live site URL here](https://profemmy.github.io/calculator)

## My process


### What I learned

html radio buttons color cannot be changed, the solution I used gotten from stack overflow was to customize all of the radiobuttons attributes as so

```css
input[type='radio']:after {
    width: 9px;
    height: 9px;
    border-radius: 15px;
    top: 0px;
    left: 0px;
    position: relative;
    background-color: hsl(223, 31%, 20%);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid hsl(223, 31%, 20%);
}

input[type='radio']:checked:after {
    width: 9px;
    height: 9px;
    border-radius: 15px;
    top: 0px;
    left: 0px;
    position: relative;
    background-color: hsl(6, 63%, 50%);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid hsl(6, 63%, 50%);
}

```

removal of one attribute/style means the radio button goes back to its original/default

if aligning an item to the centre (horizontally) is giving trouble and you can;t use grid or flex set the width to 100%\

the labels for the theme changers radio buttons gave a lot of trouble but at last I used css positioning



### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/4253920/how-do-i-change-the-color-of-radio-buttons) - solved the radio button issue though it was a bit hard to understand at first.


## Author

- Frontend Mentor - [@ProfEmmy](https://www.frontendmentor.io/profile/profemmy)

#   c a l c u l a t o r  
 