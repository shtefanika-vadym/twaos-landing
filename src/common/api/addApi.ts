import { SearchResponsProps } from '@/types/collect'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/src/query/baseQueryTypes'
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions'
import { HTTP_METHODS } from 'common/constants/httpMethodsConstants'
import { baseQuery } from 'common/utils/fetchBaseQuery'
import { toDrugSearch } from 'common/utils/mappers'

export const addApi = createApi({
  reducerPath: 'add',
  baseQuery: baseQuery(),
  endpoints: (build: EndpointBuilder<BaseQueryFn, string, string>) => ({
    createProduct: build.mutation({
      query: (product) => ({
        url: '/expired-products',
        data: product,
        method: HTTP_METHODS.POST,
      }),
    }),
    drug: build.query({
      query: (query) => ({
        url: `/drugs/search/${query}`,
      }),
      transformResponse: (respons: SearchResponsProps[]) => {
        return toDrugSearch(respons)
      }
    }),
    createDrug: build.mutation({
      query: (product) => ({
        url: '/drug-stock',
        data: product,
        method: HTTP_METHODS.POST,
      }),
    }),
  }),
})

export const { useCreateProductMutation, useDrugQuery, useCreateDrugMutation }: any = addApi
