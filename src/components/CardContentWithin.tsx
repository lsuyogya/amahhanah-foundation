import { Link } from "@tanstack/react-router";
import cardStyles from "../styles/modules/card.module.scss";
const CardContentWithin = ({
  imgUrl = "",
  title = "Lorem ipsum dolor sit amet.",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  btnUrl = "/",
  btnLabel = "See More",
}) => {
  return (
    <div className={cardStyles.cardContentWithin}>
      <img src={imgUrl} alt="" />
      <div className={cardStyles.txtWrapper}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={btnUrl}>
          <button className="btnLight">{btnLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default CardContentWithin;
