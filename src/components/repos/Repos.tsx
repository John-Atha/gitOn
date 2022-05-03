import { Alert, Grid } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { queriesKeys } from '../../api/queriesKeys'
import { getRepos } from '../../api/repos'
import Spinner from '../general/Spinner'
import { OneRepo, OneRepoProps } from './OneRepo'

interface ReposProps {
    value?: string | null,
}

export const Repos = ({ value: username }: ReposProps) => {
    console.log({ username });

    const { data, isLoading } = useQuery(
        [queriesKeys['getRepos'], username],
        () => getRepos({ username: username || "" }), {
            enabled: Boolean(username),
        }
    )

    if (isLoading) {
        return (
            <Spinner />
        )
    }
    if (!data?.length) {
        return (
            <Alert severity="info">
                No repositories found
            </Alert>
        )
    }
    return (
        <Grid container spacing={2}>
            {data.map((repo: OneRepoProps) => (
                <Grid item key={repo?.id}>
                    <OneRepo {...repo} />
                </Grid>
            ))}
        </Grid>
    )
}