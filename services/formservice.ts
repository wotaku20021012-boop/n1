// services/formService.ts
import api from "./api";

export const getFormFields = () => {
    return api.get("/form/fields");
};

export const submitForm = (formData: Record<string, any>) => {
    return api.post("/form/submit", formData);
};
