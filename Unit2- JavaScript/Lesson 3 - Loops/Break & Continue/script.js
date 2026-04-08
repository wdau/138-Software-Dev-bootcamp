// Example using 'break'
console.log("Break Example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Stopping the loop at i = 5");
        break; // Exits the loop when i is 5
    }
    console.log(`i = ${i}`);
}

// Example using 'continue'
console.log("\nContinue Example:");
for (let j = 0; j < 10; j++) {
    if (j === 5) {
        console.log("Skipping the value j = 5");
        continue; // Skips the rest of the loop when j is 5 and moves to the next iteration
    }
    console.log(`j = ${j}`);
}
