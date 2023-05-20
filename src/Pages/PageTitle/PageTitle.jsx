import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>Hero Dungeon | {title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
