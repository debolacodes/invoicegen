import axiosService from './axiosService'
import SessionService from './sessionService'

class AuthService {
    static async login(email, password){
        const res = await axiosService.post('api/token/', {email, password})
        const {access, refresh} = res.data;
        SessionService.setTokens(access, refresh)
        return res.data
    }

    static async register(userData){
        return axiosService.post('user/register', userData);
    }

    static async getMyDetails(){
        return axiosService.get(`user/me`)
    }

    static async getUserDetails(id){
        return axiosService.get(`user/${id}`)
    }

    static async updateMyDetails(data){
        return axiosService.patch('user/update', data)
    }
}

export default AuthService