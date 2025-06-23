## About
This is a [Vocs](https://vocs.dev) project bootstrapped with the Vocs CLI.
## Hosting & Domains
This project is hosted in our AWS account using [AWS Amplify](https://us-west-2.console.aws.amazon.com/amplify/apps/d3g4tc1w49blbt/overview) service in `us-west-2` region. The domain is also controlled by Route53 in AWS. The AWS Amplify is setup as a Github APP but only has access to the Binius.xyz repo. 
## Pre-commit
This repo is using [husky](https://github.com/typicode/husky) to execute the following commands `npm test` and `npm run build` to ensure the project will build before committing and pushing changes. 
## Build & Deployment
Any merge to the main branch will kick off a build and re-deployment. The build process and deployment will not be visible in Github. To watch or debug the process you will need to login into AWS console and go to AWS Amplify. 
## Future Security
If issues arise with security and/or traffic to the site, you can enable an AWS WAF in the Amplify console and configure. However, at this time I do not think this is necessary.