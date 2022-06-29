export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "beerbarrel": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3beerbarrelstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "beerbarrel": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}