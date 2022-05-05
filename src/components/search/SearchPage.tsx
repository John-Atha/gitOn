import { Grid, Paper, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UserCardWithoutData } from '../users/UserCardWithoutData';
import { SearchBar } from './SearchBar';

interface SearchPageProps {
  placeholder: string,
  resultsComponent: ReactElement,
}

export const SearchPage = ({ placeholder, resultsComponent }: SearchPageProps) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const renderResults = () => {
    if (searchParams.get("key")) {
      return (
        <>
          <Grid item xs={12}>
            <UserCardWithoutData username={searchParams.get("key")} />
          </Grid>
          <Grid item xs={12}>
            {resultsComponent}
          </Grid>
        </>
      )
    }
    return (
      <Grid item width={600} maxWidth={"80vw"} marginTop={5}>
        <Paper sx={{ alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
          <Typography variant="h6" align="center">
            Search for a user to see his/her info
          </Typography>
        </Paper>
      </Grid>
    )
  }
  return (
    <Grid container rowSpacing={3} justifyContent="center">
      <Grid item xs={12}>
        <SearchBar
          initValue=""
          placeholder={placeholder}
        />
      </Grid>
      { renderResults() }
    </Grid>
  )
}
