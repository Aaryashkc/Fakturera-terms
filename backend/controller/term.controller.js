import { Terms } from "../models/term.model.js";

export const getTerms = async (req, res) => {
  try {
    const lang = (req.query.lang || "en").toLowerCase();

    const term = await Terms.findOne({ where: { lang } });

    if (!term) {
      return res.status(404).json({ message: `Terms not found for lang: ${lang}` });
    }

    return res.json({
      lang: term.lang,
      title: term.title,
      button: term.button,
      text: term.text,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
