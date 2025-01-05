# Stopwatch Custom Hook
A powerful and reusable custom React hook to implement stopwatch functionality with support for play/pause, reset, lap tracking, and custom tick intervals.

## Demo
A short video demonstrating the custom hook is available [here](https://drive.google.com/file/d/1-QnwAeCBch55YH2D1D-UPGmNiQqseYNe/view?usp=sharing).

## Features
- Play/Pause: Start or pause the stopwatch.
- Reset: Reset the stopwatch count to its initial state.
- Lap Tracking: Record the current count as a lap and maintain a list of recorded laps.
- Custom Tick Intervals: Allows setting a custom tick interval in milliseconds.
- Real-Time Updates: Continuously displays the current count.

## Usage
This custom hook provides an intuitive and straightforward API to manage stopwatch functionality in your React applications.

## Hook API
- useStopWatch

### Parameters
- interval (number): The tick interval in milliseconds for updating the stopwatch count.

### Returns
An object with the following properties and methods:

- pauseOrPlay (function): Toggles between starting and pausing the stopwatch.
- reset (function): Resets the stopwatch count and clears laps.
- pausedOrPlaying (boolean): Indicates whether the stopwatch is currently paused or playing.
- current (number): The current count of the stopwatch.
- addLap (function): Records the current count as a lap.
- lap (number[]): A list of recorded laps.

## Example Output
- Initial State:
```
Current Count: 0s
Laps: []
```

- After Starting and Adding Laps:
```
Current Count: 25s
Laps:
- Lap 1: 10s
- Lap 2: 20s
```

## Notes
This custom hook abstracts away the complexity of managing stopwatch functionality, making it easy to integrate into any React component. Simply call the methods and bind them to your UI controls.

## License
This custom hook is open-source and available for both personal and commercial use. Contributions are welcome!