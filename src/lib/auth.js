import api from './api';

async function login(data){
    const response = api.post(
        '/login', data);

    console.log("response", response);

    api.defaults.headers.common['Authorization'] = 'Bearer ${response.data.token}';

    return response;
}

export const Auth = {
    login,
};