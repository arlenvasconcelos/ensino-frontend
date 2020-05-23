/* eslint-disable no-undef */
export const getAccessToken = () => localStorage.getItem('access-token');
export const getTypeToken = () => localStorage.getItem('type-token');
export const getRefreshToken = () => localStorage.getItem('refresh-token');

export const setAccessToken = token => localStorage.setItem('access-token', token);
export const setTypeToken = typeToken => localStorage.setItem('type-token', typeToken);
export const setRefreshToken = refreshToken => localStorage.setItem('refresh-token', refreshToken);
