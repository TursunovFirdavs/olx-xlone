import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetAllProducts = (page=1) => {
    return useQuery({
        queryKey: ['all', 'create', page],
        queryFn: () => request
            .get(`/all`, {params: { _page: page, _limit: 10}})
            .then(res => {
                const pageSize = Number(res.headers.get('X-Total-count')) / 10; 
                return {
                    data: res.data,
                    pageSize: Math.ceil(pageSize)   
                }
            })
    })
}