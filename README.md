## How to navigate this project
***
#### The Code
- Under the Main folder you will find Components and CSS folders along with firebase info. 
- In CSS folder you will find all css files for each component along with global css.
- In Components folder you will find additional folders for things like, SignIn, Post, Profile, and Nav. Each of those conatin just a few files. MainPage digs deeper as it contains the secondary menu, along with all pages that would come from the navigation links.
#### The Site
- When not signed in you see the about us header at the top of the main page. 
- Anyone can navigate through the secondary navigation of Movies, Casting, Posts, News. Following ideally would be a mix of posts and additions made by those you follow. Displays currently for all, but should display when signed in. 
- As a proper film is separated into production segments, so are the nav-links. When you are looking for something that should take place in **Pre-Production** is will be found under that same dropdown link. 
- You can not access the profile page until you sign-in or sign-up.
- **currently there is no validation on email/password, so feel free to use any random combo to login for now**


## Why I built this project
***
- I had this idea 4 years back, when I was helping friends with some short films and music videos, back in Indianapolis/Ft. Wayne, IN
- It is meant to be a full fledged social site where those in the film industry can get together and find all the tools they need to collaborate, and work on projects. 
**think IMDB, meets LinkedIn. With additional tools, like screenwriting, budgeting a film, and scheduling.**
- It is an ambitious project that can take advantage of many different frameworks, languages, database and testing options, as well as possibly get friends on the action where we can pair program or just get some pull requests/ code revies in. It just gives me a lot to choose and learn from. 

## How I worked on this project
***
- I started with the standard npx Create-React-App. Then got started with some simple bootstrap css layout to match some of my drawings.
- From there, I added in css and text to flesh out the look, so that I could get some screenshots and see if what I wanted works, and get the mind juices flowing to help me understand other additions I may need.
- After that I worked on Sign-In, Sign-Up, so I could display the profile page when needed and get firebase authentication working. 
- Then I added router to the project. I had implemented hooks halfway through my last project, which gave me the chance to add it from the beginning of this one. 

## Improvements I plan on making to this site
***

##### Again due to the scope there is a lot I plan on improving upon. Below are just some of the immediate ones.
- I am currently working on getting information from the user when they sign up. As well as them being able to edit/update their profile info. To include, the bio questions, profile picture and 3 vidoes. 
- I want to get other users and data added, so I can start testing and flushing out the main page nav links, Movies, Posts, and Following. 
- Start working on the casting aspect. This will be the main MVP of the project. If I can get a good profile and a good casting page then I'll be happy. Then I could call this the LinkedIN of the film industry for sure.
- Beyond that: Working on the scheduling, budgeting, news, festival, screenwriting, forum, advice, etc. pages all added in and working properly. 

##### New skills, I would like to gain from this site
- I've touched upon JEST for testing, but it has been very basic. I'd like to start implementing that before the site gets too big.
- I've heard of the new Context API for React state management and would like to jump on that for this project. 
- Database wise I don't think firebase is going to cut it in the long run and will probably be looking into MongoDB
- In addition to Mongo will probably take the whole project further and shift to MERN stack with Express added as well.