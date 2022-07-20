const idCharacters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function uniqueIdGenerator(idSize: number = 16) {
    let id: string = "";

    for(let i = 0; i < idSize; i++) {
        id += idCharacters[Math.floor(Math.random()*idCharacters.length)];
    }

    return id;
}

export default uniqueIdGenerator