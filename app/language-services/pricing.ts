// Language Services pricing — single source of truth for EN (/), PT (/pt), NY (/ny).
// Kwacha (MWK) is the base price. The USD, MZN, ZAR and ZMW columns are computed
// from MWK with the FDH rates below, never hard-coded per language.
//
// Rates: FDH, as of 8 October 2026.
//   USD, ZAR, ZMW = FDH Bank Plc TT middle (www.fdh.co.mw/fdhbankplc/exchangeRates)
//   MZN           = FDH Money Bureau mid of buy 27 / sell 32 (www.fdh.co.mw/fdhmoneybureau)
// perUnit = MWK per 1 unit of the foreign currency.
// TJ: refresh these figures before release if the FDH rates move.

export const RATES = {
  asOf: "8 October 2026",
  asOfPt: "8 de Outubro de 2026",
  asOfNy: "8 October 2026", // TODO(TJ): Chichewa date wording if preferred
  perUnit: { USD: 1734, MZN: 29.5, ZAR: 96.3236, ZMW: 68.2925 },
} as const;

export type Foreign = "USD" | "MZN" | "ZAR" | "ZMW";

export type PricedId =
  | "docTranslation"
  | "certified"
  | "transcription"
  | "transcriptionTranslation"
  | "subtitling"
  | "consecutive"
  | "conference"
  | "training"
  | "proofreading"
  | "localisation";

// Ordered. Every locale renders these rows in this order, from this list.
export const PRICED: { id: PricedId; mwk: number; from?: boolean }[] = [
  { id: "docTranslation", mwk: 18000 },
  { id: "certified", mwk: 26000 },
  { id: "transcription", mwk: 87000 },
  { id: "transcriptionTranslation", mwk: 139000 },
  { id: "subtitling", mwk: 9000 },
  { id: "consecutive", mwk: 120000 },
  { id: "conference", mwk: 350000 },
  { id: "training", mwk: 70000 },
  { id: "proofreading", mwk: 9000 },
  { id: "localisation", mwk: 350000, from: true },
];

// Rounding: USD to the nearest 1, MZN to the nearest 10, ZAR and ZMW to the nearest 5.
const STEP: Record<Foreign, number> = { USD: 1, MZN: 10, ZAR: 5, ZMW: 5 };

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

// Foreign equivalents of a kwacha amount, rounded per the rules above.
export function foreign(mwk: number): Record<Foreign, number> {
  return {
    USD: roundTo(mwk / RATES.perUnit.USD, STEP.USD),
    MZN: roundTo(mwk / RATES.perUnit.MZN, STEP.MZN),
    ZAR: roundTo(mwk / RATES.perUnit.ZAR, STEP.ZAR),
    ZMW: roundTo(mwk / RATES.perUnit.ZMW, STEP.ZMW),
  };
}
