import React from 'react';
import { TextInput, TextInputProps } from '../TextInput';
interface SearchInputProps extends TextInputProps {}
export const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  return (
    <TextInput
      {...props}
      iconProps={{
        position: 'right',
        icon: 'search',
      }}
      autoComplete="search"
      type="search"
    />
  );
};

SearchInput.displayName = 'SearchInput';
