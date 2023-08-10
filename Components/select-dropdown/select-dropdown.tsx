import { useRef, useState, useEffect } from 'react';
import { ArrowUpIcon } from 'Icons/ArrowUpIcon';
import { useClickOutside } from 'Hooks/useClickOutside';
import { SDWrapper, SDLabel, ImageWrapper, SDListWrapper, SDList, SDListItem } from './select-dropdown-styles';

type OptionType = { label: string; value: string };
type SelectProps = {
  selectedValue?: string;
  options: OptionType[];
  placeholder?: string;
  onSelectCallback: (value: string) => void;
};

function SelectDropdown({ selectedValue, options, placeholder, onSelectCallback }: SelectProps) {
  const scrollToRef = useRef<HTMLLIElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => setIsDropdownOpen(false);
  const onDropdownClickHandler = () => setIsDropdownOpen((prevValue) => !prevValue);
  const onDropdownListItemClickHandler = (item: string) => onSelectCallback(item);
  const getSelectedOption = () => options.find(({ value }) => value === selectedValue);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeDropdown);

  useEffect(() => {
    if (isDropdownOpen && scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center',
      });
    }
  }, [isDropdownOpen]);

  return (
    <SDWrapper
      ref={wrapperRef}
      onClick={onDropdownClickHandler}
      $active={isDropdownOpen}
    >
      <SDLabel>
        {getSelectedOption()?.label || placeholder}

        <ImageWrapper $active={isDropdownOpen}>
          <ArrowUpIcon />
        </ImageWrapper>
      </SDLabel>

      {isDropdownOpen && (
        <SDListWrapper>
          <SDList>
            {options.map(({ label, value }) => (
              <SDListItem
                ref={value === selectedValue ? scrollToRef : undefined}
                key={value}
                onClick={() => onDropdownListItemClickHandler(value)}
                $active={value === selectedValue}
              >
                {label}
              </SDListItem>
            ))}
          </SDList>
        </SDListWrapper>
      )}
    </SDWrapper>
  );
}

SelectDropdown.defaultProps = {
  selectedValue: undefined,
  placeholder: 'Please Select',
};

export { SelectDropdown };
