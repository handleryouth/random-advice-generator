import axios from "axios";

export const resolvers = {
  Query: {
    getAdvice: async () => {
      try {
        const advice = axios
          .get("https://api.adviceslip.com/advice")
          .then((res) => res.data.slip);
        return advice;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
