import React from "react";
export async function fetchItems(arr){
    await fetch('http://62.113.105.113:7000/api/categories', {
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json'
    }
    }).then(data=> data.json())
    .then(data =>{
        arr(data);
    });
}
export async function fetchGallery(func, id){
    await fetch(`http://62.113.105.113:7000/api/category?id=${id}`, {
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json'
    }
    }).then(data=> data.json())
    .then(data =>{
       func(data);
    });
}