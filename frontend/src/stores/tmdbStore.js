import axios from 'axios'
import { defineStore } from 'pinia'

export const useTmdbStore = defineStore('tmdb',{
    state: () =>({
        movieData: new Array()
    }),
    actions: {
        async fecthMovies(movieList){
            this.movieData = new Array()
            movieList.forEach(async e => {        
                try{
                    await axios(`https://api.themoviedb.org/3/search/movie`, { 
                        params: { 
                            query: e.hu, 
                            language: "hu-HU"}, 
                        headers: {
                            'Accept': "application/json",
                            'Authorization': `Bearer ${import.meta.env.VITE_TMDB_APIKEY}`
                        }
                    }).then(r=> {
                        const result = r.data.results[0]
                        result.screening_id = e.id                
                        this.movieData.push(result)
                    })
                }catch(err){
                    console.log(err);
                }
            }); 
        },
        async fecthMovie(movie){
            this.movieData = new Array()
            try{
                await axios(`https://api.themoviedb.org/3/search/movie`, { 
                    params: { 
                        query: movie.hu, 
                        language: "hu-HU"}, 
                    headers: {
                        'Accept': "application/json",
                        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_APIKEY}`
                    }
                }).then(r=> {
                    const result = r.data.results[0]
                    result.screening_id = movie.id                            
                    this.movieData.push(result)
                })
            }catch(err){
                console.log(err);
            }
        }
    }, 
    getters:{
        getMovies: (state) => state.movieData,
        getMovie: (state) => state.movieData[0]
    }
})
