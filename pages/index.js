import React from 'react';
import {
	Container,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Tab,
	VStack,
	StackDivider,
	Button,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	Drawer,
	DrawerHeader,
	useDisclosure
} from '@chakra-ui/react';
import Header from './Header';

import Post from './post';

function Home() {
	const body = [
		{
			avatar: '10',
			user: 'prakriti',
			caption: 'lmao xd happy holi dsfsf fs fs fd  sd sdfsd fds fs dsfd fsd fsdfds fsf s d fsd',
			likes: '34',
			comments: '18',
			location: '1',
			tag: 'environment'
		},
		{
			avatar: '11',
			user: 'octave',
			caption: 'lmao xd happy holi',
			likes: '26',
			comments: '13',
			location: '20',
			tag: 'music'
		},
		{
			avatar: '12',
			user: 'adventure_club',
			caption: 'lmao xd happy holi',
			likes: '84',
			comments: '34',
			location: '34',
			tag: 'travel'
		},
		{
			avatar: '13',
			user: 'techsoc',
			caption: 'lmao xd happy holi',
			likes: '24',
			comments: '12',
			location: '48',
			tag: 'tech'
		}
	];
	const body2 = [
		{
			avatar: '14',
			user: 'second',
			caption: 'find me',
			likes: '56',
			comments: '12',
			location: '55',
			tag: 'tag1'
		},
		{
			avatar: '15',
			user: 'well welll wellw khisid',
			caption: 'lmao xd happy holi',
			likes: '13',
			comments: '24',
			location: '67',
			tag: 'tah2'
		},
		{
			avatar: '16',
			user: 'third',
			caption: 'lmao xd happy holi',
			likes: '22',
			comments: '0',
			location: '73',
			tag: 'tah2'
		},
		{
			avatar: '17',
			user: 'fourth',
			caption: 'lmao xd happy holi',
			likes: '26',
			comments: '6',
			location: '86',
			tag: 'travel'
		},
		{
			avatar: '18',
			user: 'techsoc',
			caption: 'lmao xd happy holi',
			likes: '16',
			comments: '10',
			location: '94',
			tag: 'tech'
		}
	];

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className="bg-col">
			<link rel="icon" src="/favicon.ico" />

			<title>Common Room</title>
			<Header />
			<Container maxW="container.lg" p="0">
				<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader borderBottomWidth="1px">Nav</DrawerHeader>
						<DrawerBody p="0" m="0">
							<VStack spacing={0}>
								{[ 'Result', 'Notes', 'Common Room', 'lmao' ].map((i, idx) => (
									<Button
										key={idx}
										rounded="none"
										
										w="100%"
										style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
									>
										{i}
									</Button>
								))}
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<Tabs variant="enclosed">
					<TabList mb="0">
						<Tab rounded="none">Home</Tab>
						<Tab rounded="none">Popular</Tab>
						<Button onClick={onOpen} rounded="none">
							Open Drawer
						</Button>
					</TabList>
					<TabPanels>
						<TabPanel p="0">
							<VStack
								divider={<StackDivider borderColor="transparent" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
								style={{ scrollbarWidth: 'none' }}
							>
								{body.map((i, idx) => (
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
						</TabPanel>
						<TabPanel p="0">
							<VStack
								divider={<StackDivider borderColor="transparent" />}
								spacing={1}
								align="center"
								maxH="83vh"
								overflow="scroll"
								style={{ scrollbarWidth: 'none' }}
							>
								{body2.map((i, idx) => (
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
