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
        let data = JSON.parse(target.responseText);
        console.log(data);
    }
    
    
    
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpXG4gICAgY29ubmV4aW9uLmdldExhc3RNb3ZpZSgpXG59KVxuY2xhc3MgTW92aWVEQiB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBtb3ZpZSBkYicpO1xuICAgICAgICB0aGlzLmFwaUtleSA9IFwiNmM3ODMwMGM1MDYwZmVmMzNhMDExYjA3MDViNjliZTJcIjtcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiO1xuICAgICAgICB0aGlzLnVybCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9cIlxuICAgICAgICB0aGlzLmltZyA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCJcbiAgICAgICAgdGhpcy50b3RhbEZpbG0gPSA4O1xuICAgIH1cblxuICAgIGdldExhc3RNb3ZpZSgpe1xuICAgICAgICBsZXQgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIHRoaXMuaGFuZGxlTGFzdE1vdmllLmJpbmQodGhpcykpXG4gICAgICAgIHJlcS5vcGVuKFwiR0VUXCIsIGAke3RoaXMudXJsfW1vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9JHt0aGlzLmFwaUtleX0mbGFuZ3VhZ2U9JHt0aGlzLmxhbmd9JnBhZ2U9MWApXG4gICAgICAgIHJlcS5zZW5kKClcblxuICAgIH1cblxuICAgIGhhbmRsZUxhc3RNb3ZpZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJvdWVcIik7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
