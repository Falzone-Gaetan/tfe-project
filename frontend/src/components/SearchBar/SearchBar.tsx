import React, { FC } from 'react';
import { SearchBarContainer, SearchIcon, SearchInput } from './style';

export const SearchBar: FC = () => {
	return (
		<SearchBarContainer>
			<SearchIcon />
			<SearchInput
				type='text'
				placeholder='Rechercher...'
			/>
		</SearchBarContainer>
	);
};
