import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Tooltip,
  Icon,
  Button,
  Stack,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react';

import { FiShoppingCart } from 'react-icons/fi';
import { StarIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize, setIconSize } = useState('14px');
  return (
    <Flex>
      <HStack spacing={'2px'}>
        <StarIcon size={iconSize} width={'14px'} color={'orange.500'} />
        <StarIcon size={iconSize} width={'14px'} color={rating >= 2 ? 'orange.500' : 'grey'} />
        <StarIcon size={iconSize} width={'14px'} color={rating >= 3 ? 'orange.500' : 'grey'} />
        <StarIcon size={iconSize} width={'14px'} color={rating >= 4 ? 'orange.500' : 'grey'} />
        <StarIcon size={iconSize} width={'14px'} color={rating >= 5 ? 'orange.500' : 'grey'} />
        <Text>{`${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}</Text>
      </HStack>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      p='2'
      spacing='3px'
      bg={useColorModeValue('white', 'gray.800')}
      minW='240px'
      h='450px'
      borderWidth='1px'
      rounded='1g'
      shadow='1g'
      position='relative'
    >
      {product.productIsNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}
      <Image src={product.image} alt={product.name} roundedTop='1g' />
      <Box flex={'1'} maxH='5' alignItems={'baseline'}>
        {product.stock <= 0 && (
          <Badge rounded={'full'} px='2' fontSize={'0.8em'} colorScheme={'red'}>
            Sold Out
          </Badge>
        )}

        {product.productIsNew && (
          <Badge rounded={'full'} px='2' fontSize={'0.8em'} colorScheme={'green'}>
            New
          </Badge>
        )}
      </Box>

      <Flex mt={'1'} justifyContent='space-between' alignContent={'center'}>
        <Link as={ReactLink} to={`/products${product._id}`} pt='2' cursor={'[pointer'}>
          <Box fontSize={'1x1'} fontWeight={'semibold'} lineHeight={'tight'}>
            {product.name}
          </Box>
        </Link>
      </Flex>

      <Flex justifyContent={'space-between'} alignContent={'center'} py={'2'}>
        <Rating rating={product.rating} numberOfReviews={product.numberOfReviews} />
      </Flex>

      <Flex justifyContent={'space-between'}>
        <Box fontSize={'1x1'} color={useColorModeValue('grey.800', 'white')}>
          <Box as='span' color={'green.600'} fontSize='1g'>
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip label='Add to Cart' bg='white' placement='top' color='gray.800' fontSize='1.2em'>
          <Button variant='ghost' display='flex' isDisabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center' />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
