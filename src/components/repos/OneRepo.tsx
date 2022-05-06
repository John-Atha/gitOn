import React from 'react'
import { alpha, Button, Card, CardActions, CardContent, Grid, Paper, Typography, useTheme } from "@mui/material";
import { stringSlice } from '../../helpers/stringSlice';
import { useNavigate } from 'react-router-dom';
import { OwnerAvatar } from './OwnerAvatar';
import { Tags } from './Tags';
import { useQuery } from 'react-query';
import { queriesKeys } from '../../api/queriesKeys';
import { getRepoParticipation } from '../../api/repos';
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import { arraySample } from '../../helpers/arraySample';

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
    keywordsLim?: number,
    descriptionLim?: number,
    height?: number,
    width?: number,
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
    },
    keywordsLim=-1,
    descriptionLim=100,
    height,
    width
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
            sx={{
                width: width || 300,
                ...(height && { height }),
                ...(!height && { minHeight: 250 }),
                backgroundColor: alpha(theme.palette.primary.main, 0.1)
            }}
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
                            {stringSlice(description, descriptionLim)}
                        </Typography>
                        <Tags tags={
                            keywordsLim===-1 ? topics : arraySample({ array: topics, limit: keywordsLim })
                        } />
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
