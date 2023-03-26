This is a seri  Build a Product Roadmap with Next.js and [`AWS Amplify`]([https://github.com/vercel/next.js/tree/canary/packages/create-next-app](https://aws.amazon.com/blogs/mobile/build-a-product-roadmap-with-next-js-and-amplify/)).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see Product Roadmap .

Open [http://localhost:3000/admin](http://localhost:3000/admin) with your browser to see Product Roadmap Admin.


Check out seri step by step in Aws Blog for more details.
1. (https://aws.amazon.com/blogs/mobile/deploy-a-next-js-13-app-with-authentication-to-aws-amplify/)
2. (https://aws.amazon.com/blogs/mobile/build-a-product-roadmap-with-next-js-and-amplify/)
3. (https://aws.amazon.com/blogs/mobile/add-storage-to-a-next-js-13-app-with-aws-amplify/)


We need config aws s3 allow show image or download from s3 buckets
1. Open aws s3,click to bucket you have created. name something like:  <your-pj>31213-dev
in permissions tab uncheck Block all public access
2. Edit Bucket policy and click Policy generator [https://awspolicygen.s3.amazonaws.com/policygen.html]
Choose : "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            
            "ARN": <your arn>
            
press add Statement => generate policy 
copy that form
3. Paste to Bucket policy


