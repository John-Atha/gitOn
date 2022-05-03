import { Search } from '@mui/icons-material';
import { Grid, IconButton, InputBase, Paper } from '@mui/material';
import React, { ReactElement, SyntheticEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

interface SearchBarProps {
    initValue: any,
    placeholder?: string,
}

export const SearchBar = ({ initValue, placeholder }: SearchBarProps) => {
    const [value, setValue] = useState(initValue || "");
    const [searchParams, setSearchParams] = useSearchParams();
    
    const submit = (event: SyntheticEvent) => {
        console.log(event);
        event.preventDefault();
        console.log(value);
        setSearchParams({ "key": value })
    }
    return (
        <Paper component="form" onSubmit={submit} >
            <Grid container justifyContent={"space-between"} alignItems="center">
                <Grid item>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={placeholder || "Search..."}
                        inputProps={{ 'aria-label': placeholder||'search' }}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                </Grid>
            </Grid>
      </Paper>
    )
}