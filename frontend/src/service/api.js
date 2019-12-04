import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiServe {
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }


    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }


    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    
    inserirUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    attUser(user) {
        return axios.delete(USER_API_BASE_URL + '/' + user.id, user);
    }
}

export default new ApiServe();