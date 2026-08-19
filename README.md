# Circle Collision Game

A simple 2D circle collision detection project built with **TypeScript** and **PixiJS**.

## Features

* Two draggable circles
* Real-time distance calculation
* Circle-to-circle collision detection
* Collision status display
* Simple interactive PixiJS canvas

## Technologies

* TypeScript
* PixiJS
* Vite

## How It Works

The project calculates the distance between the centers of two circles and compares it with the sum of their radii.

```text
Distance <= Radius A + Radius B
            ↓
       Collision
```

You can drag the circles with the mouse and see the collision status update in real time.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/S-M1M/Circle-collision.git
```

Go to the project folder:

```bash
cd Circle-collision
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Project Structure

```text
src/
├── main.ts       # Main game logic and PixiJS rendering
├── collision.ts  # Collision detection calculations
├── types.ts      # TypeScript types
└── style.css     # Page styling

index.html        # HTML entry point
```

## Author

**S-M1M**
