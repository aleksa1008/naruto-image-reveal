
# 🍜 Naruto Catching Game

![Screenshot of the game's main page with instructions](/Assets/Screenshot%202025-10-09%20at%2013.31.15.png "Screenshot")

A fun browser-based catching game where you help catch falling ramen bowls to reveal a hidden Naruto and Sasuke image!

[Play Game Here](https://aleksa1008.github.io/naruto-image-reveal/)
## 🎮 Game Description

In this interactive game, players control a basket to catch falling ramen bowls. As you progress through three increasingly difficult levels, you'll gradually reveal a hidden image featuring Naruto and Sasuke. Miss too many ramen bowls, and it's game over!

## ✨ Features

- **3 Progressive Levels**: Each level increases the falling speed
- **Image Reveal Mechanic**: Catch ramen to uncover parts of a hidden image
- **Score Tracking**: Keep track of your catches
- **Audio Effects**: Background music and sound effects for wins/losses
- **Mouse-Controlled Gameplay**: Click and move your mouse to control the basket
- **Naruto Theme**: Immersive Naruto-themed graphics and music

## 🎯 How to Play

1. **Start the Game**: Click the "START" button on the welcome screen
2. **Control the Basket**: Click on the basket to activate movement, then move your mouse to position it
3. **Catch Ramen**: Move the basket to catch falling ramen bowls
4. **Avoid Misses**: You can miss 1 ramen, but missing 2 ends the game
5. **Progress Through Levels**:
   - **Level 1**: Catch 10 ramen (Speed: 2)
   - **Level 2**: Catch 20 ramen total (Speed: 3)
   - **Level 3**: Catch 30 ramen total (Speed: 4)
6. **Win**: Catch all 30 ramen to reveal the complete image and win!

## 🛠️ Technologies Used

- **HTML5**: Game structure
- **CSS3**: Styling and animations
- **Vanilla JavaScript**: Game logic and interactivity
- **Google Fonts**: Caveat font family

## 🚀 Installation & Setup

1. **Clone or download** this repository
2. **Ensure all assets** are in the `/Assets/` folder:
   - Images: `mainpic.jpeg`, `cover2.jpg`, `box.png`, `ramen.webp`
   - Audio: `Naruto - Afternoon of Konoha.mp3`, `win.mp3`, `cryha.mp3`
3. **Open `index.html`** in a modern web browser
4. **Start playing!**

## 🎲 Game Mechanics

### Scoring System
- Each caught ramen = +1 point
- Score milestones trigger level progression:
  - 5 points: First image section revealed, speed increases to 3
  - 10 points: Second image section revealed, speed increases to 4
  - 15 points: Final image section revealed, YOU WIN!

### Difficulty Progression
- **Level 1** (0-5 points): Speed = 2px per frame
- **Level 2** (5-10 points): Speed = 3px per frame
- **Level 3** (10-15 points): Speed = 4px per frame

### Game Over Conditions
- **Win**: Catch 15 ramen bowls
- **Lose**: Miss 2 or more ramen bowls

### Controls
- **Click** on the basket to toggle movement mode
- **Move mouse** to position the basket horizontally
- **Click** again or click elsewhere to stop movement

## 🎨 Customization

You can easily customize the game by modifying:

- **Falling speed**: Change the `speed` variable in `game.js`
- **Score milestones**: Adjust the score thresholds (5, 10, 15)
- **Max misses**: Change `maxMisses` constant
- **Falling frequency**: Modify the interval in `setInterval(createFallingObject, 1000)`
- **Styling**: Edit colors, fonts, and layouts in `style.css`

## 🎵 Audio Credits

- Background Music: "Afternoon of Konoha" from Naruto OST
- Sound effects included for win/lose scenarios

## 🥅 Future enhancements

- Making hidden image change after reloading the page
- Making basket movable with keyboard

## 📝 Notes

- The game requires a modern browser with JavaScript enabled
- Audio autoplay may be blocked by some browsers - user interaction starts the music
- Game is optimized for desktop/laptop screens with mouse input

## 🐛 Known Issues

- Mobile touch controls are not currently supported
- Game dimensions are fixed (may not be fully responsive on all screen sizes)

## 📄 License

This is a fan-made game based on the Naruto series. All Naruto-related assets and music belong to their respective copyright holders.

---

**Enjoy the game and good luck catching all the ramen! 🍜✨**
