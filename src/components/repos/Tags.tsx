import { Chip, Grid } from '@mui/material'
import React from 'react'

interface TagsProps {
    tags: string[],
}

export const Tags = ({ tags }: TagsProps) => {
    return (
        <Grid container spacing={1}>
            {tags.map((tag: string, index: number) => (
                <Grid item key={index}>
                    <Chip color='primary' variant="outlined" label={tag} />
                </Grid>
            ))}
        </Grid>
    )
}