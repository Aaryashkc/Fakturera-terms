import React, { useEffect } from 'react';
import { useTermsStore } from "../Store/useTermsStore";

const Terms = ({ language }) => {
  const { terms, loading, error, fetchTerms } = useTermsStore();

  useEffect(() => {
    fetchTerms(language);
  }, [language, fetchTerms]);

  return (
    <div className="terms-page">
      <div className="terms-container container-7xl">
        {loading && <h1 className="terms-title">Loading...</h1>}
        {error && <h1 className="terms-title">Error: {error}</h1>}
        {!loading && !error && (
          <>
            <h1 className="terms-title">{terms.title}</h1>
            <button className="back-button" onClick={() => window.close()}>{terms.button}</button>
            <div className="terms-content-box" dangerouslySetInnerHTML={{ __html: terms.text }}></div>
            <button className="back-button1"onClick={() => window.close()}>{terms.button}</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Terms;
