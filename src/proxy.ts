import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// These paths only ever existed on the old WordPress site (theme templates,
// amenity taxonomies, cart/account pages, etc.) and have no equivalent on the
// new site. Returning 410 Gone tells search engines the removal is
// intentional, so they drop these URLs from the index faster than a 404
// would. Anything with a real new-site equivalent is a 301 in
// next.config.ts instead (redirects run before this proxy, so those never
// reach here).
export function proxy(_request: NextRequest) {
  return new NextResponse("Gone", { status: 410 });
}

export const config = {
  matcher: [
    "/ba_amenities/:path*",
    "/ba_features/:path*",
    "/ba_type/:path*",
    "/gva_template/:path*",
    "/checkout",
    "/checkout-2",
    "/confirmation",
    "/my-account",
    "/my-account-2",
    "/ba-my-account",
    "/shop",
    "/shop/:path*",
    "/case/:path*",
    "/wp-admin/:path*",
    "/wp-content/:path*",
    "/wp-json/:path*",
  ],
};
