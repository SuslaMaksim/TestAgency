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

    },
    getToken(){
       return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
           .then(response => {
               return response.data
           })
    },
    getRadioButtonsData(){
        return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(response => {
                return response.data
            })
    },
    setDataForm(name,email,phone,position,photo,token){
        let formData = new FormData();
        formData.append('position_id',position);
        formData.append('name',name);
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('photo',photo);


        return axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users',formData,{
        headers:{
            'Token': token,
            'Content-Type': 'multipart/form-data'
        }})
            .then(response => response.data)
            .catch(errors => errors.response.data)

    }

}
