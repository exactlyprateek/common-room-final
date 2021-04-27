import { Box, Center} from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import NavBar from '../Header';

const Post = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div className="bg-col">
      <title>Common Room</title>
			<NavBar />
			<Center>
				<Box>Profile: {pid}</Box>
			</Center>
		</div>
	);
};

export default Post;
