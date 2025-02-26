import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widgetHeaderProps} from '../../models/ui/widgetProps';

const WidgetHeaders: React.FC<widgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default WidgetHeaders;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});
