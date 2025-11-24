import { format, isWithinInterval } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[471px] " src={logo} />
      <p className="text-accent text-[18px] leading-[30px] ">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[20px] font-medium text-accent ">
        {" "}
        <span className="text-primary">
          {format(new Date(), "iiii,")}
        </span>{" "}
        {format(new Date(), "MMMM d, yyyy")}{" "}
      </p>
    </div>
  );
};

export default Header;
