module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40a16c4589ce5c81e7ef4d3c8e6df5f2'),
  },
});
