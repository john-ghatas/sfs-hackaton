import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../helpers/translate";

const link = props => {
  const { url, text, type, style } = props;
  return (
    <Link
      to={url}
      style={{ ...style, color: "inherit", textDecoration: "none" }}
    >
      {<Translate text={text} type={type} />}
    </Link>
  );
};

export default link;
