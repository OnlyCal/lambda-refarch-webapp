// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3tvt29nlsjpahnqdh6vr0a3i3l",     // CognitoClientID
  "api_base_url": "https://e838p65pri.execute-api.us-west-2.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-webapp-demo.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1og80gyiu3r8n.amplifyapp.com"                                      // AmplifyURL
};

export default config;
