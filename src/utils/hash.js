/**
 * Hashes a string using SHA-256 via the Web Crypto API.
 * Returns a lowercase hex digest string.
 */
export async function sha256(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
