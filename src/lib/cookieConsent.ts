const STORAGE_KEY = 'ks-cookie-consent';
export const COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

type Consent = {
  status: 'acknowledged' | null;
};

export function getCookieConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const data = JSON.parse(raw) as Consent;
    if (data && typeof data === 'object') {
      return data;
    }
  } catch {
    return null;
  }
  return null;
}

export function hasAcknowledgedCookies(): boolean {
  return getCookieConsent()?.status === 'acknowledged';
}

export function saveCookieAcknowledgement(): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: 'acknowledged' } satisfies Consent)
    );
  } catch {
    /* private mode / blocked storage */
  }
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
