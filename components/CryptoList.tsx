import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ICurrencyGroup } from '../interfaces/SupportedCurrencies';
import styles from '../assets/style';
import { SvgUri } from 'react-native-svg';
import { Icon } from 'react-native-elements';

const CryptoList: FC<ICurrencyGroup> = (item) => (
  <View style={styles.list}>
    <View style={styles.flexRow}>
      <View style={styles.currencyImage}>
        <SvgUri width={40} height={40} color={item.color} uri={item.logo} />
      </View>
      <View style={styles.currencyText}>
        <View>
          <Text
            style={[styles.textSpacing, styles.fontBold, styles.listFontSize]}
          >
            {item.name}
          </Text>
          <Text style={styles.listFontSize}>{item.currencyGroup}</Text>
        </View>
      </View>
    </View>
    <View style={styles.priceCenter}>
      <View style={styles.heightView}>
        <Text
          style={[
            styles.textRight,
            styles.textSpacing,
            styles.fontBold,
            styles.listFontSize
          ]}
        >
          {item.latestPrice}
        </Text>
        <View style={styles.priceTag}>
          <View style={styles.iconRate}>
            <Icon
              name={`${Number(item.day) >= 0 ? 'caret-up' : 'caret-down'}`}
              size={20}
              color={`${Number(item.day) >= 0 ? 'green' : 'red'}`}
              type="font-awesome-5"
              tvParallaxProperties={undefined}
            />
          </View>
          <Text style={[styles.textRight, styles.listFontSize]}>
            {item.day}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default CryptoList;
