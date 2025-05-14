# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Assignment Questions-Answers ###

1. **Write down the steps you followed to install Node.js and npm?**
   Download Node.js from the Official Website
  Visit https://nodejs.org and download the LTS version (recommended for most users).
  Install Node.js
  Run the installer you downloaded.
  Follow the installation wizard.
  Make sure the checkbox to install npm is selected.
  Click "Next" through the steps and finish the installation.
  3.After installation, open your terminal or command prompt again and run:
  node -v
  npm -v

2. **Explain what JSX is and why it's used in React development**
   JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like.
  Why JSX is Used in React:
  Makes code more readable and expressive.
  Allows you to write HTML-like code directly in JavaScript.
  Helps React developers visualize the component structure clearly.
  Enables easy integration of JavaScript logic into UI (e.g., dynamic content, conditional rendering).

3. **Provide examples of JSX code and explain how it translates to JavaScript.**
 JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
  JSX converts HTML tags into react elements.
   
  Example
  const myElement = <h1>I Love JSX!</h1>;const root = ReactDOM.createRoot(document.getElementById('root'));root.render(myElement);

4. **Define state in React.js and explain its importance in building dynamic UIs.**
 State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.
Let's take an example of User component with message state. Here, useState hook has been used to add state to the User component and it returns an array with current state and function to update it.
import { useState } from "react";
 
function User() {
  const [message, setMessage] = useState("Welcome to React world");
 
  return (
<div>
<h1>{message}</h1>
</div>
  );
}
 
Why State Is Important
Keeps track of dynamic data like user input, API responses, toggles, counters, etc.
Controls rendering — when state changes, the UI updates automatically.
Enables interactive, responsive interfaces.

5. **Discuss scenarios where state management becomes crucial in React.js applications.**

 **Form Handling**
Managing input values, validation messages, and submission status.
**User Authentication**
Storing login state, user data, and redirecting based on access levels.
**API Calls**
Handling loading states, fetched data, and error messages dynamically.
**UI Toggles**
Expanding/collapsing menus, modals, dark mode toggles, etc.
**Complex Applications**
When multiple components share state, libraries like Redux, Context API, or Zustand help manage it efficiently.

