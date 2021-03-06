# Giving Assistant Assessment
This is a front end assessment for the Front End Engineering Manager position of Giving Assistant.

## Challenge
### FE Challenge
- Create a blank page with a button
- Create a modal that pops up when the button is clicked

### Implementation
Although the definitions involve a simple Front end implementation with some simple endpoint for the subscription, I decide to go further and create a more scalable integration.

The project has a Headless CMS to manage the creation of new coupons, as long as all the content on the app. Every field can be changed including image assets. The same CMS is used to store the subscriptions and validate the email form.

I used Strapi as the headless CMS, it's very powerful out of the box and very flexible.

Frontend implementation is made using React, with typescript for typed variables, reducing the probability of runtime errors.

I didn't use a CSS Framework, Although using bootstrap or material-UI would make the implementation very straight forward, I think that the project is leaner and the components are specific if we choose to style ourselves. Depending on the type of projects sometimes a CSS Framework is a good catch, but if you end up customizing the themes a lot, then probably creating a custom component with a library like styled-components will give you more flexibility and control over the results.

The entire project is ready to run using docker and docker-compose. Environment variables are present on the repo for simplicity, although this is a bad practice and shouldn't be done.

Because of the use of strapi as our subscribe endpoint, the throttle is implemented on the frontend, probably a better solution will be to protect on the backend because frontend is very easy to bypass.

### Design
The design can be found on Figma, https://www.figma.com/file/yPg0L3VBq1bLYchTLBy28B/Giving-Assistant-Assignment?node-id=1%3A9.

### Planning
I create GitHub issues to split the work in tickets to be achieved by a team working on the project, those can be found here, https://github.com/guettomusick/giving-assistant-assignment/milestone/1

All the tickets have a detailed explanation on the work to be done, the design, the specifications, and a definition of done so both QA and developer can test and check the expected results.

## Project
### Installation

Clone the project to your local

```
git clone git@github.com:guettomusick/giving-assistant-assignment.git
```

### Run on test environment (Clean project)

This will start a clean project, all the structure but no data on it

```
cd giving-assistant-assignment
docker-compose up
```

### Run on test environment (Test Data)

This will start a clean project and bootstrap the DB with test data

```
cd giving-assistant-assignment
docker-compose up
```

And in another terminal, run
```
./mongodump.sh
```

### Usage

On your browser, navigate to https://localhost:3000, which will open the project and choose a random coupon from the ones present on the CMS.

If you choose the clean project, you must first go to http://localhost:1337/admin, create an admin user, and add some coupons and add subscription section details. I encourage you to use test data first, and then drop the DB and start over if you want.

#### Get a specific coupon

You can get a specific coupon by using the `couponId` query param, https://localhost:3000?couponId=5f2cb0d87d3dae00fc70c1a2

#### Cms Admin

By getting to http://localhost:1337/admin you can access the admin cms panel, if you bootstrap the project, the default user is `admin@giving.com` and the default password is `Giving2020`.

### Clean the DB and start from scratch

```
docker-compose rm
docker volume rm giving-assistant-assignment_db
```
