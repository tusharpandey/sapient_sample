import { getData } from "../data/Repository"

export default class GetDataUseCase {
    async getData() {
        let response = await getData()
        response=JSON.parse(response);
        return response
    }
}