import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./styles.scss";
import chevron from "../img/chevron.svg";

import CheckboxList from "../checklist/checkboxList";

function Dropdown({
  placeholder = "",
  isOpen: isOpenProps,
  dropdownId,
  items,
  selectedItems = [],
  disabled,
  label,
  helpText,
  multiple = false,
  error,
  onDropdownToggle,
  onChange,
  selectedValuesFormat,
}) {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const [isOpen, setIsOpen] = useState(isOpenProps || false);
  const [selected, setSelected] = useState(selectedItems);

  const CheckboxListItems = useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        value: item.value,
        label: item.value,
        disabled: item.disabled,
      })),
    [items]
  );

  /** Keep in sync with parent */
  useEffect(() => {
    setIsOpen(Boolean(isOpenProps));
  }, [isOpenProps]);

  //this use effect handle the auto close logic when the user clicks outside the component region
  useEffect(() => {
    const eventHandler = (event) => {
      if (
        !buttonRef.current?.contains(event.target) &&
        !contentRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
        // Notify parent
        onDropdownToggle && onDropdownToggle(false);
      }
    };
    window.addEventListener("mousedown", eventHandler);

    return () => {
      window.removeEventListener("mousedown", eventHandler);
    };
  }, [onDropdownToggle]);

  const buttonLabel = useMemo(() => {
    if (selectedValuesFormat) {
      return selectedValuesFormat(items.map((item) => item.value));
    }

    switch (selected.length) {
      case 0:
        return placeholder;
      case 1:
        return selected[0];
      default:
        return `${selected[0]} (${selected.length - 1})`;
    }
  }, [selected, selectedValuesFormat, placeholder, items]);

  const onToggle = useCallback(() => {
    setIsOpen((open) => !open);

    if (onDropdownToggle) {
      onDropdownToggle(!isOpen);
    }
  }, [isOpen, onDropdownToggle]);

  const handleChange = useCallback(
    (value) => {
      const newValue = multiple ? value : [value];

      setSelected(newValue);
      onChange && onChange(newValue);
    },
    [onChange, multiple]
  );

  return (
    <div className={"Dropdown"}>
      <div className={"Dropdown__buttonWrapper"}>
        {label && (
          <label htmlFor={`button-${dropdownId}`} className={"Dropdown__label"}>
            {buttonLabel}
          </label>
        )}
        <button
          id={`button-${dropdownId}`}
          placeholder={placeholder}
          disabled={disabled}
          onClick={onToggle}
          aria-haspopup={"menu"}
          aria-expanded={isOpen || isOpenProps || undefined}
          ref={buttonRef}
          className={"Dropdown__button"}
        >
          {buttonLabel}
          <img
            src={chevron}
            alt="chevron"
            className={`${isOpen ? "icon" : " icon--open"}`}
          />
        </button>

        {helpText && <small className="Dropdown__helpText">{helpText}</small>}
      </div>
      {isOpen && (
        <div
          id={`menu-${dropdownId}`}
          ref={contentRef}
          className={"Dropdown__contentArea"}
        >
          <CheckboxList
            listItems={CheckboxListItems}
            onChange={handleChange}
            selectedItems={selected}
          />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
