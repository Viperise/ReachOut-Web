import dynamic from 'next/dynamic';

/**
 * Loads an icon dynamically from a specified icon library.
 * This function helps in lazy loading icons to avoid hydration issues
 * in a Next.js application by deferring the loading of icons until
 * they are needed on the client side.
 *
 * @param {string} iconLibrary - The name of the icon library (e.g., 'fa', 'hi', 'si').
 * @param {string} iconName - The name of the icon to load from the library.
 * @returns {React.ComponentType} A React component for the icon, loaded dynamically.
 * @throws {Error} Throws an error if the specified icon library is not found.
 */
export const loadIcon = (iconLibrary: string, iconName: string) => {
  const importLibrary = {
    fa: () => import('react-icons/fa'),
    hi: () => import('react-icons/hi'),
    si: () => import('react-icons/si'),
  }[iconLibrary];

  if (typeof importLibrary === 'function') {
    return dynamic(() => importLibrary().then((mod: any) => mod[iconName]), { ssr: false });
  } else {
    throw new Error(`Import function not found for library ${iconLibrary}`);
  }
};
