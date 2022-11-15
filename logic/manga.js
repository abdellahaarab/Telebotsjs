
async function Manga(){
    const response = await fetch('https://api.jikan.moe/v4/random/anime')
    const data = await response.json
    // console.log('-' + data)
    return data.data
}
