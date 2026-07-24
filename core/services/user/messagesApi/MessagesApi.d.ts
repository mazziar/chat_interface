export type Message = {
  _id: string;
  message: string;
  author: string;
  createdAt: string;
};

export type GetMessagesParams = {
  after?: string;
  before?: string;
  limit?: number;
};

export type PostMessageBody = {
  message: string;
  author: string;
};
