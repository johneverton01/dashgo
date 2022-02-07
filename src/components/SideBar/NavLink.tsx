import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ActiveLink } from "../";

import { INavLinkProps } from './interfaces'

export function NavLink({ icon, children, href, ...rest }: INavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display="flex" align="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">{children}</Text>
			</ChakraLink>
		</ActiveLink>
	);
}