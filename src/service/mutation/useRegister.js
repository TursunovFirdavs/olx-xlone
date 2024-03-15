import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useRegister = () => {
    return useMutation({
        // mutationKey: ['register'],
        mutationFn: (data) => request
            .post('/register', data)
            .then(res => res.data)
    })
}