import ProjectItem from "./ProjectItem";
import tradekia from "../public/assets/projects/tradekia.png";
import tradekiaapp from "../public/assets/projects/tradkiyaapp.png";
import bistro from "../public/assets/office/cwtoffer.png";
import fufi from "../public/assets/projects/fufi.png";
import fufiedge from "../public/assets/projects/fufiedge.png";
import offerKOL from "../public/assets/office/OfferKOL.png";
import offerBang from "../public/assets/office/OfferBang.png";
import bigbankexchange from "../public/assets/projects/bigbankexchange.png";
import bigbank from "../public/assets/projects/bigbankapp.png";
import homeland from "../public/assets/projects/homeland.png";
import expletter from "../public/assets/office/ExpFuFi.png";
import cwt3y from "../public/assets/office/CWTimage.jpg";
import cwtpvr from "../public/assets/office/pvrcwt.jpg";
import holifufi from "../public/assets/office/holifufi.jpg";
import cwtexp from "../public/assets/office/CwtExp.png";
import Image from "next/image";

const Offers = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-2">
        <p className=" py-4 font-semibold text-lg  md:text-2xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          Experience & Offer Letter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectItem
            title="Future Finance "
            backgroundImg={expletter}
            projectUrl="/offers/fufiexp"
            tech="More then 2 year"
          />
          <ProjectItem
            title="CodingWebTech"
            backgroundImg={cwtexp}
            projectUrl="/offers/cwtexp"
            tech="Experiance letter"
          />
          <ProjectItem
            title="CodingWebTech"
            backgroundImg={bistro}
            projectUrl="/offers/CWT"
            tech="Current Offer Letter"
          />
          <ProjectItem
            title="Offer Letter"
            backgroundImg={offerBang}
            projectUrl="/offers/offerbang"
            tech="FullStack Developer"
          />
          <ProjectItem
            title="Offer Letter"
            backgroundImg={offerKOL}
            projectUrl="/offers/offerK"
            tech="FullStack Developer"
          />

          <ProjectItem
            title="Your Next..."
            // backgroundImg={offerBang}
            projectUrl="/dashboard/resume"
            tech="Your Offer..."
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
