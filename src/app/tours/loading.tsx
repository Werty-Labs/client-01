import { PageSkeleton } from "@/components/site/page-skeleton";

export default function Loading() {
  return <PageSkeleton heading="Loading tours" showHero={false} cards={6} />;
}
