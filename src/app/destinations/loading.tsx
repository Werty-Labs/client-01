import { PageSkeleton } from "@/components/site/page-skeleton";

export default function Loading() {
  return <PageSkeleton heading="Loading destinations" showHero={false} cards={6} />;
}
