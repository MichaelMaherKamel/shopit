import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  Center,
  textDecoration,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiTechnoHeart } from 'react-icons/gi';
import { Children } from 'react';

// Array of the available links
const links = [
  { name: 'products', path: '/products' },
  { name: 'ShoppingCart', path: '/cart' },
];

// Creating NavLinks Component
const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded='md'
    _hover={({ textDecoration: 'none' }, useColorModeValue('gray.200', 'grey.700'))}
  >
    {children}
  </Link>
);

// Creating the NavBar
const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='Center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* Start of Company logo and link to home page */}
          <HStack>
            <Link as={ReactLink} to='/'>
              <Flex alignItems='center'>
                <Icon as={GiTechnoHeart} h={6} w={6} color='orange.400' />
                <Text>Shopit</Text>
              </Flex>
            </Link>
            {/* Start of NavLinks */}
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            {/* End of NavLinks and toggle to darkmode */}
          </HStack>
          {/* End of Company logo and link to home page */}

          {/* Start of toggle to darkmode */}
          <Flex alignItems={'center'}>
            <Icon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf='center'
              onClick={() => toggleColorMode()}
            />
            {/* End of toggle to darkmode */}

            {/* Start of Signin and register buttons */}
            <Button
              as={ReactLink}
              to='/login'
              p={2}
              fontSize='sm'
              fontWeight={400}
              variant='link'
              display={{ base: 'none', md: 'inline-flex' }} //For Mobile mode
            >
              Sign In
            </Button>
            <Button
              as={ReactLink}
              to='/register'
              display={{ base: 'none', md: 'inline-flex' }} //For Mobile mode
              m={2}
              fontSize='sm'
              fontWeight={600}
              _hover={{ bg: 'orange.400' }}
              bg='orange.500'
              color={'white'}
            >
              Register
            </Button>
            {/* Start of Signin and register buttons */}
          </Flex>
        </Flex>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4} borderRight={4} borderRightColor={'black'}>
            {links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
            <NavLink key='Sign In' path={'/login'}>
              Sign In
            </NavLink>
            <NavLink key='Register' path={'/register'}>
              Register
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </div>
  );
};

export default Navbar;
