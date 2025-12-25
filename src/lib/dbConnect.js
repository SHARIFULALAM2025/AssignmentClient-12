const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sxgnyhx.mongodb.net/?appName=Cluster0`;
const dbName = process.env.DB_name
export const collection = {
    PRODUCTS: "products",
    Service: "service",
    Users: "users",
    ServiceData:"data"

}
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname)
}