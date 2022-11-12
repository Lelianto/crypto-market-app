import React, { FC, useEffect, useState, useCallback } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { ICurrencyGroup } from '../interfaces/SupportedCurrencies';
import { supportedCurrenciesUrl, latestPriceApi } from '../apis/constants';
import styles from '../assets/style';
import { SvgUri } from 'react-native-svg';
import { Icon } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';
import { headerSubMenus, sortBy } from '../constants/market';
import { isAndroid, getStatusBarHeight } from '../helper/deviceHelper';

const MarketScreen: FC = () => {
  const [currencyGroup, setCurrencyGroup] = useState<ICurrencyGroup[]>([]);
  const [, setSelected] = useState<string>('');
  const getLatestPriceChange = useCallback(async () => {
    try {
      const response = await fetch(latestPriceApi);
      const json = await response.json();
      if (json?.payload.length !== 0) {
        const currencyData = [...currencyGroup];
        const updatedData = currencyData.map((group) => {
          const name = group.currencyGroup.toLowerCase();
          const data = json.payload.filter((item) => item.pair.includes(name));
          if (data.length !== 0) {
            const { pair, latestPrice, day, week, month, year } = data[0];
            group.pair = pair;
            group.latestPrice = `Rp ${latestPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
            group.price = latestPrice;
            group.day = day;
            group.week = week;
            group.month = month;
            group.year = year;
          }
          return group;
        });
        setCurrencyGroup(updatedData);
        setTimeout(() => {
          getLatestPriceChange();
        }, 10000);
      }
    } catch (error) {
      console.error(error);
    }
  }, [currencyGroup]);
  const getSupportedCurrencies = async () => {
    try {
      const response = await fetch(supportedCurrenciesUrl);
      const json = await response.json();
      if (json?.payload.length !== 0) {
        const notIncludeIdr = json.payload.filter(
          (item) => item.currencyGroup !== 'IDR'
        );
        setCurrencyGroup(notIncludeIdr);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSupportedCurrencies();
  }, []);
  useEffect(() => {
    if (currencyGroup.length !== 0 && !currencyGroup?.[0]?.pair) {
      getLatestPriceChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyGroup]);
  const renderListItems = ({ item }) => {
    return (
      <View style={styles.list}>
        <View style={styles.flexRow}>
          <View style={styles.currencyImage}>
            <SvgUri width={40} height={40} color={item.color} uri={item.logo} />
          </View>
          <View style={styles.currencyText}>
            <View>
              <Text
                style={[
                  styles.textSpacing,
                  styles.fontBold,
                  styles.listFontSize
                ]}
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
  };
  const renderSubMenus = ({ name, id, iconName, type }) => {
    return (
      <View key={id} style={styles.menuButton}>
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
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeaderFlex}>
        <View style={styles.topHeaderTitlePosition}>
          <Text style={[styles.topHeaderTitle, styles.fontBold]}>Market</Text>
        </View>
        <View style={styles.topHeaderTitlePosition}>
          <View style={styles.topHeaderMenus}>
            <View>
              <Icon
                name="star"
                size={25}
                color="black"
                type="font-awesome-5"
                tvParallaxProperties={undefined}
              />
            </View>
            <View style={styles.search}>
              <Icon
                name="search"
                size={30}
                color="black"
                type="material"
                tvParallaxProperties={undefined}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subMenuSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {headerSubMenus.map((data) => renderSubMenus(data))}
        </ScrollView>
      </View>
      <View style={styles.sortBySection}>
        <Text style={styles.fontBold}>Sort By</Text>
        <View>
          <SelectList
            dropdownItemStyles={styles.dropdownItemStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyles}
            boxStyles={styles.boxStyles}
            placeholder="Default"
            defaultOption={sortBy[0]}
            search={false}
            setSelected={setSelected}
            data={sortBy}
          />
        </View>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={currencyGroup}
          keyExtractor={({ currencySymbol }, index) => currencySymbol}
          renderItem={renderListItems}
        />
      </View>
    </SafeAreaView>
  );
};

export default MarketScreen;
