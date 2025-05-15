import { getServerUrl } from '../server-url';

type TRouteDataRequirements = {
  home: undefined;
  locations: undefined;
  'location-name': { locationName: string };
  weapons: undefined;
  shields: undefined;
  armors: undefined;
  spells: undefined;
  spiritAshes: undefined;
  ashesOfWar: undefined;
  talismans: undefined;
  whetBlades: undefined;
  crystalTears: undefined;
  cookBooks: undefined;
  account: undefined;
};

export type TRoute = keyof TRouteDataRequirements;

type TRouteDataMap<T extends TRoute> = T extends keyof TRouteDataRequirements
  ? TRouteDataRequirements[T]
  : never;

const routes: {
  [T in TRoute]: (params: TRouteDataMap<T>) => string;
} = {
  home: () => '/',
  locations: () => `/locations`,
  'location-name': ({ locationName }) => `/locations/${locationName}`,
  weapons: () => '/weapons',
  shields: () => '/shields',
  armors: () => '/armors',
  spells: () => '/spells',
  spiritAshes: () => '/spiritAshes',
  ashesOfWar: () => '/ashes-of-war',
  talismans: () => 'talismans',
  whetBlades: () => '/whet-blades',
  crystalTears: () => '/crystal-tears',
  cookBooks: () => '/cook-books',
  account: () => `/account`,
};

type TUrlParams =
  | string[][]
  | Record<string, string>
  | string
  | URLSearchParams;

export type TGetUrlArgs<T extends TRoute> = TRouteDataMap<T> extends undefined
  ? { withServerUrl?: boolean; urlParams?: TUrlParams }
  : TRouteDataMap<T> & {
      withServerUrl?: boolean;
      urlParams?: TUrlParams;
    };

export const getUrl = <T extends TRoute>(
  route: T,
  params?: TGetUrlArgs<T>
): string => {
  const { withServerUrl = false, urlParams, ...rawParams } = params || {};

  const routeParams = rawParams as TRouteDataMap<T>;

  const routeFn = routes[route];

  const computedUrl = routeFn(routeParams);

  const serverUrl = withServerUrl ? getServerUrl() : '';

  const parsedUrlParams = urlParams
    ? `?${new URLSearchParams(urlParams).toString()}`
    : '';

  return `${serverUrl}${
    serverUrl ? computedUrl.slice(1) : computedUrl
  }${parsedUrlParams}`;
};
