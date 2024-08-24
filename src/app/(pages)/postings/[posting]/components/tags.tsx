'use client';
import { ICONS } from '@app/base/constants/icons';
import { Posting } from '@app/base/mock';
import { useParams } from 'next/navigation';

const Tags = () => {
  const params = useParams();
  const tagsPosting = Posting.filter((e) => e.id === params.posting);
  return (
    <div className="flex flex-col justify-center">
      <div className="text-sm">Selecione ou remova os estabelecimentos ligados ao anúncio</div>
      <div className="border border-primary-700 px-4 py-1 rounded-md">
        {tagsPosting.map((item) =>
          item.tags.map((tag, index) => (
            <div key={index} className="rounded-full border border-primary-700 px-2 w-fit my-1 inline-block mr-1">
              <div className="flex gap-1">
                {tag}
                <ICONS.close style={{ fontSize: '20px' }} className="text-primary-700 mt-[2px]" />
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Tags;
