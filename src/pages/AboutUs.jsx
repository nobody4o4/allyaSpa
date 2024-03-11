import Desc from "../components/AboutUs/Desc.AboutUs";
import Feature from "../components/AboutUs/FeaturesGrid.AboutUs";
import { getAboutUs } from "../endpoint/services.endpoint";
import FetchMain from "../services/fetchMain.service";
import Faq from "./faq";

function AboutUs() {
  const features = [
    {
      title: "The quick fox",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Leverage agile",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
    {
      title: "Organically grow",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Have a good one",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
    {
      title: "Trough pomfret",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Disrupt inspire",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
  ];

  const { data } = FetchMain(getAboutUs);

  console.log(data);
  return (
    <div className="">
      <Desc {...data} />
      <Feature features={features} />
    </div>
  );
}
export default AboutUs;
