class SessionService {
    static setTokens(accessToken, refreshToken){
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    }

    static getAccessToken(){
        return localStorage.getItem('accessToken');
    }

    static getRefreshToken(){
        return localStorage.getItem('refreshToken')
    }

    static clearTokens(){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken')
    }
}

export default SessionService