import leftAngle from "../../assets/images/icon-angle-left.svg";
import rightAngle from "../../assets/images/icon-angle-right.svg";

function Button({
  handleClick,
  img,
  altText,
}: {
  handleClick: () => void;
  img: string;
  altText: string;
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-1 items-center justify-center hover:bg-userVeryDarkGray focus:outline-orange-500"
    >
      <img src={img} alt={altText} />
    </button>
  );
}

function ImageSwapButton({
  handlePreviousImage,
  handleNextImage,
}: {
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}) {
  return (
    <div className="flex h-[56px] w-[112px] bg-black md:h-[80px] md:w-[28.4%]">
      <Button
        img={leftAngle}
        altText="previous product"
        handleClick={handlePreviousImage}
      />
      <Button
        img={rightAngle}
        altText="next product"
        handleClick={handleNextImage}
      />
    </div>
  );
}

export default ImageSwapButton;
