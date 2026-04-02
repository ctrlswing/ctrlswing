import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { workType, workflow, currentProcess } = await req.json();

    if (!workType || !workflow || !currentProcess) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Sanitize inputs - strip any potential prompt injection markers
    const sanitize = (s: string) => s.slice(0, 500).replace(/[<>{}]/g, "");

    const result = streamText({
      model: gateway("anthropic/claude-haiku-4.5"),
      maxOutputTokens: 2000,
      system: `You are an expert at writing Claude Code skills (Skill.md files). A skill is a markdown file that gives Claude specific instructions for performing a task. Skills follow this structure:

1. A clear, descriptive title
2. A "when to use" trigger description
3. Step-by-step instructions for how to perform the task
4. Quality criteria and output format expectations
5. Examples where helpful

Write practical, actionable skills. Use markdown formatting. Keep instructions specific and grounded in real workflow steps. Do not use em dashes. Do not use exclamation points. Write in a direct, practitioner tone.

The skill should be immediately usable - someone should be able to save this as a .md file and start using it with Claude right away.`,
      prompt: `Write a custom Skill.md file for this person:

**Role:** ${sanitize(workType)}
**Workflow to automate:** ${sanitize(workflow)}
**Current manual process:** ${sanitize(currentProcess)}

Generate a complete, ready-to-use Skill.md that automates this workflow. Include frontmatter with name, description, and type fields. Make it specific to their described process, not generic.`,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Skill generation failed:", error);
    return new Response("Generation failed", { status: 500 });
  }
}
