import type { AxiosResponse } from 'axios'
import axiosInstance from './axiosConfig'

export const PhotoServices = {
  fetchPhotos: async (query: string, page: number): Promise<AxiosResponse> => {
    const params = new URLSearchParams()
    params.append('query', query)
    params.append('page', page.toString())
    const response = await axiosInstance.get(`/photos?${params.toString()}`)
    return response
  },
}
