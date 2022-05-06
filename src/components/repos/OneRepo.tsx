import React from 'react'
import { Button, Card, CardActions, CardContent, Grid, Paper, Typography, useTheme } from "@mui/material";
import { stringSlice } from '../../helpers/stringSlice';
import { useNavigate } from 'react-router-dom';
import { OwnerAvatar } from './OwnerAvatar';
import { Tags } from './Tags';
import { useQuery } from 'react-query';
import { queriesKeys } from '../../api/queriesKeys';
import { getRepoParticipation } from '../../api/repos';
import { Sparklines, SparklinesLine  } from 'react-sparklines';

export interface OneRepoProps {
    id?: number,
    name?: string,
    fullName?: string,
    description?: string,
    html_url?: string,
    topics?: string[],
    watchers?: number,
    owner?: any,
    stargazers_count?: number,
}

export const OneRepo = ({
    name="",
    fullName="",
    description="",
    html_url="",
    topics=[],
    watchers=0,
    owner: {
        login="",
        avatar_url="",
        html_url: owner_html_url="",
    }
}: OneRepoProps) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const { data, isLoading } = useQuery(
        [queriesKeys['getRepoParticipation'], name],
        () => getRepoParticipation({ username: login, repoName: name }), {
            enabled: Boolean(login) && Boolean(name),
            cacheTime: 10000,
        }
    )

    const renderSparkLine = () => {
        if (isLoading || !data) {
            return null;
        }
        return (
            <Sparklines
                data={data.all}
                limit={data.all?.length || 10}
                svgWidth={100}
                svgHeight={20}
                margin={2}
            >
                <SparklinesLine color={theme.palette.primary.main} />
            </Sparklines>
        )
    }
    return (
        <Card
            component={Paper}
            elevation={3}
            sx={{ width: 400, minHeight: 250 }}
        >
            <Grid container minHeight={250} alignItems="space-between">
                <Grid item xs={12}>
                    <CardContent>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h6">
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                { renderSparkLine() }
                            </Grid>
                        </Grid>
                        <OwnerAvatar username={login} avatar_url={avatar_url} href={owner_html_url} />
                        <Typography variant="body2" marginBottom={1}>
                            {stringSlice(description, 50)}
                        </Typography>
                        <Tags tags={topics} />
                    </CardContent>
                </Grid>
                <Grid item xs={12}>
                    <CardActions sx={{ height: 1 }}>
                        <Grid container height={1} alignItems="flex-end">
                            <Button size="small" onClick={()=>navigate(html_url)}>
                                See more
                            </Button>
                        </Grid>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}
