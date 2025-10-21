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
    //console.log(data);

    const response = await data.json();
    //console.log(response);
    //console.log(response["House Stark"]["Jon Snow"].title);
    //console.log(response["House Targaryen"]["Daenerys Targaryen"].title);

    const houses = Object.keys(response) // To find each 'house' object
    //console.log(houses)
    //console.log(houses[0]) // Jon Snow
    const houseStark = Object.keys(response["House Stark"]); // To find each 'name' object
    //console.log(houseStark[7]) // House Stark

    const gotCharacter = document.querySelector("#gotCharacter");
    gotCharacter.innerHTML = `
        <h1 class="characterName">${houseStark[7]}</h1>
        <h3 class="characterHouse">${houses[0]}</h3>
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

//
//

async function catFacts() {
    const data = await fetch("https://catfact.ninja/facts");
    console.log(data);

    const response = await data.json();
    console.log(response);
    console.log(response.data);
    console.log(response.data[0]);
    console.log(response.data[0].fact);

    for(let index = 0; index < response.data.length; index++) {
        console.log(response.data[index].fact);
    };
};
catFacts();