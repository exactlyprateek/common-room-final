import { Box, Center,  Link, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';

function NotFound() {
	return (
		<Center mt="5vh">
			<Box width="70%" p="1rem">
				<title>404 - Not found</title>{' '}
				<Center>
					<Text fontSize="2xl">
                        Couldn't find this page {'  '}
						<Link px="0.6rem" py="0.3rem" my="2rem" href="/">
							Let's go Home 🏠
						</Link>
					</Text>
				</Center>{' '}
                <Center>
                    <Text fontSize="xl" my="2rem">
					This is the team, One of them certainly messed up and they are sorry.
				</Text>
                </Center>
				
				<SimpleGrid mb="2rem" minChildWidth="250px" spacing="20px">
					{[
						{ name: 'Prateek Rohilla', img: '/prateek.png', url:"https://exactlyprateek.github.io" },
						{ name: 'Sanket Sinha', img: 'logo.png', url:"https://exactlyprateek.github.io" },
						{ name: 'Nikhil Gautam', img: 'favicon.ico', url:"https://exactlyprateek.github.io" }
					].map((i, idx) => (
						<Box mx="1.8rem">
							<Center>
								<img
									style={{ height: '200px', minWidth: '200px', borderRadius: '8px' }}
									src={i.img}
									alt="img"
								/>
							</Center>

							<Center>
								<Text fontSize="md" my="2">
								 <Link target="_blank" px="1" py="0.5" href={i.url}>{i.name}</Link>	
								</Text>{' '}
							</Center>
						</Box>
					))}
				</SimpleGrid>
			</Box>
		</Center>
	);
}

export default NotFound;
