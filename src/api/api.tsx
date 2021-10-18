import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "39fadec0-97c5-4e9f-81f6-b1a36d1cf411"},
});

export const usersAPI = {
  getUsers(countUsers: number, pageNumber: number = 1) {
    return instance.get(`users?count=${countUsers}&page=${pageNumber}`)
      .then(res => res.data)
  },

};

export const followAPI = {
  setFollow(userId: number) {
    return instance.post(`follow/${userId}`, {})
  },
  setUnfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post<ResponseType<{ userId: number }>>('auth/login', {email, password, rememberMe})
  },
  logout() {
    return instance.delete<ResponseType>('auth/login')
  },
};

export const profileAPI = {
  getUser(userId: string) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put('profile/status', {status})
  }
}

type ResponseType<T = {}> = {
  resultCode: number
  messages: []
  data: T
}


