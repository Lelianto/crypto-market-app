import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/style';
import { Icon } from 'react-native-elements';
import { IHeaderSubMenu } from '../interfaces/General';

const ProductSubMenu: FC<IHeaderSubMenu> = ({ name, iconName, type }) => (
  <View style={styles.menuButtonInner}>
    <View style={styles.verticalCenter}>
      <Icon
        name={iconName}
        size={15}
        color="black"
        type={type}
        tvParallaxProperties={undefined}
      />
    </View>
    <View style={styles.verticalCenter}>
      <Text style={styles.buttonName}>{name}</Text>
    </View>
  </View>
);

export default ProductSubMenu;
