import React from "react";
import ReactDOM from "react-dom";



export default function getPopularMovie() {
  fetch(`https://api.themoviedb.org/3/movie/popular` , {
    methods: "GET",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
        "Content-Type": "application/json;charset=utf-8"
    }}).then(res => res.json())
    .then(res => {
        console.log(res);
    })
}

