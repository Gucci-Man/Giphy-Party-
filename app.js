const api_key = '2BuYFAhzseJsf3148uMZeJp2qaQV3hTO'
const limit = '25';
const offset = '0';
const rating = 'g';

const imageBody = document.querySelector('#imageBody'); // select div element that will contain images

async function searchGiphy(q) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key,q}});
    let randomIdx = Math.floor(Math.random() * res.data.data.length + 1) // create a random index to choose from giphy data array
    let url = res.data.data[randomIdx].images.original.url;

    const img = document.createElement("img");
    img.src = url;

    
    imageBody.append(img);
}

const form = document.querySelector('form');
const input = document.querySelector('#search');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    //console.log(input.value);
    searchGiphy(input.value);
})

const removeBtn = document.querySelector('button');
removeBtn.addEventListener("click", function(e) {
    while(imageBody.hasChildNodes()) {
        imageBody.removeChild(imageBody.firstChild);
    }
})
