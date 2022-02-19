module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1fc3f129b74aa485fb2c61e7ea5fe62c'),
  },
});
