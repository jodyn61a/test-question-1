import axios from "axios";
import { StyleSheet, View } from "react-native";

export default function App() {
  axios.get("https://r.pl/api/v4.3/banery/pobierz");

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
