document.addEventListener("DOMContentLoaded", () => {
    let connexion = new MovieDB()
    connexion.getLastMovie()
})
class MovieDB {
    
    constructor(){
        console.log('new movie db');
        this.apiKey = "6c78300c5060fef33a011b0705b69be2";
        this.lang = "fr-CA";
        this.url = "https://api.themoviedb.org/3/"
        this.img = "https://image.tmdb.org/t/p/"
        this.totalFilm = 8;
    }

    getLastMovie(){
        let req = new XMLHttpRequest()
        req.addEventListener("loadend", this.handleLastMovie.bind(this))
        req.open("GET", `${this.url}movie/now_playing?api_key=${this.apiKey}&language=${this.lang}&page=1`)
        req.send()

    }

    handleLastMovie(e){
        console.log("oue");
        let target = e.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);
    }
    
    
    
}