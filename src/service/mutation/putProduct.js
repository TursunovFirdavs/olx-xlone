import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const putProduct = (category, id) => {
    return useMutation({
        mutationKey: ['category'],
        mutationFn: (data) => request
            .patch(`/${category}/${id}`, data)
            .then(res => res.data)
    })
}