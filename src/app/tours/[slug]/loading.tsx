import { PageSkeleton } from "@/components/site/page-skeleton";

export default function Loading() {
  return <PageSkeleton heading="Loading tour" cards={3} />;
}
