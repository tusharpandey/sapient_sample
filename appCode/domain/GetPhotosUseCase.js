import { getPhotos } from "../data/Repository"

export default class GetPhotos {
    async getPhotos() {
        let response = await getPhotos()
        if (response.error == 101) {
            return response
        }
        let randomNumber = Math.floor(Math.random() * (response.length - 5) + 1)

        console.log("RANDOM NUMBER : ", randomNumber)
        let imageURl = "https://picsum.photos/400/600?image="

        let data = [
            { author: response[randomNumber].author, author_url: imageURl + response[randomNumber].id, key: 1 },
            { author: response[randomNumber + 1].author, author_url: imageURl + response[randomNumber + 1].id, key: 2 },
            { author: response[randomNumber + 2].author, author_url: imageURl + response[randomNumber + 2].id, key: 3 },
            { author: response[randomNumber + 3].author, author_url: imageURl + response[randomNumber + 3].id, key: 4 },
        ]
        return data
    }
}