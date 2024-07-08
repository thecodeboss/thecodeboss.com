import * as aws from "@pulumi/aws";
import * as synced_folder from "@pulumi/synced-folder";
import path = require("path");

const FRONTEND_DIST_DIRECTORY = path.join(__dirname, "../frontend/dist");

const bucket = new aws.s3.Bucket("bucket", {
  bucket: "thecodeboss",
});

const publicAccessBlock = new aws.s3.BucketPublicAccessBlock(
  "public-access-block",
  {
    bucket: bucket.bucket,
  }
);

new synced_folder.S3BucketFolder(
  "synced-folder",
  {
    path: FRONTEND_DIST_DIRECTORY,
    bucketName: bucket.bucket,
    acl: "private",
  },
  { dependsOn: [publicAccessBlock] }
);

const originAccessControl = new aws.cloudfront.OriginAccessControl(
  "origin-access-control",
  {
    description: "",
    name: bucket.bucketRegionalDomainName,
    originAccessControlOriginType: "s3",
    signingBehavior: "always",
    signingProtocol: "sigv4",
  }
);

new aws.cloudfront.Distribution("cdn", {
  aliases: ["thecodeboss.com", "www.thecodeboss.com"],
  enabled: true,
  origins: [
    {
      originAccessControlId: originAccessControl.id,
      originId: bucket.bucketRegionalDomainName,
      domainName: bucket.bucketRegionalDomainName,
    },
  ],
  defaultRootObject: "index.html",
  httpVersion: "http2and3",
  isIpv6Enabled: true,
  defaultCacheBehavior: {
    allowedMethods: ["GET", "HEAD"],
    cachedMethods: ["GET", "HEAD"],
    // This is an AWS managed cache policy
    cachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6",
    compress: true,
    targetOriginId: bucket.bucketRegionalDomainName,
    viewerProtocolPolicy: "redirect-to-https",
  },
  priceClass: "PriceClass_All",
  customErrorResponses: [
    {
      errorCachingMinTtl: 300,
      errorCode: 404,
      responseCode: 404,
      responsePagePath: "/index.html",
    },
    {
      errorCachingMinTtl: 300,
      errorCode: 403,
      responseCode: 200,
      responsePagePath: "/index.html",
    },
  ],
  restrictions: {
    geoRestriction: {
      restrictionType: "none",
    },
  },
  viewerCertificate: {
    // Certificate is in us-east-1, so we don't manage it with Pulumi
    acmCertificateArn:
      "arn:aws:acm:us-east-1:191767792151:certificate/d391353e-59c7-41d7-9844-d3013a234fa7",
    minimumProtocolVersion: "TLSv1.2_2021",
    sslSupportMethod: "sni-only",
  },
});
