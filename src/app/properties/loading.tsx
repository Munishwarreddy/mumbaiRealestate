import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHeaderSkeleton,
  PropertyCardSkeleton,
  SkeletonPulse,
} from "@/components/ExactSkeleton";

export default function PropertiesLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      <PageHeaderSkeleton />

      {/* Filter Bar Skeleton */}
      <div className="w-full bg-white border-b border-[#e2e2df] py-4 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-3">
            <SkeletonPulse className="w-24 h-9 rounded-xs" />
            <SkeletonPulse className="w-24 h-9 rounded-xs" />
            <SkeletonPulse className="w-24 h-9 rounded-xs" />
          </div>
          <SkeletonPulse className="w-64 h-9 rounded-xs" />
        </div>
      </div>

      {/* Properties Grid Skeleton */}
      <section className="w-full py-12 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
