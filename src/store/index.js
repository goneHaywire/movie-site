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
                "id": 1,
                "title": "Godfather",
                "desc": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                "director": "Francis Ford Coppola",
                "stars": [
                    "Marlon Brando",
                    "Al Pacino",
                    "James Caan",
                    "Diane Keaton"
                ],
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "length": "175 min",
                "image": "Godfather.jpg",
                "year": "1972"
            },
            {
                "id": 2,
                "title": "The Shawshank Redemption",
                "desc": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "director": "Frank Darabont",
                "stars": [
                    "Tim Robbins",
                    "Morgan Freeman",
                    "Bob Gunton",
                    "William Sadler"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "142 min",
                "image": "The Shawshank Redemption.jpg",
                "year": "1994"
            },
            {
                "id": 3,
                "title": "Schindler's List",
                "desc": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                "director": "Steven Spielberg",
                "stars": [
                    "Liam Neeson",
                    "Ralph Fiennes",
                    "Ben Kingsley",
                    "Caroline Goodall"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "History"
                ],
                "length": "195 min",
                "image": "Schindler's List.jpg",
                "year": "1993"
            },
            {
                "id": 4,
                "title": "Raging Bull",
                "desc": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
                "director": "Martin Scorsese",
                "stars": [
                    "Robert De Niro",
                    "Cathy Moriarty",
                    "Joe Pesci",
                    "Frank Vincent"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "Sport"
                ],
                "length": "129 min",
                "image": "Raging Bull.jpg",
                "year": "1980"
            },
            {
                "id": 5,
                "title": "Casablanca",
                "desc": "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
                "director": "Michael Curtiz",
                "stars": [
                    "Humphrey Bogart",
                    "Ingrid Bergman",
                    "Paul Henreid",
                    "Claude Rains"
                ],
                "genres": [
                    "Drama",
                    "Romance",
                    "War"
                ],
                "length": "102 min",
                "image": "Casablanca.jpg",
                "year": "1942"
            },
            {
                "id": 6,
                "title": "Citizen Kane",
                "desc": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
                "director": "Orson Welles",
                "stars": [
                    "Orson Welles",
                    "Joseph Cotten",
                    "Dorothy Comingore",
                    "Agnes Moorehead"
                ],
                "genres": [
                    "Drama",
                    "Mystery"
                ],
                "length": "119 min",
                "image": "Citizen Kane.jpg",
                "year": "1941"
            },
            {
                "id": 7,
                "title": "Gone with the Wind",
                "desc": "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
                "director": "Directors:Victor Fleming, George Cukor, Sam Wood",
                "stars": [
                    "Clark Gable",
                    "Vivien Leigh",
                    "Thomas Mitchell",
                    "Barbara O'Neil"
                ],
                "genres": [
                    "Drama",
                    "History",
                    "Romance"
                ],
                "length": "238 min",
                "image": "Gone with the Wind.jpg",
                "year": "1939"
            },
            {
                "id": 8,
                "title": "The Wizard of Oz",
                "desc": "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
                "director": "Directors:Victor Fleming, George Cukor, Mervyn LeRoy, Norman Taurog, Richard Thorpe, King Vidor",
                "stars": [
                    "Judy Garland",
                    "Frank Morgan",
                    "Ray Bolger",
                    "Bert Lahr"
                ],
                "genres": [
                    "Adventure",
                    "Family",
                    "Fantasy"
                ],
                "length": "102 min",
                "image": "The Wizard of Oz.jpg",
                "year": "1939"
            },
            {
                "id": 9,
                "title": "One Flew Over the Cuckoo's Nest",
                "desc": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
                "director": "Milos Forman",
                "stars": [
                    "Jack Nicholson",
                    "Louise Fletcher",
                    "Will Sampson",
                    "Michael Berryman"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "133 min",
                "image": "One Flew Over the Cuckoo's Nest.jpg",
                "year": "1975"
            },
            {
                "id": 10,
                "title": "Lawrence of Arabia",
                "desc": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
                "director": "David Lean",
                "stars": [
                    "Peter O'Toole",
                    "Alec Guinness",
                    "Anthony Quinn",
                    "Jack Hawkins"
                ],
                "genres": [
                    "Adventure",
                    "Biography",
                    "Drama"
                ],
                "length": "228 min",
                "image": "Lawrence of Arabia.jpg",
                "year": "1962"
            },
            {
                "id": 11,
                "title": "Vertigo",
                "desc": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
                "director": "Alfred Hitchcock",
                "stars": [
                    "James Stewart",
                    "Kim Novak",
                    "Barbara Bel Geddes",
                    "Tom Helmore"
                ],
                "genres": [
                    "Mystery",
                    "Romance",
                    "Thriller"
                ],
                "length": "128 min",
                "image": "Vertigo.jpg",
                "year": "1958"
            },
            {
                "id": 12,
                "title": "Psycho",
                "desc": "A Phoenix secretary embezzles forty thousand dollars from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
                "director": "Alfred Hitchcock",
                "stars": [
                    "Anthony Perkins",
                    "Janet Leigh",
                    "Vera Miles",
                    "John Gavin"
                ],
                "genres": [
                    "Horror",
                    "Mystery",
                    "Thriller"
                ],
                "length": "109 min",
                "image": "Psycho.jpg",
                "year": "1960"
            },
            {
                "id": 13,
                "title": "Godfather: Part II",
                "desc": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                "director": "Francis Ford Coppola",
                "stars": [
                    "Al Pacino",
                    "Robert De Niro",
                    "Robert Duvall",
                    "Diane Keaton"
                ],
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "length": "202 min",
                "image": "Godfather II.jpg",
                "year": "1974"
            },
            {
                "id": 14,
                "title": "On the Waterfront",
                "desc": "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
                "director": "Elia Kazan",
                "stars": [
                    "Marlon Brando",
                    "Karl Malden",
                    "Lee J. Cobb",
                    "Rod Steiger"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Thriller"
                ],
                "length": "108 min",
                "image": "On the Waterfront.jpg",
                "year": "1954"
            },
            {
                "id": 15,
                "title": "Sunset Blvd.",
                "desc": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
                "director": "Billy Wilder",
                "stars": [
                    "William Holden",
                    "Gloria Swanson",
                    "Erich von Stroheim",
                    "Nancy Olson"
                ],
                "genres": [
                    "Drama",
                    "Film-Noir"
                ],
                "length": "110 min",
                "image": "Sunset Blvd..jpg",
                "year": "1950"
            },
            {
                "id": 16,
                "title": "Forrest Gump",
                "desc": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
                "director": "Robert Zemeckis",
                "stars": [
                    "Tom Hanks",
                    "Robin Wright",
                    "Gary Sinise",
                    "Sally Field"
                ],
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "length": "142 min",
                "image": "Forrest Gump.jpg",
                "year": "1994"
            },
            {
                "id": 17,
                "title": "The Sound of Music",
                "desc": "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
                "director": "Robert Wise",
                "stars": [
                    "Julie Andrews",
                    "Christopher Plummer",
                    "Eleanor Parker",
                    "Richard Haydn"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "Family"
                ],
                "length": "172 min",
                "image": "The Sound of Music.jpg",
                "year": "1965"
            },
            {
                "id": 18,
                "title": "12 Angry Men",
                "desc": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
                "director": "Sidney Lumet",
                "stars": [
                    "Henry Fonda",
                    "Lee J. Cobb",
                    "Martin Balsam",
                    "John Fiedler"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "96 min",
                "image": "12 Angry Men.jpg",
                "year": "1957"
            },
            {
                "id": 19,
                "title": "West Side Story",
                "desc": "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
                "director": "Directors:Jerome Robbins, Robert Wise",
                "stars": [
                    "Natalie Wood",
                    "George Chakiris",
                    "Richard Beymer",
                    "Russ Tamblyn"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Musical"
                ],
                "length": "153 min",
                "image": "West Side Story.jpg",
                "year": "1961"
            },
            {
                "id": 20,
                "title": "Star Wars",
                "desc": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
                "director": "George Lucas",
                "stars": [
                    "Mark Hamill",
                    "Harrison Ford",
                    "Carrie Fisher",
                    "Alec Guinness"
                ],
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy"
                ],
                "length": "121 min",
                "image": "Star Wars.jpg",
                "year": "1977"
            },
            {
                "id": 21,
                "title": "2001: A Space Odyssey",
                "desc": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
                "director": "Stanley Kubrick",
                "stars": [
                    "Keir Dullea",
                    "Gary Lockwood",
                    "William Sylvester",
                    "Daniel Richter"
                ],
                "genres": [
                    "Adventure",
                    "Sci-Fi"
                ],
                "length": "149 min",
                "image": "2001.jpg",
                "year": "1968"
            },
            {
                "id": 22,
                "title": "E.T. the Extra-Terrestrial",
                "desc": "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
                "director": "Steven Spielberg",
                "stars": [
                    "Henry Thomas",
                    "Drew Barrymore",
                    "Peter Coyote",
                    "Dee Wallace"
                ],
                "genres": [
                    "Family",
                    "Sci-Fi"
                ],
                "length": "115 min",
                "image": "E.T. the Extra-Terrestrial.jpg",
                "year": "1982"
            },
            {
                "id": 23,
                "title": "The Silence of the Lambs",
                "desc": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
                "director": "Jonathan Demme",
                "stars": [
                    "Jodie Foster",
                    "Anthony Hopkins",
                    "Lawrence A. Bonney",
                    "Kasi Lemmons"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Thriller"
                ],
                "length": "118 min",
                "image": "The Silence of the Lambs.jpg",
                "year": "1991"
            },
            {
                "id": 24,
                "title": "Chinatown",
                "desc": "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.",
                "director": "Roman Polanski",
                "stars": [
                    "Jack Nicholson",
                    "Faye Dunaway",
                    "John Huston",
                    "Perry Lopez"
                ],
                "genres": [
                    "Drama",
                    "Mystery",
                    "Thriller"
                ],
                "length": "130 min",
                "image": "Chinatown.jpg",
                "year": "1974"
            },
            {
                "id": 25,
                "title": "The Bridge on the River Kwai",
                "desc": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors.",
                "director": "David Lean",
                "stars": [
                    "William Holden",
                    "Alec Guinness",
                    "Jack Hawkins",
                    "Sessue Hayakawa"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "War"
                ],
                "length": "161 min",
                "image": "The Bridge on the River Kwai.jpg",
                "year": "1957"
            },
            {
                "id": 26,
                "title": "Singin' in the Rain",
                "desc": "A silent film production company and cast make a difficult transition to sound.",
                "director": "Directors:Stanley Donen, Gene Kelly",
                "stars": [
                    "Gene Kelly",
                    "Donald O'Connor",
                    "Debbie Reynolds",
                    "Jean Hagen"
                ],
                "genres": [
                    "Comedy",
                    "Musical",
                    "Romance"
                ],
                "length": "103 min",
                "image": "Singin' in the Rain.jpg",
                "year": "1952"
            },
            {
                "id": 27,
                "title": "It's a Wonderful Life",
                "desc": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
                "director": "Frank Capra",
                "stars": [
                    "James Stewart",
                    "Donna Reed",
                    "Lionel Barrymore",
                    "Thomas Mitchell"
                ],
                "genres": [
                    "Drama",
                    "Family",
                    "Fantasy"
                ],
                "length": "130 min",
                "image": "It's a Wonderful Life.jpg",
                "year": "1946"
            },
            {
                "id": 28,
                "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                "desc": "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
                "director": "Stanley Kubrick",
                "stars": [
                    "Peter Sellers",
                    "George C. Scott",
                    "Sterling Hayden",
                    "Keenan Wynn"
                ],
                "genres": [
                    "Comedy"
                ],
                "length": "95 min",
                "image": "Dr. Strangelove.jpg",
                "year": "1964"
            },
            {
                "id": 29,
                "title": "Some Like It Hot",
                "desc": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
                "director": "Billy Wilder",
                "stars": [
                    "Marilyn Monroe",
                    "Tony Curtis",
                    "Jack Lemmon",
                    "George Raft"
                ],
                "genres": [
                    "Comedy",
                    "Music",
                    "Romance"
                ],
                "length": "121 min",
                "image": "Some Like It Hot.jpg",
                "year": "1959"
            },
            {
                "id": 30,
                "title": "Ben-Hur",
                "desc": "After a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.",
                "director": "William Wyler",
                "stars": [
                    "Charlton Heston",
                    "Jack Hawkins",
                    "Stephen Boyd",
                    "Haya Harareet"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "History"
                ],
                "length": "212 min",
                "image": "Ben-Hur.jpg",
                "year": "1959"
            },
            {
                "id": 31,
                "title": "Apocalypse Now",
                "desc": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
                "director": "Francis Ford Coppola",
                "stars": [
                    "Martin Sheen",
                    "Marlon Brando",
                    "Robert Duvall",
                    "Frederic Forrest"
                ],
                "genres": [
                    "Drama",
                    "Mystery",
                    "War"
                ],
                "length": "147 min",
                "image": "Apocalypse Now.jpg",
                "year": "1979"
            },
            {
                "id": 32,
                "title": "Amadeus",
                "desc": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
                "director": "Milos Forman",
                "stars": [
                    "F. Murray Abraham",
                    "Tom Hulce",
                    "Elizabeth Berridge",
                    "Roy Dotrice"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "History"
                ],
                "length": "160 min",
                "image": "Amadeus.jpg",
                "year": "1984"
            },
            {
                "id": 33,
                "title": "The Lord of the Rings: The Return of the King",
                "desc": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                "director": "Peter Jackson",
                "stars": [
                    "Elijah Wood",
                    "Viggo Mortensen",
                    "Ian McKellen",
                    "Orlando Bloom"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Fantasy"
                ],
                "length": "201 min",
                "image": "lotr.jpg",
                "year": "2003"
            },
            {
                "id": 34,
                "title": "Gladiator",
                "desc": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
                "director": "Ridley Scott",
                "stars": [
                    "Russell Crowe",
                    "Joaquin Phoenix",
                    "Connie Nielsen",
                    "Oliver Reed"
                ],
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama"
                ],
                "length": "155 min",
                "image": "Gladiator.jpg",
                "year": "2000"
            },
            {
                "id": 35,
                "title": "Titanic",
                "desc": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                "director": "James Cameron",
                "stars": [
                    "Leonardo DiCaprio",
                    "Kate Winslet",
                    "Billy Zane",
                    "Kathy Bates"
                ],
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "length": "194 min",
                "image": "Titanic.jpg",
                "year": "1997"
            },
            {
                "id": 36,
                "title": "From Here to Eternity",
                "desc": "In Hawaii in 1941, a private is cruelly punished for not boxing on his unit's team, while his captain's wife and second-in-command are falling in love.",
                "director": "Fred Zinnemann",
                "stars": [
                    "Burt Lancaster",
                    "Montgomery Clift",
                    "Deborah Kerr",
                    "Donna Reed"
                ],
                "genres": [
                    "Drama",
                    "Romance",
                    "War"
                ],
                "length": "118 min",
                "image": "From Here to Eternity.jpg",
                "year": "1953"
            },
            {
                "id": 37,
                "title": "Saving Private Ryan",
                "desc": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
                "director": "Steven Spielberg",
                "stars": [
                    "Tom Hanks",
                    "Matt Damon",
                    "Tom Sizemore",
                    "Edward Burns"
                ],
                "genres": [
                    "Drama",
                    "War"
                ],
                "length": "169 min",
                "image": "Saving Private Ryan.jpg",
                "year": "1998"
            },
            {
                "id": 38,
                "title": "Unforgiven",
                "desc": "Retired Old West gunslinger William Munny (Clint Eastwood) reluctantly takes on one last job, with the help of his old partner Ned Logan (Morgan Freeman) and a young man, The \"Schofield Kid\" (Jaimz Woolvett).",
                "director": "Clint Eastwood",
                "stars": [
                    "Clint Eastwood",
                    "Gene Hackman",
                    "Morgan Freeman",
                    "Richard Harris"
                ],
                "genres": [
                    "Drama",
                    "Western"
                ],
                "length": "130 min",
                "image": "Unforgiven.jpg",
                "year": "1992"
            },
            {
                "id": 39,
                "title": "Raiders of the Lost Ark",
                "desc": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
                "director": "Steven Spielberg",
                "stars": [
                    "Harrison Ford",
                    "Karen Allen",
                    "Paul Freeman",
                    "John Rhys-Davies"
                ],
                "genres": [
                    "Action",
                    "Adventure"
                ],
                "length": "115 min",
                "image": "Raiders of the Lost Ark.jpg",
                "year": "1981"
            },
            {
                "id": 40,
                "title": "Rocky",
                "desc": "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
                "director": "John G. Avildsen",
                "stars": [
                    "Sylvester Stallone",
                    "Talia Shire",
                    "Burt Young",
                    "Carl Weathers"
                ],
                "genres": [
                    "Drama",
                    "Sport"
                ],
                "length": "120 min",
                "image": "Rocky.jpg",
                "year": "1976"
            },
            {
                "id": 41,
                "title": "A Streetcar Named Desire",
                "desc": "Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.",
                "director": "Elia Kazan",
                "stars": [
                    "Vivien Leigh",
                    "Marlon Brando",
                    "Kim Hunter",
                    "Karl Malden"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "122 min",
                "image": "A Streetcar Named Desire.jpg",
                "year": "1951"
            },
            {
                "id": 42,
                "title": "The Philadelphia Story",
                "desc": "When a rich woman's ex-husband and a tabloid-type reporter turn up just before her planned remarriage, she begins to learn the truth about herself.",
                "director": "George Cukor",
                "stars": [
                    "Cary Grant",
                    "Katharine Hepburn",
                    "James Stewart",
                    "Ruth Hussey"
                ],
                "genres": [
                    "Comedy",
                    "Romance"
                ],
                "length": "112 min",
                "image": "The Philadelphia Story.jpg",
                "year": "1940"
            },
            {
                "id": 43,
                "title": "To Kill a Mockingbird",
                "desc": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his children against prejudice.",
                "director": "Robert Mulligan",
                "stars": [
                    "Gregory Peck",
                    "John Megna",
                    "Frank Overton",
                    "Rosemary Murphy"
                ],
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "length": "129 min",
                "image": "To Kill a Mockingbird.jpg",
                "year": "1962"
            },
            {
                "id": 44,
                "title": "An American in Paris",
                "desc": "Three friends struggle to find work in Paris. Things become more complicated when two of them fall in love with the same woman.",
                "director": "Vincente Minnelli",
                "stars": [
                    "Gene Kelly",
                    "Leslie Caron",
                    "Oscar Levant",
                    "Georges Guétary"
                ],
                "genres": [
                    "Drama",
                    "Musical",
                    "Romance"
                ],
                "length": "114 min",
                "image": "An American in Paris.jpg",
                "year": "1951"
            },
            {
                "id": 45,
                "title": "The Best Years of Our Lives",
                "desc": "Three World War II veterans return home to small-town America to discover that they and their families have been irreparably changed.",
                "director": "William Wyler",
                "stars": [
                    "Myrna Loy",
                    "Dana Andrews",
                    "Fredric March",
                    "Teresa Wright"
                ],
                "genres": [
                    "Drama",
                    "Romance",
                    "War"
                ],
                "length": "170 min",
                "image": "The Best Years of Our Lives.jpg",
                "year": "1946"
            },
            {
                "id": 46,
                "title": "My Fair Lady",
                "desc": "Snobbish phonetics Professor Henry Higgins agrees to a wager that he can make flower girl Eliza Doolittle presentable in high society.",
                "director": "George Cukor",
                "stars": [
                    "Audrey Hepburn",
                    "Rex Harrison",
                    "Stanley Holloway",
                    "Wilfrid Hyde-White"
                ],
                "genres": [
                    "Drama",
                    "Family",
                    "Musical"
                ],
                "length": "170 min",
                "image": "My Fair Lady.jpg",
                "year": "1964"
            },
            {
                "id": 47,
                "title": "A Clockwork Orange",
                "desc": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
                "director": "Stanley Kubrick",
                "stars": [
                    "Malcolm McDowell",
                    "Patrick Magee",
                    "Michael Bates",
                    "Warren Clarke"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Sci-Fi"
                ],
                "length": "136 min",
                "image": "A Clockwork Orange.jpg",
                "year": "1971"
            },
            {
                "id": 48,
                "title": "Doctor Zhivago",
                "desc": "The life of a Russian physician and poet who, although married to another, falls in love with a political activist's wife and experiences hardship during World War I and then the October Revolution.",
                "director": "David Lean",
                "stars": [
                    "Omar Sharif",
                    "Julie Christie",
                    "Geraldine Chaplin",
                    "Rod Steiger"
                ],
                "genres": [
                    "Drama",
                    "Romance",
                    "War"
                ],
                "length": "197 min",
                "image": "Doctor Zhivago.jpg",
                "year": "1965"
            },
            {
                "id": 49,
                "title": "The Searchers",
                "desc": "An American Civil War veteran embarks on a journey to rescue his niece from the Comanches.",
                "director": "John Ford",
                "stars": [
                    "John Wayne",
                    "Jeffrey Hunter",
                    "Vera Miles",
                    "Ward Bond"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Western"
                ],
                "length": "119 min",
                "image": "The Searchers.jpg",
                "year": "1956"
            },
            {
                "id": 50,
                "title": "Jaws",
                "desc": "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
                "director": "Steven Spielberg",
                "stars": [
                    "Roy Scheider",
                    "Robert Shaw",
                    "Richard Dreyfuss",
                    "Lorraine Gary"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Thriller"
                ],
                "length": "124 min",
                "image": "Jaws.jpg",
                "year": "1975"
            },
            {
                "id": 51,
                "title": "Patton",
                "desc": "The World War II phase of the career of controversial American general George S. Patton.",
                "director": "Franklin J. Schaffner",
                "stars": [
                    "George C. Scott",
                    "Karl Malden",
                    "Stephen Young",
                    "Michael Strong"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "War"
                ],
                "length": "172 min",
                "image": "Patton.jpg",
                "year": "1970"
            },
            {
                "id": 52,
                "title": "Butch Cassidy and the Sundance Kid",
                "desc": "Wyoming, early 1900s. Butch Cassidy and The Sundance Kid are the leaders of a band of outlaws. After a train robbery goes wrong they find themselves on the run with a posse hard on their heels. Their solution - escape to Bolivia.",
                "director": "George Roy Hill",
                "stars": [
                    "Paul Newman",
                    "Robert Redford",
                    "Katharine Ross",
                    "Strother Martin"
                ],
                "genres": [
                    "Biography",
                    "Crime",
                    "Drama"
                ],
                "length": "110 min",
                "image": "Butch Cassidy and the Sundance Kid.jpg",
                "year": "1969"
            },
            {
                "id": 53,
                "title": "The Treasure of the Sierra Madre",
                "desc": "Two Americans searching for work in Mexico convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
                "director": "John Huston",
                "stars": [
                    "Humphrey Bogart",
                    "Walter Huston",
                    "Tim Holt",
                    "Bruce Bennett"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Western"
                ],
                "length": "126 min",
                "image": "The Treasure of the Sierra Madre.jpg",
                "year": "1948"
            },
            {
                "id": 54,
                "title": "Il buono, il brutto, il cattivo",
                "desc": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
                "director": "Sergio Leone",
                "stars": [
                    "Clint Eastwood",
                    "Eli Wallach",
                    "Lee Van Cleef",
                    "Aldo Giuffrè"
                ],
                "genres": [
                    "Western"
                ],
                "length": "161 min",
                "image": "Il buono, il brutto, il cattivo.jpg",
                "year": "1966"
            },
            {
                "id": 55,
                "title": "The Apartment",
                "desc": "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
                "director": "Billy Wilder",
                "stars": [
                    "Jack Lemmon",
                    "Shirley MacLaine",
                    "Fred MacMurray",
                    "Ray Walston"
                ],
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "length": "125 min",
                "image": "The Apartment.jpg",
                "year": "1960"
            },
            {
                "id": 56,
                "title": "Platoon",
                "desc": "A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
                "director": "Oliver Stone",
                "stars": [
                    "Charlie Sheen",
                    "Tom Berenger",
                    "Willem Dafoe",
                    "Keith David"
                ],
                "genres": [
                    "Drama",
                    "War"
                ],
                "length": "120 min",
                "image": "Platoon.jpg",
                "year": "1986"
            },
            {
                "id": 57,
                "title": "High Noon",
                "desc": "A town Marshal, despite the disagreements of his newlywed bride and the townspeople around him, must face a gang of deadly killers alone at high noon when the gang leader, an outlaw he sent up years ago, arrives on the noon train.",
                "director": "Fred Zinnemann",
                "stars": [
                    "Gary Cooper",
                    "Grace Kelly",
                    "Thomas Mitchell",
                    "Lloyd Bridges"
                ],
                "genres": [
                    "Drama",
                    "Thriller",
                    "Western"
                ],
                "length": "85 min",
                "image": "High Noon.jpg",
                "year": "1952"
            },
            {
                "id": 58,
                "title": "Braveheart",
                "desc": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
                "director": "Mel Gibson",
                "stars": [
                    "Mel Gibson",
                    "Sophie Marceau",
                    "Patrick McGoohan",
                    "Angus Macfadyen"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "History"
                ],
                "length": "178 min",
                "image": "Braveheart.jpg",
                "year": "1995"
            },
            {
                "id": 59,
                "title": "Dances with Wolves",
                "desc": "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
                "director": "Kevin Costner",
                "stars": [
                    "Kevin Costner",
                    "Mary McDonnell",
                    "Graham Greene",
                    "Rodney A. Grant"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Western"
                ],
                "length": "181 min",
                "image": "Dances with Wolves.jpg",
                "year": "1990"
            },
            {
                "id": 60,
                "title": "Jurassic Park",
                "desc": "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
                "director": "Steven Spielberg",
                "stars": [
                    "Sam Neill",
                    "Laura Dern",
                    "Jeff Goldblum",
                    "Richard Attenborough"
                ],
                "genres": [
                    "Action",
                    "Adventure",
                    "Sci-Fi"
                ],
                "length": "127 min",
                "image": "Jurassic Park.jpg",
                "year": "1993"
            },
            {
                "id": 61,
                "title": "The Exorcist",
                "desc": "When a 12 year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
                "director": "William Friedkin",
                "stars": [
                    "Ellen Burstyn",
                    "Max von Sydow",
                    "Linda Blair",
                    "Lee J. Cobb"
                ],
                "genres": [
                    "Horror"
                ],
                "length": "122 min",
                "image": "The Exorcist.jpg",
                "year": "1973"
            },
            {
                "id": 62,
                "title": "The Pianist",
                "desc": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
                "director": "Roman Polanski",
                "stars": [
                    "Adrien Brody",
                    "Thomas Kretschmann",
                    "Frank Finlay",
                    "Emilia Fox"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "Music"
                ],
                "length": "150 min",
                "image": "The Pianist.jpg",
                "year": "2002"
            },
            {
                "id": 63,
                "title": "Goodfellas",
                "desc": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
                "director": "Martin Scorsese",
                "stars": [
                    "Robert De Niro",
                    "Ray Liotta",
                    "Joe Pesci",
                    "Lorraine Bracco"
                ],
                "genres": [
                    "Biography",
                    "Crime",
                    "Drama"
                ],
                "length": "146 min",
                "image": "Goodfellas.jpg",
                "year": "1990"
            },
            {
                "id": 64,
                "title": "The Deer Hunter",
                "desc": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
                "director": "Michael Cimino",
                "stars": [
                    "Robert De Niro",
                    "Christopher Walken",
                    "John Cazale",
                    "John Savage"
                ],
                "genres": [
                    "Drama",
                    "War"
                ],
                "length": "183 min",
                "image": "The Deer Hunter.jpg",
                "year": "1978"
            },
            {
                "id": 65,
                "title": "All Quiet on the Western Front",
                "desc": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
                "director": "Lewis Milestone",
                "stars": [
                    "Lew Ayres",
                    "Louis Wolheim",
                    "John Wray",
                    "Arnold Lucy"
                ],
                "genres": [
                    "Drama",
                    "War"
                ],
                "length": "152 min",
                "image": "All Quiet on the Western Front.jpg",
                "year": "1930"
            },
            {
                "id": 66,
                "title": "Bonnie and Clyde",
                "desc": "Bored waitress Bonnie Parker falls in love with an ex-con named Clyde Barrow and together they start a violent crime spree through the country, stealing cars and robbing banks.",
                "director": "Arthur Penn",
                "stars": [
                    "Warren Beatty",
                    "Faye Dunaway",
                    "Michael J. Pollard",
                    "Gene Hackman"
                ],
                "genres": [
                    "Action",
                    "Biography",
                    "Crime"
                ],
                "length": "111 min",
                "image": "Bonnie and Clyde.jpg",
                "year": "1967"
            },
            {
                "id": 67,
                "title": "The French Connection",
                "desc": "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job with a French connection.",
                "director": "William Friedkin",
                "stars": [
                    "Gene Hackman",
                    "Roy Scheider",
                    "Fernando Rey",
                    "Tony Lo Bianco"
                ],
                "genres": [
                    "Action",
                    "Crime",
                    "Drama"
                ],
                "length": "104 min",
                "image": "The French Connection.jpg",
                "year": "1971"
            },
            {
                "id": 68,
                "title": "City Lights",
                "desc": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
                "director": "Charles Chaplin",
                "stars": [
                    "Charles Chaplin",
                    "Virginia Cherrill",
                    "Florence Lee",
                    "Harry Myers"
                ],
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "length": "87 min",
                "image": "City Lights.jpg",
                "year": "1931"
            },
            {
                "id": 69,
                "title": "It Happened One Night",
                "desc": "A spoiled heiress running away from her family is helped by a man who is actually a reporter in need of a story.",
                "director": "Frank Capra",
                "stars": [
                    "Clark Gable",
                    "Claudette Colbert",
                    "Walter Connolly",
                    "Roscoe Karns"
                ],
                "genres": [
                    "Comedy",
                    "Romance"
                ],
                "length": "105 min",
                "image": "It Happened One Night.jpg",
                "year": "1934"
            },
            {
                "id": 70,
                "title": "A Place in the Sun",
                "desc": "A poor boy gets a job working for his rich uncle and ends up falling in love with two women.",
                "director": "George Stevens",
                "stars": [
                    "Montgomery Clift",
                    "Elizabeth Taylor",
                    "Shelley Winters",
                    "Anne Revere"
                ],
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "length": "122 min",
                "image": "A Place in the Sun.jpg",
                "year": "1951"
            },
            {
                "id": 71,
                "title": "Midnight Cowboy",
                "desc": "A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.",
                "director": "John Schlesinger",
                "stars": [
                    "Dustin Hoffman",
                    "Jon Voight",
                    "Sylvia Miles",
                    "John McGiver"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "113 min",
                "image": "Midnight Cowboy.jpg",
                "year": "1969"
            },
            {
                "id": 72,
                "title": "Mr. Smith Goes to Washington",
                "desc": "A naive man is appointed to fill a vacancy in the United States Senate. His plans promptly collide with political corruption, but he doesn't back down.",
                "director": "Frank Capra",
                "stars": [
                    "James Stewart",
                    "Jean Arthur",
                    "Claude Rains",
                    "Edward Arnold"
                ],
                "genres": [
                    "Comedy",
                    "Drama"
                ],
                "length": "129 min",
                "image": "Mr. Smith Goes to Washington.jpg",
                "year": "1939"
            },
            {
                "id": 73,
                "title": "Rain Man",
                "desc": "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
                "director": "Barry Levinson",
                "stars": [
                    "Dustin Hoffman",
                    "Tom Cruise",
                    "Valeria Golino",
                    "Gerald R. Molen"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "133 min",
                "image": "Rain Man.jpg",
                "year": "1988"
            },
            {
                "id": 74,
                "title": "Annie Hall",
                "desc": "Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.",
                "director": "Woody Allen",
                "stars": [
                    "Woody Allen",
                    "Diane Keaton",
                    "Tony Roberts",
                    "Carol Kane"
                ],
                "genres": [
                    "Comedy",
                    "Romance"
                ],
                "length": "93 min",
                "image": "Annie Hall.jpg",
                "year": "1977"
            },
            {
                "id": 75,
                "title": "Fargo",
                "desc": "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
                "director": "Directors:Joel Coen, Ethan Coen",
                "stars": [
                    "William H. Macy",
                    "Frances McDormand",
                    "Steve Buscemi",
                    "Peter Stormare"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Thriller"
                ],
                "length": "98 min",
                "image": "Fargo.jpg",
                "year": "1996"
            },
            {
                "id": 76,
                "title": "Giant",
                "desc": "Sprawling epic covering the life of a Texas cattle rancher and his family and associates.",
                "director": "George Stevens",
                "stars": [
                    "Elizabeth Taylor",
                    "Rock Hudson",
                    "James Dean",
                    "Carroll Baker"
                ],
                "genres": [
                    "Drama",
                    "Western"
                ],
                "length": "201 min",
                "image": "Giant.jpg",
                "year": "1956"
            },
            {
                "id": 77,
                "title": "Shane",
                "desc": "A weary gunfighter attempts to settle down with a homestead family, but a smoldering settler/rancher conflict forces him to act.",
                "director": "George Stevens",
                "stars": [
                    "Alan Ladd",
                    "Jean Arthur",
                    "Van Heflin",
                    "Brandon De Wilde"
                ],
                "genres": [
                    "Drama",
                    "Western"
                ],
                "length": "118 min",
                "image": "Shane.jpg",
                "year": "1953"
            },
            {
                "id": 78,
                "title": "The Grapes of Wrath",
                "desc": "A poor Midwest family is forced off their land. They travel to California, suffering the misfortunes of the homeless in the Great Depression.",
                "director": "John Ford",
                "stars": [
                    "Henry Fonda",
                    "Jane Darwell",
                    "John Carradine",
                    "Charley Grapewin"
                ],
                "genres": [
                    "Drama",
                    "History"
                ],
                "length": "129 min",
                "image": "The Grapes of Wrath.jpg",
                "year": "1940"
            },
            {
                "id": 79,
                "title": "The Green Mile",
                "desc": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
                "director": "Frank Darabont",
                "stars": [
                    "Tom Hanks",
                    "Michael Clarke Duncan",
                    "David Morse",
                    "Bonnie Hunt"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Fantasy"
                ],
                "length": "189 min",
                "image": "The Green Mile.jpg",
                "year": "1999"
            },
            {
                "id": 80,
                "title": "Close Encounters of the Third Kind",
                "desc": "Roy Neary, an electric lineman, watches how his quiet and ordinary daily life turns upside down after a close encounter with a UFO.",
                "director": "Steven Spielberg",
                "stars": [
                    "Richard Dreyfuss",
                    "François Truffaut",
                    "Teri Garr",
                    "Melinda Dillon"
                ],
                "genres": [
                    "Drama",
                    "Sci-Fi"
                ],
                "length": "138 min",
                "image": "Close Encounters of the Third Kind.jpg",
                "year": "1977"
            },
            {
                "id": 81,
                "title": "Nashville",
                "desc": "Over the course of a few hectic days, numerous interrelated people prepare for a political convention as secrets and lies are surfaced and revealed.",
                "director": "Robert Altman",
                "stars": [
                    "Keith Carradine",
                    "Karen Black",
                    "Ronee Blakley",
                    "Shelley Duvall"
                ],
                "genres": [
                    "Comedy",
                    "Drama",
                    "Music"
                ],
                "length": "160 min",
                "image": "Nashville.jpg",
                "year": "1975"
            },
            {
                "id": 82,
                "title": "Network",
                "desc": "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit.",
                "director": "Sidney Lumet",
                "stars": [
                    "Faye Dunaway",
                    "William Holden",
                    "Peter Finch",
                    "Robert Duvall"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "121 min",
                "image": "Network.jpg",
                "year": "1976"
            },
            {
                "id": 83,
                "title": "The Graduate",
                "desc": "A disillusioned college graduate finds himself torn between his older lover and her daughter.",
                "director": "Mike Nichols",
                "stars": [
                    "Dustin Hoffman",
                    "Anne Bancroft",
                    "Katharine Ross",
                    "William Daniels"
                ],
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "length": "106 min",
                "image": "The Graduate.jpg",
                "year": "1967"
            },
            {
                "id": 84,
                "title": "American Graffiti",
                "desc": "A couple of high school grads spend one final night cruising the strip with their buddies before they go off to college.",
                "director": "George Lucas",
                "stars": [
                    "Richard Dreyfuss",
                    "Ron Howard",
                    "Paul Le Mat",
                    "Charles Martin Smith"
                ],
                "genres": [
                    "Comedy",
                    "Drama"
                ],
                "length": "110 min",
                "image": "American Graffiti.jpg",
                "year": "1973"
            },
            {
                "id": 85,
                "title": "Pulp Fiction",
                "desc": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "director": "Quentin Tarantino",
                "stars": [
                    "John Travolta",
                    "Uma Thurman",
                    "Samuel L. Jackson",
                    "Bruce Willis"
                ],
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "length": "154 min",
                "image": "Pulp Fiction.jpg",
                "year": "1994"
            },
            {
                "id": 86,
                "title": "Terms of Endearment",
                "desc": "Follows hard-to-please Aurora looking for love, and her daughter's family problems.",
                "director": "James L. Brooks",
                "stars": [
                    "Shirley MacLaine",
                    "Debra Winger",
                    "Jack Nicholson",
                    "Danny DeVito"
                ],
                "genres": [
                    "Comedy",
                    "Drama"
                ],
                "length": "132 min",
                "image": "Terms of Endearment.jpg",
                "year": "1983"
            },
            {
                "id": 87,
                "title": "Good Will Hunting",
                "desc": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
                "director": "Gus Van Sant",
                "stars": [
                    "Robin Williams",
                    "Matt Damon",
                    "Ben Affleck",
                    "Stellan Skarsgård"
                ],
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "length": "126 min",
                "image": "Good Will Hunting.jpg",
                "year": "1997"
            },
            {
                "id": 88,
                "title": "The African Queen",
                "desc": "In WWI Africa, a gin-swilling riverboat captain is persuaded by a strait-laced missionary to use his boat to attack an enemy warship.",
                "director": "John Huston",
                "stars": [
                    "Humphrey Bogart",
                    "Katharine Hepburn",
                    "Robert Morley",
                    "Peter Bull"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Romance"
                ],
                "length": "105 min",
                "image": "The African Queen.jpg",
                "year": "1951"
            },
            {
                "id": 89,
                "title": "Stagecoach",
                "desc": "A group of people traveling on a stagecoach find their journey complicated by the threat of Geronimo and learn something about each other in the process.",
                "director": "John Ford",
                "stars": [
                    "John Wayne",
                    "Claire Trevor",
                    "Andy Devine",
                    "John Carradine"
                ],
                "genres": [
                    "Adventure",
                    "Drama",
                    "Western"
                ],
                "length": "96 min",
                "image": "Stagecoach.jpg",
                "year": "1939"
            },
            {
                "id": 90,
                "title": "Mutiny on the Bounty",
                "desc": "A tyrannical ship captain decides to exact revenge on his abused crew after they form a mutiny against him, but the sailor he targets had no hand in it.",
                "director": "Frank Lloyd",
                "stars": [
                    "Charles Laughton",
                    "Clark Gable",
                    "Franchot Tone",
                    "Herbert Mundin"
                ],
                "genres": [
                    "Adventure",
                    "Biography",
                    "Drama"
                ],
                "length": "132 min",
                "image": "Mutiny on the Bounty.jpg",
                "year": "1935"
            },
            {
                "id": 91,
                "title": "The Great Dictator",
                "desc": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
                "director": "Charles Chaplin",
                "stars": [
                    "Charles Chaplin",
                    "Paulette Goddard",
                    "Jack Oakie",
                    "Reginald Gardiner"
                ],
                "genres": [
                    "Comedy",
                    "Drama",
                    "War"
                ],
                "length": "125 min",
                "image": "The Great Dictator.jpg",
                "year": "1940"
            },
            {
                "id": 92,
                "title": "Double Indemnity",
                "desc": "An insurance representative lets himself be talked by a seductive housewife into a murder/insurance fraud scheme that arouses the suspicion of an insurance investigator.",
                "director": "Billy Wilder",
                "stars": [
                    "Fred MacMurray",
                    "Barbara Stanwyck",
                    "Edward G. Robinson",
                    "Byron Barr"
                ],
                "genres": [
                    "Crime",
                    "Drama",
                    "Film-Noir"
                ],
                "length": "107 min",
                "image": "Double Indemnity.jpg",
                "year": "1944"
            },
            {
                "id": 93,
                "title": "The Maltese Falcon",
                "desc": "A private detective takes on a case that involves him with three eccentric criminals, a gorgeous liar, and their quest for a priceless statuette.",
                "director": "John Huston",
                "stars": [
                    "Humphrey Bogart",
                    "Mary Astor",
                    "Gladys George",
                    "Peter Lorre"
                ],
                "genres": [
                    "Film-Noir",
                    "Mystery"
                ],
                "length": "100 min",
                "image": "The Maltese Falcon.jpg",
                "year": "1941"
            },
            {
                "id": 94,
                "title": "Wuthering Heights",
                "desc": "A servant in the house of Wuthering Heights tells a traveller the unfortunate tale of lovers Cathy (Merle Oberon) and Heathcliff (Sir Laurence Olivier).",
                "director": "William Wyler",
                "stars": [
                    "Merle Oberon",
                    "Laurence Olivier",
                    "David Niven",
                    "Flora Robson"
                ],
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "length": "104 min",
                "image": "Wuthering Heights.jpg",
                "year": "1939"
            },
            {
                "id": 95,
                "title": "Taxi Driver",
                "desc": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
                "director": "Martin Scorsese",
                "stars": [
                    "Robert De Niro",
                    "Jodie Foster",
                    "Cybill Shepherd",
                    "Albert Brooks"
                ],
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "length": "114 min",
                "image": "Taxi Driver.jpg",
                "year": "1976"
            },
            {
                "id": 96,
                "title": "Rear Window",
                "desc": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
                "director": "Alfred Hitchcock",
                "stars": [
                    "James Stewart",
                    "Grace Kelly",
                    "Wendell Corey",
                    "Thelma Ritter"
                ],
                "genres": [
                    "Mystery",
                    "Thriller"
                ],
                "length": "112 min",
                "image": "Rear Window.jpg",
                "year": "1954"
            },
            {
                "id": 97,
                "title": "The Third Man",
                "desc": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
                "director": "Carol Reed",
                "stars": [
                    "Orson Welles",
                    "Joseph Cotten",
                    "Alida Valli",
                    "Trevor Howard"
                ],
                "genres": [
                    "Film-Noir",
                    "Mystery",
                    "Thriller"
                ],
                "length": "104 min",
                "image": "The Third Man.jpg",
                "year": "1949"
            },
            {
                "id": 98,
                "title": "Rebel Without a Cause",
                "desc": "A rebellious young man with a troubled past comes to a new town, finding friends and enemies.",
                "director": "Nicholas Ray",
                "stars": [
                    "James Dean",
                    "Natalie Wood",
                    "Sal Mineo",
                    "Jim Backus"
                ],
                "genres": [
                    "Drama"
                ],
                "length": "111 min",
                "image": "Rebel Without a Cause.jpg",
                "year": "1955"
            },
            {
                "id": 99,
                "title": "North by Northwest",
                "desc": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies.",
                "director": "Alfred Hitchcock",
                "stars": [
                    "Cary Grant",
                    "Eva Marie Saint",
                    "James Mason",
                    "Jessie Royce Landis"
                ],
                "genres": [
                    "Adventure",
                    "Mystery",
                    "Thriller"
                ],
                "length": "136 min",
                "image": "North by Northwest.jpg",
                "year": "1959"
            },
            {
                "id": 100,
                "title": "Yankee Doodle Dandy",
                "desc": "The life of the renowned musical composer, playwright, actor, dancer, and singer George M. Cohan.",
                "director": "Michael Curtiz",
                "stars": [
                    "James Cagney",
                    "Joan Leslie",
                    "Walter Huston",
                    "Richard Whorf"
                ],
                "genres": [
                    "Biography",
                    "Drama",
                    "Musical"
                ],
                "length": "126 min",
                "image": "Yankee Doodle Dandy.jpg",
                "year": "1942"
            }
        ],
        genresWithAmount: [],
        selectedMovie: ''
    },
    getters: {
        getGenres: (state) => state.genres,
        getMovies: (state) => state.movies,
        getGenresWithAmount: (state) => state.genresWithAmount,
        isGenreAmountsFull: (state) => state.genresWithAmount.length > 0,
        getSomeMovies: state => amount => {
            let newArray = state.movies.slice()
            return newArray.splice(0, amount)
        },
        getSomeGenres: state => amount => {
            let newArray = state.genres.slice()
            return newArray.splice(0, amount)
        },
        getSelectedMovie: state => state.selectedMovie
    },
    mutations: {
        ADD_MOVIE_AMOUNT(state, { name, amount }) {
            state.genresWithAmount.push({ name, amount })
        },
        SET_SELECTED_MOVIE(state, { id }) {
            state.selectedMovie = state.movies.find((movie) => movie.id === id)
        },
        CLEAR_SELECTED_MOVIE(state) {
            state.selectedMovie = null
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
        },
        setSelectedMovie({ commit }, id) {
            commit('SET_SELECTED_MOVIE', { id })
        },
        clearSelectedMovie() {
            this.commit('CLEAR_SELECTED_MOVIE')
        }
    },
    modules: {}
})