"use client";

export function SkeletonPulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#e8e8e5] via-[#f0f0ec] to-[#e8e8e5] ${className}`}
    />
  );
}

// 1. Exact Property Card Skeleton (Matches FeaturedProperties & Properties Page)
export function PropertyCardSkeleton() {
  return (
    <div className="bg-white border border-[#e2e2df] p-0 flex flex-col overflow-hidden shadow-xs">
      {/* Image Skeleton */}
      <div className="relative w-full h-[260px] sm:h-[300px] bg-[#eaeaea] overflow-hidden">
        <SkeletonPulse className="w-full h-full" />
        <div className="absolute top-4 left-4 w-24 h-6 rounded-xs bg-[#d8d8d4]" />
        <div className="absolute bottom-4 right-4 w-28 h-8 rounded-xs bg-[#d8d8d4]" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <SkeletonPulse className="w-3/4 h-6 rounded-xs" />
          <SkeletonPulse className="w-1/2 h-4 rounded-xs" />
        </div>

        {/* Specs Pills Skeleton */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#f0f0ed]">
          <SkeletonPulse className="w-full h-4 rounded-xs" />
          <SkeletonPulse className="w-full h-4 rounded-xs" />
        </div>

        {/* Action Button Skeleton */}
        <div className="pt-2">
          <SkeletonPulse className="w-full h-11 rounded-xs" />
        </div>
      </div>
    </div>
  );
}

// 2. Exact Gallery Item Skeleton (Matches Gallery Page)
export function GalleryItemSkeleton() {
  return (
    <div className="bg-white border border-[#e2e2df] overflow-hidden flex flex-col">
      <div className="relative w-full h-[320px] bg-[#eaeaea]">
        <SkeletonPulse className="w-full h-full" />
        <div className="absolute top-4 left-4 w-20 h-5 bg-[#d8d8d4]" />
        <div className="absolute bottom-4 left-4 w-40 h-6 bg-[#d8d8d4]" />
      </div>
      <div className="p-5 space-y-3 bg-white border-t border-[#f0f0ed]">
        <SkeletonPulse className="w-2/3 h-5 rounded-xs" />
        <SkeletonPulse className="w-full h-3.5 rounded-xs" />
        <div className="flex justify-between pt-2">
          <SkeletonPulse className="w-1/4 h-3 rounded-xs" />
          <SkeletonPulse className="w-1/3 h-3 rounded-xs" />
        </div>
      </div>
    </div>
  );
}

// 3. Exact Service Card Skeleton (Matches Services Page)
export function ServiceCardSkeleton() {
  return (
    <div className="bg-white border border-[#e2e2df] overflow-hidden flex flex-col justify-between">
      <div className="relative w-full h-[260px] bg-[#eaeaea]">
        <SkeletonPulse className="w-full h-full" />
        <div className="absolute top-4 left-4 w-28 h-6 bg-[#d8d8d4]" />
        <div className="absolute bottom-4 left-4 w-48 h-8 bg-[#d8d8d4]" />
      </div>

      <div className="p-8 space-y-6">
        <SkeletonPulse className="w-full h-4 rounded-xs" />
        <SkeletonPulse className="w-5/6 h-4 rounded-xs" />

        <div className="space-y-2.5 pt-4 border-t border-[#f0f0ed]">
          <SkeletonPulse className="w-full h-3.5 rounded-xs" />
          <SkeletonPulse className="w-11/12 h-3.5 rounded-xs" />
          <SkeletonPulse className="w-4/5 h-3.5 rounded-xs" />
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#e2e2df]">
          <SkeletonPulse className="w-full h-11 rounded-xs" />
          <SkeletonPulse className="w-full h-11 rounded-xs" />
        </div>
      </div>
    </div>
  );
}

// 4. Exact Agent Card Skeleton (Matches Agents Page)
export function AgentCardSkeleton() {
  return (
    <div className="bg-white border border-[#e2e2df] flex flex-col justify-between overflow-hidden">
      <div className="relative w-full h-[340px] bg-[#eaeaea]">
        <SkeletonPulse className="w-full h-full" />
        <div className="absolute top-4 left-4 w-32 h-6 bg-[#d8d8d4]" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <SkeletonPulse className="w-3/4 h-6 rounded-xs mb-2" />
          <SkeletonPulse className="w-1/2 h-4 rounded-xs" />
        </div>

        <SkeletonPulse className="w-full h-12 rounded-xs" />

        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#e2e2df]">
          <SkeletonPulse className="w-full h-8 rounded-xs" />
          <SkeletonPulse className="w-full h-8 rounded-xs" />
        </div>

        <div className="space-y-2 pt-2">
          <SkeletonPulse className="w-full h-11 rounded-xs" />
          <SkeletonPulse className="w-full h-10 rounded-xs" />
        </div>
      </div>
    </div>
  );
}

// 5. Page Header Banner Skeleton
export function PageHeaderSkeleton() {
  return (
    <div className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
      <div className="max-w-[1440px] mx-auto space-y-4">
        <SkeletonPulse className="w-36 h-4 rounded-xs" />
        <SkeletonPulse className="w-3/4 max-w-2xl h-12 rounded-xs" />
        <SkeletonPulse className="w-1/2 max-w-xl h-6 rounded-xs" />
      </div>
    </div>
  );
}
