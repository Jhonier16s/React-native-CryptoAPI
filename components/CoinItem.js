import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.imageItem} source={{ uri: coin.image }} />
        <View style={styles.containerName}>
          <Text style={styles.textItem}>{coin.name}</Text>
          <View style={styles.containerank}>
            <Text style={styles.symbol}>{coin.symbol}</Text>
            <Text style={styles.rank}>Ranking: {coin.market_cap_rank}</Text>
          </View>
        </View>
      </View>
      <View style={styles.conatinerPRICE}> 
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            styles.price,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    backgroundColor: "#040722",
    borderRadius: 20,
    paddingTop: 10,
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  imageItem: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  containerName: {
    marginLeft: 10,
  },
  textItem: {
    color: "#ffffff",
  },
  coinName: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    color: "#434343",
    textTransform: "uppercase",
    marginRight: 5
  },
  price: {
    textAlign: "right",
  },
  priceUp: {
    color: "#057114",
  },
  priceDown: {
    color: "#FF1300",
  },
  textPrice: {
    color: "#fff",
    textAlign: "right",
  },
  containerank:{
      flexDirection :'column'
  },
  rank:{
    color: "#434343",
    marginRight: 5
  },
  conatinerPRICE:{justifyContent: 'center',
marginRight: 5},
});

export default CoinItem;
