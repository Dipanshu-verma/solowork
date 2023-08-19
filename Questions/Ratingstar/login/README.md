username =  admin
password  =  1234

#### Problem Statement

Create the following application:

App

- Here you should display either `Login` or `Dashboard` component based on the user authentication status.
- By default, the user is not authenticated so only `Login` component will exist on DOM.
- If the user logs in with the correct credentials,
  - `Dashboard` component will exist on DOM.
  - `Login` component Will not exist on DOM.

Login.jsx

<div style="width:80%;margin:auto;">
<img src="https://i.imgur.com/BXYq7tH.png" width="100%"/>
Component structure<br></br>
<img src="https://i.imgur.com/cf2RGFR.png" width="20%">
</div>

- Where the user can log in by entering a valid username and password in the form.
- After entering the correct credentials user should be able to see the Dashboard component.(`Login` component should not exist on DOM)
- Take a valid user name as "admin" and password as "1234"

Dashboard.jsx

- There should be a `Logout` button, where the user can logout from the application by clicking it(`Login` component should exist on DOM.)
- And there should be a `CommentList` component.

- `The below functionalities can be implemented by using the other given components by passing the required props from Dashboard to `CommentList` component`

- Our application consists of ratings where we can change the ratings by clicking on star icons, based on it appropriate comments can be seen along with the delete button of the entire rating div.
- For comments please use the `data` in the `Dashboard` component where you can find appropriate comments(title) for each rating.
- There are 5 stars in each rating div.
- The default color is "grey" and the color of the stars should be changed to "yellow" based on the user rating and appropriate comments should be changed based on the user selection.(Use same colors mentioned)
- Initial 5 ratings div's should be there as per the data provided in `Dashboard` component. (like the first div should have a rating of 1 star, the second should have a rating of 2 stars, and appropriate comments should be there)

<div>
<img src="https://i.imgur.com/TUnmlxL.png" width="100%"/>
Component structure<br></br>
<img src="https://i.imgur.com/j91Q2SE.png" width="20%">
</div>

CommentList.jsx

- Here we will map all the comments with the help of `Comment` component.

Comment.jsx

- consist of the `title` of the rating in the `h1` tag with color based on the rating and consists of one component `StarRating` and a `FaTrash`(Basically a trash icon). (don't change the data-icon attribute)
- On clicking the trash icon, the entire rating `div` of that particular rating should be removed from the DOM.

StarRating.jsx

- will consist of a `star` component and a `p` tag which should have text content based on rating like "1 of 5";
- Now you need to add total 5 stars in a way such that on clicking on any stars appropriate `rating` and `color` of `title` should be changed

Star.jsx

- will consists of FaStar icon(don't change the data-icon attribute)

Note:-  
for start icons and trash icons, you can import from react-icons(https://react-icons.github.io/react-icons/)

- Icon name: Fastar
- icon name: FaTrash
  We already imported the respective icons in the component, Please refer to the documentation for adding additional functionality if needed.

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to a low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

 