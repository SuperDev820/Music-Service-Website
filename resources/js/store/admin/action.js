import ApiService from "@/api/api.service";
import JwtService from "@/common/jwt.service"
import type from './type'

const actions = {
    initUsers(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/users")
                .then(({data}) => {
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
            ApiService.get("api/v1/user/" + userId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_USER, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    }
};


export default actions;