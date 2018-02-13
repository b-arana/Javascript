var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// Add two of your favorite animals to the end of the array
animalArray.push("lion", "bear polar");           
animalArray;
// ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah", "lion", "bear polar"]
// Remove the first two elements of the array.
animalArray.splice(0, 2);
animalArray;
// ["Fish", "Lizard", "Whale", "Cheetah", "lion", "bear polar"]
// Replace the last element in the array with the word“ last"
animalArray.splice(5, 1, "last");
animalArray;
// ["Fish", "Lizard", "Whale", "Cheetah", "lion", "last"]