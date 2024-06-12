# Getting Started with Create React App

### `npm i @mui/icons-material @mui/material @emotion/styled @emotion/react`
### `npm i react-redux @reduxjs/toolkit OR npm i react-redux redux redux-thunk`
### `npm i redux-devtools-extension`
### `npm install redux-devtools-extension --legacy-peer-deps`(Dependency Conflict with Redux)
### `npm uninstall redux(For Uninstall)`
### `npm update redux`
### `npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome --legacy-peer-deps`
### `npm install @material-ui/core`
### `npm i cors`
### `npm i axios`
### `npm install react-router-dom --legacy-peer-deps(Use only when there is a dependency conflict)`


# Run the application after going to the folder where code and .json is present: npm start

# For cloning a reposiotry from Github, and start making commits:

git init  
git clone URL
then pushing code by git push.

To check which port is running: netstat -ano | findstr : 3306


# While pushing the code for the first time(Not for people pulling the already existing github code):

Create a new reposiotry in Github, and save that github Url like -> https://github.com/<username>/<repository.git>
git add --all
git commit -m ""
For adding: git remote add origin https://github.com/arka1997/OscuroBackend.git (the Github Url, where you wan to push the code)
For updating the existing incorrect repo: git remote set-url origin https://github.com/arka1997/OscuroBackend.git
git push --set-upstream origin master

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
