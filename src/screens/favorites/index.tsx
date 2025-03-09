import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={favorites}
          renderItem={({item}) => <Text>{item.isFavorite}</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default Favorites;
