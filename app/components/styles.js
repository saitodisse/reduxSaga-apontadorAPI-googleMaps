// flexDirection: ["row","row-reverse","column","column-reverse"],
// justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
// alignItems: ["flex-start","flex-end","center","stretch","baseline"],
// flexWrap: ["nowrap","wrap","wrap-reverse"],
// alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]

// alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
// flexGrow: _.range(0,6),
// order: _.range(-10,11)

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 38,
    marginTop: 6,
    marginBotton: 11,
    color: '#4ea9af',
  },

  buttonStyle: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    marginRight: 8,
    alignSelf: 'center',
  },

  buttonBigStyle: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'center',
  },

  containerResults: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
  },

  resultTitle: {
    marginLeft: 30,
    marginRight: 30,
    fontWeight: 'normal'
  },

  containerPre: {
    backgroundColor: '#ddd',
    marginLeft: 80,
    marginRight: 80,
    padding: 10,
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
  },
};
