/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'source.unsplash.com',
                pathname:'*/**',
                port:''

            },
            {
                protocol:'https',
                hostname:'flowbite.s3.amazonaws.com',
                pathname:'**',
                port:''
            },
            {
                protocol:'https',
                hostname:'nextui.org',
                pathname:'**',
                port:''
            },
            {
                protocol:'https',
                hostname:'backend.factsnepal.bidhee.net',
                pathname:'**',
                port:''
            }
        ]
    }
};

export default nextConfig;
