import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="xl box-border p-2.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </>
  );
};

export default Container;
