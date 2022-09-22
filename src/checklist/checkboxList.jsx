import React, { memo, useCallback, useState } from "react";
import Checkbox from "../checkbox/checkbox";
import "./styles.scss";

function CheckboxList({ listItems, selectedItems, onChange }) {
  const [selected, setSelected] = useState(selectedItems);

  const onChangeItem = useCallback(
    (e) => {
      const value = e.target.value;
      const newSelected = selected.includes(value)
        ? selected.filter((selectedValue) => value !== selectedValue)
        : [...selected, value];

      setSelected(newSelected);

      if (onChange) {
        onChange(newSelected);
      }
    },
    [onChange, selected]
  );

  const renderListItem = useCallback(
    ({ id, ...item }, idx) => {
      console.log(selected);
      return (
        <li
          key={id ?? idx}
          className={`${
            selected.includes(item.value)
              ? " CheckboxList__listItem CheckboxList__listItem--selected"
              : "CheckboxList__listItem"
          }`}
        >
          <Checkbox
            id={id ?? idx}
            {...item}
            checked={selected.includes(item.value)}
            onChange={onChangeItem}
          />
        </li>
      );
    },
    [selected, onChangeItem]
  );

  return <ul className="CheckboxList">{listItems.map(renderListItem)}</ul>;
}

export default memo(CheckboxList);
