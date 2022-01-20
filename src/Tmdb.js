import { wait } from "@testing-library/user-event/dist/utils";

const API_KEY = '9df29afecdceecd5104be9adfb264808';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () =>{
        return[
        {
            slug: 'originals',
            title: 'Originals from VisualBliss',
            itens: await basicFetch (`/discover/tv?with_network=213&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Tailored for You',
            itens: await basicFetch (`/trending/all/week?&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Top Rated',
            itens: await basicFetch (`/movie/top_rated?&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Action',
            itens: await basicFetch (`/discover/movie?with_genres=28&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comedy',
            itens: await basicFetch (`/discover/movie?with_genres=35&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Horror',
            itens: await basicFetch (`/discover/movie?with_genres=27&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            itens: await basicFetch (`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentaries',
            itens: await basicFetch (`/discover/movie?with_genres=99&api_key=${API_KEY}`)
        },
        
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?&api_key=${API_KEY}`);
                break;
            }
        }

        return info;
    } 
}