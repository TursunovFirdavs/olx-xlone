import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useCreate = (title) => {
    return useMutation({
        mutationKey: [title],
        mutationFn: (data) => request
            .post(`${title}`, data)
            .then(res => res.data)
    })
}