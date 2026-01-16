import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const changeColor = (temp: number) => {
  if (temp <= 0) return colors.cold;
  if (temp > 0 && temp <= 15) return colors.cool;
  if (temp > 15 && temp <= 25) return colors.warm;
  if (temp > 25) return colors.hot;
};

export const weatherCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
    alignItems: "center",
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
