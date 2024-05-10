import leftAngle from "../../assets/images/icon-angle-left.svg";
import rightAngle from "../../assets/images/icon-angle-right.svg";

function ImageSwapButton({
  handlePreviousImage,
  handleNextImage,
}: {
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}) {
  return (
    <div className="flex h-[56px] w-[112px] bg-black md:h-[80px] md:w-[28.4%]">
      <button
        type="button"
        onClick={handlePreviousImage}
        className="flex flex-1 items-center justify-center"
      >
        <img src={leftAngle} alt="previous product" />
      </button>
      <button
        type="button"
        onClick={handleNextImage}
        className="flex flex-1 items-center justify-center"
      >
        <img src={rightAngle} alt="next product" />
      </button>
    </div>
  );
}

export default ImageSwapButton;
