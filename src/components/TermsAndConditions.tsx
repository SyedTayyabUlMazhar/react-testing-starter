import { useState } from "react";

type TermsAndConditionsProps = {
  onSubmitPress?: () => void;
};
const TermsAndConditions = (props: TermsAndConditionsProps) => {
  const { onSubmitPress } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1>Terms & Conditions</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
        delectus.
      </p>
      <div className="pb-3">
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-1"
          />
          I accept the terms and conditions.
        </label>
      </div>
      <button disabled={!isChecked} className="btn" onClick={onSubmitPress}>
        Submit
      </button>
    </div>
  );
};

export default TermsAndConditions;
