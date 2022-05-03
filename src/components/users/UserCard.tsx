import { Card, Paper } from '@mui/material'
import React from 'react'
import { OwnerAvatar } from '../repos/OwnerAvatar'

export interface OneUser {
    id?: number,
    login?: string,
    avatar_url?: string,
    html_url?: string,
    name?: string,
    location?: string,
    bio?: string,
    public_repos?: number,
    followers?: number,
    following?: number,
}

export const UserCard = ({
    login="",
    bio="",
    html_url="",
    avatar_url="",
}: OneUser) => {
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