const pokemonImage = document.querySelector('.pokemon__image');
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');
const btnFour = document.querySelector('.btnFour');

var lightRed = document.querySelector('.pokemon__lightOne');
var corOriginal = lightRed.style.backgroundColor;
var lightGreen = document.querySelector('.pokemon__lightThree');
var corOrigina = lightRed.style.backgroundColor;

let pokemonNumber = 1;


const fetchPokemon = async (pokemon) => { 
    try {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await APIResponse.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados do Pokémon:', error);
    }
}

const renderPokemon = async (pokemonId) => { 
    try {
        const data = await fetchPokemon(pokemonId);
        pokemonImage.src = data.sprites.other.dream_world.front_default;
    } catch (error) {
        console.error('Erro ao renderizar o Pokémon:', error);
    }
}
btnOne.addEventListener('click', () => { 
    if (pokemonNumber > 1) {
        pokemonNumber--;
        lightGreen.style.backgroundColor = "lightgreen";
        setTimeout(function() {
            lightGreen.style.backgroundColor = corOriginal;
        }, 1000);
        renderPokemon(pokemonNumber);
    }
    else {
        lightRed.style.backgroundColor = "red";
        setTimeout(function() {
            lightRed.style.backgroundColor = corOriginal;
        }, 1000);
    }
    reproduzirAudio()
})

btnTwo.addEventListener('click', () => { 
    if (pokemonNumber > 1) {
        pokemonNumber--;
        lightGreen.style.backgroundColor = "lightgreen";
        setTimeout(function() {
            lightGreen.style.backgroundColor = corOriginal;
        }, 1000);
        renderPokemon(pokemonNumber);
    }
    else {
        lightRed.style.backgroundColor = "red";
        setTimeout(function() {
            lightRed.style.backgroundColor = corOriginal;
        }, 1000);
    }
    reproduzirAudio()
})

btnThree.addEventListener('click', () => { 
    if (pokemonNumber < 152) {
        pokemonNumber++;
        lightGreen.style.backgroundColor = "lightgreen";
        setTimeout(function() {
            lightGreen.style.backgroundColor = corOriginal;
        }, 1000);
        renderPokemon(pokemonNumber);
    }
    else {
        lightRed.style.backgroundColor = "red";
        setTimeout(function() {
            lightRed.style.backgroundColor = corOriginal;
        }, 1000);
    }
    reproduzirAudio()
})

btnFour.addEventListener('click', () => { 
    if (pokemonNumber < 152) {
        pokemonNumber++;
        lightGreen.style.backgroundColor = "lightgreen";
        setTimeout(function() {
            lightGreen.style.backgroundColor = corOriginal;
        }, 1000);
        renderPokemon(pokemonNumber);
    }
    else {
        lightRed.style.backgroundColor = "red";
        setTimeout(function() {
            lightRed.style.backgroundColor = corOriginal;
        }, 1000);
    }
    reproduzirAudio()
})
renderPokemon(pokemonNumber);

var audio = document.getElementById("audio");

function reproduzirAudio() {
    audio.play();
}
