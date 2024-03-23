// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL = 'https://polymer-frame.vercel.app/'
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://polymer-frame.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const XCCounterUC_ADDR = '0x7c9f0A60b2A6DD02d6E71fa2aBe6Cb9234f40a5C';