import { Avatar, CardHeader, useTheme } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface OwnerAvatarProps {
    username: string,
    avatar_url: string,
    href?: string,
    height?: number,
    width?: number,
    subheader?: string,
}
export const OwnerAvatar = ({ username, avatar_url, href="#", height=25, width=25, subheader }: OwnerAvatarProps) => {
    const theme = useTheme();
    return (
        <CardHeader
            component={NavLink}
            to={`/users?key=${username}`}
            sx={{ padding: 1, paddingLeft: 0, textDecoration: "none" }}
            avatar={
                <Avatar
                    alt="avatar"
                    src={avatar_url}
                    sx={{ height, width }}
                />
            }
            titleTypographyProps={{
                color: theme.palette.primary.main,
            }}
            title={username}
            subheader={subheader}
        />
    )
}