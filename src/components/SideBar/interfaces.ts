import { ElementType, ReactNode } from "react";
import { LinkProps as ChakraLinksProps } from "@chakra-ui/react"

export interface INavSectionProps {
	title: string;
	children: ReactNode
}

export interface INavLinkProps extends ChakraLinksProps {
	icon: ElementType;
	children: string;
}