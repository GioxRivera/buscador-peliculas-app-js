const apiKey = 'e25a1ef37a3dcd6faed7bf903a2bf80c'
const urlTMDB = 'https://api.themoviedb.org/3/search/movie'
const urlImage = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click', buscarPeliculas)
let resultContainer = document.getElementById('results')

function buscarPeliculas(){
    let searchInput = document.getElementById('searchInput').value
    resultContainer.innerHTML = 'Cargando...'
    fetch(`${urlTMDB}?query=${searchInput}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''
    if(movies.length === 0){
        resultContainer.innerHTML ='<p> No se encontraron resultados </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let imgPath = urlImage + movie.poster_path
        let poster = document.createElement('img')
        poster.src = imgPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}