/* eslint-disable no-undef */
export const getAccessToken = () => localStorage.getItem('ensino-access-token');
export const getTypeToken = () => localStorage.getItem('ensino-type-token');
export const getRefreshToken = () => localStorage.getItem('ensino-refresh-token');

export const setAccessToken = token => localStorage.setItem('ensino-access-token', token);
export const setTypeToken = typeToken => localStorage.setItem('ensino-type-token', typeToken);
export const setRefreshToken = refreshToken => localStorage.setItem('ensino-refresh-token', refreshToken);
