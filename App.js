import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const splitValue = [1, 2, 3, 4, 5];
export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://r.pl/api/v4.3/banery/pobierz").then((e) => {
      const flatData = e.data.flatMap((e) => e.Bloczki);
      const c = flatData.reduce((acc, e) => {
        splitValue.forEach((element) => {
          const a = e.Cena.CenaAktualna % element;

          if (acc[a]) {
            acc[a].push(e);
          } else {
            acc[a] = [e];
          }
        });
        return acc;
      }, {});
      setData(c);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data &&
          Object.keys(data).map((e) =>
            data[e]?.map((el, index) => (
              <View
                key={e + el.BazoweInformacje.OfertaNazwa + index}
                style={{
                  backgroundColor:
                    e === "1"
                      ? "red"
                      : e === "2"
                      ? "blue"
                      : e === "3"
                      ? "green"
                      : e === "4"
                      ? "yellow"
                      : "white",
                }}
              >
                <Text>{el.BazoweInformacje.OfertaNazwa}</Text>
              </View>
            ))
          )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
