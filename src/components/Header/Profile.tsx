import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { ProfileProps } from './interfaces';

export function Profile({ showProfileDate = true }: ProfileProps) {
	return (
		<Flex align="center">
			{ showProfileDate && (
				<Box mr="4" textAlign="right">
					<Text>John Everton</Text>
					<Text color="gray.300" fontSize="small">
						johneverton44@gmail.com
					</Text>
				</Box>
			)}

		<Avatar size="md" name="John Everton" src="https://github.com/johneverton01.png" />
		</Flex>
	);
}