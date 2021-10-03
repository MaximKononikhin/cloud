import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFile } from '../common/types';
import File from '../modules/File/components';
import ListHeading from '../modules/ListHeading/components';

import MainLayout from '../modules/MainLayout/components';
import { IState } from '../store';
import { fetchFiles } from '../store/actions/file';
import { getAllFiles } from '../store/selectors/file';

const fileListStyle = `
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	flex-wrap: wrap;
`

const Main = () => {
	const dispatch = useDispatch();
	const files = useSelector<IState, IFile[]>((state) => getAllFiles(state, {}));
	console.log(files);

    useEffect(() => {

        fetchFiles()(dispatch);
		
    }, []);

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
