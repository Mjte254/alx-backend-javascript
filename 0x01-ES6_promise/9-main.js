import divideFunction from './9-try.js';

try {
	  console.log(divideFunction(10, 2)); // Should output 5
	  console.log(divideFunction(10, 0)); // This should throw an error
} catch (error) {
	  console.error(error.message); // This will catch the error and log "Cannot divide by 0"
}

