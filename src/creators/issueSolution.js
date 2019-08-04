import API from '../config/api';

export function postSolution(solution) {
        API.post('solutions/', solution)
        .then(res => {
            console.log('Successfull post', res)
        })
        .catch(error => {
            console.log('Error ', error)
        })
};
