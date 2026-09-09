import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHeaderSkeleton,
  PropertyCardSkeleton,
  SkeletonPulse,
} from "@/components/ExactSkeleton";

export default function GlobalLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      {/* Hero Section Skeleton */}
      <section className="w-full bg-[#f7f7f5] py-16 sm:py-24 px-6 sm:px-10 md:px-14 border-b border-[#e2e2df]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SkeletonPulse className="w-32 h-4 rounded-xs" />
            <SkeletonPulse className="w-full h-16 rounded-xs" />
            <SkeletonPulse className="w-4/5 h-6 rounded-xs" />
            <div className="flex gap-4 pt-4">
              <SkeletonPulse className="w-44 h-12 rounded-xs" />
              <SkeletonPulse className="w-36 h-12 rounded-xs" />
            </div>
          </div>
          <div className="h-[420px] w-full bg-[#eaeaea] border border-[#e2e2df] relative overflow-hidden">
            <SkeletonPulse className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Featured Properties Skeleton Grid */}
      <section className="w-full py-16 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <PageHeaderSkeleton />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
