import { NextRequest, NextResponse } from "next/server";
import { SiteConfig, sites } from "./libs/configs/sites";

// exclude all files in the public folder
// exclude all API routes

// const privatePaths = [".", "/api"];
// const validSubDomain = (sites: SiteConfig, site: string) => sites[site];
// const isPublicPath = (path: string) => !privatePaths.includes(path);

export function middleware(req: NextRequest, res: NextResponse) {
  console.log("middleware running....");

  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host");
  const subdomain = (hostname as string).split(".")[0];

  console.log("subdomain", subdomain);

  if (!sites[subdomain]) {
    return NextResponse.next();
  }
  if (pathname.startsWith(`/_sites`)) {
    // Prevent security issues – users should not be able to canonically access
    // the pages/sites folder and its respective contents. This can also be done
    // via rewrites to a custom 404 page
    return new Response(null, { status: 404 });
  }
  if (
    !pathname.includes(".") && //
    !pathname.startsWith("/api")
  ) {
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    const url = req.nextUrl.clone();
    url.pathname = `/_sites/${subdomain}${pathname}`;

    return NextResponse.rewrite(url);
  }
  // const { pathname } = req.nextUrl;
  // const hostname = req.headers.get("host");
  // console.log("@@hostname", hostname);

  // const site = (hostname as string).split(".")[0];

  // const pubicPath = isPublicPath(pathname);
  // // @todo - make this routing a switch (think marshalling)
  // if (!hostname) {
  //   console.log("has host name?", hostname);
  //   return NextResponse.next();
  // } else if (!pubicPath) {
  //   console.log("!pubicPath", pubicPath);
  //   console.log("pathname", pathname);
  //   return NextResponse.next();
  // } else if (site && !validSubDomain(sites, site)) {
  //   console.log("validSubDomain", site);
  //   console.log("validSubDomain", site);
  //   console.log("validSubDomain function ", validSubDomain(sites, site));
  //   // const host = hostname.split(".")[0];
  //   return NextResponse.next();
  // } else if (pathname.split("/").includes(`_sites`)) {
  //   console.log("path name", pathname.split("/"));
  //   return new Response(null, { status: 404 });
  // }
  // console.log("pathname", pathname);
  // if (!pathname.includes(".") && !pathname.startsWith("/api")) {
  //   // rewrite to the current hostname under the pages/sites folder
  //   // the main logic component will happen in pages/sites/[site]/index.tsx
  //   const url = req.nextUrl.clone();
  //   url.pathname = `/_sites/${site}${pathname}`;

  //   return NextResponse.rewrite(url);
  // }
  //  if (!pathname.includes(".") && !pathname.startsWith("/api")) {
  //   console.log("else");
  //   const url = req.nextUrl.clone();
  //   console.log("site", site);
  //   console.log("url", url);
  //   url.pathname = `/_sites/${site}${pathname}`;
  //   console.log("pathname", url.pathname);
  //   return NextResponse.rewrite(url);
  // }

  // // if user tries to access invalid subdomain or if they try to acccess
  // // a private path, send them to the home page
  // // validSubDomain(sites, site)
  // const canPAth = isPublicPath(pathname);
  // if (!isPublicPath(pathname)) {
  //   console.log("canPAth", canPAth);

  // // Block users from directly accessing sites
}
