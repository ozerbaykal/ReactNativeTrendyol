import {StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={30} color={color} />;
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={30} color={color} />;
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={30} color={color} />;
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={30} color={color} />;
    case TABNAVIGATOR.HOME:
      return <Icon name="home" size={30} color={color} />;
  }
};

export default TabIcon;

const styles = StyleSheet.create({});
