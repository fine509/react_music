import { Map } from "immutable";

import {SUBMITSONGDETAIL} from '../action-type'

interface Iaction {
    type:string
    data:any
}
const defaultState = Map({
    currentSong:[]
})

const player = (state=defaultState, action:Iaction)=>{
    switch (action.type) {
        case SUBMITSONGDETAIL: return state.set('currentSong', action.data)
        default: return state
    }
}

export default player