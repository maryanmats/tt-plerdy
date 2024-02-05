const input = document.querySelector("#phone");

const phoneInput = window.intlTelInput(input, {
  preventInvalidNumbers: true,
  separateDialCode: true,
  excludeCountries: ["ru", "by"],
  preferredCountries: ["ua", "pl", "gb", "us"],
});
