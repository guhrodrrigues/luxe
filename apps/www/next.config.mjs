import nextMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  images: {
    domains: ["github.com"],
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
