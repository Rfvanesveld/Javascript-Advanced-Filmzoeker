function moviesToTheDOM(movieArray) {
    removeMovieDataBase()
    movieArray.forEach(movie => {
        let MovieATag = document.createElement("a")
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};
moviesToTheDOM(movies)

document.getElementById('all')
    .addEventListener('click', allMovies);

document.getElementById('latest')
    .addEventListener('click', latestMovies);

document.getElementById('avengers')
    .addEventListener('click', avengerMovies);

document.getElementById('xmen')
    .addEventListener('click', xmenMovies);

document.getElementById('princess')
    .addEventListener('click', princessMovies);

document.getElementById('batman')
    .addEventListener('click', batmanMovies);


function allMovies() {
    removeMovieDataBase()
    movies.forEach(movie => {
        let MovieATag = document.createElement("a")
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};

function latestMovies() {
    removeMovieDataBase()
    function latest(movies) {
        let movieList1 = movies.filter(movie => movie.Year >= 2014);
        movieList1.forEach(function (movie) {

            let MovieATag = document.createElement("a")
            MovieATag.setAttribute("target", "_blank");
            let movieImg = document.createElement("img");
            MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
            movieImg.src = movie.Poster;
            let movieList = document.getElementById("movieDataBase");
            movieList.appendChild(MovieATag);
            MovieATag.appendChild(movieImg);
        });
    };
    latest(movies)
};

function avengerMovies() {
    removeMovieDataBase()
    let movielist = movies.filter(movie => movie.Title.includes("Avengers"));
    movielist.forEach(function (movie) {

        let MovieATag = document.createElement("a");
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};

function xmenMovies() {
    removeMovieDataBase()
    let movielist = movies.filter(movie => movie.Title.includes("X-Men"));
    movielist.forEach(function (movie) {

        let MovieATag = document.createElement("a");
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};

function princessMovies() {
    let movielist4 = movies.filter(movie => movie.Title.includes("Princess"));
    removeMovieDataBase()
    movielist4.forEach(function (movie) {

        let MovieATag = document.createElement("a");
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};

function batmanMovies() {
    let movielist5 = movies.filter(movie => movie.Title.includes("Batman"));
    removeMovieDataBase()
    movielist5.forEach(function (movie) {

        let MovieATag = document.createElement("a");
        MovieATag.setAttribute("target", "_blank");
        let movieImg = document.createElement("img");
        MovieATag.href = "http://www.imdb.com/title/" + movie.imdbID;
        movieImg.src = movie.Poster;
        let movieList = document.getElementById("movieDataBase");
        movieList.appendChild(MovieATag);
        MovieATag.appendChild(movieImg);
    });
};

let searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", (event) => {
    let searchRequest = event.target.value.toLowerCase();
    let filteredMovies = movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(searchRequest);
    });
    moviesToTheDOM(filteredMovies)
});

function removeMovieDataBase() {
    document.getElementById("movieDataBase").innerHTML = "";
}

