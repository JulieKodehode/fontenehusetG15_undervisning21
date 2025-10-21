/*const data = {
    houseStark: {
        Eddard: {
            nickname: "Ned",
            title: "Hand of the King"
        },
        Caitlyn: {
            nickname: "Cat"
        },
    },
    houseLannister: {
        Tywin: {
            nickname: null,
        },
    },
};*/

// Async function

async function gotHouses() {
    const data = await fetch("houses.json");
    console.log(data);

    const response = await data.json();
    console.log(response);
    console.log(response["House Stark"]["Jon Snow"].title);
    console.log(response["House Targaryen"]["Daenerys Targaryen"].title);

    const gotCharacter = document.querySelector("#gotCharacter");
    gotCharacter.innerHTML = `
        <h1 class="characterName">${response["House Stark"]["Jon Snow"].name}</h1>
        <h3 class="characterHouse">${response["House Stark"]["Jon Snow"].house}</h3>
        <p class="characterTitle">${response["House Stark"]["Jon Snow"].title}</p>
    `;

    /*
    // Different Houses
    const houseStarkData = response["House Stark"];
    console.log(houseStarkData);

    // Diffrent characters
    const jonSnow = houseStarkData["Jon Show"];
    console.log(jonSnow);

    // New object with response
    const houses = {
        houseStark: response["House Stark"], 
        houseTargaryen: response["House Targaryen"]
    };
    */
};
gotHouses();