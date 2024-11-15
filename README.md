## About
This is a [Vocs](https://vocs.dev) project bootstrapped with the Vocs CLI.
## Deployment
This project is deployed using the vocs build command. The static artifacts in the `docs/dist` directory are uploaded to an S3 bucket: `bininusxyz-docs` only when the changes are merged into the `main` branch. This bucket is configured to serve the static files as a website with a CloudFront CDN. The CloudFront cache is invalidated after the files are uploaded to ensure that the latest version is visible immediately.