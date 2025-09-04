import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = import.meta.env.MODE === "development" 
? 'http://localhost:5001' 
: "https://fakturera-terms-2.onrender.com"

export const useTermsStore = create((set) => ({
  terms: { lang: "en", title: "", button: "", text: "" },
  loading: false,
  error: null,

  fetchTerms: async (lang = "en") => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${API_BASE_URL}/api/terms?lang=${lang}`);
      set({ terms: res.data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message || "Failed to fetch terms", loading: false });
    }
  },
}));
