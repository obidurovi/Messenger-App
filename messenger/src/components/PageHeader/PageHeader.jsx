import React from "react";
import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default PageHeader;
