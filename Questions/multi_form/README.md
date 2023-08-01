 

#### Problem Statement

Create a multi-step user signup form.
 
 
## Note:

- for buttons add `type="button"`
- 

### App.js

- should have the heading `React Multi Step Form` inside the h1 tag

### SignUp.jsx

- import all components from the Components folder
- Show the current step inside the `h2 tag` and add  `(Show inside form)
- create a multi-step form with `form`
- inside `form` show component according to the current step
- if the form is submitted then show the `UserInfo` component otherwise show the `SignUp form`
- you can use a boolean value to toggle between form and output
- if the form is submitted then pass form data to the `UserInfo.jsx` component

### StepOne.jsx

- create following inputs for step one

```
email    -  , type="email,
password - , type="password",
confirm password - data-cy="confirmedPassword", type="password"

```

- one `button` for the next step
- only one button `next` should be in step one

 

### StepTwo.jsx

- create following inputs for step two

```
education    -  , select tag (option - B.Tech, Bsc, B.A, BCA)
passing year -  ,  input - (type = month)
birth date   -  , input - (type = date)

```

- two buttons `next` and `previous`
 

### StepThree.jsx

- create following inputs for step three

```
first name   - , type="text",
last name    -   type="text",
phone number -  , type="tel"

```

- two buttons `next` and `previous
 

### StepFour.jsx

- create input for `father name , type="text"`, `mother name , type="text"`
- for address use `textarea  and `type="text"`
- one button for `previous`
- one button for submitting the form with `input - (type="submit")`
- use `onSubmit` on the form for submitting

 

### UserInfo.jsx

- show output inside div with `className="user_info"`
- show a success message `You are registered successfully!` inside `h2`
- Show form values inside the `p` tag

 

 