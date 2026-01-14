import { useRouter } from "expo-router";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import { homeStyles } from "@/styles/home.styles";

export default function App() {
  const router = useRouter();

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: "/details",
      params: { cityName },
    });
  };

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="dark-content"></StatusBar>

      {/* Carrega tudo e gera um scroll */}
      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>⛅ DevWeather</Text>
          <Text style={homeStyles.subtitle}>
            Busque o clima em qualquer cidade do mundo!
          </Text>
        </View>

        <SearchBar onSearch={handleSearch} />

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>
            🌎 Digite o nome de uma cidade acima para começar.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
