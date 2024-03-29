import { ChevronUp } from "lucide-react";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollToTopButton() {
  return (
    <div>
      <ScrollToTop
        svgPath=""
        className=" !bg-secondary !rounded-none !text-white flex items-center justify-center hover:!bg-primary !transition-all !duration-300 !border-[1px]  hover:!border-[1px] hover:!border-solid hover:!border-textbutton hover:!text-textbutton"
        smooth
        component={<ChevronUp />}
      ></ScrollToTop>
    </div>
  );
}
