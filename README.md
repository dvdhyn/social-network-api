# Social Network API


## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Process](#process)
* [Demonstration](#demonstration)

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Process

This week we were not given starter code.

Programs used to handle queries / manage database
```
MongoDB, MongoDB Compass, Node.js
```
npm package dependencies
```
express.js
mongoose
```
Before running the script, install any dependencies with `npm install`.

To populate the database with seeds, use the command `node utils/seed`.

To invoke the server, use the command `node index.js`.


## Demonstration
[https://app.screencastify.com/v3/watch/AgvI75amNUY5szLl1T7f](https://app.screencastify.com/v3/watch/5os7uNYaQS8IS4JMC0It)https://app.screencastify.com/v3/watch/5os7uNYaQS8IS4JMC0It
