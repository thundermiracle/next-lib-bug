import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const Index = () => (
  <div>
    <Button color="primary">Hello World</Button>
    <Link href="/page1">
      <Button>To Page1</Button>
    </Link>
  </div>
);

export default Index;