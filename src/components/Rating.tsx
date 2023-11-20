import { FC } from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

type RatingPropsType = {
  rating: number;
};

const Rating: FC<RatingPropsType> = ({ rating }) => {
  return (
    <div className="flex">
      {rating < 0.5 && <IoStarOutline className="text-secondary" />}
      {rating > 0.5 && rating < 1 && (
        <IoStarHalfSharp className="text-secondary" />
      )}
      {rating >= 1 && <IoStar className="text-secondary" />}

      {rating < 1.5 && <IoStarOutline className="text-secondary" />}
      {rating > 1.5 && rating < 2 && (
        <IoStarHalfSharp className="text-secondary" />
      )}
      {rating >= 2 && <IoStar className="text-secondary" />}

      {rating < 2.5 && <IoStarOutline className="text-secondary" />}
      {rating > 2.5 && rating < 3 && (
        <IoStarHalfSharp className="text-secondary" />
      )}
      {rating >= 3 && <IoStar className="text-secondary" />}

      {rating < 3.5 && <IoStarOutline className="text-secondary" />}
      {rating > 3.5 && rating < 4 && (
        <IoStarHalfSharp className="text-secondary" />
      )}
      {rating >= 4 && <IoStar className="text-secondary" />}

      {rating < 4.5 && <IoStarOutline className="text-secondary" />}
      {rating > 4.5 && rating < 5 && (
        <IoStarHalfSharp className="text-secondary" />
      )}
      {rating === 5 && <IoStar className="text-secondary" />}
    </div>
  );
};
export default Rating;
