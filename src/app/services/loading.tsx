import { PageSkeleton } from "@/components/site/page-skeleton";

export default function Loading() {
  return <PageSkeleton heading="Loading services" cards={6} />;
}
