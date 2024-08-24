'use client';

import { Posting } from '@app/base/mock';
import { useParams } from 'next/navigation';

const NamePosting = () => {
  const params = useParams();
  const namePosting = Posting.filter((e) => e.id === params.posting);
  return <div className="text-3xl font-bold">{namePosting[0].name}</div>;
};

export default NamePosting;
