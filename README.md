# Frontend Project

## Table of Contents

- [About](#about)
  - [Built With](#built-with)
- [Installation](#installation)
- [Hosting](#hosting)

---

## About

This is a front-end project built with React.JS, and social news aggregation, content rating, and discussion web application that enables the user to perform several actions such as:

- scrolling through articles
- explore articles sorted by topic
- posting and deleting a comment
- voting on their favourite posts
- sorting articles by date, votes and by order (ascending / descending)


The React application was built with mobile-first approach and has a responsive design. It was also built with considerations of the user-friendly experience, such as optimistic rendering which updates the state optimistically, this provides feedback to the user when they have voted or posted a comment.


Further, error handling was implemented in the back-end project for this React application which supplies the front-end with error messages.

Error handling was also supplemented for all API requests with React.JS and the app produces error messages appropriately for wrong requests or wrong endpoints.


**Hosted version:** https://codeit-nc.netlify.app/

The **back-end API** for this project can be found here https://github.com/Niko-7/nc_news and was build with Node.JS.

---

### Built with

The following tools and libraries were used

[<img src="https://img.shields.io/badge/-React.js-purple">](https://reactjs.org//) [<img src="https://img.shields.io/badge/-Axios-orange">](https://axios-http.com/docs/intro) [<img src="https://img.shields.io/badge/-React Bootstrap-blue">](https://react-bootstrap.github.io/)

---

## Installation

To run the project locally you need to clone the repository and then run the following commands on the terminal.

NOTE: The minimum version of **Node.JS** to run the project is v6.9. **React.JS** v18.0 was also utilised.

1. First, please fork the project from this link https://github.com/Niko-7/nc_news.git

2. To clone the project run this command along with the link of your forked project

```sh
git clone <github link here>
```

3. Then, go into the directory and open the project

```sh
cd <project_name_here>
```

4. Install the dependencies

```sh
npm install
```

5. Now go ahead and run the app to view it locally

```sh
npm run start
```

---

## Hosting

This React.JS application is hosted on [Netlify](https://www.netlify.com/) at https://codeit-nc.netlify.app/.

---
