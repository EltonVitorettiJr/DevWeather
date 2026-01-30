import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const changeColor = (temp: number): string | undefined => {
  if (temp <= 0) return colors.cold;
  if (temp > 0 && temp <= 15) return colors.cool;
  if (temp > 15 && temp <= 25) return colors.warm;
  if (temp > 25) return colors.hot;
};

export const weatherCardStyles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
    alignItems: "center",
    shadowColor: colors.shadow, //Sombra no iOS
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1, //Sombra suave
    shadowRadius: 12,
    elevation: 5, //Sombra para Android
  },

  cityName: {
    ...typography.title,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.xs,
  },

  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: spacing.sm,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },

  temperature: {
    marginVertical: spacing.md,
    fontSize: 64,
    fontWeight: "bold",
  },

  description: {
    ...typography.subtitle,
    color: colors.textSecondary,
    textTransform: "capitalize",
    marginBottom: spacing.md,
  },

  detailsContainer: {
    flexDirection: "row",
    marginTop: spacing.md,
    gap: spacing.lg,
  },

  detailItems: {
    alignItems: "center",
  },

  detailLabel: {
    ...typography.caption,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },

  detailValue: {
    ...typography.body,
    color: colors.text,
  },
});
