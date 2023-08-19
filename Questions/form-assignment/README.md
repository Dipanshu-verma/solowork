 
#### Problem Description

- Create a react form in which below inputs are included and type will as mentioned
- form should have heading `React Form Assignment` in h1 tag
- all inputs should be in the form tag else tests will fail

```
first name - `text`
last name - `text`
email - `email`
password - `password`
phone number - `number`
country - `select tag`
birth date - `date`
avatar - `file`
marriedStatus - `checkbox`
gender - `radio` - male, female and other
submit button - `submit`
```

- use single useState to maintain all form data

```
firstName: "",
lastName: "",
email: "",
password: "",
phNumber: "",
country: "",
birthDate: "",
avatar: "",
marriageStatus: false, // default
gender: "",

also input name attribute value will be same
```

- use one more useState (boolean) for showing data in ShowFormData component when form is submitted

- country options -

```
<option value="USA">USA</option>
<option value="UK">UK</option>
<option value="India">India</option>
<option value="Canada">Canada</option>
<option value="France">France</option>
<option value="Germany">Germany</option>
<option value="Japan">Japan</option>
<option value="Italy">Italy</option>
<option value="Spain">Spain</option>
<option value="Russia">Russia</option>
<option value="Brazil">Brazil</option>
<option value="China">China</option>
<option value="Indonesia">Indonesia</option>
<option value="Malaysia">Malaysia</option>
```

- show data in mentioned tags and do not remove `data-cy`

- before submitting
  <img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/222363104-40227858-3ff1-4c7b-a39a-b33fc0d959c5.png">

- after submitting
  <img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/103956933/222363098-8b0adbad-249e-43c1-bb2c-0969bf192521.png">

## Important Instructions:

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.
- Do not change the current folder structure, and names of components/files provided.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
