function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Input must be an array"));
        } else {
            const lowerCasedWords = mixedArray
                .filter(item => typeof item === 'string') //Filtering non-String in array
                .map(word => word.toLowerCase()); //Converting remaining words to lower case for strings
            resolve(lowerCasedWords); 
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log("Output:", result)) // Output: ['pizza', 'wings']
    .catch(error => console.error(error));
