export interface LeaderBoardResponse {
  data: {
    date_created: Date;
    Gamemode: string;
    Name: string;
    FinalScore: number;
  }[];
}
