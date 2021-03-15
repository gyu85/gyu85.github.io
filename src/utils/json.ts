export const getDeepValue = (source: any, paths: string): any =>
  paths
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .reduce((target, path, index, array) => {
      target = target[path] || (array.length - 1 === index ? null : {});

      return target;
    }, source || {});
