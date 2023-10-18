const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    var heroes = document.querySelector("#heroes");
    for (let i = 0; i < players.length; i++) {
        const player = {
            name: players[i],
            strength: getRandomStrength(),
            image: `./images/super-${i + 1}.png`,
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
        console.log(heroes)
    return detailedPlayers
}


// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var strength= Math.ceil(Math.random() * 100);
    return strength
}
getRandomStrength()

const buildPlayers = (players, type) => {
    let fragment = '';
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        fragment += `<div class="player">
            <img src="${players[i].image}">
            <div class="details">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>
        </div>`;
    }
    console.log(fragment)


    return fragment;
}
const viewPlayers = (players) => {
    // console.log(players)
    const heroesContainer = document.getElementById('heroes');
    const villainsContainer = document.getElementById('villains');

    const heroes = players.filter(player => player.type === 'hero');
    const villains = players.filter(player => player.type === 'villain');

    heroesContainer.innerHTML = buildPlayers(heroes);
    villainsContainer.innerHTML = buildPlayers(villains);

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}