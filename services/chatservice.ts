// services/chatService.ts
import api from "./api";

export const startChat = () => {
    return api.get("/chat/start");
};

export const sendAnswer = (stepId: number, answer: string) => {
    return api.post("/chat/answer", { stepId, answer });
};

export const getResult = () => {
    return api.get("/chat/result");
};
