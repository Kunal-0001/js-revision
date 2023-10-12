// Immediately Invoked Function Expressions (IIFE);

(function chai(){
    //named IIFE
    console.log("DB connected");
})();

( () => {
    console.log("DB TWO connected");
})();

( (username) => {
    console.log(`${username}`);
})('kunal');

// chai();