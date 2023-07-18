const zipInput = document.getElementById('zip-code');
const searchBtn = document.getElementById('search-Btn');
const resultsList = document.getElementById('resultsList');

searchBtn.addEventListener('click', handleSearch);

function handleSearch(){
    const zipVal = zipInput.value.trim()
    console.log(zipVal)

    //request api

    fetchLocationDetails(zipVal)
    .then(displayLocationDetails)
    .catch(handleError);


}

function fetchLocationDetails(zipVal){
    // const url = 'https://us-zip-code-information.p.rapidapi.com/?zipcode=30043';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'e40768cc67msh55f638b9e8bb2cap1cb277jsn34e427d6c1eb',
    //         // 'Content-Type': 'application/json',
    //         'X-RapidAPI-Host': 'us-zip-code-information.p.rapidapi.com'
    //     }
    // };

    const url = `https://api.zippopotam.us/us/${zipVal}`

    return fetch(url).then(res=> res.json())
        .then(data => {
            if (data.success === false) {
              throw new Error(data.message);
            }
            return data;
          });
        
}

function displayLocationDetails(data){
    // const details = data.body[0]; 
    console.log(data)
    const {country,places} =data;
    const locationDets = places[0]
    const count = document.getElementById('country');
    const state = document.getElementById('state');
    const lat = document.getElementById('lat');
    const long = document.getElementById('long');
    const location = document.getElementById('place');

    count.innerHTML+= country;
    state.innerHTML+= locationDets.state;
    lat.innerHTML+= places[0]['latitude']; 
    long.innerHTML+=locationDets['longitude'];
    location.innerHTML+= locationDets['place name'];

    zipInput.value = '';

}

// function displayLocationDetails(data) {
//     const { places } = data;
//     const details = places[0];
  
//     // Create list item with location details
//     const listItem = document.createElement('li');
//     listItem.textContent = `Zip code: ${details['post code']}, City: ${details['place name']}, State: ${details.state}`;
  
//     // Append list item to results list
//     resultsList.appendChild(listItem);
//   }