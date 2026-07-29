import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";

const Logo = () => {
    return (
        <div className="flex items-center justify-start gap-[2px]">
            <LazyImage src={CONSTANTS.logo} alt={"Blackconversa"} className="w-[30px] h-[30px] bg-contain bg-end bg-no-repeat " />
            <span className="font-bold text-[30px] text-gray-50">DEV</span>
        </div>
    );


}

export default Logo;