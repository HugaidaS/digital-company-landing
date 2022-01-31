import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import AllLinkTabs from "../../../../App/Hoc/LinkTabsHoc";
import { getOffset } from "../../../../App/Utils/offset";

const NavTabs = () => {
  const [currentPage, setCurrentPage] = React.useState(-1);

  React.useEffect(() => {
    let aboutSection = document.getElementById("about");
    let docsvision = document.getElementById("docsvision");
    // let solutions = document.getElementById("solutions");
    let contacts = document.getElementById("contacts");

    let aboutSectionPosition = getOffset(aboutSection);
    let docsvisionSectionPosition = getOffset(docsvision);
    // let solutionsSectionPosition = getOffset(solutions);
    let contactsSectionPosition = getOffset(contacts);

    function listenScroll(e: WheelEvent | any) {
      if (
        e.currentTarget.scrollY >= aboutSectionPosition.top &&
        e.currentTarget.scrollY < docsvisionSectionPosition.top
      ) {
        currentPage !== 0 && setCurrentPage(0);
      }
      if (
        e.currentTarget.scrollY >= docsvisionSectionPosition.top &&
        e.currentTarget.scrollY < contactsSectionPosition.top
      ) {
        currentPage !== 1 && setCurrentPage(1);
      }
      if (e.currentTarget.scrollY >= contactsSectionPosition.top) {
        currentPage !== 2 && setCurrentPage(2);
      }
      if (e.currentTarget.scrollY === 0) {
        setCurrentPage(-1);
      }
    }

    window.addEventListener("scroll", listenScroll);

    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, [currentPage]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentPage(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentPage}
        onChange={handleChange}
        aria-label="nav tabs"
        textColor="primary"
        indicatorColor="secondary"
      >
        {AllLinkTabs()}
      </Tabs>
    </Box>
  );
};

export default NavTabs;
