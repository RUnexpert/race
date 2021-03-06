export interface CarType {
  name: string;
  color: string;
  id: number;
}

export interface CarStatus {
  status: "started" | "stopped";
  speed: number;
  distance: number;
}

export interface EngineStatusType {
  speed: number;
  distance: number;
}

export type PageType = "garage" | "winners";

export interface WinnerType {
  wins: number;
  minTime: number;
}

export interface RaceWinnerType {
  id: number;
  time: number;
}
