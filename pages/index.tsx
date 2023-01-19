import HomeLayout from './components/HomeLayout';
import { useState } from 'react';
import type { ReactElement } from 'react'
import Link from 'next/link';

export default function HomePage() {

  return (
    <div>
      <Link href='/card'>link to card</Link>
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}
