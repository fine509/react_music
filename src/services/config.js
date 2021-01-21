const devBaseURL = "http://123.207.32.32:9001";
const proBaseURL = "123";
export const BASE_URL = process.env.NODE_ENV === 'development'?devBaseURL:proBaseURL

export const TIMEOUT = 5000;