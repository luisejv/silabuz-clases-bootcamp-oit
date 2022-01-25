module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93f11919ff63af88bec1d16e353fc8b5'),
  },
});
