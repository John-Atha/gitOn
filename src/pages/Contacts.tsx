import React from 'react';
import { PageSkeleton } from './PageSkeleton';

export const Contacts = () => {
  return (
    <PageSkeleton
      children={<div>Hello contacts</div>}
    />
  );
}
