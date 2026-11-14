import type { IRideInfo } from "../types/IAttractions.js";

export interface IShowInfo extends IRideInfo {}

export const activeMotherboard: IShowInfo = {
  id: "MotherboardBIOSShow-show-1",
  name: "Motherboard BIOS Show",
  description:
    "A tour through the inside of a computer. Learn how data travels through your computer in visual and audio spectacular!!",
  type: "show",
  category: "family show",
  duration: 10,
  max: 50,
  perTurn: 25,
};

export const oldTerminal: IShowInfo = {
  id: "OldTerminalRerun-show-2",
  name: "Old Terminal Re-run",
  description:
    "A place for the parents to go relax and enjoy more adult themed comedy show. Alcohol served in lobby only! ID required",
  type: "show",
  category: "adult show",
  duration: 10,
  max: 25,
  perTurn: 25,
};

export const vflShowsArr: IShowInfo[] = [activeMotherboard, oldTerminal];
