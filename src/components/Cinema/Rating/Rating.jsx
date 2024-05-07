import star from "../../../assets/star.svg";

const Rating = ({ value }) => {
  const starts = Array(value).fill(star);

  return (
    <>
      {starts.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star"></img>
      ))}
    </>
  );
};

export default Rating;
