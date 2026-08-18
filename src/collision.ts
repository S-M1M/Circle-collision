import type { Circle } from "./types";

export function getDistance(a: Circle, b: Circle): number {
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    return Math.sqrt(dx * dx + dy * dy);
}

export function checkCollision(a: Circle, b: Circle): boolean {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distanceSquared = dx * dx + dy * dy;
    const radiusSum = a.radius + b.radius;

    return distanceSquared <= radiusSum * radiusSum;
}
/*
import type { Circle } from "./types";


// Calculate distance between two circles
export function getDistance(
    a: Circle,
    b: Circle
): number {

    const dx = b.x - a.x;
    const dy = b.y - a.y;

    return Math.sqrt(
        dx * dx + dy * dy
    );
}


// Check if two circles collided
export function checkCollision(
    a: Circle,
    b: Circle
): boolean {

    const dx = b.x - a.x;
    const dy = b.y - a.y;

    const distanceSquared =
        dx * dx + dy * dy;

    const radiusSum =
        a.radius + b.radius;

    return (
        distanceSquared <=
        radiusSum * radiusSum
    );
}
*/