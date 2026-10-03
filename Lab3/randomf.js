function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(random (1, 20));



function generateKey(length, characters) {
    const result = [];
    for (let x = 0; x < length; x++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result.push(characters[randomIndex]);
    }
    return result.join("");
}
const characters = "MEmjedeJW438259012";
const key = generateKey(16, characters);
console.log(key);
