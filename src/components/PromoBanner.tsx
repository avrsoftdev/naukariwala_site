import React, { useEffect, useState } from "react";

const STORAGE_KEY = "promoBannerDismissed";

const PromoBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const close = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      <div className="absolute inset-0 p-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl max-h-full bg-white rounded-lg overflow-hidden shadow-lg">
          <button
            aria-label="Close promotional banner"
            onClick={close}
            className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-lg text-black shadow hover:bg-white"
          >
            ✕
          </button>

          {!imgError ? (
            <img
              src="/nwbanner.png"
              alt="Promotion"
              onError={() => setImgError(true)}
              className="w-full h-auto object-contain block max-h-[calc(100vh-4rem)]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
              <div className="text-center px-6 py-12">
                <h2 className="text-3xl font-bold mb-2">Special Promotion</h2>
                <p className="opacity-90">Our latest offers — click close to dismiss.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
