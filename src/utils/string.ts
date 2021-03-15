export const snakeToCamel = (value: any) =>
  String(value).replace(/-\w/g, m => m[1].toUpperCase());

export const breakLines = (value: any) =>
  String(value).replace(/(\r\n|\n|\r)/gm, '<br/>');
