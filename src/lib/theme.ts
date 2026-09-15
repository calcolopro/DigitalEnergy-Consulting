export const THEME_KEY = 'de-theme'

/**
 * Runs before first paint (injected in <head>) so the chosen theme is applied
 * without a flash. Falls back to the browser / OS preference when the visitor
 * has never used the toggle.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_KEY}');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`
