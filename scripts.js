// Mock data for movies
const mockMovies = {
    popular: [
        {
            id: 1,
            title: "Stranger Things",
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments...",
            poster_path: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            vote_average: 8.6,
            trailer_url: "https://www.youtube.com/embed/b9EkMc79ZSU"
        },
        {
            id: 2,
            title: "The Witcher",
            overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny...",
            poster_path: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
            vote_average: 8.0,
            trailer_url: "https://www.youtube.com/embed/ndl1W4ltcmg"
        },
        {
            id: 3,
            title: "The Queen's Gambit",
            overview: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess...",
            poster_path: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
            vote_average: 8.7,
            trailer_url: "https://www.youtube.com/embed/CDrieqwSdgI"
        },
        {
            id: 4,
            title: "The Mandalorian",
            overview: "The travels of a lone bounty hunter in the outer reaches of the galaxy...",
            poster_path: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
            vote_average: 8.5,
            trailer_url: "https://www.youtube.com/embed/aOC8E8z_ifw"
        },
        {
            id: 5,
            title: "Money Heist",
            overview: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain...",
            poster_path: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            vote_average: 8.3,
            trailer_url: "https://www.youtube.com/embed/_InqQJRqGW4"
        },
        {
            id: 6,
            title: "Dark",
            overview: "A missing child sets four families on a frantic hunt for answers...",
            poster_path: "https://image.tmdb.org/t/p/w500/5Lo4WFYAHxYtvFmTwsbM2V5L9QV.jpg",
            vote_average: 8.8,
            trailer_url: "https://www.youtube.com/embed/ESEUoa-mz2c"
        }
    ],
    trending: [
        {
            id: 7,
            title: "Lupin",
            overview: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father...",
            poster_path: "https://image.tmdb.org/t/p/w500/gsWDVDjZtxob14DHuVbLSSXcPsq.jpg",
            vote_average: 7.9,
            trailer_url: "https://www.youtube.com/embed/ga0iTWXCGa0"
        },
        {
            id: 8,
            title: "The Crown",
            overview: "The reign of Queen Elizabeth II of the United Kingdom and the events that shaped the second half of the 20th century.",
            poster_path: "https://image.tmdb.org/t/p/w500/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
            vote_average: 8.6,
            trailer_url: "https://www.youtube.com/embed/JWtnJjn6ng0"
        },
        {
            id: 9,
            title: "The Boys",
            overview: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
            poster_path: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYNISfwRl6hpy5m.jpg",
            vote_average: 8.4,
            trailer_url: "https://www.youtube.com/embed/M1bhOaLV4FU"
        },
        {
            id: 10,
            title: "Cobra Kai",
            overview: "Decades after their 1984 All Valley Karate Tournament battle, a down-and-out Johnny Lawrence seeks redemption...",
            poster_path: "https://image.tmdb.org/t/p/w500/obLBdhLxheKg8Li1qO11r2SwmYO.jpg",
            vote_average: 8.1,
            trailer_url: "https://www.youtube.com/embed/xCwwxNbtK6Y"
        },
        {
            id: 11,
            title: "The Umbrella Academy",
            overview: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
            poster_path: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
            vote_average: 8.0,
            trailer_url: "https://www.youtube.com/embed/0DAmWHxeoKw"
        },
        {
            id: 12,
            title: "The Falcon and the Winter Soldier",
            overview: "Following the events of Avengers: Endgame, Sam Wilson and Bucky Barnes team up in a global adventure.",
            poster_path: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYWF6NcGmYMLr.jpg",
            vote_average: 7.7,
            trailer_url: "https://www.youtube.com/embed/IWBsDaFWyTE"
        }
    ],
    top_rated: [
        {
            id: 13,
            title: "Breaking Bad",
            overview: "A high school chemistry teacher diagnosed with cancer turns to a life of crime...",
            poster_path: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
            vote_average: 8.9,
            trailer_url: "https://www.youtube.com/embed/HhesaQXLuRY"
        },
        {
            id: 14,
            title: "Game of Thrones",
            overview: "Nine noble families fight for control over the lands of Westeros...",
            poster_path: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
            vote_average: 8.4,
            trailer_url: "https://www.youtube.com/embed/KPLWWIOCOOQ"
        },
        {
            id: 15,
            title: "Sherlock",
            overview: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
            poster_path: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
            vote_average: 8.6,
            trailer_url: "https://www.youtube.com/embed/xK7S9mrFWL4"
        },
        {
            id: 16,
            title: "Friends",
            overview: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
            poster_path: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
            vote_average: 8.2,
            trailer_url: "https://www.youtube.com/embed/IEEbUzffzrk"
        },
        {
            id: 17,
            title: "The Office",
            overview: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes...",
            poster_path: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
            vote_average: 8.5,
            trailer_url: "https://www.youtube.com/embed/LHOtME2DL4g"
        },
        {
            id: 18,
            title: "Planet Earth II",
            overview: "Wildlife documentary series with David Attenborough, beginning with a look at the remote islands...",
            poster_path: "https://image.tmdb.org/t/p/w500/6KxiEWyBTta4lPKGZ9NGDb2yLtM.jpg",
            vote_average: 9.0,
            trailer_url: "https://www.youtube.com/embed/c8aFcHFu8QM"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Display all categories of content
    displayMovies(mockMovies.popular, 'popular-content');
    displayMovies(mockMovies.trending, 'trending-content');
    displayMovies(mockMovies.top_rated, 'top-rated-content');
});

// Display movies in the UI
function displayMovies(movies, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        movieElement.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.title}">
            <div class="movie-overlay">
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
                <p><strong>Rating:</strong> ${movie.vote_average}/10</p>
                <button class="play-btn" onclick="openTrailer('${movie.trailer_url}')">▶ Play Trailer</button>
            </div>
        `;
        container.appendChild(movieElement);
    });
}

// Function to open trailer in modal
function openTrailer(trailerUrl) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <iframe width="100%" height="400" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    
    modal.querySelector('.close').onclick = () => document.body.removeChild(modal);
    modal.onclick = (e) => {
        if (e.target === modal) document.body.removeChild(modal);
    };
    
    document.body.appendChild(modal);
}