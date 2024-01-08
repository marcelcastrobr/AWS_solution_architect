# CloudFront
A CDN ( Content Delivery Network) service.

## Facts
- Edge locations in CloudFront are not just READ only. You can write to them.
- Objects are cached for the life of the TTL (time to leave)

- You are also able to use CloudFront to distribute private content via the use of OIA ( Origin Access Identity).

## Removing content from CloudFront
Cloudfront will continue to show views the content from the edge cache until the files expires (default TTL is 1 day, 86400 seconds).

If a file is needed to be removed right alway, you need to:
- Invalidate the file, or
- Use file versioning.