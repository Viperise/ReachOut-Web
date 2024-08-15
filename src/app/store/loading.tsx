import { Skeleton } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="w-fit h-fit flex items-center gap-3">
      <Skeleton className="flex rounded-full w-12 h-12" />
    </div>
  );
}
