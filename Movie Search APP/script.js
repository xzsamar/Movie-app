// Expanded Movie Data (10 movies per row, no trailers)
const trendingMovies = [
    { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", description: "A journey through space and time to save humanity." },
    { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg", description: "Batman faces the Joker in this iconic masterpiece." },
    { title: "Dune", poster: "https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", description: "The spice must flow in this epic sci-fi saga." },
    { title: "Tenet", poster: "https://image.tmdb.org/t/p/w300/k68nPLbIST6NP96JmTxmZijEvCA.jpg", description: "Time inversion and espionage collide in Nolan's thriller." },
    { title: "Shutter Island", poster: "https://image.tmdb.org/t/p/w300/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg", description: "A detective unravels a chilling mystery on a remote island." },
    { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", description: "Reality is not what it seems in this sci-fi classic." },
    { title: "Blade Runner 2049", poster: "https://image.tmdb.org/t/p/w300/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg", description: "A stunning neo-noir sci-fi experience." },
    { title: "Fight Club", poster: "https://image.tmdb.org/t/p/w300/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", description: "The first rule is you don’t talk about Fight Club." },
    { title: "The Prestige", poster: "https://image.tmdb.org/t/p/w300/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", description: "Magicians battle in a tale of obsession and rivalry." }
];

const topPicksMovies = [
    { title: "Avatar", poster: "https://image.tmdb.org/t/p/w300/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", description: "A breathtaking sci-fi adventure on Pandora." },
    { title: "Joker", poster: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", description: "The origin story of Gotham’s most infamous villain." },
    { title: "Gladiator", poster: "https://image.tmdb.org/t/p/w300/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", description: "A general turned gladiator seeks vengeance." },
    { title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w300/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", description: "Life is like a box of chocolates." },
    { title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w300/dM2w364MScsjFf8pfMbaWUcWrR.jpg", description: "A Tarantino classic with intertwined stories." },
    { title: "The Godfather", poster: "https://image.tmdb.org/t/p/w300/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg", description: "An iconic saga of crime and family." },
    { title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", description: "Hope can set you free." },
    { title: "The Irishman", poster: "https://image.tmdb.org/t/p/w300/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg", description: "A gangster saga spanning decades." },
    { title: "Goodfellas", poster: "https://image.tmdb.org/t/p/w300/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg", description: "A classic Scorsese mob film." },
    { title: "The Revenant", poster: "https://image.tmdb.org/t/p/w300/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg", description: "A gripping tale of survival and revenge." }
];

const actionMovies = [
    { title: "Mad Max: Fury Road", poster: "https://image.tmdb.org/t/p/w300/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", description: "High-octane action in a post-apocalyptic wasteland." },
    { title: "John Wick", poster: "https://image.tmdb.org/t/p/w300/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", description: "A retired assassin goes on a revenge spree." },
    { title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", description: "The Avengers assemble for the final showdown." },
    { title: "Deadpool", poster: "https://image.tmdb.org/t/p/w300/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg", description: "A wisecracking anti-hero causes chaos." },
    { title: "Black Panther", poster: "https://image.tmdb.org/t/p/w300/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", description: "The king of Wakanda defends his throne." },
    { title: "Iron Man", poster: "https://image.tmdb.org/t/p/w300/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", description: "Tony Stark becomes the armored Avenger." },
    { title: "Thor: Ragnarok", poster: "https://image.tmdb.org/t/p/w300/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", description: "Thor faces Hela and the end of Asgard." },
    { title: "Doctor Strange", poster: "https://image.tmdb.org/t/p/w300/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", description: "A surgeon becomes the master of the mystic arts." },
    { title: "Captain Marvel", poster: "https://image.tmdb.org/t/p/w300/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg", description: "A Kree warrior discovers her past on Earth." },
    { title: "Guardians of the Galaxy", poster: "https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", description: "A ragtag group of misfits save the galaxy." }
];

// Combine for search
const allMovies = [...trendingMovies, ...topPicksMovies, ...actionMovies];

// Render movies dynamically
function renderRow(rowId, movies) {
    const row = document.getElementById(rowId);
    row.innerHTML = '';
    movies.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('movie-item');
        div.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h4>${movie.title}</h4>
            <div class="overlay-buttons">
                <button class="play-btn">▶ Play</button>
                <button class="info-btn">ℹ More Info</button>
            </div>
        `;

        // Only More Info works (opens modal)
        div.querySelector('.info-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(movie);
        });

        // Click anywhere (except buttons) also opens modal
        div.addEventListener('click', () => openModal(movie));

        row.appendChild(div);
    });
}

// Modal handling
const modal = document.getElementById('movieModal');
const modalPoster = document.getElementById('modalPoster');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.getElementById('closeModal');

function openModal(movie) {
    modalPoster.src = movie.poster;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => modal.style.display = 'none');

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Search movies
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResultsContainer = document.getElementById('searchResultsContainer');

function searchMovies() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = allMovies.filter(m => m.title.toLowerCase().includes(query));
    if (filtered.length) {
        searchResultsContainer.style.display = 'block';
        renderRow('searchResults', filtered);
    } else {
        searchResultsContainer.style.display = 'none';
    }
}

searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchMovies();
});

// Initialize rows
renderRow('trendingRow', trendingMovies);
renderRow('topPicksRow', topPicksMovies);
renderRow('actionRow', actionMovies);
