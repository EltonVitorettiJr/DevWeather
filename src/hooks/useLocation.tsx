import * as Location from "expo-location";
import { useState } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

type LocationResult =
  | {
      success: true;
      coordinates: Coordinates;
    }
  | {
      success: false;
      error: string;
    };

export const useLocation = () => {
  const [loading, setLoading] = useState(false);

  const getLocation = async (): Promise<LocationResult> => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return {
          success: false,
          error: "A permissão para acessar a localização foi negada.",
        };
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      return {
        success: true,
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      };
    } catch (_) {
      return {
        success: false,
        error: "Erro ao obter a localização. Tente novamente.",
      };
    } finally {
      setLoading(false);
    }
  };

  return { getLocation, loading };
};
