import PageTitle from "../PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div>
      <PageTitle title="Blogs" />
      <div className="border rounded-2xl my-10 p-10">
        <h2 className="text-4xl text-purple-600">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <hr className="my-5" />
        <h4 className="text-2xl">
          <span className="font-bold">Access tokens</span> are at token that
          applications use to make API requests on behalf of a user. The access
          token represents the authorization of some specific users to access
          specific parts of a users data. <br /> With providing the access token
          the authentication server also provides A valid{" "}
          <span className="font-bold">refresh token</span> which is then used to
          authenticate user after the access token has expired. Access tokens
          are only valid for a short period of time when they expire a refresh
          token can give the user continued access without having to sign in
          again. <br />
          The access tokens are some secret tokens which cannot be shown to
          everyone.It must be kept secretin the storage the only parties that
          should ever see the access token are the application itself the
          authorization server and resource server. The application should
          ensure the security of the access token and the access token is not
          accessible to other applications on the same device. The access token
          can only be used over HTTPS connections.
        </h4>
      </div>
      <div className="border rounded-2xl my-10 p-10">
        <h2 className="text-4xl  text-purple-600">
          Compare SQL and NoSQL databases?
        </h2>{" "}
        <hr className="my-5" />
        <h4 className="text-2xl">
          SQL Database are primarily called relational database Weather noSQL
          databases are primarily called non relational or distributed database.
          SQL is one of the most widely used options available which makes it a
          safe choice especially for great complex queries. But from other side,
          it can be restrictive. All your data must follow the same structure.
          On the other hand a no SQL database has a dynamic schema for
          unstructured data. Data is stored in many ways which means it can be
          document oriented, column oriented, graph based, organized as a key
          value store. This flexibility means that document can be created
          without having a defined structure first. Here each document can have
          its own unique structure.
        </h4>
      </div>
      <div className="border rounded-2xl my-10 p-10">
        <h2 className="text-4xl  text-purple-600">
          What is express js? What is Nest JS?
        </h2>
        <hr className="my-5" />
        <h4 className="text-2xl">
          Express is a flexible node JS framework that provides A robust set of
          features for building web and mobile applications. express is very
          popular among the developers Due to its simplicity and ease of use.
          Express is a lightweight framework. It does not have many
          dependencies, making it ideal for small projects. <br />
          NestJS is a progressive nodeJS framework for and reliable server side
          applications. It is built on top of express JS and more structured of
          building applications with typescript. Nest JS have several advantage
          over express. Nest js comes with several built-in features such as
          authentication, caching, and validation. This reduce the time required
          to build complex applications.
        </h4>
      </div>
      <div className="border rounded-2xl my-10 p-10">
        <h2 className="text-4xl  text-purple-600">
          What is MongoDB aggregate and how does it work?
        </h2>
        <hr className="my-5" />
        <h4 className="text-2xl">
          MongoDB is a database management system that allows you to store large
          amounts of data in documents that are held within larger structures
          known as collections. As with many other database systems, MongoDB
          allows you to perform a variety of aggregation operations.
          Aggregations operations process data records and return computed
          results. These allow you to process data records in a variety of ways,
          such as grouping data, sorting data into a specific order, or
          restructuring returned documents. mongodb provides three ways to
          perform aggregation- Aggregation pipeline, map-reduce function,
          single-purpose aggregation.
        </h4>
      </div>
    </div>
  );
};

export default Blogs;
