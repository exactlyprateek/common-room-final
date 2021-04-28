import React, { useState, useEffect } from 'react';
import {
	Container,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Tab,
	VStack,
	StackDivider,
	
	Center,
	Skeleton,
} from '@chakra-ui/react';
import Header from './Header';
import Post from './post';
import axios from 'axios';

function Home() {
	const [ home, setHome ] = useState([]);
	const [ popular, setPopular ] = useState([]);
	const [ loadingPopular, setLoadingPopular ] = useState(true);
	const [ loadingHome, setLoadingHome ] = useState(true);

	useEffect(() => {
		axios
			.get('/api/home')
			.then((res) => {
				setHome(res.data);
				console.log(res.data);
				setLoadingHome(false);
			})
			.then(() => {
				console.log('loading:' + loadingHome);
			})
			.catch((err) => {
				console.log(err);
				setLoadingHome(false);
			});
		axios
			.get('/api/popular')
			.then((res) => {
				setPopular(res.data);
				console.log(res.data);
				setLoadingPopular(false);
			})
			.then(() => {
				console.log('loading:' + loadingPopular);
			})
			.catch((err) => {
				console.log(err);
				setLoadingPopular(false);
			});
	}, []);



	return (
		<div className="bg-col">
			<link rel="icon" src="/favicon.ico" />

			<title>Common Room</title>
			<Header />
			<Container maxW="container.lg" p="0">
				<Tabs isFitted variant="soft-rounded" colorScheme="primary">
					<Center>
						<TabList mb="1" >
							<Tab rounded="full" mr="1">Home</Tab>
							<Tab rounded="full" ml="1">Popular</Tab>
						</TabList>
					</Center>

					<TabPanels>
						<TabPanel p="0">
							<Skeleton isLoaded={!loadingHome}>
								{' '}
								<VStack
									divider={<StackDivider borderColor="transparent" />}
									spacing={1}
									align="center"
									maxH="83vh"
									overflow="scroll"
									style={{ scrollbarWidth: 'none' }}
								>
									{home.map((i, idx) => (
										<Post
											key={idx}
											user={i.user}
											caption={i.caption}
											likes={i.likes}
											comments={i.comments}
											location={i.location}
											avatar={i.avatar}
											tag={i.tag}
										/>
									))}
								</VStack>
							</Skeleton>
						</TabPanel>
						<TabPanel p="0">
							<Skeleton isLoaded={!loadingPopular}>
								<VStack
									divider={<StackDivider borderColor="transparent" />}
									spacing={1}
									align="center"
									maxH="83vh"
									overflow="scroll"
									style={{ scrollbarWidth: 'none' }}
								>
									{popular.map((i, idx) => (
										<Post
											key={idx}
											user={i.user}
											caption={i.caption}
											comments={i.comments}
											likes={i.likes}
											location={i.location}
											avatar={i.avatar}
											tag={i.tag}
										/>
									))}
								</VStack>
							</Skeleton>
						</TabPanel>
						{/* <TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								<iframe
									id="inlineFrameExample"
									title="Inline Frame Example"
									width="100%"
									style={{ height: '533px' }}
									src="https://noteshub.co.in/"
								/>
								<Link href="https://drive.google.com/drive/u/0/folders/1KLCgyP1-nFmVa-Sv0UYWLHh8Og1gIGgE">
									drive
								</Link>
							</VStack>
						</TabPanel>
						<TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								<iframe
									id="inlineFrameExample"
									title="Inline Frame Example"
									width="100%"
									style={{ height: '533px' }}
									src="https://ipuranklist.com/search-by-name"
								/>
							</VStack>
						</TabPanel>
						<TabPanel>
							<VStack
								divider={<StackDivider borderColor="gray.100" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
							>
								<Text fontSize="2xl">Room</Text>
								<Box h="533px">
									<Center>
										<Text size="lg">Coming Soon</Text>
									</Center>
								</Box>
							</VStack>
						</TabPanel> */}
					</TabPanels>
				</Tabs>
			</Container>
		</div>
	);
}

export default Home;
