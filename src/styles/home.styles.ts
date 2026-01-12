import { StyleSheet } from "react-native";
import {colors, spacing, typography} from "./colors"

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1
  },

  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md
  },

  title: {
    //colocado o spread operator pois o typography é um objeto, e não um valor único
    ...typography.title,
    color: colors.text,
    textAlign: "center"
  },

  subtitle: {
    ...typography.subtitle,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.xs
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl
  },

  emptyText: {
    ...typography.body,
    color: colors.textLight,
    textAlign: "center"
  }
})