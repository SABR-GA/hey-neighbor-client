# **Overview**
#### [GITHUB PAGES LINK](https://sabr-ga.github.io/hey-neighbor-client/#/)
<!-- ![image](image file) -->

## proj description

A fullstack application using MERN stack that lets people borrow/rent items or spaces from people close by. Listing users will be able to list an item or space with a price that relates to the timeframe in which the item or space will be occupied for. Customer users can then check available items they may be interested in renting for whatever needs and will be able to communicate with the listing user to reach an agreement on an amount of time and a payment. Searches should be filtered by category and location.

## proj planning
- referenced ideasgrab to generate a list of ideas between developers to assess difficulty and confirm a project concept
- wireframes: referenced twitters UI and functionality to develop general concept
- use wireframes to hone in on react architecture and backend structure
- generate a mock visual prototype for proof of concept
- made user stories to illustrate purpose of the app and assess relevant user-centric design
- Looked at industry design practices to develop a simple but aesthetically relevant and marketable logo design
    - ![image](./images/hey-neighbor-logo.png)

## rules
- communicate standards for typing and naming conventions as they initailly occur to be adhered to throughout the development of the project in the interest of achieving harmonious and cohesive programs
- always review as a group before pulling and merging files in git
- All scrum activities will happen as a group and be under group supervision
- testing code where appicable as a group as each bit of code is developed
- If working outside of class hours, communicate what piece is being worked on and what is hoped to be achieved
- communicate if unable to participate outside of class hours if a group session is discussed
- No expectations / requirements to continue work outside of class

## assignments
**to be updated daily with assignments for goals**
- Tues:
    - Robert
    - Basil
    - Adnan
    - Sam
- Wed: 
    - Robert
    - Basil
    - Adnan
    - Sam
- Thurs:
    - Robert
    - Basil
    - Adnan
    - Sam
- Fri:
    - Robert
    - Basil
    - Adnan
    - Sam


## user stories

**Jiminy Cricket:** Jiminy really enjoys civil war reenactments but cant afford his own civil war era cannon, but jiminy's neighbor is a military enthusiast with several battle cannons from multiple eras of world history. Jiminy pays his neighbor a set rate to borrow his civil war era cannon to ensure the south never rises again.

**Johnny Appleseed:** Johnny is a bit of a do-gooder, and loves fruit. Johnny wants to donate mass quantities of apples to the food bank, but cant grow the apple trees without tilling his fields. Down the street from Johnny is a farmer, from whom Johnny is able to rent a vehicle from to till his fields so that he can achieve his goals of helping the hungry with apples.

**Paul Bunyan:** Paul is an avid woodsman, and gets a great exercise by felling large trees without any assistance. One day in the forest, Paul's axe snapped in half! How was Paul to continue his bicep workout without an axe with which to chop trees? Paul hopped on Hey, Neighbor, and quickly found an axe to rent so that he could continue to fell trees while his axe was in the repair shop.

## Day	Deliverable	Status
- [] Day 1	Project Description/ markdown
- [] Day 1	Wireframes / Priority Matrix / Timeline
- [] Day 3	backend / frontend MVP complete
- [] Day 4	Bug fixes
- [] Day 4	User Authentification / post MVP goals

# Project Description

Posts Schema
- Title: String
- Date: String or Number?
- Price: Number
- Location: String
- Description: String
- Images: Array?
- Likes: Number
- Comments: Subdoc Comments
- Tags: Array

Comment Schema
- Name: String
- Date: Date.now
- Comment: String
- Up/downvote: Number (probably toggle related to prevent multiple likes from one user)

## Schema interaction
```jsx

const postSchema = new Schema ({
    Title: String,
    Date: Date.now,
    Price: Number,
    Location: String,
    Description: String,
    Comments: [commentsSchema],
})
// const postSchema = new Schema ({
//     Title: String,
//     Date: Date.now,
//     Price: Number,
//     Location: String,
//     Description: String,
//     Images: [],
//     Likes: Number,
//     Comments: [commentsSchema],
//     Tags: []
// })

const commentSchema = new Schema ({
    Name: String,
    Date: Date.now,
    Comment: String,
    Vote: Number

})

```


**POST MVP**
User Schema
- Name: String
- Password: String
- Posts: Subdoc Posts
- Comments: Subdoc Comments
- Inbox: Array holding arrays or objects of conversations

```jsx

const userSchema = new Schema ({
    Name: {
        Type: String,
        Unique: true,
        Required: true }
    encry_password: {
        Type: String,
        Required: true
    },
    Posts: [postSchema],
    Comments: [commentSchema],
    Inbox: [messageSchema]
})

const messageSchema = new Schema ({
    Title: String,
    Date: Date.now,
    Message: String,
    User: [userSchema]
})

```

**POST MVP**
Message Schema
- Title: String
- Date: Number or String?
- Message: String
- User: User Subdoc




## Inspiration:
- taskrabbit
- facebook marketplace
- craigslist
- Adnan's super really very good ideas

## references for how-tos and used code snippets

## Scratchpad low fidelity ideas
  #### minimal website layout

## Wireframes
<!-- Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page. -->
- ![image](./images/wireframe.png)
<!--
 -->
# MVP/PostMVP - 5min
## MVP
- 2 Schemas- Posting and Comments
- API storing posts and relevant comments
- Interactive client side allowing posts to be generated
- Interactive client side allowing comments to be added to posts
- a basic feed displaying posts by date
- ability to search for posts based on location or key-word/tag
- Responsive Design for mobile and desktop (react-bootstrap)
- About the devs section with a short bio

## POST MVP
- Search by item function
- Search by location function
- User authentification
- User Schema
- Messaging Schema
- tracking user posts and comments within user profile
- ability to message other users
- unique profile displaying all posts and comments 
- ability to view other users profiles
- Pagination

## REACT ARCHITECTURE
| Component | Description | 
| --------- | :---------: |  
| App       | This will render the react components | 
| Nav       | This will enable users to navigate sections of the site                | 
| create post | This will enable the user to create and store a post for others to see and interact with |
| post page | This will enable the user to interact with a specific post by commenting or up/downvoting |
| feed      | This will display the list of posts stored in the api |
| about us | This will display a short bit about each developer |
| footer | This will display the trademark and lack of liability, scroll to top |
| header | This will display the logo and nav menu, stickied to top |


| **URL**     | **HTTP Verb** | **Action** | **Description**             |
| ----------- | ------------- | -------------- | ---------------------- |
| /    | GET           |   read         | view feed       |
| /post     | POST     |    create          | create a new post     |
| /comment  | POST          |    create            | create a new comment     |
| /post/:postId | GET           |    read            | view comments     |
| /post/:postId | PATCH           |    update            | update a post detail  |
| /post/:postId/comment/:commentId | PATCH           |    update            | update a comment  |
| /post/:postId/comment/:commentId | DELETE        |    destroy            | destroy a single comment |

| Component   | Priority | Estimated Time |	Actual Time    |
|-------------|----------|----------------|----------------|
|Schemas      |	H        |	1hr           |                |
|api connect  |	H        |	1hr           |                |
|api crud     |	H        |	2hr           |                |
|client crud  |	H        |	4hr           |                |
|client route |	H        |	2hr           |                |
|feed         |	H        |	2hr           |                |
|new post     |	H        |	2hr           |                |
|about        |	H        |	2hr           |                |
|header/footer|	H        |	2hr           |                |
|style        |	M        |	2hr           |                |
|Total	      | H	     |  20hr	      |                |

## Additional Libraries
Use this section to list all supporting libraries and thier role in the project. -->
- React-Bootstrap: Design / Visual

## Code Snippet
