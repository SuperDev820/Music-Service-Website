import ApiService from "@/api/api.service";
import JwtService from "@/common/jwt.service"
import type from './type'

const actions = {
    initUsers(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/users")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_USERS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    getUserById(context, userId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/user/" + userId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_USER, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    createUser(context, userInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/user/create", userInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    // if(status === 422) {
                    //     context.commit(
                    //         type.USER_SET_ERROR,
                    //         {target: 'register', errors: response.data.errors}
                    //     );
                    // }
                    reject(response);
                });
        });
    },
    updateUser(context, userInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/user/update", userInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    // if(status === 422) {
                    //     context.commit(
                    //         type.USER_SET_ERROR,
                    //         {target: 'register', errors: response.data.errors}
                    //     );
                    // }
                    reject(response);
                });
        });
    },
    deleteUser(context, userId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/user/delete/" + userId)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
};

export default actions;