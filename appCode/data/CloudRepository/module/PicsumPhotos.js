import { getRequest } from "../network/Network";

export function getPicsumPhotos() {
    return getRequest("https://picsum.photos/list")
}