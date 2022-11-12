import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerList: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  textRight: {
    textAlign: 'right'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  listFontSize: {
    fontSize: 16
  },
  heightView: {
    height: 46
  },
  currencyImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 50
  },
  currencyText: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  priceTag: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  priceCenter: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ebecf0'
  },
  textSpacing: {
    paddingBottom: 8
  },
  iconRate: {
    position: 'relative',
    marginTop: -2,
    marginRight: 2
  },
  topHeaderFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60
  },
  topHeaderTitle: {
    fontSize: 32
  },
  topHeaderTitlePosition: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 60
  },
  topHeaderMenus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 60,
    paddingTop: 12.5
  },
  search: {
    marginLeft: 12
  },
  subMenuSection: {
    height: 40,
    paddingLeft: 20,
    paddingVertical: 5
  },
  menuButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ebecf0'
  },
  buttonName: {
    marginLeft: 8
  },
  sortBySection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 5
  },
  boxStyles: {
    borderColor: '#fff',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 100,
    maxWidth: 100
  },
  inputStyles: {
    padding: 0,
    fontWeight: 'bold'
  },
  dropdownStyles: {
    minWidth: 100,
    maxWidth: 100,
    borderColor: '#ebecf0'
  },
  dropdownItemStyles: {
    paddingHorizontal: 5,
    paddingVertical: 5
  }
});

export default styles;
