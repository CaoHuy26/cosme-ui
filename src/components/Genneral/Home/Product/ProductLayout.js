import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Button } from "react-native";
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import productActions from '../../../../actions/productActions';;
import ProductList from "./ProductList";

const initialProductData = [
  {
    name: "SILKYGIRL TRULY NUDE",
    price: "400.000 VND",
    rating: 4,
    image: require('../../../../assets/product/fake_product1.jpg'),
    description: 
      `Eiusmod id irure magna eiusmod aute nisi non occaecat. Et ad culpa voluptate ut veniam duis occaecat id reprehenderit laboris qui voluptate anim nostrud. Culpa commodo ut aliqua aliquip reprehenderit cupidatat anim proident velit culpa. Adipisicing cupidatat consectetur Lorem proident elit proident minim aliqua incididunt aliqua laborum voluptate reprehenderit. Proident irure cupidatat culpa id ea qui reprehenderit non aliquip ea tempor quis.
    Eu fugiat sit qui tempor laborum. Ullamco enim duis incididunt eu enim non velit magna exercitation non qui aliqua proident. Fugiat dolor pariatur dolor cupidatat qui laboris aute ullamco deserunt est amet sunt sint. Incididunt ad nulla amet exercitation nisi aute.
    Ullamco proident nulla deserunt nulla enim. Laborum consequat reprehenderit irure occaecat sit esse voluptate laborum irure cillum deserunt. Aliqua sit exercitation mollit reprehenderit. Cillum laboris in non non voluptate pariatur dolor tempor eiusmod do. Voluptate ad ullamco anim sunt exercitation. Commodo labore qui minim in esse est consequat dolore ipsum in anim magna commodo cillum.
    Elit sit fugiat sit fugiat non. Proident esse velit proident mollit duis mollit fugiat in aliqua nostrud ad ex ullamco. Consectetur dolore est esse aliquip dolore dolore officia dolore occaecat qui ad laboris.
    Est pariatur aute magna aute mollit culpa eu aute. Do reprehenderit dolor et magna esse. Sint sint eiusmod in est velit id in.`
  },
  {
    name: "MATTE LIP LIQUID",
    price: "300.000 VND",
    rating: 3,
    image: require('../../../../assets/product/fake_product2.jpg')
  },
  {
    name: "Shower Gel Olive 60ML",
    price: "250.000 VND",
    rating: 4,
    image: require('../../../../assets/product/fake_product3.jpg')
  },
  {
    name: "Colour Crush canberra tulip",
    price: "420.000 VND",
    rating: 5,
    image: require('../../../../assets/product/fake_product4.jpg')
  }
];

function ProductLayout() {

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const productReducers = useSelector(state => state.productReducers);
  
  useEffect(() => {
    function fetchData() {
      dispatch(productActions.getProducts(page))
    }
    fetchData();
  }, [page]);

  return (
    <>
      {
        productReducers.isFetching
        ? (
          <View>
            <ActivityIndicator size="small" color="pink" />
          </View>
        )
        : (
          <View style={styles.container}>
            <ProductList products={productReducers.products}/>
            
            <View style={{marginVertical: 20}}>
              <Button
                title='Xem thêm'
                onPress={() => setPage(page + 1)}
              />
            </View>
            
          </View>
        )
      }
    </>
  );
}

// withNavigation: Access the navigation props to any component
export default withNavigation(ProductLayout);

const styles = StyleSheet.create({
  container: {
  }
});