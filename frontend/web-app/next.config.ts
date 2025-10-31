import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";


const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images:{
    remotePatterns: [
      {protocol: 'https', hostname: 'cdn.pixabay.com'},
      {protocol: 'https', hostname: 'media.istockphoto.com'}
    ]
  }
};

export default withFlowbiteReact(nextConfig);