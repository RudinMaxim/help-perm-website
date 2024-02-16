export const jsonFormatText = (
  text?: string | number | null
): string | null => {
  if (text) {
    if (typeof text === 'number') {
      text = text.toString();
    }
    text = text.trim().replace(/\s+/g, ' ');
    if (text.length > 0) {
      return text;
    }
  }
  return null;
};

export const isValidateNullText = (text?: string | number | null): boolean => {
  return !jsonFormatText(text);
};
