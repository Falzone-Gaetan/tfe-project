import React, { FC } from 'react';
import {
	CategoryIcon,
	CategoryTitle,
	ContainerList,
	H2SubTitle,
	LinkItem,
	ListItem,
} from './style';
import { AiOutlineFileText } from 'react-icons/ai';

export const CategoryList: FC = () => {
	return (
		<>
			<H2SubTitle>Categories</H2SubTitle>
			<ContainerList>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						<CategoryTitle>Snack</CategoryTitle>
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
				<ListItem>
					<LinkItem to='/myrecipes'>
						<CategoryIcon>
							<AiOutlineFileText />
						</CategoryIcon>
						Snack
					</LinkItem>
				</ListItem>
			</ContainerList>
		</>
	);
};
