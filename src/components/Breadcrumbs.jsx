import React from "react";

const Breadcrumbs = (props) => {
  const { title1, title2, title3 } = props;
  return (
    <>
      <div className="text-[#6B778C] text-[12px] font-semibold">
        Home {title1 && ` / ${title1}`}
        {title2 && ` / ${title2}`}
        {title3 && ` / ${title3}`}

      </div>
      
    </>
  );
};

export default Breadcrumbs;
