import {makeAutoObservable} from 'mobx'
import {getHotAblum} from '../../../../../../services/recommend'

class Store {
    constructor(){
        makeAutoObservable(this)
    }
    Ablumdata:any
    async getHotAblum(limit:number){
     let data = await getHotAblum(limit)
     this.getAblumData(data?.data?.albums)
    }
    getAblumData(data:any){
        this.Ablumdata = data
    }
}

export default new Store()