import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import { useLocation } from "@/hooks/useLocation";
import { getWeatherByCoordinates } from "@/services/weatherService";
import { homeStyles } from "@/styles/home.styles";

export default function App() {
  const router = useRouter();
  const { getLocation, loading } = useLocation();

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: "/details",
      params: { cityName },
    });
  };

  const handleLocation = async () => {
    const locationResult = await getLocation();

    if (!locationResult.success) {
      Alert.alert(locationResult.error);
      return;
    }

    const { latitude, longitude } = locationResult.coordinates;

    const dataResult = await getWeatherByCoordinates(latitude, longitude);

    if (!dataResult.success) {
      Alert.alert(dataResult.error);

      return;
    } else {
      router.push({
        pathname: "/details",
        params: { cityName: dataResult.data.name },
      });
    }
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

        <TouchableOpacity onPress={handleLocation} style={homeStyles.gpsButton}>
          {loading ? (
            <ActivityIndicator color={"#fff"} size={"small"} />
          ) : (
            <Text style={homeStyles.gpsButtonText}>
              Use minha localização atual
            </Text>
          )}
        </TouchableOpacity>

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>
            🌎 Digite o nome de uma cidade acima para começar.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
