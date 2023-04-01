// Unsplash API
const count = 10;
const apiKey = 'uZhX4MXw78JxDNAq6cbttnIR3xM55oxn19pidTabD3M';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
