import {
	ExplorerItem,
	getExplorerItemData,
	getItemFilePath,
	getItemObject,
	isPath,
	useLibraryQuery
} from '@sd/client';
import React from 'react';
import { Alert, Pressable, View, ViewStyle } from 'react-native';
import { InfoPill, PlaceholderPill } from '~/components/primitive/InfoPill';
import { tw, twStyle } from '~/lib/tailwind';

type Props = {
	data: ExplorerItem;
	style?: ViewStyle;
};

const InfoTagPills = ({ data, style }: Props) => {
	const objectData = getItemObject(data);
	const filePath = getItemFilePath(data);

	const tagsQuery = useLibraryQuery(['tags.getForObject', objectData?.id ?? -1], {
		enabled: objectData != null
	});
	const items = tagsQuery.data;

	const isDir = data && isPath(data) ? data.item.is_dir : false;

	return (
		<View style={twStyle('mt-1 flex flex-row flex-wrap', style)}>
			{/* Kind */}
			<InfoPill containerStyle={tw`mr-1`} text={isDir ? 'Folder' : getExplorerItemData(data).kind} />
			{/* Extension */}
			{filePath?.extension && (
				<InfoPill text={filePath.extension} containerStyle={tw`mr-1`} />
			)}
			{/* TODO: What happens if I have too many? */}
			{items?.map((tag) => (
				<InfoPill
					key={tag.id}
					text={tag.name ?? 'Unnamed Tag'}
					containerStyle={twStyle('mr-1', { backgroundColor: tag.color + 'CC' })}
					textStyle={tw`text-white`}
				/>
			))}
			<Pressable onPress={() => Alert.alert('TODO')}>
				<PlaceholderPill text={'Add Tag'} />
			</Pressable>
		</View>
	);
};

export default InfoTagPills;
