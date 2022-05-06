import React from 'react';
import { Grid } from '@mui/material';
import { PageSkeleton } from './PageSkeleton';
import { FamousUsers } from '../components/users/FamousUsers';
import { FamousRepos } from '../components/repos/FamousRepos';

export const App = () => {

  return (
    <PageSkeleton>
      <Grid container rowSpacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <FamousUsers />
            </Grid>
            <Grid item>
              <FamousRepos />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSkeleton>
  );
}
