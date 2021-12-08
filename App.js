import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import CoinItem from "./components/CoinItem";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#030628" />
      <View style={styles.header}>
        <Text style={styles.title}>Api Crypto React Native</Text>
        <TextInput
          style={styles.input}
          placeholder={"Search"}
          onChangeText={(text) => setSearch(text)}
          placeholderTextColor="#4653CE"
        />
      </View>
      <FlatList
        refreshing={refresh}
        onRefresh={async()=>{
          setRefresh(true)
          await loadData()
          setRefresh(false)
        }}
        style={styles.list}
        data={coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()) )}
        renderItem={({ item }) => {
          
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030628",
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  title: {
    color: "#ffffff",
    marginTop: 20,
    fontSize: 20,
  },
  list: { width: "90%" },
  input: {
    color: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#4657CE",
    textAlign: "center",
    width: "30%",
  },
});
export default App;
