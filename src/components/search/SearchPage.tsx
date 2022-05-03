import { Grid } from '@mui/material';
import React, { cloneElement, ReactElement, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageSkeleton } from '../../pages/PageSkeleton';
import { UserCard } from '../users/UserCard';
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
        <UserCard username={searchParams.get("key")} />
      </Grid>
      <Grid item xs={12}>
        {resultsComponent}
      </Grid>
    </Grid>
  )
}
