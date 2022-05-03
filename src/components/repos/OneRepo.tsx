import React from 'react'
import { Button, Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { stringSlice } from '../../helpers/stringSlice';
import { useNavigate } from 'react-router-dom';
import { OwnerAvatar } from './OwnerAvatar';
import { Tags } from './Tags';

export interface OneRepoProps {
    id: number,
    name: string,
    fullName: string,
    description: string,
    html_url: string,
    topics: string[],
    watchers: number,
    owner: any,
}

export const OneRepo = ({
    name,
    fullName,
    description,
    html_url,
    topics,
    watchers,
    owner: {
        login,
        avatar_url,
        html_url: owner_html_url
    }
}: OneRepoProps) => {
    const navigate = useNavigate();
    return (
        <Card
            component={Paper}
            elevation={3}
            sx={{ width: 400 }}
        >
            <CardContent>
                <Typography variant="h6">
                    {name}
                </Typography>
                <OwnerAvatar username={login} avatar_url={avatar_url} href={owner_html_url} />
                <Typography variant="body2" marginBottom={1}>
                    {stringSlice(description, 50)}
                </Typography>
                <Tags tags={topics} />
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>navigate(html_url)}>
                    See more
                </Button>
            </CardActions>
        </Card>
    )
}
