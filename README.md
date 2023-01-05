# Summative Assignment One, System Testing

For [Northeastern University](https://www.nulondon.ac.uk/)

![Alt text](https://user-images.githubusercontent.com/117585807/208923802-97881808-bffa-45ff-8334-4a82f05d111a.png)


# Project on Squared

- When a number is multiplied by itself, the result is a square number. For instance, 8 is a square number since it is equal to four lots of four, or four x four. 
 - This project is about knowing square of the number
you enter.As soon as you type a number it will show the result by multiplying itself.There is also a clear button to clear the text entered.

## 📂 Project Management 

![Alt text](https://user-images.githubusercontent.com/117585807/208953525-c6e8e833-3873-4db6-8c76-56c152c48bd7.png)

- Git project tracker was employed. Our work is better organised and prioritised thanks to project boards on GitHub AE. For the development of particular features, we can make project boards, thorough roadmaps, or even release checklists. We have the freedom to design unique workflows with project boards that meet our demands.

## Environments

- [Prod](https://loquacious-lolly-2c8d64.netlify.app/)

- [UAT](https://uat--loquacious-lolly-2c8d64.netlify.app/)

Production -The final destination for all completed and approved work is production servers. When code is put on a production server, it's been given the all-clear to go live. Never work on a production server without using some sort of version control, as there is a great chance that something will go wrong while the product is being used. When a product or production server goes offline, it may sometimes cost a firm a lot of money, which is absolutely not something

The ultimate goal is always to launch a product into production with the fewest number of flaws feasible to guarantee a completely functional  interface and satisfactory customer experience.

UAT - The developers or programmers will deploy their finished product to a test server after they have concluded their work. The team will set up and configure a test server for internal use with the relevant configurations. This makes it possible for the group to access the work for validation. A  Tester is typically used by the internal team to finish the testing step. To verify that the product is operating as it should, the tester will run a variety of use cases. The developer or programmer will be given tasks to complete if the tester finds bugs or other problems.

Here production enviroment is the intial enviroment where the  project started and UAT is the enviroment the application developed for this project.

## Git Rules
- Create a new Git repository for every new project
- Create a **new ticket** for every **new feature** to be tested
- Add acceptance criteria to feature ticket
- Create a new branch for every new feature
- One feature - one ticket - one branch - one Pull Request - many commits
- A branch name should be of small alpha characters and dashes (-)
- Use Pull requests to merge code to uat and then uat to main in a release

## Prerequisities

Three key tools are used in this project: Create React App, Jest, and React Testing Library. A single-page React application is bootstrapped using Create React App. In order to organise tests around user interactions, Jest is utilised as the test runner while the React Testing Library offers test tools.

Make sure npm is installed because this project needs it to run the files. 

### 1. Run the following command in a terminal to verify that node and npm are installed.

``` node -v ```

``` npm -v ```

### 2. Run the following command in your terminal to clone the project from Github:

``` git clone https://github.com/EDGENortheastern/sony-reddy-sys-test-dec-22.git```

Navigate to the folder you just cloned to find the code.

### 3. Install the project dependencies.

``` npm install ```

The npm install command will install all the project dependencies defined in the package.json file.

### 4. After installing the dependencies, you can either view the deployed version of the app or you can run the app locally with the following command:

``` npm start ```

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

### 5. You can view the deployed version of the app after the dependencies have been installed, or you can use the following command to execute the app locally:

``` npm test ```

``` a ```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 7.view full tests and code coverage:

``` npm test -- --coverage --watchAll=false ```

### 8.React configs in-depth and detach from react-scripts:

``` npm run eject ```

**Note: eject is one-way procedure, please note. After you eject,you can't go back!
If the build tool and configuration options don't work for you, you may always eject. With this command, you can decouple your project from the single build dependency.
.Every command, with the exception of eject, will continue to function.You're never required to use eject.The chosen feature set is ideal for small and middle-sized deployments, so you shouldn't feel compelled to use it.

# Coding Pratice

### Naming conventions
We frequently use JSX (JavaScript Extension) files while working with React. Therefore, camel case should be used for every component that we develop for React. This translates to names without spaces and every other word's first letter being capitalised. Additionally, the team ensured that the code was properly indented throughout.

![Alt text](https://user-images.githubusercontent.com/117585807/210009456-a722b6fe-eb78-42f9-9a5a-fd7279127c8b.png)


### Comments
Only add comments where they are required in the code. In addition to adhering to React best practises, this accomplishes two goals at once:

It will keep the code clean and uncluttered.
In the event that you decide to change the code in the future, you'll prevent any potential conflicts between the comment and the code.

### Code should execute as expected and be testable
We should write code that works as expected and is quick and simple to test.test suffixed test files that are exact copies of the source files. Finding the test files will thereafter be simple.

## Regression Testing
Regression testing was utilised by the team to keep the code base consistent. When performing regression testing, Rendering a UI component, taking a snapshot, and comparing the outcome to a reference snapshot file stored with the test. If the two snapshots diverge, either the change is unexpected or the reference snapshot needs to be updated to reflect the new UI component, causing the test to fail.


## React Testing Library

### Testing Logic
For our project, Jest is the best testing framework because it supports applications created with languages like Babel, Typescript, Node, React, Angular, and Vue. A javascript testing framework called Jest was developed with a focus on simplicity. This is used to collaborate on creating testing blocks that quickly achieved 90–100% code coverage. For this project, utilising Jest is advantageous because it enables us to make our project more agile because we are confident that the code we have won't break quickly.

![Alt text](https://user-images.githubusercontent.com/117585807/209441254-3c85d0b4-cc9c-4809-bf74-1b2da83d83eb.png)


## Performance and Accessibility Testing

In order to evaluate the effectiveness of our website, we used Google Lighthouse. An open source tool called Google Lighthouse can be used to audit and enhance the functionality and quality of your website. Due to its adaptability and capacity for measuring a variety of metrics, including online performance, accessibility, best practises, SEO, and progressive web apps, it is a preferred option.

Performance rating - An extremely optimised website will offer a streamlined and seamless experience, enhancing the user's overall experience while using our website, according to the site performance score of 100. Additionally, it reduces the number of users who abandon a website after trying to access it because it is taking too long to load. Poor performance hurts the user experience as a whole and makes it less appealing to stay.

Accessibility rating - The platform is easier to use for all users, regardless of age, thanks to the website's accessibility grade of 81, which also improves our SEO performance.

Best practices rating - The best practises grade of 100 indicates that the website's layout is uncomplicated and easy to use.

Search engine optimisation (SEO) - The website has a score of 100 for SEO, which means that its layout attracts higher-quality internet traffic that will arrive on its own.

![Alt text](https://user-images.githubusercontent.com/117585807/209473207-2f4b6a00-ef51-420d-b713-a31b59b8a1ac.png)

## Manual testing:
Google Docs were used to complete and record the manual testing.
Throughout the software development lifecycle, manual testing process that demands human verification at regular intervals. it is impossible to completely avoid it. Teams must therefore strike the ideal mix between manual and automated testing.

Manual testing will always be necessary.In fact, manual testing is a helpful technique for assessing user-relevant aesthetic elements, such as how quickly online things render and how easy it is to navigate around an application.

Find test cases [here](https://docs.google.com/spreadsheets/d/1hXknYGFl_Fq0X1u9uD0wKegzHCJ8oGn0EzNPjUuC0O0/edit?usp=sharing)

## Continuous Integration / Continuous Deployment
![Alt text](https://user-images.githubusercontent.com/90607671/150118179-7c55890f-1df7-4d87-b105-1cdcc8d71111.png)

![Alt text](https://user-images.githubusercontent.com/117585807/209474267-803b3b5b-7eb3-49c3-8fd3-ed0d074dd419.png)

The live app has been deployed to [Netlify](https://www.netlify.com/), one of the best sites to automate React projects and to create CD pipelines for React projects. Every time some code is merged into either main or uat branches, the Netlify sites update. When changes are merged to uat the uat environment updates here:
https://uat--loquacious-lolly-2c8d64.netlify.app/
Every time code is merged into main, the production site updates:
https://loquacious-lolly-2c8d64.netlify.app/

Moreover, Netlify runs some checks with every Pull Request. As a result, every PR is checked by Netlify for things such as broken links and also by CI (GitHub Actions) that runs all tests suites. Netlify lets developers preview the checks and produces meaningful error messages if something goes wrong.

When code is merged into main, an event known as a release happens. So far, the app had one release. The Pull Request for the release was called release 1.0 and it can be seen here:

https://github.com/EDGENortheastern/sony-reddy-sys-test-dec-22/pull/22

The next release is yet due to happen. The release happens after all manual tests are completed and all features that were due to be released in a sprint are built. 


## GitHub Actions
![Alt text](https://user-images.githubusercontent.com/117585807/209474282-e545ad77-ad7a-4e58-b1af-9460ba3262cc.png)

GitHub Actions are used to automate the test cycle each time code is pushed or a request is submitted. Now that our merged pull requests have been put to production, the team may create processes to build each pull request before it is added to the repository. Additionally, by automatically adding the required labels, the team employs GitHub Actions to improve team efficiency.

### For additional examples of GitHub Actions click here

## The boilerplate explained 

The application was created with a boilerplate  - [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

The boilerplate comes with React, React Testing Library and many other useful packages 
pre- installed. 