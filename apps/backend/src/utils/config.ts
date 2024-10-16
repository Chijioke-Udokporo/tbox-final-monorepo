export const AppConfig = {
  app: {
    name: "TrailerBox",
    mediaPath: process.env.MEDIA_PATH,
  },

  db: {
    sqlite: {
      url: process.env.SQLITE_CONNECTION_URL,
    },
    postgres: {
      url: process.env.POSTGRES_CONNECTION_URL,
    },
    turso: {
      url: process.env.TURSO_CONNECTION_URL!,
      token: process.env.TURSO_AUTH_TOKEN,
    },
  },

  security: {
    jwtSecret: process.env.JWT_SECRET!,
    jwtExpiry: process.env.JWT_EXPIRY!,
    cookieName: process.env.COOKIE_NAME! || "app-session",
    cookieExpiry: Number(process.env.COOKIE_EXPIRY!) || 3600, // 1 hour
    saltRounds: process.env.BCRYPT_SALT_ROUNDS! || 10,
    allowedOrigins: process.env.ALLOWED_DOMAIN?.split(",") || "",
  },

  api: {
    language: "en",
    version: Number(process.env.VERSION) || 1,
    prefix: `api/v${Number(process.env.VERSION) || 1}`,
    pagination: {
      limit: 20,
      page: 1,
    },
  },
};
