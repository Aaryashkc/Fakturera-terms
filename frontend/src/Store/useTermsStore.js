import { create } from "zustand";
import axios from "axios";

export const useTermsStore = create((set) => ({
  terms: { lang: "en", title: "", button: "", text: "" },
  loading: false,
  error: null,

  fetchTerms: async (lang = "en") => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`http://localhost:5001/api/terms?lang=${lang}`);
      set({ terms: res.data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message || "Failed to fetch terms", loading: false });
    }
  },
}));
