import React, { memo, useEffect, useCallback, useState, useMemo } from "react";

import "./styles.scss";

function Checkbox({
  onChange,
  isLabelHidden = false,
  label,
  id,
  checked,
  ...inputProps //input normal props
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const onChangeInput = useCallback(
    (e) => {
      const checkedValue = e.currentTarget.checked;

      setIsChecked(checkedValue);

      if (!onChange) {
        return;
      }

      onChange(e);
    },
    [onChange, setIsChecked]
  );

  useEffect(() => {
    if (checked === undefined) {
      return;
    }

    setIsChecked(checked);
  }, [checked]);

  const ariaLabelText = useMemo(() => {
    if (!isLabelHidden) {
      return inputProps["aria-label"];
    }
    return inputProps["aria-label"] ? inputProps["aria-label"] : label;
  }, [inputProps, isLabelHidden, label]);

  const inputElement = useMemo(
    () => (
      <input
        {...inputProps}
        id={id}
        aria-label={ariaLabelText}
        type="checkbox"
        className={"Checkbox__input"}
        onChange={onChangeInput}
        checked={isChecked}
      />
    ),
    [ariaLabelText, id, inputProps, isChecked, onChangeInput]
  );

  return (
    <div className={"Checkbox"}>
      {!isLabelHidden ? (
        <label htmlFor={id} className={"Checkbox__label"}>
          {inputElement}
          {label}
        </label>
      ) : (
        inputElement
      )}
    </div>
  );
}

export default memo(Checkbox);
