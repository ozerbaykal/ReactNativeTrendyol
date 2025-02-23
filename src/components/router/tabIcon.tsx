import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return <Icon name="home-outline" size={size} color={color} />;
    case TABNAVIGATOR.SEARCH:
      return <Icon name="search" size={size} color={color} />;
    case TABNAVIGATOR.FAVORİTES:
      return <Icon name="heart" size={size} color={color} />;
    case TABNAVIGATOR.CART:
      return <Icon name="cart" size={size} color={color} />;
    case TABNAVIGATOR.PROFİLE:
      return <Icon name="person-outline" size={size} color={color} />;
  }
};

export default TabIcon;
