### Setup and Runnning

-Initiate a React-Native Setup
-Clone Project
-Npm Install to install packages.
-Android:run command npx react-native run-android.(It will automatically build and download gradle file).
-IOS:
-go to the IOS Folder
-Run Pod Install Command
-run npx react-native run-ios from the root project folder.

### Libraries

-Svg files were converted to .tsx files as React Native does not support SVG's And requires 3rd Party Library React-Native-Svg.
-React Native does not support Linear Gradient and for that React-Native-Linear-Gradient was used.
-React Navigation for Navigation through app.

###Figma Design Assumptions:

-Your score has font-family Comfortaa. I left it as QuickSand which was main.
-The Welcome/HomeScreen Button has incorrect Text Should have been submit/true. Replaced it with Submit.
-The background Images i encorporated as one because React Native does not support multiple Background Images and int the design it were in different vectors.

### First Screen - Welcome Screen:

- Set the level of Difficulty(Easy,Medium,Hard)
- Enter the amount of questions you want to answer.
- Press Button "Submit" to start the game
  > You can not start the game without entering values..
- Loader appears until the screen has recieved data.

### Second Screen - Quiz Screen:

- Progress Bar increases as questions are answered.
- Once answering all questions you are navigated to the reward screen.
- You can also quit the quiz any time by pressing the cross button and redirecting home.

### Third Screen - Reward Screen:

- User's score and relative rating
- Correct Answers were with pink stars and incorrect stars were not given any color.
- List of questions with user's answers
- Button "PLAY AGAIN" to restart this game.
