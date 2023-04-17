# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![Desktop View](https://drive.google.com/uc?export=view&id=1dWqEIEr-v3dwNqV-1ysfaNB9-0GdBgOe)
![Mobile View](https://drive.google.com/uc?export=view&id=1KMO2t2D3csZZBzm2vchEGX5Mzs6lVgL3)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Ping-coming-soon-page.git)
- Live Site URL: [Live](https://demarcus11.github.io/Ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
const emailInputField = document.querySelector(".ping-input"),
  errorMessage = document.querySelector(".error-message"),
  form = document.querySelector(".ping-form");

function validEmail() {
  const email = emailInputField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If test returns false show error styles else show normal styles
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please provide a valid email address";
    emailInputField.style.borderColor = "red";
    emailInputField.placeholder = "example@email/com";
    return false;
  } else {
    errorMessage.textContent = "";
    emailInputField.style.borderColor = "hsl(223, 87%, 63%)";
    return true;
  }
}

emailInputField.addEventListener("blur", function () {
  const email = emailInputField.value.trim();
  // If user clicks off the input when its empty show normal styles
  if (email === "") {
    errorMessage.textContent = "";
    emailInputField.style.borderColor = "hsl(223, 87%, 63%)";
    emailInputField.placeholder = "Your email address";
  }
});

form.addEventListener("submit", function (e) {
  if (validEmail()) {
    // Submit form
  } else {
    // Prevent form from submitting
    e.preventDefault();
  }
});
};
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
