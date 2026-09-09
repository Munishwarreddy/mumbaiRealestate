import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHeaderSkeleton,
  AgentCardSkeleton,
} from "@/components/ExactSkeleton";

export default function AgentsLoading() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] flex flex-col font-sans">
      <Header />

      <PageHeaderSkeleton />

      {/* Agents Grid Skeleton */}
      <section className="w-full py-16 px-6 sm:px-10 md:px-14 flex-1">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <AgentCardSkeleton />
          <AgentCardSkeleton />
          <AgentCardSkeleton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
