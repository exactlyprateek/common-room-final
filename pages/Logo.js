import React from 'react';
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Link,
  Icon,
  useColorModeValue,
	useDisclosure,
	VStack
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdSettingsVoice } from 'react-icons/md';
import { RiNumbersFill, RiPagesLine } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons';
export default function Logo(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const color = useColorModeValue ('#026A63', '#04d9ca');

	return (
		<Box {...props}>
			<HStack>
      <Icon onClick={onOpen} as={GiHamburgerMenu} boxSize="2rem" color={color} />
			
				<NextLink href="/">
					<Image borderRadius="15px" className="shadow-custom-anim" src="/logo.png" alt="logo"  w={8} h={8} />
				</NextLink>
			</HStack>

			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">Nav</DrawerHeader>
					<DrawerBody>
						<VStack ml="2" mt="1" spacing={0} align="left">
							{[
								{ name: 'Home', url: '/', icon: <FaHome /> },
								{ name: 'Result', url: '/result', icon: <RiNumbersFill /> },
								{ name: 'Notes', url: '/notes', icon: <RiPagesLine /> },
								{ name: 'Common Room', url: '/common', icon: <MdSettingsVoice /> }
							].map((i, idx) => (
								<HStack>
									<IconContext.Provider value={{ size: '1.6rem' }}>{i.icon}</IconContext.Provider>
									<Link style={{ fontSize: '1.4rem' }} to={i.url}>
										<NextLink href={i.url} key={idx}>
											{i.name}
										</NextLink>
									</Link>
								</HStack>
							))}
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
