You are tasked with building a timer component using React.

The application contains two files.

App.jsx :

App.jsx is the main component that handles the mounting and unmounting of the Timer component. It should implement the following functionalities:

Render the Timer component when the show state is true.
Render a button labeled "SHOW TIMER" when the Timer component is not mounted, and "HIDE TIMER" when the Timer component is mounted.
Toggle the show state when the "SHOW TIMER"/"HIDE TIMER" button is clicked to mount/unmount the Timer component.
Timer.jsx :

Timer.jsx is the component responsible for displaying and managing the timer functionality. It should implement the following functionalities:

Display an input field where the user can enter the initial time value in seconds.
Automatically focus the input field when the Timer component mounts.
Initialize the timer with a default initial value of 10 seconds.
Decrement the timer by 1 second every second until it reaches zero.
Display the timer value in the format HH:MM:SS (hours, minutes, seconds).
Stop the timer when it reaches zero.
Provide a "START TIMER" button to start the timer. If the timer is already running, this button should have no effect.
Provide a "STOP TIMER" button to stop the timer. If the timer is not running, this button should have no effect.
Provide a "RESET TIMER" button to stop the timer and reset it to the initial value entered by the user.