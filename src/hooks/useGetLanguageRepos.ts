import React from 'react'
import { useQuery } from 'react-query'
import { queriesKeys } from '../api/queriesKeys'
import { GetLanguageRepoProps, getReposByLang } from '../api/repos'


export const useGetLanguageRepos = ({ lang, page, per_page }: GetLanguageRepoProps) => {
    const { data, isLoading } = useQuery(
        [queriesKeys['getLanguageRepos'], lang],
        () => getReposByLang({ lang, page, per_page }), {
            enabled: !!lang,
            cacheTime: 1000000,
        },
    );

    return { data, isLoading };

}