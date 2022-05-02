import React from 'react';
import { PageSkeleton } from './PageSkeleton';

export const Repositories = () => {
  return (
    <PageSkeleton
      children={<div>Hello repos</div>}
    />
  );
}
