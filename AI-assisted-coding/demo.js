//function to calculate the area of a circle using radius
function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * radius * radius;
}

//function to validate an email address using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//function to fetch data from an API and to log the response
async function fetchDataFromAPI(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
}

