'use client';

import { Posting } from '@app/base/mock';
import { useParams } from 'next/navigation';

const ImagePosting = () => {
  const params = useParams();
  const postingImage = Posting.filter((e) => e.id === params.posting);

  return (
    <div
      style={{
        backgroundImage: `url('${postingImage[0].image}')`,
        width: '500px',
        height: '500px',
      }}
      className="rounded-xl flex justify-center"
    ></div>
  );
};

export default ImagePosting;
