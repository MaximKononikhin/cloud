import React from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../modules/MainLayout/components';

const Main = () => {
  return (
		<MainLayout>
			<div>
				Main
				<Link to="/catalog">Каталог</Link>
			</div>
		</MainLayout>
  )
}

export default Main
