import { snakeToCamel } from 'utils/string';

export const getDatasetByName = (el: any, name: string): any => {
  return el.dataset
    ? el.dataset[snakeToCamel(name)]
    : el.getAttribute(`data-${name}`);
};
