import axios from 'axios';

const baseURL = '/api/card';

function getReadyCards(projectid) {
    return axios
        .get(`${baseURL}/ready/${projectid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function getYupCards(projectid) {
    return axios
        .get(`${baseURL}/yup/${projectid}`)
        .then( res => res )
        .catch( err => {throw err});
}

// function createCard(body) {
//     return axios
//         .post(`${baseURL}/post`, body)
//         .then( res => res )
//         .catch( err => {throw err});
// }

// function deleteCard(projectid) {
//     return axios
//     .delete(`${baseURL}/delete/${projectid}`)
//     .then( res => res )
//     .catch( err => {throw err});
// }

export {
    getReadyCards,
    getYupCards
}