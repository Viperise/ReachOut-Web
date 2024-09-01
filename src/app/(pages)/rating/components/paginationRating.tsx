'use client';
import { Pagination } from '@nextui-org/react';
import ReviewCard from './rating';
import useRating from '@app/app/hook/rating';
const ReviewList = () => {
  const { Items, page, pages, setPage } = useRating();
  return (
    <div className="p-6 bg-gray-100 rounded-lg w-4/5 mx-auto">
      {Items.map((review, index) => (
        <ReviewCard
          key={index}
          title={review.title}
          establishmentName={review.establishmentName}
          feedback={review.feedback}
        />
      ))}
      <div className="flex justify-center mt-4">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default ReviewList;
