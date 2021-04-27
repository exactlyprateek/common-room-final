import React from 'react';
import {
	useColorModeValue,
	Image,
	Text,
	WrapItem,
	Avatar,
	HStack,
	IconButton,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	ButtonGroup,
	Box,
	Link,
	Badge,
	Button
} from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageCircle, FiShare2 } from 'react-icons/fi';

function Post(props) {
	const border = useColorModeValue('primary.950', 'rgba(255, 255, 255, 0.2)');

	return (
		<Box
			my={[ '2', '3', '4', '5' ]}
			border="1px"
			borderRadius="sm"
			borderColor={border}
			bg="grey.100"
			className="shadow-custom-anim"
			width={[ '100%', '90%', '70%', '60%' ]}
		>
			<WrapItem alignItems="flex-end" align="center">
				<Avatar
					mx="1.5"
					mb="2"
					size="sm"
					name={props.user}
					src={`https://picsum.photos/id/${props.avatar}/128`}
				/>

				<Link href={`/profile/${props.user}`} fontWeight="semibold" ml="1.5" py="3" w="100%" color="grey.900">
					{props.user}
				</Link>

				<Box d="flex" ml="1.5" pb="4" mr="1.5" w="100%" justifyContent="end">
					<Badge ml="2.5" mr="2" borderRadius="full" px="2" variant="solid" colorScheme="blue">
						{props.tag}
					</Badge>
				</Box>
			</WrapItem>
			<div style={{ maxHeight: '100vh', overflow: 'hidden' }}>
				<Image src={`https://picsum.photos/id/${props.location}/1080`} alt="img" />
			</div>

			<Box>
				<HStack mx="2" my="2">
					<ButtonGroup borderRadius="full" size="lg" isAttached variant="outline">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<AiOutlineHeart />} />
						<Button borderRadius="full" ml="-px">
							{props.likes}
						</Button>
					</ButtonGroup>
					<ButtonGroup borderRadius="full" size="lg" isAttached variant="outline">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<FiMessageCircle />} />
						<Button borderRadius="full" ml="-px">
							{props.comments}
						</Button>
					</ButtonGroup>
					<Box w="100%" d="flex" justifyContent="end">
						<IconButton borderRadius="full" aria-label="Add to friends" icon={<FiShare2 />} />
					</Box>
				</HStack>
			</Box>
			<Box mx="2" my="2">
				<Box flex="1" textAlign="left">
					<Text h="30px" color="grey.900" isTruncated>
						<Link href={`/profile/${props.user}`} fontWeight="semibold" ml="1.5" py="3" w="100%" color="grey.900">
							{props.user}
						</Link>: {props.caption}
					</Text>
				</Box>
				<Accordion allowToggle>
					{' '}
					<AccordionItem>
						<h2>
							<AccordionButton isTruncated>
								<Text>Show Comments</Text>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Box>
	);
}

export default Post;
