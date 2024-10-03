// creating a Function to resolved promise after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "delayed success!" });
        }, 500); 
    });
};

// creating a Function to rejected promise after 500ms
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception!" });
        }, 500); 
    });
};

// Calling resolvedPromise and handling the result
resolvedPromise()
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error);
    });

// Calling rejectedPromise and handling the error
rejectedPromise()
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });



//Output
//{ message: 'delayed success!' }
//{ error: 'delayed exception!' }