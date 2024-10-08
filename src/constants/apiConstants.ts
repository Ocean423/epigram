export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const allowedEndpoints = [
  '/users',
  '/oauthApps',
  '/images',
  '/epigrams',
  '/emotionLogs',
  '/comments',
  '/auth',
];

export const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || '';
export const KAKAO_REDIRECT_URL =
  process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL || '';
