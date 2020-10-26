/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelect } from 'downshift';
import { inputStyled, dropdownStyled } from '../styles/styles';
import { Button } from '../stories/button/Button';
import illustration from '../stories/assets/illustration.svg';
import caretIcon from '../stories/assets/caret.svg';

const genderOptions = ['Male', 'Female', 'Other', "Don't Specify"];

const responsive = css`
  @media (max-width: 990px) {
    > div:nth-of-type(1) {
      display: none;
    }
    > form {
      grid-column: 1/-1;
    }
    > div:nth-of-type(3) {
      grid-column: 1/-1;
    }
  }
  @media (max-width: 650px) {
    > form > div:last-of-type {
      flex-direction: column-reverse;
      align-items: flex-start;
      margin: 3em 0;

      > p {
        margin: 1em 0;
      }
    }
  }
  @media (max-width: 650px) {
    margin-left: 1em;
  }
`;
const formStyles = css`
  input {
    ${inputStyled}
    margin: 0.5em 0;
    margin-right: 0.8em;
    height: 49px;
  }

  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-template-rows: 1fr 0.3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 5em;
  > div:nth-of-type(1) {
    grid-area: 1 / 2 / 3 / 3;
    padding: 5em;
    margin: 0 3em;
    background: #f4f5f7 0% 0% no-repeat padding-box;
    width: 30em;
    height: 27.7rem;
    > img {
      width: 100%;
      height: auto;
    }
  }
  > form {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    // submit container
    > div:last-of-type {
      grid-area: 2 / 1 / 3 / 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1.5em;
      > button {
        margin-right: 2em;
        padding: 0 2em;
      }
      > p {
        font: italic normal normal 14px/21px Inter;
        letter-spacing: 0px;
        color: #b7b7b7;
      }
    }
  }
  // error message
  > p {
    color: red;
  }

  // Responsive
  ${responsive}
`;

const dropdownStyles = css`
  ${dropdownStyled}
  margin-right: 1.1em;
`;

const headingStyles = css`
  margin-left: 5em;
  > h3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-20) /
      var(--unnamed-line-spacing-30) var(--unnamed-font-family-inter);
    color: #555555;
    margin-bottom: 0.5em;
  }
  > h4 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-12) /
      var(--unnamed-line-spacing-15) var(--unnamed-font-family-inter);
    color: var(--unnamed-color-858585);
    color: #858585;
    margin-bottom: 2em;
    > strong {
      color: #555555;
    }
  }
  > p {
    color: #555555;
    margin-bottom: 0.5em;
  }
`;

const ReferralForm: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: genderOptions });

  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = (data: unknown) => {
    console.log(data);
    reset();
  };

  function generateErrorText(errors: any) {
    if (errors.Name) {
      switch (errors.Name.type) {
        case 'required':
          return 'Name is required.';
        case 'pattern':
          return 'Please check the Name.';
        default:
          break;
      }
    }
    if (errors.Email) {
      switch (errors.Email.type) {
        case 'required':
          return 'Email is required.';
        case 'pattern':
          return 'Please check the email.';
        default:
          break;
      }
    }
    return '';
  }

  function onButtonClick() {
    const errorText = generateErrorText(errors);
    setErrorMessage(errorText);
  }

  return (
    <section>
      <div css={headingStyles}>
        <h3>Refer and Earn</h3>
        <h4>
          Add your refferel and earn <strong>5$</strong> after they sign up.
        </h4>
        <p className="text-14-medium-none">Basic Information</p>
      </div>
      <div css={formStyles}>
        <div>
          <img src={illustration} alt="illustration" />
        </div>
        <p className="text-12-normal-none">{errorMessage}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            ref={register({ required: true })}
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="Phone number"
            ref={register({ maxLength: 12 })}
          />
          <div css={dropdownStyles}>
            <div>
              {isOpen ? (
                <div>
                  <label {...getLabelProps()}>Gender</label>
                  <p>Select Item...</p>
                </div>
              ) : (
                <label {...getLabelProps()}>{selectedItem || 'Gender'}</label>
              )}
              <button type="button" {...getToggleButtonProps()}></button>
              <img src={caretIcon} alt="down arrow" />
            </div>
            <ul {...getMenuProps()}>
              {isOpen &&
                genderOptions.map((item, index) => (
                  <li
                    style={
                      highlightedIndex === index
                        ? { backgroundColor: '#bde4ff' }
                        : {}
                    }
                    key={`${item}${index}`}
                    {...getItemProps({ item, index })}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            ref={register}
          />
          <input
            type="text"
            placeholder="Apt/Suite/Other"
            name="Apt/Suite/Other"
            ref={register}
          />
          <div>
            <p>
              By clicking on Refer you agree to all the terms and conditions.
            </p>
            <Button
              label="refer"
              primary={false}
              type="submit"
              onClick={() => onButtonClick()}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReferralForm;
