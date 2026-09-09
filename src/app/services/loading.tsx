import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHeaderSkeleton,
  ServiceCardSkeleton,
} from "@/components/ExactSkeleton";

export default function ServicesLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      <PageHeaderSkeleton />

      {/* Services Grid Skeleton */}
      <section className="w-full py-12 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
