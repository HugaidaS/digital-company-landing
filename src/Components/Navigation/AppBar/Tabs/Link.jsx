import Tab from "@mui/material/Tab";

export const LinkTab = (props) => {
  console.log(props.href);
  return <Tab component="a" {...props} />;
};
