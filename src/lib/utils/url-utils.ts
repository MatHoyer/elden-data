export type TCalendar = 'day' | 'month' | 'planning';

type TRouteDataRequirements = {
  home: undefined;

  object: {
    name: string;
  };
};

export type TRoute = keyof TRouteDataRequirements;

type TRouteDataMap<T extends TRoute> = T extends keyof TRouteDataRequirements ? TRouteDataRequirements[T] : never;

const routes: {
  [T in TRoute]: (params: TRouteDataMap<T>) => string;
} = {
  home: () => '/',

  object: ({ name }) => `/object/${name}`,
};

type TUrlParams = string[][] | Record<string, string> | string | URLSearchParams;

type TGetUrlArgs<T extends TRoute> = TRouteDataMap<T> extends undefined
  ? { withServerUrl?: boolean; urlParams?: TUrlParams }
  : TRouteDataMap<T> & {
      withServerUrl?: boolean;
      urlParams?: TUrlParams;
    };

export const getUrl = <T extends TRoute>(route: T, params?: TGetUrlArgs<T>): string => {
  const { withServerUrl = false, urlParams, ...rawParams } = params || {};

  const routeParams = rawParams as TRouteDataMap<T>;

  const routeFn = routes[route];

  const computedUrl = routeFn(routeParams);

  const serverUrl = withServerUrl ? /*getServerUrl()*/ '' : '';

  const parsedUrlParams = urlParams ? `?${new URLSearchParams(urlParams).toString()}` : '';

  return `${serverUrl}${serverUrl ? computedUrl.slice(1) : computedUrl}${parsedUrlParams}`;
};
