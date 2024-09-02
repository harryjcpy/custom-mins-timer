# React Timer with Animations and Alarm

A visually appealing and fully functional timer application built with React.js. The app features a countdown timer, animated loading and hourglass effects, and a fireworks animation with sound when the timer ends. The user can easily start, pause, reset the timer, and interact with the various animations.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologiesused)
- [Contributing](#contributions)

## Features
- **Customizable Timer**: Set the timer in minutes with an input field.
- **Start/Pause/Reset Functionality**: Control the timer with intuitive buttons.
- **Animations**: 
  - **Loading Animation**: An animated loading effect while the timer is running.
  - **Hourglass Animation**: Displays an animated hourglass alongside the loading animation.
  - **Fireworks Animation**: Shows an engaging fireworks display when the timer ends.
- **Alarm Sound**: Plays a sound effect (firecracker sound) when the timer reaches zero.
- **Responsive Design**: Fully responsive and works on all devices.

## Demo
You can view a live demo of the project [here](https://main--dulcet-wisp-c20542.netlify.app/).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/timer-react-app.git
    ```
   
2. **Navigate to the project directory:**
    ```bash
    cd timer-react-app
    ```
   
3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```
   
The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter the desired time in minutes in the input field.
2. Click the **Start** button to begin the countdown.
3. Use the **Pause/Play** button to pause or resume the timer.
4. Click the **Reset** button to stop the timer, clear the time, and reset all animations.
5. Enjoy the animations and alarm when the timer ends!

## Components

### 1. `TimerButton.jsx`
- The core component that handles the timer logic, including state management and user interactions.
- Controls animations and sounds based on the timer state.

### 2. `LoadingAnimation.jsx`
- A component that displays a spinning loading animation while the timer is active.

### 3. `HourglassAnimation.jsx`
- A component that renders an animated hourglass next to the loading animation.

### 4. `Fireworks.jsx`
- A component that shows a fireworks display when the timer ends.

### 5. `App.jsx`
- The main application file that brings together all components and renders them to the screen.

## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **CSS3**: Styling for animations and visual effects.
- **JavaScript (ES6+)**: Logic for managing the timer and animations.
- **HTML5**: Structuring the application layout.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request. Please make sure to follow the project's coding style and conventions.

## Contact

If you have any questions or suggestions, feel free to reach out via email: [harsheit.mishra@gmail.com](mailto:harsheit.mishra@gmail.com)

---

### Acknowledgments
Thanks to [ChatGPT](https://openai.com/chatgpt) for assisting in building this project.

