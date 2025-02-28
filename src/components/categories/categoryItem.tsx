import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {categoryItemProps} from '../../models/ui/categoryItemProps';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setCategory} from '../../store/slice/categorySlice';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch();

  return (
    <Pressable
      style={[
        styles.container,
        selectedCategory == category
          ? styles.selectedContainer
          : styles.unSelectedContainer,
      ]}
      onPress={() => dispatch(setCategory(category))}>
      <Text
        style={[
          styles.title,
          selectedCategory == category
            ? styles.selectedTitle
            : styles.unSelectedTitle,
        ]}>
        {category}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 10,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: Colors.GRAY,
    minHeight: height * 0.045,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  selectedContainer: {
    backgroundColor: Colors.PRIMARY,
  },
  unSelectedContainer: {
    backgroundColor: Colors.WHITE,
  },
  selectedTitle: {
    color: Colors.WHITE,
  },
  unSelectedTitle: {
    color: Colors.BLACK,
  },
});
