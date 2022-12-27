# Summative Assignment One, System Testing

For [Northeastern University](https://www.nulondon.ac.uk/)

![Alt text](https://user-images.githubusercontent.com/117585807/208923802-97881808-bffa-45ff-8334-4a82f05d111a.png)


# Project on Squared

- A square number is the result when a number has been multiplied by itself. For example, 4 is a square number because it’s 2 lots of 2, or 2 x 2. 
 - This project is about knowing square of the number
you enter.As soon as you type a number it will show the result by multiplying itself.There is also a clear button to clear the text entered.

## 📂 Project Management 

![Alt text](https://user-images.githubusercontent.com/117585807/208953525-c6e8e833-3873-4db6-8c76-56c152c48bd7.png)

- We used git project tracker.Project boards on GitHub AE help to organize and prioritize our work. We can create project boards for specific feature work, comprehensive roadmaps, or even release checklists. With project boards, We have the flexibility to create customized workflows that suit our needs.

## Environments

- [Prod](https://loquacious-lolly-2c8d64.netlify.app/)

- [UAT](https://uat--loquacious-lolly-2c8d64.netlify.app/)

## Git Rules
- Create a new Git repository for every new project
- Create a **new ticket** for every **new feature** to be tested
- Add acceptance criteria to feature ticket
- Create a new branch for every new feature
- One feature - one ticket - one branch - one Pull Request - many commits
- A branch name should be of small alpha characters and dashes (-)
- Use Pull requests to merge code to uat and then uat to main in a release

## Prerequisities

This project utilizes three main tools: Create React App, Jest, and React Testing Library. Create React App is used to bootstrap a single-page React application. Jest is used as the test runner, and React Testing Library provides test helpers for structuring tests around user interactions.

This project requires npm to execute the files, so ensure that it is installed 

### 1. To know node & npm are installed run below command on terminal

``` node -v ```

``` npm -v ```

### 2. To clone the project from Github, open your terminal and run the following command:

``` git clone https://github.com/EDGENortheastern/sony-reddy-sys-test-dec-22.git```

Navigate to the folder you just cloned to find the code.

### 3. Install the project dependencies:

``` npm install ```

The npm install command will install all the project dependencies defined in the package.json file.

### 4. After installing the dependencies, you can either view the deployed version of the app or you can run the app locally with the following command:

``` npm start ```

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

### 5. The project dependencies have been installed, and the app is now running. Next, open a new terminal and launch the tests with the following command:

``` npm test ```

``` a ```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 7.view full tests and code coverage:

``` npm test -- --coverage --watchAll=false ```

### 8.React configs in-depth and detach from react-scripts:

``` npm run eject ```

**Note: this is a one-way operation. Once you eject, you can't go back!
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Coding Pratice

### Naming conventions
Working with React, we are generally using JSX (JavaScript Extension) files. Any component that we create for React should therefore be  camel case. This translates to names without spaces and the capitalizing the first letter of every second word.The team also made sure the code had the correct indentatiouts throughout the entire code.


### Comments
Attach comments to code only where necessary. This is not only in keeping with React best practices, it also serves two purposes at the same time:

It’ll keep code visually clutter free.
You’ll avoid a potential conflict between comment and code, if you happen to alter the code at some later point in time.

### Code should execute as expected and be testable
The code we write should behave as expected, and be testable easily and quickly.Test files identical to the source files with a .test suffix. It’ll then be easy to find the test files.


## Regression Testing
The team used regression testing to maintain code base consistency. Regression testing creates a snapshot renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.


## React Testing Library

### Testing Logic
Jest is an javascript testing framework designed with simplicity in mind and Jest supports projects coded using Babel, Typescript, Node, React, Angular, Vue and more; Making Jest an ideal testing framework for our project. Using Jest, the team worked together to produce testing blocks that lead to 90-100% code coverage within a short period of time. Using Jest is beneficial for this project because unit testing using Jest allows us to make our project more agile as we are already confident that the code we have will not break easily 

![Alt text](https://user-images.githubusercontent.com/117585807/209441254-3c85d0b4-cc9c-4809-bf74-1b2da83d83eb.png)


## Performance and Accessibility Testing

We used Google Lighthouse to test the performance of our website.Google Lighthouse is an open source tool for auditing and improving the quality and performance of your website. It's a popular choice due to its versatility and ability to measure different areas such as web performance, accessibility, best practices, SEO, and progressive web app

Performance rating -The site performance score of 100 indicates that it is highly optimised, and as a result, it will provide a streamlined and smoother experience, improving the user's overall experience while using our website. This also lowers the bounce rate of users who attempt to access the website in case it takes too long to load. The overall user experience is harmed by subpar performance, which also reduces the draw to stick around.

Accessibility rating -   The website's accessibility grade of 81 enhances our SEO performance and makes it simpler for all users, regardless of age, to use the platform. 

Best practices rating - The website's design appears to be straightforward and simple to use, as shown by the best practises rating of 100.

Search engine optimisation (SEO) - The website's search engine optimization (SEO) score of 100 indicates that it has a design that draws in higher-quality internet traffic and that this traffic will come spontaneously.

![Alt text](https://user-images.githubusercontent.com/117585807/209473207-2f4b6a00-ef51-420d-b713-a31b59b8a1ac.png)

## Manual testing:
Manual testing was completed and documented using google docs.
Manual testing can never be avoided entirely as it is a continuous process that requires human verification at regular intervals throughout the software development lifecycle. As a result, it’s essential for teams to find the right balance between manual and automated tests.

Although the agile approach towards software development is continuously demanding a shift towards test automation, manual testing will always be essential. In fact, manual testing is a good way to assess aesthetic aspects relevant to end-users such as how well the web elements render, how easy it is to navigate through an application, and so on.
Find test cases [here](https://docs.google.com/spreadsheets/d/1hXknYGFl_Fq0X1u9uD0wKegzHCJ8oGn0EzNPjUuC0O0/edit?usp=sharing)

## Continuous Integration / Continuous Deployment
![Alt text](https://user-images.githubusercontent.com/90607671/150118179-7c55890f-1df7-4d87-b105-1cdcc8d71111.png)

![Alt text](https://user-images.githubusercontent.com/117585807/209474267-803b3b5b-7eb3-49c3-8fd3-ed0d074dd419.png)

Our website is updated every time we push to the main branch using Netlify, and whenever a pull request is created as part of our workflow, Netlify also checks to see if there are any warnings and creates a preview for that particular pull request. This is advantageous for our team because using netlify to launch our website is exceptionally quick and simple, saving time and raising productivity as a result. With Netlify, you may lock onto a main branch for main deployments, which will save you even more time. In order to save the time it takes you to test your code before merging, it can also deploy other branches and provide you with a URL to test those deploys.

## GitHub Actions
![Alt text](https://user-images.githubusercontent.com/117585807/209474282-e545ad77-ad7a-4e58-b1af-9460ba3262cc.png)

Every time code is pushed or a request is made, GitHub Actions is used to automate the test cycle. The team may now design procedures to deploy our merged pull requests to production or to build each pull request before it is added to the repository. Additionally, the team uses GitHub Actions to enhance team productivity by automatically adding the necessary labels.

### For additional examples of GitHub Actions click here

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
