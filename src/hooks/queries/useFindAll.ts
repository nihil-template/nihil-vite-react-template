import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IQueryParameter, IQueryType } from '@/types/queries.types';
import { apiGet } from '@/utils/axios';

// 모든 데이터 가져오기
export const useFindAll = <T>(input: IQueryParameter<T>): IQueryType<T> => {
  const {
    data = [], isLoading, isError, error, isSuccess, refetch,
  } = useQuery<T, AxiosError>(
    input.key,
    async () => {
      const { data, } = await apiGet<T>(input.api);

      return data;
    },
    {
      ...input.options,
    }
  );

  return {
    data: data as T,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  };
};