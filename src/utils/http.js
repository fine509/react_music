import axios from 'axios'

export const $axios=(config)=>{
    return axios({
        methods:config.methods || "get",
        url:config.url || "",
        data:config.data || null,
        params:config.params || null
    }).then(res=>res).catch(err=>err)


}