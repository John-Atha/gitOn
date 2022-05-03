import { Alert, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { queriesKeys } from '../../api/queriesKeys'
import { getUser } from '../../api/user'
import Spinner from '../general/Spinner'
import { OwnerAvatar } from '../repos/OwnerAvatar'

export interface OneUser {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
    name: string,
    location: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
}

interface OneUserProps {
    username: string|null,
}

export const UserCard = ({ username }: OneUserProps) => {
    const { data, isLoading } = useQuery(
        [queriesKeys['getUser'], username],
        () => getUser({ username: username || "" }), {
            enabled: Boolean(username),
        }
    )

    console.log({ data });

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    if (!data) {
        return (
            <Alert severity='info'>
                User '{username}' not found
            </Alert>
        )
    }

    const { login, bio, html_url, avatar_url } = data;

    return (
        <Card component={Paper} elevation={3} sx={{ padding: 1 }}>
            <OwnerAvatar
                avatar_url={avatar_url}
                username={login}
                href={html_url}
                height={40}
                width={40}
                subheader={bio}
            />
        </Card>

    )
}