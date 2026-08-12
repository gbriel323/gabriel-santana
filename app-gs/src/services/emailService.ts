import {
  ISendEmailRequest,
  ISendEmailResponse,
} from '../interfaces/iSendEmail';

const API_URL =
  'https://cydmwsjgd6.execute-api.us-east-1.amazonaws.com/prod/sendemail';

export async function sendEmail(
  data: ISendEmailRequest
): Promise<ISendEmailResponse> {

  const response = await fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error || 'Erro ao enviar e-mail.'
    );
  }

  return result;
}