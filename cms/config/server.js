module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', `http://localhost:${ env.int('PORT', 1337)}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '991f4b30a857d28ea11268eb94967129'),
    },
  },
});
