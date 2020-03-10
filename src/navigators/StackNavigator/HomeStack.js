import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../../screens/MainScreen/index.js';
import { ProductDetailScreen, NewsScreen, CategoryScreen } from '../../screens/Home';
import OrderIconWithBadge from '../../components/IconBadge/OrderIconWithBadge.js';

const headerLeft = (navigation) => (
  <TouchableOpacity
    onPress={() => alert('Click menu')}
  >
    <Icon 
      name='ios-menu' 
      size={24}
      style={{
        paddingHorizontal: 20
      }}
    />
  </TouchableOpacity>
);

const headerRight = (navigation) => (
  <View style={{
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  }}>
    <View style={{paddingRight: 8}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Order')}
      >
        <OrderIconWithBadge
          name='ios-cart' 
          size={24}
          style={{}}
        />
      </TouchableOpacity>
    </View>

    <View style={{paddingLeft: 8}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
      >
      <Icon 
        name='ios-person'
        size={24}
      />
    </TouchableOpacity>
    </View>
  </View>
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: headerLeft(navigation),
        headerRight: headerRight(navigation)
      })
    },
    ProductDetail: {
      screen: ProductDetailScreen
    },
    News: {
      screen: NewsScreen
    },
    Category: {
      screen: CategoryScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default HomeStack;