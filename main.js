document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=OwyxRbxBIzujYaS7KuKZfWiCoKium510i23RKtqj`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        document.querySelector('h1').innerText=response.title;
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else{
          document.querySelector('iframe').src = response.url
        }
        document.querySelector('h2').innerText= response.explanation;
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error")
    });
}
