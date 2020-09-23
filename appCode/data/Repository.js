import { getDataFromDB } from './DBRepository/module/GetDataFromDBResouce'

export function getData() {
    return getDataFromDB()
}