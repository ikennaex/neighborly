import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");

    // Start fade out animation
    setFade(true);

    // Hide completely after animation
    setTimeout(() => {
      setShow(false);
    }, 1000); // 1 second for fade animation
  };

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 max-w-sm bg-gray-800 text-white p-4 rounded-xl shadow-xl z-50 transition-opacity duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-sm">
        We use cookies to ensure the best experience. By continuing, you agree to our cookie policy.
      </p>
      <button
        onClick={acceptCookies}
        className="mt-2 px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 rounded"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;