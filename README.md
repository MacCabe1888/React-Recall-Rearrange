# React-Recall-Rearrange
A React-powered memory game.

### Visit

You can visit the deployed site at the following URL: https://maccabe1888.github.io/React-Recall-Rearrange/

### Overview

The rules of the game are simple: click on an image to earn a point, but don't click on any image more than once in the same round, or your score will be reset to zero.

### Technical Approach

* The site is built as a front-end React app consisting of several modular components:
    - App, which includes
        * a state which stores
            - the current round
            - an array of all the clickable choices, and whether each has been clicked yet in the current round
            - the user's current score
            - the user's high score
        * several functions which contain the game's logic in the form of conditional updates to the App component's state
        * a render function which renders the HTML determining the overall layout of the page
            - contains the other components
    - Bar, which displays
        * the game's title
        * a message (see "Message" below) which lets the user know whether the last guess was correct (i.e., not a repeat click on a clickable already clicked earlier in the current round)
        * the number of the current round
        * the user's current score
        * the user's high score
    - Clickable,
        * one instance of which is rendered for each choice stored in the App component's state
        * each of which has a unique image and click handler function, as well as a shake property which causes the clickable to undergo a shaking animation iff the user's last guess was an incorrect (i.e., repeat) guess
    - Container, in which the clickables are displayed
    - Footer, in which the game's title and the React logo are displayed
    - Header, which contains the game's title and the basic rules
    - Message, which contains the logic for updating and animating the message displayed inside the Bar component according to the user's last guess
* All components other than App are stored in a "components" folder along with an "index.js" file which centralizes the exports to "App.js" so that they can all be imported in one line via destructuring, as follows:
    - import { Bar, Clickable, Container, Footer, Header } from "./components";
* The clickable choices to be stored in the App component's state are imported from the "choices.json" file, which contains an array of objects displaying the relevant information for each clickable. For example:
    -   {
            "id": 1,
            "image": "/assets/images/gary.jpg",
            "clicked": false
        }

### User Guide

* The basic rules:
    - Click on an image to earn a point.
    - Don't click on any image more than once in the same round, or your score will be reset to zero.
* Additional rules:
    - Your high score represents the highest score you have attained since the page loaded. Be careful not to refresh or close the tab if you want to keep your high score!
    - You will move on to the next round (meaning that all clickables are safe choices again and have not yet been clicked for all intents and purposes) once you have successfully clicked every clickable without any repeat clicks in a given round.
    - Regardless of what round you are currently on, the round will reset to Round 1 if you perform a repeat click.
