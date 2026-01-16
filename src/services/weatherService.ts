import axios from "axios";
import type { WeatherData, WeatherError } from "@/types/weather";

export type WeatherResult =
  | { success: true; data: WeatherData }
  | { success: false; error: string };

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    lang: "pt_br",
    units: "metric",
  },
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 401:
      return "API Key inválida";
    case 404:
      return "Cidade não encontrada";
    case 429:
      return "servidor sobrecarregado. Tente novamente mais tarde.";
    case 503:
      return "Servidor não disponível no momento.";
    default:
      return "Erro no servidor. Tente novamente mais tarde.";
  }
};

export const getWeatherByCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<WeatherResult> => {
  try {
    const response = await api.get<WeatherData>("/weather", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErrorMessage(err.response.status),
        };
      } else if (err.request) {
        return {
          success: false,
          error: "Erro de conexão com o servidor. Tente novamente.",
        };
      } else {
        return {
          success: false,
          error: "Erro ao buscar dados do clima. Tente novamente.",
        };
      }
    }

    return {
      success: false,
      error: "Erro ao buscar dados do clima. Tente novamente.",
    };
  }
};

export const getCurrencyWeather = async (
  cityName: string,
): Promise<WeatherResult> => {
  try {
    // trim() tira os espaços em brancos
    const trimmedCity = cityName.trim();

    if (!trimmedCity) {
      return {
        success: false,
        error: "Cidade não informada",
      };
    }

    const response = await api.get<WeatherData>("/weather", {
      params: {
        q: trimmedCity,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErrorMessage(err.response.status),
        };
      } else if (err.request) {
        return {
          success: false,
          error: "Erro de conexão com o servidor. Tente novamente.",
        };
      } else {
        return {
          success: false,
          error: "Erro ao buscar dados do clima. Tente novamente.",
        };
      }
    }

    return {
      success: false,
      error: "Erro ao buscar dados do clima. Tente novamente.",
    };
  }
};

export const getWeatherIcon = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
