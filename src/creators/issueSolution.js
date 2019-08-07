import API from '../config/api';

export function postSolution(solution) {
        API.post('solutions/', solution)
        .catch(error => {
            console.log('Error ', error)
        })
};
