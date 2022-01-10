import { LinkTab } from "../Components/Navigation/AppBar/Tabs/Link";
import { TabsData } from "./Config/TabsData";

export default function AllLinkTabs() {
  let newTabs = TabsData.map((tabDataElement) => {
    return <LinkTab label={tabDataElement.title} href={tabDataElement.href} />;
  });
  return newTabs;
}
