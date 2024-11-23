

function myLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Get the latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            
            console.log(`Your location: Latitude: ${latitude}, Longitude: ${longitude}`);
            // You can now send this data to a server or use it in a map API
        },
        (error) => {
            console.error("Error retrieving location:", error.message);
        }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }  
}

addEventListener("DOMContentLoaded",myLocation());