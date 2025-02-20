import { PhotoServices } from '@/services/photoService'
import type { IPhoto } from '@/types'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useGlobalStore } from './global'

export const usePhotoStore = defineStore('photos', () => {
  const query = ref('african')
  const photos = ref<IPhoto[]>([])
  const total = ref(0)

  const { setLoading } = useGlobalStore()

  function setQuery(value: string) {
    query.value = value
  }

  async function fetchPhotos(query: string, page: number) {
    try {
      setLoading(true)
      const response = await PhotoServices.fetchPhotos(query, page)
      photos.value = response.data.results
      total.value = response.data.total_pages
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { photos, fetchPhotos, setQuery, query, total }
})
