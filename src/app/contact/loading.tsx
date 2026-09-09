import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHeaderSkeleton, SkeletonPulse } from "@/components/ExactSkeleton";

export default function ContactLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      <PageHeaderSkeleton />

      <section className="w-full py-16 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Skeleton */}
          <div className="lg:col-span-7 bg-white border border-[#e2e2df] p-8 sm:p-12 space-y-6">
            <SkeletonPulse className="w-36 h-4 rounded-xs" />
            <SkeletonPulse className="w-2/3 h-8 rounded-xs" />
            <div className="grid grid-cols-2 gap-6">
              <SkeletonPulse className="w-full h-12 rounded-xs" />
              <SkeletonPulse className="w-full h-12 rounded-xs" />
            </div>
            <SkeletonPulse className="w-full h-24 rounded-xs" />
            <SkeletonPulse className="w-full h-12 rounded-xs" />
          </div>

          {/* Office Cards Skeleton */}
          <div className="lg:col-span-5 space-y-6">
            <SkeletonPulse className="w-full h-32 rounded-xs" />
            <SkeletonPulse className="w-full h-32 rounded-xs" />
            <SkeletonPulse className="w-full h-32 rounded-xs" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
