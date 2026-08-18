import { Application, Graphics, Text } from "pixi.js";
import { checkCollision, getDistance } from "./collision";
import type { Circle } from "./types";
import "./style.css";

const app = new Application();

await app.init({
        width: 900,
        height: 600,
        backgroundColor: 0x111827,
        antialias: true,
});

document.getElementById("app")!.appendChild(app.canvas);

const ballA: Circle = { x: 300, y: 300, radius: 60 };
const ballB: Circle = { x: 600, y: 300, radius: 50 };

const graphicsA = new Graphics();
const graphicsB = new Graphics();
const boundaryA = new Graphics();
const boundaryB = new Graphics();

app.stage.addChild(graphicsA, graphicsB, boundaryA, boundaryB);

const titleText = new Text({
        text: "Circle Collision Detection",
        style: { fontSize: 28, fill: 0xffffff, fontWeight: "bold" },
});
titleText.x = 20;
titleText.y = 20;
app.stage.addChild(titleText);

const distanceText = new Text({
        text: "Distance: 0",
        style: { fontSize: 18, fill: 0xffffff },
});
distanceText.x = 20;
distanceText.y = 70;
app.stage.addChild(distanceText);

const radiusText = new Text({
        text: "Required Distance: 0",
        style: { fontSize: 18, fill: 0xffffff },
});
radiusText.x = 20;
radiusText.y = 100;
app.stage.addChild(radiusText);

const statusText = new Text({
        text: "NOT COLLIDING",
        style: { fontSize: 24, fill: 0x44ff88, fontWeight: "bold" },
});
statusText.x = 20;
statusText.y = 140;
app.stage.addChild(statusText);

let selectedBall: Circle | null = null;

graphicsA.eventMode = "static";
graphicsB.eventMode = "static";
graphicsA.cursor = "pointer";
graphicsB.cursor = "pointer";
graphicsA.on("pointerdown", () => { selectedBall = ballA; });
graphicsB.on("pointerdown", () => { selectedBall = ballB; });

app.stage.eventMode = "static";
app.stage.on("pointermove", (event) => {
        if (selectedBall) {
                selectedBall.x = event.global.x;
                selectedBall.y = event.global.y;
        }
});
app.stage.on("pointerup", () => { selectedBall = null; });
app.stage.on("pointerupoutside", () => { selectedBall = null; });

function draw() {
        graphicsA.clear();
        graphicsB.clear();
        boundaryA.clear();
        boundaryB.clear();

        const collided = checkCollision(ballA, ballB);
        const distance = getDistance(ballA, ballB);
        const requiredDistance = ballA.radius + ballB.radius;

        graphicsA.circle(ballA.x, ballA.y, ballA.radius).fill(0xff4d4d);
        graphicsB.circle(ballB.x, ballB.y, ballB.radius).fill(0x4d8dff);
        boundaryA.circle(ballA.x, ballA.y, ballA.radius).stroke({
                width: 2,
                color: 0xffffff,
                alpha: 0.5,
        });
        boundaryB.circle(ballB.x, ballB.y, ballB.radius).stroke({
                width: 2,
                color: 0xffffff,
                alpha: 0.5,
        });

        distanceText.text = `Distance: ${distance.toFixed(2)}`;
        radiusText.text = `Required Distance: ${requiredDistance}`;
        statusText.text = collided ? "COLLISION DETECTED!" : "NOT COLLIDING";
        statusText.style.fill = collided ? 0xff4444 : 0x44ff88;
}

app.ticker.add(draw);
/*
const titleText = new Text({
    text: "Circle Collision Detection",
    style: {
        fontSize: 28,
        fill: 0xffffff,
        fontWeight: "bold",
    },
});

titleText.x = 20;
titleText.y = 20;

app.stage.addChild(titleText);


const distanceText = new Text({
    text: "Distance: 0",
    style: {
        fontSize: 18,
        fill: 0xffffff,
    },
});

distanceText.x = 20;
distanceText.y = 70;

app.stage.addChild(distanceText);


const radiusText = new Text({
    text: "Required Distance: 0",
    style: {
        fontSize: 18,
        fill: 0xffffff,
    },
});

radiusText.x = 20;
radiusText.y = 100;

app.stage.addChild(radiusText);


const statusText = new Text({
    text: "NOT COLLIDING",
    style: {
        fontSize: 24,
        fill: 0x44ff88,
        fontWeight: "bold",
    },
});

statusText.x = 20;
statusText.y = 140;

app.stage.addChild(statusText);


// ------------------------------------
// 6. Make circles draggable
// ------------------------------------

let selectedBall: Circle | null = null;

graphicsA.eventMode = "static";
graphicsB.eventMode = "static";

graphicsA.cursor = "pointer";
graphicsB.cursor = "pointer";

graphicsA.on("pointerdown", () => {
    selectedBall = ballA;
});

graphicsB.on("pointerdown", () => {
    selectedBall = ballB;
});


// ------------------------------------
// 7. Mouse movement
// ------------------------------------

app.stage.eventMode = "static";

app.stage.on("pointermove", (event) => {
    if (!selectedBall) {
        return;
    }

    selectedBall.x = event.global.x;
    selectedBall.y = event.global.y;
});


// ------------------------------------
// 8. Stop dragging
// ------------------------------------

app.stage.on("pointerup", () => {
    selectedBall = null;
});

app.stage.on("pointerupoutside", () => {
    selectedBall = null;
});


// ------------------------------------
// 9. Draw everything
// ------------------------------------

function draw() {

    graphicsA.clear();
    graphicsB.clear();

    boundaryA.clear();
    boundaryB.clear();


    // Check collision
    const collided = checkCollision(ballA, ballB);

    // Calculate distance
    const distance = getDistance(ballA, ballB);

    // Sum of both radii
    const requiredDistance =
        ballA.radius + ballB.radius;


    // Draw Ball A
    graphicsA
        .circle(
            ballA.x,
            ballA.y,
            ballA.radius
        )
        .fill(0xff4d4d);


    // Draw Ball B
    graphicsB
        .circle(
            ballB.x,
            ballB.y,
            ballB.radius
        )
        .fill(0x4d8dff);


    // Draw boundaries
    boundaryA
        .circle(
            ballA.x,
            ballA.y,
            ballA.radius
        )
        .stroke({
            width: 2,
            color: 0xffffff,
            alpha: 0.5,
        });


    boundaryB
        .circle(
            ballB.x,
            ballB.y,
            ballB.radius
        )
        .stroke({
            width: 2,
            color: 0xffffff,
            alpha: 0.5,
        });


    // Update information
    distanceText.text =
        `Distance: ${distance.toFixed(2)}`;

    radiusText.text =
        `Required Distance: ${requiredDistance}`;


    // Update collision status
    if (collided) {

        statusText.text =
            "COLLISION DETECTED!";

        statusText.style.fill =
            0xff4444;

    } else {

        statusText.text =
            "NOT COLLIDING";

        statusText.style.fill =
            0x44ff88;
    }
}


// ------------------------------------
// 10. Game loop
// ------------------------------------

app.ticker.add(() => {
    draw();
});
*/