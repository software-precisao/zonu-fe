import { http } from "../../config";

export default {
  gerarQrcodePix: async (
    customerId,
    billingType,
    value,
    dueDate,
    nextDueDate,
    cycle,
    description
  ) => {
    try {
      const response = await http.post(
        `/pay/criar`,
        {
          customerId: customerId,
          billingType: billingType,
          value: value,
          dueDate: dueDate,
          nextDueDate: nextDueDate,
          cycle: cycle,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  pagarCartao: async (
    customerId,
    billingType,
    value,
    dueDate,
    nextDueDate,
    cycle,
    description,
    creditCard,
    creditCardHolderInfo
  ) => {
    try {
      const response = await http.post(
        `/pay/criar`,
        {
          customerId: customerId,
          billingType: billingType,
          value: value,
          dueDate: dueDate,
          nextDueDate: nextDueDate,
          cycle: cycle,
          description: description,
          creditCard: {
            holderName: creditCard.holderName,
            number: creditCard.number,
            expiryMonth: creditCard.expiryMonth,
            expiryYear: creditCard.expiryYear,
            ccv: creditCard.ccv,
          },
          creditCardHolderInfo: {
            name: creditCardHolderInfo.name,
            email: creditCardHolderInfo.email,
            cpfCnpj: creditCardHolderInfo.cpfCnpj,
            postalCode: creditCardHolderInfo.postalCode,
            addressNumber: creditCardHolderInfo.addressNumber,
            phone: creditCardHolderInfo.telefone,
            mobilePhone: creditCardHolderInfo.telefone,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  consultarPagamento: async (id) => {
    try {
      const response = await http.get(`/pay/verificar/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
