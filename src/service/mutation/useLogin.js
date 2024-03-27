import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data) => request
            .post('/login', data)
            .then(  res => res.data)
    })
}