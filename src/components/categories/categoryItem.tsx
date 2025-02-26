import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categoryItemProps} from '../../models/ui/categoryItemProps';
import {Colors} from '../../theme/colors';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={{fontSize: 16}}>{category}</Text>
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
  },
});
