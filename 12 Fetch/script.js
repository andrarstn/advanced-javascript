const searchButton = document.querySelector("#btn-search")
searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector("#input-keyword")

    fetch(`http://www.omdbapi.com/?apikey=cb49e3a2&s=${inputKeyword.value}`)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search
            let cards = ''
            movies.forEach(movie => {
                cards += showCard(movie)
            });

            const movieContainer = document.querySelector(".movie-container")
            movieContainer.innerHTML = cards

            // Tombol detail diklik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button')
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbID = this.dataset.imdbid
                    fetch(`http://www.omdbapi.com/?apikey=cb49e3a2&i=${imdbID}`)
                        .then(response =>response.json())
                        .then(movie => {
                            const movieDetail = showMovieDetail(movie)
                            const modalBody = document.querySelector(".modal-body")
                            modalBody.innerHTML = movieDetail
                        })
                })
            })
        })
})

function showCard(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                ${movie.Poster === "N/A" ? `<div class="mx-auto"> Image Not Found  <div>` : `<img src="${movie.Poster}" alt="" class="img-fluid ">`}
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <button class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</button>
                    </div>
                </div>
            </div>`;
};

function showMovieDetail(result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        ${result.Poster === "N/A" ? `<div class="mx-auto"> Image Not Found  <div>` : `<img src="${result.Poster}" alt="" class="img-fluid">`}
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item bg-dark text-white border-white"><h4>${result.Title} (${result.Year})</h4></li>
                            <li class="list-group-item bg-dark text-white border-white"><strong>Director : </strong>${result.Director}</li>
                            <li class="list-group-item bg-dark text-white border-white"><strong>Actors : </strong>${result.Actors}</li>
                            <li class="list-group-item bg-dark text-white border-white"><strong>Wirter : </strong>${result.writer}</li>
                            <li class="list-group-item bg-dark text-white border-white"><strong>Plot : </strong><br>${result.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
};