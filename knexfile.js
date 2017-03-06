module.exports = {
  development: {
    client: process.env.DB_DIALECT,
    connection: {
      host: process.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './server/database/migrations'
    },
    seeds: {
      directory: './server/database/seeds'
    }
  },
  production: {
    client: process.env.DB_DIALECT,
    connection: {
      host: process.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './server/database/migrations'
    }
  }
}
