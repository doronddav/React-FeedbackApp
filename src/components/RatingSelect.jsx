import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(Number(e.target.value));
    select(Number(e.target.value));
  };

  return (
    <ul className="rating">
      {" "}
      {[...Array(10)].map((el, index) => {
        return (
          <li key={`rating-${index}`}>
            {" "}
            <input
              type="radio"
              id={`num${index + 1}`}
              name="rating"
              value={index + 1}
              onChange={handleChange}
              checked={selected === index + 1}
            />{" "}
            <label htmlFor={`num${index + 1}`}>{index + 1}</label>{" "}
          </li>
        );
      })}{" "}
    </ul>
  );
}

export default RatingSelect;
