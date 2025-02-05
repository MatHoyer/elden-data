import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - admin (admin path)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|admin).*)',
  ],
};

export const middleware = (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', req.url);
  const referer = requestHeaders.get('referer');
  requestHeaders.set(
    'referer',
    referer ? (referer === req.url ? '' : referer) : '',
  );
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
