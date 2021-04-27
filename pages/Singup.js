import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	Center
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
export default function Signup() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div>
			<Button
				onClick={onOpen}
				size="sm"
				rounded="full"
				
				// color={[ 'primary.500', 'primary.500', 'white', 'white' ]}
				// bg={[ 'white', 'white', 'primary.500', 'primary.500' ]}
				// _hover={{
				// 	bg: [ 'primary.200', 'primary.200', 'primary.600', 'primary.600' ]
				// }}
				// _active={{
				// 	bg: [ 'primary.100', 'primary.100', 'primary.800', 'primary.800' ]
				// }}
			>
				Create Account
			</Button>
			<Modal size="xl" onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent maxH="90vh" overflow="hidden">
					<ModalCloseButton rounded="4px" />
					<ModalBody p="0">
						<Flex align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
							<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
								<Stack align={'center'}>
									<Heading fontSize={'4xl'}>Sign in to your account</Heading>
									<Text fontSize={'lg'} color={'gray.600'}>
										to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
									</Text>
								</Stack>
								<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
									<Stack spacing={4}>
										<FormControl id="email">
											<FormLabel>Email address</FormLabel>
											<Input type="email" />
										</FormControl>
										<FormControl id="password">
											<FormLabel>Password</FormLabel>
											<Input type="password" />
										</FormControl>
										<Stack spacing={10}>
											<Stack
												direction={{ base: 'column', sm: 'row' }}
												align={'start'}
												justify={'space-between'}
											>
												<Checkbox>Remember me</Checkbox>
												<Link color={'blue.400'}>Forgot password?</Link>
											</Stack>
											<Button
												bg={'blue.400'}
												color={'white'}
												_hover={{
													bg: 'blue.500'
												}}
											>
												Sign in
											</Button>
										</Stack>
									</Stack>
									<Center p={4}>
										<Text size="lg">OR</Text>
									</Center>
									<Center p={0}>
										<Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
											<Center>
												<Text>Sign in with Google</Text>
											</Center>
										</Button>
									</Center>
								</Box>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
