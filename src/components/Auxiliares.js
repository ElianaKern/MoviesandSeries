export const base = "https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1"
export const busqueda = "https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>&language=en-US&page=1"
export const baseUrl = "https://api.themoviedb.org/3"
export const apiKey = "api_key=f73cd8d6fb4e966a87b1469c24e12f50"
export const tipoMovie = "movie"
export const search = "search"
export const query = "query"
export const lenguaje = "language"
export const page = "page"
export const moviesPopular = "popular"
export const moviesLanzamiento = "now_playing" //"on_the_air"
export const tvLanzamiento = "on_the_air"
export const lanzamiento = (moviesLanzamiento, tvLanzamiento) => moviesLanzamiento ? moviesLanzamiento : tvLanzamiento
export const moviesMejorPuntuada = "top_rated"
export const moviesCredits = "credits"
export const urlBaseImg = "https://image.tmdb.org/t/p/"
export const urlBaseImgCast = "https://image.tmdb.org/t/p/w300"
export const hrefMail = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqLMpbkNnXLSSbfqWfxblhJnKvxGlXhdWrjqrFkPHqKBWNkFdsldcjcTHpxZSkVChGDV"
export const hrefLinkedin = "https://www.linkedin.com/in/eliana-kern-506158235/"
export const hrefGitHub = "https://github.com/ElianaKern"

export const querisUrl = (categoria, tipo, busqueda) =>
busqueda ? `${categoria}/${tipo}/${busqueda}` : `${tipo}/${categoria}`;


{/*/ ?Si busqueda EXISTE, voy a retornor categoria,tipo,busqueda 
:Si NOEXISTE, voy a retornar tipo, categoria*/}

//https://api.themoviedb.org/3/person/{person_id}?api_key=f73cd8d6fb4e966a87b1469c24e12f50&language=en-US
