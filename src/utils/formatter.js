/**
 * Fungsi untuk menerjemahkan HTML entities (seperti &#x27;) menjadi karakter aslinya.
 * Ini adalah cara aman untuk membersihkan teks tanpa menggunakan v-html.
 * @param {string} text Teks yang mungkin berisi HTML entities.
 * @returns {string} Teks yang sudah bersih.
 */
export function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    return text;
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}
