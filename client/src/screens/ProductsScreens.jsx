import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  center,
  Stack,
  Wrap,
  WrapItem,
  WrapItems,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions';
import { Spinner } from '@chakra-ui/react';

const ProductsScreens = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing={'30px'} justify='center' minHeight={'100vh'}>
      {loading ? (
        <Stack direction={'raw'} spacing={'4'}>
          <Spinner mt={20} thickness={'2px'} speed={'0.65s'} emptyColor={'grey.200'} color='orange.500' size={'xl'} />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Oops We are sorry somthing wrong happened</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w={'250px'} h='550px'>
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default ProductsScreens;
