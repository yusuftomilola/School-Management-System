import { Link } from "react-router-dom";

const Breadcrumbs = ({
  title1,
  url1,
  title2,
  url2,
  title3,
  url3,
  title4,
  url4,
}) => {
  return (
    <div className="text-[#6B778C] text-[12px] font-semibold">
      <Link to="/dashboard">Home</Link>
      {title1 && url1 ? (
        <>
          {" "}
          / <Link to={url1}>{title1}</Link>
        </>
      ) : title1 ? (
        <> {` / ${title1}`}</>
      ) : null}
      {title2 && url2 ? (
        <>
          {" "}
          / <Link to={url2}>{title2}</Link>
        </>
      ) : title2 ? (
        <> {` / ${title2}`}</>
      ) : null}
      {title3 && url3 ? (
        <>
          {" "}
          / <Link to={url3}>{title3}</Link>
        </>
      ) : title3 ? (
        <> {` / ${title3}`}</>
      ) : null}
      {title4 && url4 ? (
        <>
          {" "}
          / <Link to={url4}>{title4}</Link>
        </>
      ) : title4 ? (
        <> {` / ${title4}`}</>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
