import { Grid } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CommitsArea } from '../components/dashboard/CommitsArea';
import { TopLanguages } from '../components/dashboard/TopLanguages';
import { SearchPage } from '../components/search/SearchPage';
import { PageSkeleton } from './PageSkeleton';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const renderResultsComponents = () => {
    return (
      <Grid container spacing={1} justifyContent={"center"}>
        <Grid item maxWidth={600} minWidth={500}>
          <CommitsArea
            value={searchParams.get("key") || ""}
          />
        </Grid>
        <Grid item width={400} height={250}>
          <TopLanguages
            value={searchParams.get("key") || ""}
            width={350}
          />
        </Grid>
      </Grid>
    )
  }
  return (
    <PageSkeleton
      children={
        <SearchPage
          placeholder={"Search for a user..."}
          resultsComponent={renderResultsComponents()}
        />
      }
    />
  );
}
