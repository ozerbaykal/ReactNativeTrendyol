import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import Icon from '@react-native-vector-icons/ionicons';
//import {RouteType} from '../routes/RouteType';

//type Props = RouteType<'Rate'>;

const Rate: React.FC = ({rating}) => {
  const fullStar = Math.floor(rating.rate);
  const halfStar = rating % 1 >= 0.5;

  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{rating.rate}</Text>
      <View style={styles.starContainer}>
        {Array(fullStar)
          .fill(null)
          .map((item, index) => (
            <Icon name="star" size={20} color={Colors.PRIMARY} key={index} />
          ))}
        {halfStar && <Icon name="star-half" size={20} color={Colors.PRIMARY} />}
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.count}>| {rating.count} Değerlendirme</Text>
      </View>
    </View>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

    gap: 5,
  },
  rating: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.BLACK,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
  },
  count: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
