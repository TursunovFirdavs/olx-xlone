import { useMutation } from "@tanstack/react-query";
import { request } from "../../api/request";

export const deleteProduct = (category) => {
    return useMutation({
        mutationKey: ['category'],
        mutationFn: (id) => request
            .delete(`/${category}/${id}`)
            .then(res => res.data)
    })
}