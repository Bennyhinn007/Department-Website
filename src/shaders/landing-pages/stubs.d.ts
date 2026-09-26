/* Ambient declarations to allow LandingPages.tsx to typecheck without altering its exact authored source */

declare module "*.html?raw" {
  const content: string;
  export default content;
}

declare module "../tidecrest-hero/tidecrestDocument.js" {
  export const buildTidecrestDocument: (variant: string) => string | undefined;
}

declare module "../meridian-landing-page/meridianDocument.js" {
  export const buildMeridianDocument: (variant: string, presentation?: string) => string | undefined;
}

declare module "../ascii-field/asciiFieldDocuments.js" {
  export const buildAsciiFieldDocument: (variant: string) => string | undefined;
}

declare module "../betawise-globe/betawiseGlobeDocument.js" {
  export const buildBetawiseGlobeDocument: (variant: string) => string | undefined;
}

declare module "../nocturne-hero/NocturneScene" {
  export const NOCTURNE_TITLES: Record<string, string>;
  export const NOCTURNE_VARIANTS: readonly string[];
  export const buildNocturneDocument: (variant: string) => string | undefined;
  export type NocturneVariant = string;
}

declare module "./sandboxedPageDocument" {
  export const buildSandboxedPageDocument: (
    source: string,
    options?: { presentation?: string; canvasSelector?: string }
  ) => string;
}

declare module "../sylva-living-world/SylvaLivingWorldScene" {
  export const MAPLE_AUTUMN_STYLE: any;
  export const SAKURA_SUNSET_STYLE: any;
  export const SEQUOIA_MIST_STYLE: any;
  export const applyMapleAutumnVariant: any;
  export const applySakuraSunsetVariant: any;
  export const applySequoiaMistVariant: any;
}
