# Number Guesser

Welcome to my homepage [Number Guesser](https://mienjung97.github.io/Number_guesser_PP2/)

![Number Guesser]()

## Site Overview


# Contents

1. [**Site Overview**](<#site-overview>)
2. [**Planning stage**](<#planning-stage>)
   - [**_Idea_**](<#idea>)
   - [**_Site aims_**](<#site-aims>)
   - [**_Target Audience_**](<#target-audience>)
   - [**_Site Goals_**](<#site-goals>)
   - [**_How will I achieve my goals_**](<#how-will-i-achieve-my-goals>)
   - [**_Site Structure_**](<#site-structure>)
   - [**_Wireframes_**](<#wireframes>)
   - [**_Typography_**](<#typography>)
   - [**_Color scheme_**](<#color-scheme>)
3. [**Features**](<#features>)
   - [**_Navigation menu_**](<#navigation-menu>)
   - [**_Owning Cats Homepage_**](<#owning-cats-homepage>)
   - [**_Attributes_**](<#attributes>)
   - [**_Survey_**](<#survey>)
   - [**_Footer_**](<#footer>)
4. [**Technologies Used**](<#technologies-used>)
5. [**Testing**](<#testing>)
   - [**Repository problems**](<#repository-problems>)
   - [**Validation**](<#validation>)
   - [**Responsiveness Test**](<#responsiveness-test>)
   - [**Lighthouse**](<#lighthouse>)
   - [**Browser Compatibility**](<#browser-compatibility>)
6. [**Deployment**](<#deployment>)
7. [**Credits**](<#credits>)
   - [**_Honorable mentions_**](<#honorable-mentions>)
   - [**_General reference_**](<#general-reference>)
   - [**_Content_**](<#content>)
   - [**_Media_**](<#media>)

# Planning stage
## Idea 
- 
## Site Aims 
- 
## Target Audience 
- 
## Site Goals 
- 
## How will I achieve my Goals 
- 
[Back to top](<#contents>)

## Site Structure 



## Wireframes 

The wireframes for "Number Guesser" were produced with [Balsamiq](https://balsamiq.com/). The following shows the basic design idea for mobile and desktop devices. The wireframes vary a bit from the actual webpage due to the development process.

- Desktop wireframes: <br>
![wireframe-desktop]() 

- Mobile wireframes: <br>
![wireframe-mobile]()
 
[Back to top](<#contents>)

## Typography 
- I have used the same "Bebas Neue" display font from google fonts for the whole project.

[Back to top](<#contents>)

## Color scheme 
For the webpage I have used orange, white, grey and black colors since they provide a good contrast. <br> The following pictures show all individual colors I have used:
- White: <br>
![white]() <br>
Created with [Colors]()
- Grey: <br>
![grey0.3]()
![grey0.7]()
![grey0.9]()
![grey1]()
- Orange: <br>
![orange]()
- Red and Green for Buttons: <br>
![red]()
![green]() <br>
Created with [rgbacolorpicker](https://rgbacolorpicker.com/)

[Back to top](<#contents>)

# Features 

## Navigation 
- The Navigation 


[Back to top](<#contents>)

## Game one: Coin flip
- The first game represents the odds of a coin flip: 1 in 2. <br>
![coinflip]()

[Back to top](<#contents>)

## Game two: Roll a die 
- The first game represents the odds of a coin flip: 1 in 2. <br>
![dieroll]()

[Back to top](<#contents>)


# Technologies Used 
- [HTML5](https://html.spec.whatwg.org/) - provides the content and structure for the website.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
- [JavaScript](https://www.javascript.com/) - provides the nessesary functions to create the games.
- [Gitpod](https://www.gitpod.io/#get-started) - used to host and edit the website.
- [Github](https://github.com/) - used to deploy the website.
- [Balsamiq](https://balsamiq.com/wireframes/) - used to create the wireframes.

[Back to top](<#contents>)

# Deployment

The website was deployed on GitHub Pages following these steps:

1. Go to GitHub, navigate through Repository/settings/pages.
2. Select "main branch" in the source tab and click save.
3. The page should look like this, which includes the webpages address: <br>

![deployment](readme-images/deployment.PNG)

- Information on how to fork a project: [Fork the project](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

- Information on how to clone a project: [Clone the project](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

- Difference between clone and fork: "Forking creates your own copy of a repository in a remote location (for example, GitHub). Your own copy means that you will be able to contribute changes to your copy of the repository without affecting the original repository. Cloning makes a local copy of a repository, not your own copy." [Full explanation](https://www.educative.io/answers/what-is-the-difference-between-forking-and-cloning-in-git)

[Back to top](<#contents>)

# Testing
- The Website was continiously testet for responsiveness and functional JavaScript code with console.log() function. Therefore I was able to correct all the small mistakes. 
- First I used code multiple times (same code for each game), which worked but made the code not very readable. Through guidance by my mentor, I was able to delete all the dublicate code. 

[Back to top](<#contents>)

## Repository problems

After trying to code very similar to the "Love Maths" project, I ran into more errors and bugs with each line of code. About halfway through, I decided to clear the js file, use the code that worked and build the following code by myself and the help of others [See Credits](<#credits>).

[Back to top](<#contents>)

## Validation 

### HTML validation via [HTML-validator](https://validator.w3.org/nu/)
- index.html: <br>
![index-validation](readme-images/responsive-index.PNG)
- attributes.html: <br>
![attributes-validation](readme-images/responsive-attributes.PNG)
- survey.html: <br>
![survey-validation](readme-images/responsive-survey.PNG)

### CSS validation via [CSS-validator](https://jigsaw.w3.org/css-validator/validator)
- style.css: <br>
![style-validation](readme-images/responsive-css.PNG)

[Back to top](<#contents>)

## Responsiveness Test

- The responsive design tests were carried out manually with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).

|        | Galaxy Fold | Pixel 7   | iPhone 14 Pro Max | iPad Air | iPad Pro | Display <1200px | Display >1200px |
|--------|-------------|-----------|-------------------|----------|----------|-----------------|-----------------|
| Render |     pass    |   pass    |       pass        |   pass   |   pass   |      pass       |      pass       |
| Images |     pass    |   pass    |       pass        |   pass   |   pass   |      pass       |      pass       |
| Links  |     pass    |   pass    |       pass        |   pass   |   pass   |      pass       |      pass       |

[Back to top](<#contents>)

## Lighthouse 

- The website was tested with lighthouse for both mobile and dektop screens. These are the results:
- Mobile: <br>
![mobile-index](readme-images/lighthouse-mobile-index.PNG)
![mobile-attributes](readme-images/lighthouse-mobile-attributes.PNG)
![mobile-survey](readme-images/lighthouse-mobile-survey.PNG)
- Desktop: <br>
![desktop-index](readme-images/lighthouse-desktop-index.PNG)
![desktop-attributes](readme-images/lighthouse-desktop-attributes.PNG)
![desktop-survey](readme-images/lighthouse-desktop-survey.PNG)

[Back to top](<#contents>)

## Browser Compatibility

Owning Cats website was tested on the following browsers with no visible issues for the user: 
- Google Chrome
- Microsoft Edge
- Mozilla Firefox 

Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

[Back to top](<#contents>)

# Credits

## Honorable mentions 
I have to thank my dear partner for being so patient since there is not a lot of free time and yet she fully supports me on a daily basis. <br>
I am also thankful for my co-student Marceillo, who I worked closly together and helped me in times of questioning. <br>
A big thank you goes out to the Tutors who have helped me along my first protfolio project: Alan and John helped me understand some problems, helped with technical problems and guided me towards a correct code. 

[Back to top](<#contents>)

## General reference: 
- The biggest help and inspiration in my first project was my Mentor Akshat Garg who helped me a lot with understanding .parent - .child connections, how to implement them in a long css code and media queries. 
- For the Header (Drop down menu) i took great inspiration from the "Love Running" project, the Footer has been compleatly copied since I really liked the design. Only for bigger screens, the Icons for the social media platforms move closer together. <br>
- For creating this readme, I have used example readme files from [Ewan Colquhoun](https://github.com/EwanColquhoun/wawaswoods/blob/master/README.md?plain=1#deployment) and my colleague [Marceillo](https://github.com/Marceillo) for the general overview.
- I used some help from YouTube tutorials from [EdRoh](https://www.youtube.com/watch?v=i1FeOOhNnwU) and [Slaying The Dragon](https://www.youtube.com/watch?v=phWxA89Dy94).

[Back to top](<#contents>)

## Content

- Font came from [Google Fonts](https://fonts.google.com/).
- Icons came from [Font Awesome](https://fontawesome.com/).
- Colors were created with [rgbacolorpicker](https://rgbacolorpicker.com/).
- The color palette was created with [Colors](https://coolors.co/gradient-palette/ffffff-f5f5f5?number=2).
- For creating the wireframes, I used [Balsamiq](https://balsamiq.com/wireframes/).
- For rezizing the images, the tool [Reduceimages](https://www.reduceimages.com/) was used.
- The responsive image was created with [Amiresponsive](https://ui.dev/amiresponsive).

[Back to top](<#contents>)

## Media

- Most of the images used for the hero, background image and cat breeds were taken from [Unsplash](https://unsplash.com/), the actual links are included as comments in the code.
- Two pictures were taken by me.
- The information about the cat breeds was taken from [litter-robot-blog](https://www.litter-robot.com/blog/breeds-of-cats/).

[Back to top](<#contents>)