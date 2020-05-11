import React from "react";
import { Link } from "react-router-dom";

import style from "./NotFoundPage.module.css";

const NotFoundPage = () => (
  <div className={style.wrap}>
    <p className={style.text}>404</p>
    <Link to="/" className={style.link}>
      Go to Home{" "}
    </Link>
  </div>
);

export default NotFoundPage;
