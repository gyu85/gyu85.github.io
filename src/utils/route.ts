import { format } from 'url';
import { getDeepValue } from 'utils/json';

const ROUTES = {
  HOME: {
    INDEX: '/'
  },
  INTRODUCE: {
    INDEX: '/introduce'
  },
  BLOG: {
    INDEX: '/blog'
  }
};

const getPath = (
  category: string,
  subCategory?: string,
  params: any = {},
  query?: any
): string => {
  let path = `${getDeepValue(
    ROUTES,
    `${category}${subCategory ? `.${subCategory}` : ''}`
  )}${query ? `/${format({ query })}` : ''}`;

  for (const [key, value] of Object.entries(params)) {
    path = path?.replace(new RegExp(`{${key}}`, 'g'), `${value}`);
  }

  return path;
};

export const getPathHome = (params?: any, query?: any): string =>
  getPath('HOME', 'INDEX', params, query);

export const getPathBlog = (params?: any, query?: any): string =>
  getPath('INTRODUCE', 'INDEX', params, query);

export const getPathIntroduce = (params?: any, query?: any): string =>
  getPath('BLOG', 'INDEX', params, query);
