'use client';
import { Grid } from '@app/app/components';
import usePosting from '@app/app/hook/posting';
import { Pagination } from '@nextui-org/react';
import Link from 'next/link';

const PostingGrid = () => {
  const { Items, page, pages, setPage } = usePosting();

  return (
    <div className="flex flex-col gap-20 justify-center w-full">
      <div className="grid grid-cols-3 gap-y-20 gap-10 max-[1300px]:grid-cols-2 max-[920px]:grid-cols-1">
        {Items.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Link href={`/postings/${item.id}`}>
              <Grid image={item.image} place={item.place} name={item.name} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default PostingGrid;
