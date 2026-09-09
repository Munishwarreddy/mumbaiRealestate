import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHeaderSkeleton,
  GalleryItemSkeleton,
  SkeletonPulse,
} from "@/components/ExactSkeleton";

export default function GalleryLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      <PageHeaderSkeleton />

      {/* Control Bar Skeleton */}
      <div className="w-full bg-white border-b border-[#e2e2df] py-4 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <SkeletonPulse className="w-16 h-6 rounded-xs" />
            <SkeletonPulse className="w-24 h-6 rounded-xs" />
            <SkeletonPulse className="w-20 h-6 rounded-xs" />
          </div>
          <SkeletonPulse className="w-48 h-9 rounded-xs" />
        </div>
      </div>

      {/* Gallery Grid Skeleton */}
      <section className="w-full py-12 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GalleryItemSkeleton />
          <GalleryItemSkeleton />
          <GalleryItemSkeleton />
          <GalleryItemSkeleton />
          <GalleryItemSkeleton />
          <GalleryItemSkeleton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
