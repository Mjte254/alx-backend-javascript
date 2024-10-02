function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call logic here
    const responseFromAPI = true; // Replace with actual API call logic

    if (responseFromAPI) {
      resolve(responseFromAPI); // resolve with API response
    } else {
      reject("Error: API call failed"); // reject with error message
    }
  });
}

export default getResponseFromAPI;
