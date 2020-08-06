module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('API_URL', `http://localhost:${env.int('PORT', 1337)}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '94984312d6b5b38058d150e3aef2a44e'),
    },
  },
});
