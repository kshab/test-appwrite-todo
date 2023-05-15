/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: 'https://cloud.appwrite.io/v1',
    NEXT_PUBLIC_PROJECT_ID: '64626de26c55b32ddab3',
    NEXT_PUBLIC_DATABASE_ID: '64627893092375bd5ed9',
    NEXT_PUBLIC_COLLECTION_ID: '646278a27f36ee872057',
  }
};

module.exports = nextConfig;
