#!/bin/sh

echo "Deploy to CDN"

BUCKET=s3://cdn.tiagoboeing.com/anywhere-webcomponents/

aws s3 sync dist ${BUCKET}${GITHUB_REF##*/} --delete
aws s3 sync loader ${BUCKET}${GITHUB_REF##*/}/loader/ --delete

echo "Copy to S3 concluded"
echo "Prepare to invalidade cache on CloudFront"

aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_DIST_ID} --paths "/anywhere-webcomponents/${GITHUB_REF##*/}/*"
