import swimmingImg from "../../assets/swimming.png";
import classImg from '../../assets/class.png'
import playgroundImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="space-y-5 bg-base-200 p-4">
      <h3 className="text-xl font-semibold leading-[30px] text-primary">
        Q-Zone
      </h3>
      <div className=" flex flex-col justify-center items-center space-y-5">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
