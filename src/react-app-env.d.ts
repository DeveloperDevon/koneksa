/// <reference types="react-scripts" />

declare namespace NodeJS {
   interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PUBLIC_URL: string
      REACT_APP_API_GATEWAY_US_WEST: string
   }
}
