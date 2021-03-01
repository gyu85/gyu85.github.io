export const mediaQuery = (bp: string) => `@media screen and (${bp})`;

export const isEmail = (value: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const email = (value: string, message: string = '') =>
  isEmail(value) ? undefined : message || '유효하지 않은 이메일입니다.';

export const whatOs = () => {
  if (window.navigator.userAgent.indexOf('Windows') !== -1) {
    return 'Windows';
  } else if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    return 'Mac';
  }
};
