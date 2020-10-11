declare module '*.md';
declare module '*.json' {
  const value: string;
  export default value;
}
