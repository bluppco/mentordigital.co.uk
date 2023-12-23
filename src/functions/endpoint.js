export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.mentordigital.blupp.co" : "https://api.mentordigital.blupp.co"

}
