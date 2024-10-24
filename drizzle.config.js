/** @type {import('drizzle-kit').Config} */
export default {
    schema: './configs/schema.js',
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://jsm_uber_owner:6dOwFMSAsm7E@ep-sparkling-bush-a4q67bak.us-east-1.aws.neon.tech/video_generator?sslmode=require",
    },
};