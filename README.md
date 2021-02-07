# #UofCC A Covid Consciousness App

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e00bc23-3e00-4fde-89b4-90a4f80f6f8f/deploy-status)](https://app.netlify.com/sites/uofcc/deploys)
[![npm version](https://img.shields.io/npm/v/feeder-react-feedback.svg)](https://www.npmjs.com/package/feeder-react-feedback)
[![GitHub forks](https://img.shields.io/github/forks/berryny/uofcovid19)](https://github.com/berryny/uofcovid19/network)
[![GitHub issues](https://img.shields.io/github/issues/berryny/uofcovid19)](https://github.com/berryny/uofcovid19/issues)

## Project

We created an app to engage young people to take COVID seriously. We wanted to think beyond public-health messaging while targeting the youth population separately for effective messaging.

### Inspiration

The United States falls behind almost every country in our ability to stop the spread of COVID. We wanted to find a way to make people take COVID precautions seriously and challenge them to think about how their actions might affect the community. We decided to target a specific age group in order to make the concept and messaging successful, trying to effectively reach a portion of the population rather than ineffectively reaching everybody. As a result, we decided to turn our attention towards informing young people - mainly 15 to 25 year olds - about behaviors that are appropriate in the upcoming months as their elders are receiving vaccinations and they are not. This time in their lives will be incredibly important to sustain their health and keep many young people from developing long term symptoms or even dying.

Problem: 

We must think beyond public-health messaging to invigorate the public to take COVID seriously -We must target specific populations separately for messaging to be effective 

Solution: 

- Create a platform to access COVID information and analyze personal safety precautions 
- Connect to youth population with age appropriate incentives like being tagged on social media and the opportunity to share daily events

### What it does

Connects the youth population to a platform where they can analyze their safety precautions and share adherence to guidelines with age appropriate incentives like being tagged on social media and the opportunity to share daily events.

[read more](https://devpost.com/software/uofcc-the-universe-of-covid-consciousness-app)

## Repo

- …or create a new repository on the command line
```
echo "# uofcovid19" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/berryny/uofcovid19.git
git push -u origin main
```
- …or push an existing repository from the command line
```
git remote add origin https://github.com/berryny/uofcovid19.git
git branch -M main
git push -u origin main
```

## How-to Section

### React Libraries 

- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Date Picker](https://www.npmjs.com/package/react-datepicker)
    - `npm install react-datepicker --save`
- [axios](https://www.axios.com/)
- Install MERN packages
    - [express.js](https://expressjs.com/)
    - [cors](https://github.com/expressjs/cors)
    - [Mongoose ](https://mongoosejs.com/docs/)
- [Nodemon](https://nodemon.io/)

### Project Setup

The below commands are based on Windows 10. Mac user, if `ERR` appears during installation, you may need to use `sudo` before each command line

- Command Line to check if Node.js is installed `node -v`. 
    - If it returns a version greater then `v14.15.4` then you're good!
    - If no version is returned, [install](https://nodejs.org/en/download/) Node.js
- Create React project using the command line `npx create-react-app PROJECT_NAME`
    - Go to project directory `cd PROJECT_NAME`
    - type `code .` to open [VSCode](https://code.visualstudio.com/)
- Create a backend folder 
```
mkdir backend
cd backend
```

### Resources

[Learn](https://medium.com/@summerxialinqiao/connect-flask-app-to-mongodb-atlas-using-pymongo-328e119a7bd8) how to Connect Flask App to MongoDB Atlas Using Pymongo

[Learn](https://www.w3schools.com/react/react_forms.asp) Multiple Input Fields

[Learn](https://levelup.gitconnected.com/build-a-todo-app-in-golang-mongodb-and-react-e1357b4690a6) Build a Todo App in Golang, MongoDB, and React

[Learn](https://www.digitalocean.com/community/tutorials/react-axios-react) How To Use Axios with React

[Learn/Watch](https://youtu.be/qEfduVAQ8FQ) Deploy a React + Flask Project to Production

[Learn/Watch](https://www.youtube.com/watch?v=XL9cNMMJf7A) Working with Config Vars on Heroku

- Installing packages using pip and virtual environments [read](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

- Page Not Found Error on Netlify Reactjs React Router solved 
    - add a `_redirects` file in the public folder 
        - add `/* /index.html 200` into the file

### Nice to Have

- Install [cool-ascii-faces](https://www.npmjs.com/package/cool-ascii-faces) get some cool ascii faces
```
npm install cool-ascii-faces -g
cool-face [-a | --all]
```
 - [Resource](https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes)

### Python and Flask for Windows

Learn how to [setup](https://flask.palletsprojects.com/en/1.1.x/installation/) virtual environment for Windows

Install [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/#install-flask)

Install [Flask-PyMongo](https://flask-pymongo.readthedocs.io/en/latest/#flask-pymongo)
```
pip install Flask-PyMongo
```

### Fix Files to Repository

- This command will unstage and remove paths from the git index `git rm -r --cached .`
- This command will add all of your files back since `.gitignore` will have the rules `git add .`
- This command will commit all files `git commit -m ".gitignore is now working"`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
