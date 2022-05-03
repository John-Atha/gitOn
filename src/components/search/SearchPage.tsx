import { Grid } from '@mui/material';
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

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchBar
          initValue=""
          placeholder={placeholder}
        />
      </Grid>
      <Grid item xs={12}>
        <UserCardWithoutData username={searchParams.get("key")} />
      </Grid>
      <Grid item xs={12}>
        {resultsComponent}
      </Grid>
    </Grid>
  )
}
