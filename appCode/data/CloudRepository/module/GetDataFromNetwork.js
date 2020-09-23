import { getRequest } from "../network/Network";

export function getDataFromApi() {
    return getRequest("https://itunes.apple.com/search?term=jack+johnson")
}