import API from '../config/api';

export function postSolution(solution) {
        API.post('error_reason_solution', solution)
        .then(res => {
            console.log('Successfull post', res)
        })
        .catch(error => {
            console.log('Error ', error)
        })
};
