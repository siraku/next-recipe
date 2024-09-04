import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      {" "}
      <div> this page can not be found</div>{" "}
      <Link href={"/"}> Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
