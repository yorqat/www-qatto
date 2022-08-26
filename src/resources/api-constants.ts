const baseUrl = 'http://www.qatto.dev';

export const getData = (userId: number): string => {
  return baseUrl + '/data/' + userId;
};
