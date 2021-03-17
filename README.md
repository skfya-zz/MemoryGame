# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sofia Khan**

Time spent: **4** hours spent in total

Link to project: (https://glitch.com/edit/#!/azure-pineapple-work)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Basically, when the user gets one wrong, it restarts the pattern completely but doesn't change the pattern. after three strikes, the player officially loses and the pattern is reset.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](win.gif)
![](lose.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I did not use any outside resources.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I had a little difficulty with implementing the game logic because there were a lot of scenarios to account for and different variables we were keeping track of that became a little confusing. However, I was able to use the flowchart provided to understand the possible contexts and implemented the game logic using that as a visual tool. At first, I mistakenly confused the guessCounter and progress variables, which caused the game to end when it wasn't supposed to be. I traced my code and realized it went wrong checking if the pattern was equal to the user's guess, so I refreshed my memory on the different variables and looked at the hints provided to realize that I needed to switch one instance of progress to guessCounter.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I'm curious about the best and worst practices of web development. Following the instructions provided, we were instructed to create a div of buttons to serve as the game board, however depending on the website's page layout, the buttons will change location (they're not in fixed rows/columns). In order to fix this, I created three divs, one for each row, and placed the buttons there. I was wondering if practices like this are okay or should be avoided.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours, I would probably add a lot more features to this project. I would create multiple versions of the game: easy, medium, and hard. The easy version would have four squares, medium nine, and hard sixteen. The user will be able to choose which version they want to play before pressing start, and then play will go as usual. I also think a progress bar for the user would be good, showing how many buttons are in the pattern so they know if they're close to the end. I would also add different music and images to the buttons, though I would have to brainstorm what they should be, if there should be a certain theme, etc.]



## License

    Copyright [Sofia Khan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
