declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      BOT_APPID: string;

      DB_HOST: string;
      DB_PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;
    }
  }
}
export {};
