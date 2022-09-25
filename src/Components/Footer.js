import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        {/* <a
          className="font-medium"
          href="www.linkedin.com/in/mayur-limbhore-9448b121a"
          target="_blank"
          rel="noreferrer noopener"
        > */}
          Mayur Limbhore    with
        {/* </a>{" "} */}
     
        <span className="text-gradient font-medium"> ReactJs</span> 
        {/* <span className="text-gradient font-medium"> Coffee</span> */}
      </p>
    </footer>
  );
}
export default Footer;
