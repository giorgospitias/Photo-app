"use strict";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
const count = 30;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = "Aw40CRz27Be_y31HZk96E7jVs2CEiQfZpBp7SfvY6g0";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

let photosArray = [];

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}
