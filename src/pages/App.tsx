import React from 'react';
import { PageSkeleton } from './PageSkeleton';

export const App = () => {
  return (
    <PageSkeleton
      children={<div>Hello world</div>}
    />
  );
}
