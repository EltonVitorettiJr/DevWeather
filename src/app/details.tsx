import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrencyWeather } from "@/services/weatherService";
import { detailsStyles } from "@/styles/details.styles";
import type { WeatherData } from "@/types/weather";

export default function Details() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const router = useRouter();
  const { cityName } = useLocalSearchParams<{ cityName: string }>();

  // biome-ignore lint/correctness/useExhaustiveDependencies:<Função de efeito colateral para buscar dados quando cityName muda>
  useEffect(() => {
    if (cityName) getWeatherData();
    return;
  }, [cityName]);

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);

    const result = await getCurrencyWeather(cityName);

    setLoading(false);

    if (result.success) {
      setWeatherData(result.data);
    } else {
      setError(result.error);
    }
  };

  return (
    <SafeAreaView style={detailsStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={detailsStyles.container}>
        <TouchableOpacity
          style={detailsStyles.backButton}
          onPress={() => router.back()}
        >
          <Text style={detailsStyles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={detailsStyles.header}>
          <Text style={detailsStyles.title}>Clima Atual:</Text>
          <Text style={detailsStyles.subtitle}>Buscando: {cityName}</Text>
        </View>

        {loading && (
          <View style={detailsStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#4A90E2" />
            <Text style={detailsStyles.loadingText}>Carregando...</Text>
          </View>
        )}

        {error && (
          <View style={detailsStyles.errorContainer}>
            <Text style={detailsStyles.errorText}>{error}</Text>
            <TouchableOpacity
              style={detailsStyles.retryButton}
              onPress={() => getWeatherData()}
            >
              <Text style={detailsStyles.retryButtonText}>
                Tentar Novamente
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
