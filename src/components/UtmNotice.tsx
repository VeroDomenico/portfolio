'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';

export default function UtmNotice() {
  const [showNotice, setShowNotice] = useState(false);
  const [utmSource, setUtmSource] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // Check for UTM parameters in the URL
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    const medium = params.get('utm_medium');
    const campaign = params.get('utm_campaign');

    if (source || medium || campaign) {
      setUtmSource(source || 'unknown');
      setShowNotice(true);

      // Track the UTM parameters with PostHog
      posthog.capture('utm_visit', {
        utm_source: source,
        utm_medium: medium,
        utm_campaign: campaign,
        url: window.location.href,
      });

      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setShowNotice(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  if (!showNotice) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm animate-slide-in-right">
      <div className="bg-accent-light/10 dark:bg-accent-dark/10 border-2 border-accent-light dark:border-accent-dark rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-accent-light dark:text-accent-dark font-mono font-semibold mb-1">
              Thank you for visiting!
            </h3>
            <p className="text-sm text-text-light dark:text-text-dark">
              Your click from <span className="font-semibold text-accent-light dark:text-accent-dark">{utmSource}</span> has been stored in my analytics to help me understand how my site is performing with recruiters and visitors.
            </p>
          </div>
          <button
            onClick={() => setShowNotice(false)}
            className="ml-3 text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
            aria-label="Close notice"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
