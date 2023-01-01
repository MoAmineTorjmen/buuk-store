import sanityClient from "./sanity/node_modules/@sanity/client"

const client = sanityClient({
    projectId:"rsbtb6uw",
    dataset: "production",
    useCdn:true,
    apiVersion: "2021-10-21"
});

export default client ;