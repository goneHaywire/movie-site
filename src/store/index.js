import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        genres: [
            "Action",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Drama",
            "Family",
            "Fantasy",
            "Film-Noir",
            "History",
            "Horror",
            "Music",
            "Musical",
            "Mystery",
            "Romance",
            "Sci-Fi",
            "Sport",
            "Thriller",
            "War",
            "Western"
        ],
        movies: [{
                    title: "The Shawshank Redemption",
                    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    director: "Frank Darabont",
                    stars: [
                        "Tim Robbins",
                        "Morgan Freeman",
                        "Bob Gunton",
                        "William Sadler"
                    ],
                    genres: ["Drama"],
                    length: "142 min",
                    image: "The Shawshank Redemption.jpg",
                    year: "1994"
                },
                {
                    title: "Schindler's List",
                    desc: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                    director: "Steven Spielberg",
                    stars: [
                        "Liam Neeson",
                        "Ralph Fiennes",
                        "Ben Kingsley",
                        "Caroline Goodall"
                    ],
                    genres: ["Biography", "Drama", "History"],
                    length: "195 min",
                    image: "Schindler's List.jpg",
                    year: "1993"
                },
                {
                    title: "Raging Bull",
                    desc: "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
                    director: "Martin Scorsese",
                    stars: [
                        "Robert De Niro",
                        "Cathy Moriarty",
                        "Joe Pesci",
                        "Frank Vincent"
                    ],
                    genres: ["Biography", "Drama", "Sport"],
                    length: "129 min",
                    image: "Raging Bull.jpg",
                    year: "1980"
                },
                {
                    title: "Casablanca",
                    desc: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
                    director: "Michael Curtiz",
                    stars: [
                        "Humphrey Bogart",
                        "Ingrid Bergman",
                        "Paul Henreid",
                        "Claude Rains"
                    ],
                    genres: ["Drama", "Romance", "War"],
                    length: "102 min",
                    image: "Casablanca.jpg",
                    year: "1942"
                },
                {
                    title: "Citizen Kane",
                    desc: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
                    director: "Orson Welles",
                    stars: [
                        "Orson Welles",
                        "Joseph Cotten",
                        "Dorothy Comingore",
                        "Agnes Moorehead"
                    ],
                    genres: ["Drama", "Mystery"],
                    length: "119 min",
                    image: "Citizen Kane.jpg",
                    year: "1941"
                },
                {
                    title: "Gone with the Wind",
                    desc: "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
                    director: "Directors:Victor Fleming, George Cukor, Sam Wood",
                    stars: [
                        "Clark Gable",
                        "Vivien Leigh",
                        "Thomas Mitchell",
                        "Barbara O'Neil"
                    ],
                    genres: ["Drama", "History", "Romance"],
                    length: "238 min",
                    image: "Gone with the Wind.jpg",
                    year: "1939"
                },
                {
                    title: "The Wizard of Oz",
                    desc: "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
                    director: "Directors:Victor Fleming, George Cukor, Mervyn LeRoy, Norman Taurog, Richard Thorpe, King Vidor",
                    stars: ["Judy Garland", "Frank Morgan", "Ray Bolger", "Bert Lahr"],
                    genres: ["Adventure", "Family", "Fantasy"],
                    length: "102 min",
                    image: "The Wizard of Oz.jpg",
                    year: "1939"
                },
                {
                    title: "One Flew Over the Cuckoo's Nest",
                    desc: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
                    director: "Milos Forman",
                    stars: [
                        "Jack Nicholson",
                        "Louise Fletcher",
                        "Will Sampson",
                        "Michael Berryman"
                    ],
                    genres: ["Drama"],
                    length: "133 min",
                    image: "One Flew Over the Cuckoo's Nest.jpg",
                    year: "1975"
                },
                {
                    title: "Lawrence of Arabia",
                    desc: "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
                    director: "David Lean",
                    stars: [
                        "Peter O'Toole",
                        "Alec Guinness",
                        "Anthony Quinn",
                        "Jack Hawkins"
                    ],
                    genres: ["Adventure", "Biography", "Drama"],
                    length: "228 min",
                    image: "Lawrence of Arabia.jpg",
                    year: "1962"
                },
                {
                    title: "Vertigo",
                    desc: "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
                    director: "Alfred Hitchcock",
                    stars: [
                        "James Stewart",
                        "Kim Novak",
                        "Barbara Bel Geddes",
                        "Tom Helmore"
                    ],
                    genres: ["Mystery", "Romance", "Thriller"],
                    length: "128 min",
                    image: "Vertigo.jpg",
                    year: "1958"
                },
                {
                    title: "Psycho",
                    desc: "A Phoenix secretary embezzles forty thousand dollars from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
                    director: "Alfred Hitchcock",
                    stars: ["Anthony Perkins", "Janet Leigh", "Vera Miles", "John Gavin"],
                    genres: ["Horror", "Mystery", "Thriller"],
                    length: "109 min",
                    image: "Psycho.jpg",
                    year: "1960"
                },
                {
                    title: "Godfather: Part II",
                    desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                    director: "Francis Ford Coppola",
                    stars: [
                        "Al Pacino",
                        "Robert De Niro",
                        "Robert Duvall",
                        "Diane Keaton"
                    ],
                    genres: ["Crime", "Drama"],
                    length: "202 min",
                    image: "Godfather II.jpg",
                    year: "1974"
                },
                {
                    title: "On the Waterfront",
                    desc: "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
                    director: "Elia Kazan",
                    stars: ["Marlon Brando", "Karl Malden", "Lee J. Cobb", "Rod Steiger"],
                    genres: ["Crime", "Drama", "Thriller"],
                    length: "108 min",
                    image: "On the Waterfront.jpg",
                    year: "1954"
                },
                {
                    title: "Sunset Blvd.",
                    desc: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
                    director: "Billy Wilder",
                    stars: [
                        "William Holden",
                        "Gloria Swanson",
                        "Erich von Stroheim",
                        "Nancy Olson"
                    ],
                    genres: ["Drama", "Film-Noir"],
                    length: "110 min",
                    image: "Sunset Blvd..jpg",
                    year: "1950"
                },
                {
                    title: "Forrest Gump",
                    desc: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
                    director: "Robert Zemeckis",
                    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
                    genres: ["Drama", "Romance"],
                    length: "142 min",
                    image: "Forrest Gump.jpg",
                    year: "1994"
                },
                {
                    title: "The Sound of Music",
                    desc: "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
                    director: "Robert Wise",
                    stars: [
                        "Julie Andrews",
                        "Christopher Plummer",
                        "Eleanor Parker",
                        "Richard Haydn"
                    ],
                    genres: ["Biography", "Drama", "Family"],
                    length: "172 min",
                    image: "The Sound of Music.jpg",
                    year: "1965"
                },
                {
                    title: "12 Angry Men",
                    desc: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
                    director: "Sidney Lumet",
                    stars: [
                        "Henry Fonda",
                        "Lee J. Cobb",
                        "Martin Balsam",
                        "John Fiedler"
                    ],
                    genres: ["Drama"],
                    length: "96 min",
                    image: "12 Angry Men.jpg",
                    year: "1957"
                },
                {
                    title: "West Side Story",
                    desc: "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
                    director: "Directors:Jerome Robbins, Robert Wise",
                    stars: [
                        "Natalie Wood",
                        "George Chakiris",
                        "Richard Beymer",
                        "Russ Tamblyn"
                    ],
                    genres: ["Crime", "Drama", "Musical"],
                    length: "153 min",
                    image: "West Side Story.jpg",
                    year: "1961"
                },
                {
                    title: "Star Wars",
                    desc: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
                    director: "George Lucas",
                    stars: [
                        "Mark Hamill",
                        "Harrison Ford",
                        "Carrie Fisher",
                        "Alec Guinness"
                    ],
                    genres: ["Action", "Adventure", "Fantasy"],
                    length: "121 min",
                    image: "Star Wars.jpg",
                    year: "1977"
                },
                {
                    title: "2001: A Space Odyssey",
                    desc: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
                    director: "Stanley Kubrick",
                    stars: [
                        "Keir Dullea",
                        "Gary Lockwood",
                        "William Sylvester",
                        "Daniel Richter"
                    ],
                    genres: ["Adventure", "Sci-Fi"],
                    length: "149 min",
                    image: "2001.jpg",
                    year: "1968"
                },
                {
                    title: "E.T. the Extra-Terrestrial",
                    desc: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
                    director: "Steven Spielberg",
                    stars: [
                        "Henry Thomas",
                        "Drew Barrymore",
                        "Peter Coyote",
                        "Dee Wallace"
                    ],
                    genres: ["Family", "Sci-Fi"],
                    length: "115 min",
                    image: "E.T. the Extra-Terrestrial.jpg",
                    year: "1982"
                },
                {
                    title: "The Silence of the Lambs",
                    desc: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
                    director: "Jonathan Demme",
                    stars: [
                        "Jodie Foster",
                        "Anthony Hopkins",
                        "Lawrence A. Bonney",
                        "Kasi Lemmons"
                    ],
                    genres: ["Crime", "Drama", "Thriller"],
                    length: "118 min",
                    image: "The Silence of the Lambs.jpg",
                    year: "1991"
                },
                {
                    title: "Chinatown",
                    desc: "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.",
                    director: "Roman Polanski",
                    stars: [
                        "Jack Nicholson",
                        "Faye Dunaway",
                        "John Huston",
                        "Perry Lopez"
                    ],
                    genres: ["Drama", "Mystery", "Thriller"],
                    length: "130 min",
                    image: "Chinatown.jpg",
                    year: "1974"
                },
                {
                    title: "The Bridge on the River Kwai",
                    desc: "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors.",
                    director: "David Lean",
                    stars: [
                        "William Holden",
                        "Alec Guinness",
                        "Jack Hawkins",
                        "Sessue Hayakawa"
                    ],
                    genres: ["Adventure", "Drama", "War"],
                    length: "161 min",
                    image: "The Bridge on the River Kwai.jpg",
                    year: "1957"
                },
                {
                    title: "Singin' in the Rain",
                    desc: "A silent film production company and cast make a difficult transition to sound.",
                    director: "Directors:Stanley Donen, Gene Kelly",
                    stars: [
                        "Gene Kelly",
                        "Donald O'Connor",
                        "Debbie Reynolds",
                        "Jean Hagen"
                    ],
                    genres: ["Comedy", "Musical", "Romance"],
                    length: "103 min",
                    image: "Singin' in the Rain.jpg",
                    year: "1952"
                },
                {
                    title: "It's a Wonderful Life",
                    desc: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
                    director: "Frank Capra",
                    stars: [
                        "James Stewart",
                        "Donna Reed",
                        "Lionel Barrymore",
                        "Thomas Mitchell"
                    ],
                    genres: ["Drama", "Family", "Fantasy"],
                    length: "130 min",
                    image: "It's a Wonderful Life.jpg",
                    year: "1946"
                },
                {
                    title: "Gladiator",
                    desc: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
                    director: "Ridley Scott",
                    stars: [
                        "Russell Crowe",
                        "Joaquin Phoenix",
                        "Connie Nielsen",
                        "Oliver Reed"
                    ],
                    genres: ["Action", "Adventure", "Drama"],
                    length: "155 min",
                    image: "Gladiator.jpg",
                    year: "2000"
                },
                {
                    title: "Titanic",
                    desc: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                    director: "James Cameron",
                    stars: [
                        "Leonardo DiCaprio",
                        "Kate Winslet",
                        "Billy Zane",
                        "Kathy Bates"
                    ],
                    genres: ["Drama", "Romance"],
                    length: "194 min",
                    image: "Titanic.jpg",
                    year: "1997"
                },
                {
                    title: "Rocky",
                    desc: "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
                    director: "John G. Avildsen",
                    stars: [
                        "Sylvester Stallone",
                        "Talia Shire",
                        "Burt Young",
                        "Carl Weathers"
                    ],
                    genres: ["Drama", "Sport"],
                    length: "120 min",
                    image: "Rocky.jpg",
                    year: "1976"
                },
                {
                    title: "A Clockwork Orange",
                    desc: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
                    director: "Stanley Kubrick",
                    stars: [
                        "Malcolm McDowell",
                        "Patrick Magee",
                        "Michael Bates",
                        "Warren Clarke"
                    ],
                    genres: ["Crime", "Drama", "Sci-Fi"],
                    length: "136 min",
                    image: "A Clockwork Orange.jpg",
                    year: "1971"
                },
                {
                    title: "Doctor Zhivago",
                    desc: "The life of a Russian physician and poet who, although married to another, falls in love with a political activist's wife and experiences hardship during World War I and then the October Revolution.",
                    director: "David Lean",
                    stars: [
                        "Omar Sharif",
                        "Julie Christie",
                        "Geraldine Chaplin",
                        "Rod Steiger"
                    ],
                    genres: ["Drama", "Romance", "War"],
                    length: "197 min",
                    image: "Doctor Zhivago.jpg",
                    year: "1965"
                },
                {
                    title: "The Searchers",
                    desc: "An American Civil War veteran embarks on a journey to rescue his niece from the Comanches.",
                    director: "John Ford",
                    stars: ["John Wayne", "Jeffrey Hunter", "Vera Miles", "Ward Bond"],
                    genres: ["Adventure", "Drama", "Western"],
                    length: "119 min",
                    image: "The Searchers.jpg",
                    year: "1956"
                },
                {
                    title: "Jaws",
                    desc: "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
                    director: "Steven Spielberg",
                    stars: [
                        "Roy Scheider",
                        "Robert Shaw",
                        "Richard Dreyfuss",
                        "Lorraine Gary"
                    ],
                    genres: ["Adventure", "Drama", "Thriller"],
                    length: "124 min",
                    image: "Jaws.jpg",
                    year: "1975"
                },
                {
                    title: "Patton",
                    desc: "The World War II phase of the career of controversial American general George S. Patton.",
                    director: "Franklin J. Schaffner",
                    stars: [
                        "George C. Scott",
                        "Karl Malden",
                        "Stephen Young",
                        "Michael Strong"
                    ],
                    genres: ["Biography", "Drama", "War"],
                    length: "172 min",
                    image: "Patton.jpg",
                    year: "1970"
                },
                {
                    title: "Butch Cassidy and the Sundance Kid",
                    desc: "Wyoming, early 1900s. Butch Cassidy and The Sundance Kid are the leaders of a band of outlaws. After a train robbery goes wrong they find themselves on the run with a posse hard on their heels. Their solution - escape to Bolivia.",
                    director: "George Roy Hill",
                    stars: [
                        "Paul Newman",
                        "Robert Redford",
                        "Katharine Ross",
                        "Strother Martin"
                    ],
                    genres: ["Biography", "Crime", "Drama"],
                    length: "110 min",
                    image: "Butch Cassidy and the Sundance Kid.jpg",
                    year: "1969"
                },
                {
                    title: "The Treasure of the Sierra Madre",
                    desc: "Two Americans searching for work in Mexico convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
                    director: "John Huston",
                    stars: [
                        "Humphrey Bogart",
                        "Walter Huston",
                        "Tim Holt",
                        "Bruce Bennett"
                    ],
                    genres: ["Adventure", "Drama", "Western"],
                    length: "126 min",
                    image: "The Treasure of the Sierra Madre.jpg",
                    year: "1948"
                },
                {
                    title: "The Good, the Bad and the Ugly",
                    desc: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
                    director: "Sergio Leone",
                    stars: [
                        "Clint Eastwood",
                        "Eli Wallach",
                        "Lee Van Cleef",
                        "Aldo Giuffr"
                    ],
                    genres: ["Western"],
                    length: "161 min",
                    image: "The good, the Bad and the Ugly.jpg",
                    year: "1966"
                },
                {
                    title: "The Apartment",
                    desc: "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
                    director: "Billy Wilder",
                    stars: [
                        "Jack Lemmon",
                        "Shirley MacLaine",
                        "Fred MacMurray",
                        "Ray Walston"
                    ],
                    genres: ["Comedy", "Drama", "Romance"],
                    length: "125 min",
                    image: "The Apartment.jpg",
                    year: "1960"
                },
                {
                    title: "Platoon",
                    desc: "A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
                    director: "Oliver Stone",
                    stars: [
                        "Charlie Sheen",
                        "Tom Berenger",
                        "Willem Dafoe",
                        "Keith David"
                    ],
                    genres: ["Drama", "War"],
                    length: "120 min",
                    image: "Platoon.jpg",
                    year: "1986"
                },
                {
                    title: "High Noon",
                    desc: "A town Marshal, despite the disagreements of his newlywed bride and the townspeople around him, must face a gang of deadly killers alone at high noon when the gang leader, an outlaw he sent up years ago, arrives on the noon train.",
                    director: "Fred Zinnemann",
                    stars: [
                        "Gary Cooper",
                        "Grace Kelly",
                        "Thomas Mitchell",
                        "Lloyd Bridges"
                    ],
                    genres: ["Drama", "Thriller", "Western"],
                    length: "85 min",
                    image: "High Noon.jpg",
                    year: "1952"
                },
                {
                    title: "Braveheart",
                    desc: "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
                    director: "Mel Gibson",
                    stars: [
                        "Mel Gibson",
                        "Sophie Marceau",
                        "Patrick McGoohan",
                        "Angus Macfadyen"
                    ],
                    genres: ["Biography", "Drama", "History"],
                    length: "178 min",
                    image: "Braveheart.jpg",
                    year: "1995"
                },
                {
                    title: "Jurassic Park",
                    desc: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
                    director: "Steven Spielberg",
                    stars: [
                        "Sam Neill",
                        "Laura Dern",
                        "Jeff Goldblum",
                        "Richard Attenborough"
                    ],
                    genres: ["Action", "Adventure", "Sci-Fi"],
                    length: "127 min",
                    image: "Jurassic Park.jpg",
                    year: "1993"
                },
                {
                    title: "The Exorcist",
                    desc: "When a 12 year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
                    director: "William Friedkin",
                    stars: [
                        "Ellen Burstyn",
                        "Max von Sydow",
                        "Linda Blair",
                        "Lee J. Cobb"
                    ],
                    genres: ["Horror"],
                    length: "122 min",
                    image: "The Exorcist.jpg",
                    year: "1973"
                },
                {
                    title: "The Pianist",
                    desc: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
                    director: "Roman Polanski",
                    stars: [
                        "Adrien Brody",
                        "Thomas Kretschmann",
                        "Frank Finlay",
                        "Emilia Fox"
                    ],
                    genres: ["Biography", "Drama", "Music"],
                    length: "150 min",
                    image: "The Pianist.jpg",
                    year: "2002"
                },
                {
                    title: "Goodfellas",
                    desc: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
                    director: "Martin Scorsese",
                    stars: [
                        "Robert De Niro",
                        "Ray Liotta",
                        "Joe Pesci",
                        "Lorraine Bracco"
                    ],
                    genres: ["Biography", "Crime", "Drama"],
                    length: "146 min",
                    image: "Goodfellas.jpg",
                    year: "1990"
                }
        ],
        genresWithAmount: []
    },
    getters: {
        getGenres: (state) => state.genres,
        getMovies: (state) => state.movies,
        getGenresWithAmount: (state) => state.genresWithAmount,
        isGenreAmountsEmpty: (state) => state.genresWithAmount.length > 0,
        getSomeMovies: state => amount => {
            console.log(amount);
            let newArray = state.movies.slice()
            return newArray.splice(0, amount)
        },
        getSomeGenres: state => amount => state.genres.splice(amount)
    },
    mutations: {
        ADD_MOVIE_AMOUNT(state, { name, amount }) {
            state.genresWithAmount.push({ name, amount })
        }
    },
    actions: {
        computeGenresWithAmount({ commit, state }) {
            state.genres.forEach((genre) => {
                var amount = 0
                state.movies.forEach((movie) => {
                    if (movie.genres.includes(genre)) {
                        amount += 1
                    }
                })
                let name = genre
                commit('ADD_MOVIE_AMOUNT', { name, amount })
            })
        }
    },
    modules: {}
})