import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const putUser = (id) => {
    return useMutation({
        mutationKey: ['editUser', id],
        mutationFn: (data) => request
            .patch(`users/${id}`, data)
            .then(res => res.data)
    })
}