export class EndpointsServices{
    private static readonly URL_PARENT = "http://localhost:8081/"
    
    public static readonly LOGIN_URL = this.URL_PARENT +"apigateway/secure/login";

    public static readonly CREATE_REVIEW = this.URL_PARENT +"api/movieuser/";


}