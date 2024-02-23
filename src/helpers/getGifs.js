export const getGifs = async (category) =>
{
    let url = `https://api.giphy.com/v1/gifs/search?api_key=nMQMDv3oIfccnQLV1zNVU8ICILLJmU0s&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(gif =>
    {
        return {
            id: gif.id,
            title: gif.title,
            image: gif.images.downsized_medium.url
        };
    })
    return gifs
}