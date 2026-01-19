import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const detailsStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
  },

  backButton: {
    padding: spacing.md,
    marginTop: spacing.md,
  },

  backButtonText: {
    ...typography.body,
    color: colors.primary,
  },

  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },

  title: {
    ...typography.title,
    color: colors.text,
    textAlign: "center",
  },

  subtitle: {
    ...typography.subtitle,
    textAlign: "center",
    marginTop: spacing.xs,
    color: colors.textSecondary,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xl * 2,
  },

  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  errorTitle: {
    ...typography.title,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    textAlign: "center",
  },

  errorText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: spacing.lg,
  },

  retryButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.primary,
    borderRadius: 12,
    elevation: 2, //sombra no android
    shadowColor: colors.shadow, //sombra no ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  retryButtonText: {
    color: colors.cardBackground,
    fontWeight: "600",
  },
});
