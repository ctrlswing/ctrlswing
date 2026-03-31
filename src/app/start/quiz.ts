// Shared quiz types and recommendation logic (no server-only code)

export type QuizFormData = {
  situation: string;
  painAreas: string[];
  currentApproach: string;
  timeline: string;
  name: string;
  email: string;
  website: string; // honeypot field
};

export type Recommendation = "session" | "creative-strategist" | "frontend-designer";

export function getRecommendation(
  data: Pick<QuizFormData, "situation" | "painAreas" | "currentApproach">
): Recommendation {
  // AI-generic path -> Creative Strategist Engine
  if (data.currentApproach === "ai_generic" || data.situation === "ai_generic") {
    return "creative-strategist";
  }
  // Design-focused edge case -> Frontend Designer
  if (
    data.painAreas.includes("design") &&
    !data.painAreas.includes("messaging") &&
    !data.painAreas.includes("research")
  ) {
    return "frontend-designer";
  }
  // Default: strategy session for all other paths
  return "session";
}
