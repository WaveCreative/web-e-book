export interface HelpRequest {
  message: string;
  image?: File | null;
}

export interface HelpResponse {
  success: boolean;
  message: string;
}