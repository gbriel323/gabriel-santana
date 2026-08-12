export interface ISendEmailRequest {
  client_name: string;
  recipient_email: string;
  message: string;
}

export interface ISendEmailResponse {
  message: string;
}