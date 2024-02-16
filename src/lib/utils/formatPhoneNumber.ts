export const formatPhoneNumber = (value: string): string => {
  if (value.length === 0 || value.length === 1) {
    return '+7 (';
  } else if (value.length === 2) {
    return '+7 (' + value.substring(1, 2);
  } else if (value.length === 3) {
    return '+7 (' + value.substring(1, 3);
  } else if (value.length === 4) {
    return '+7 (' + value.substring(1, 4);
  } else if (value.length === 5) {
    return '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 5);
  } else if (value.length === 6) {
    return '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 6);
  } else if (value.length === 7) {
    return '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7);
  } else if (value.length === 8) {
    return (
      '+7 (' +
      value.substring(1, 4) +
      ') ' +
      value.substring(4, 7) +
      '-' +
      value.substring(7, 8)
    );
  } else if (value.length === 9) {
    return (
      '+7 (' +
      value.substring(1, 4) +
      ') ' +
      value.substring(4, 7) +
      '-' +
      value.substring(7, 9)
    );
  } else if (value.length === 10) {
    return (
      '+7 (' +
      value.substring(1, 4) +
      ') ' +
      value.substring(4, 7) +
      '-' +
      value.substring(7, 9) +
      '-' +
      value.substring(9, 10)
    );
  } else if (value.length === 11 || value.length > 11) {
    return (
      '+7 (' +
      value.substring(1, 4) +
      ') ' +
      value.substring(4, 7) +
      '-' +
      value.substring(7, 9) +
      '-' +
      value.substring(9, 11)
    );
  } else {
    return '';
  }
};
export const getPhoneNumber = (value: string): string => {
  if (!value) {
    value = '';
  }
  return value.replace(/\D/g, '').length > 11
    ? value.replace(/\D/g, '').substring(0, 11)
    : value.replace(/\D/g, '');
};
