import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFile } from '../common/types';
import File from '../modules/File/components';
import ListHeading from '../modules/ListHeading/components';

import MainLayout from '../modules/MainLayout/components';
import { IState } from '../store';
import { fetchFilesAction } from '../store/actions/file';
import { getAllFiles, getCurrentDir } from '../store/selectors/file';

const fileListStyle = `
	display: grid;
	grid-template-columns: repeat(5, 170px);
	grid-gap: 30px;
`

const Main = () => {
	const files = useSelector<IState, any[]>((state) => getAllFiles(state, {}));
	const filesContent = files.map((file) => <File key={file._id} file={file} />)

	return (
			<MainLayout maxHeight={851}>
				<ListHeading />
				<div css={css(fileListStyle)}>
					{filesContent}
				</div>
			</MainLayout>
	)
}

export default Main
