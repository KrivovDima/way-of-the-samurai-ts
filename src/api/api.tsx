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
    return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {})
  },
  setUnfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
  }
};

export const profileAPI = {
  getUser(userId: string) {
    return instance.get(`profile/${userId}`)
  }
}

