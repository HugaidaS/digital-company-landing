import Tab from "@mui/material/Tab";

export const LinkTab = (props: any) => {
  console.log(props.href);
  return <Tab component="a" {...props} />;
};
