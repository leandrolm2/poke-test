export const indexPokemon = async (url:string):Promise<number> => {
    const myUrl = url;
    const urlParts = myUrl.split('/');

    let index = null;

    for (const part of urlParts) {
        if (part.match(/^\d+$/)) {
            index = part;
            break;
        }
    }

    return Number(index)
};