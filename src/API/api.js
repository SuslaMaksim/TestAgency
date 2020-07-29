import axios from 'axios'


export let DataApi = {

    getUsersCardsData(){
        return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
            .then(response => {
                return response.data
            })
},
    getNextCardsData(url){
        return axios.get(url)

    }
}
